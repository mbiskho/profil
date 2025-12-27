"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Trophy, RefreshCcw, SkipForward } from "lucide-react";

// GAME CONFIG
const GRID_SIZE = 20;
const INITIAL_SPEED = 150;

export default function SnakeGame() {
  const [snake, setSnake] = useState([[10, 10]]);
  const [food, setFood] = useState([5, 5]);
  const [direction, setDirection] = useState([0, -1]); // Moving Up
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  // To handle key presses without closure staleness
  const directionRef = useRef([0, -1]);
  const gameLoopRef = useRef(null);

  // Initialize Game
  useEffect(() => {
    // Load high score
    const saved = localStorage.getItem("snakeHighScore");
    if (saved) setHighScore(parseInt(saved));
    
    // Focus for keyboard events
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Game Loop
  useEffect(() => {
    if (gameOver || isPaused) return;

    gameLoopRef.current = setInterval(moveSnake, INITIAL_SPEED - Math.min(score * 2, 100)); // Speed up as you eat
    return () => clearInterval(gameLoopRef.current);
  }, [snake, gameOver, isPaused, score]);

  const moveSnake = () => {
    setSnake((prevSnake) => {
      const newHead = [
        prevSnake[0][0] + directionRef.current[0],
        prevSnake[0][1] + directionRef.current[1],
      ];

      // 1. Check Collision with Walls
      if (
        newHead[0] < 0 ||
        newHead[0] >= GRID_SIZE ||
        newHead[1] < 0 ||
        newHead[1] >= GRID_SIZE
      ) {
        handleGameOver();
        return prevSnake;
      }

      // 2. Check Collision with Self
      for (let segment of prevSnake) {
        if (newHead[0] === segment[0] && newHead[1] === segment[1]) {
          handleGameOver();
          return prevSnake;
        }
      }

      const newSnake = [newHead, ...prevSnake];

      // 3. Check Food
      if (newHead[0] === food[0] && newHead[1] === food[1]) {
        setScore((s) => s + 1);
        generateFood(newSnake);
      } else {
        newSnake.pop(); // Remove tail if not eating
      }

      return newSnake;
    });
  };

  const handleGameOver = () => {
    setGameOver(true);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("snakeHighScore", score);
    }
  };

  const generateFood = (currentSnake) => {
    let newFood;
    let isOnSnake = true;
    while (isOnSnake) {
      newFood = [
        Math.floor(Math.random() * GRID_SIZE),
        Math.floor(Math.random() * GRID_SIZE),
      ];
      isOnSnake = currentSnake.some(
        (segment) => segment[0] === newFood[0] && segment[1] === newFood[1]
      );
    }
    setFood(newFood);
  };

  const handleKeyDown = (e) => {
    const key = e.key;
    const currentDir = directionRef.current;

    // Prevent reversing directly
    if (key === "ArrowUp" && currentDir[1] !== 1) directionRef.current = [0, -1];
    if (key === "ArrowDown" && currentDir[1] !== -1) directionRef.current = [0, 1];
    if (key === "ArrowLeft" && currentDir[0] !== 1) directionRef.current = [-1, 0];
    if (key === "ArrowRight" && currentDir[0] !== -1) directionRef.current = [1, 0];
    
    // WASD support
    if (key === "w" && currentDir[1] !== 1) directionRef.current = [0, -1];
    if (key === "s" && currentDir[1] !== -1) directionRef.current = [0, 1];
    if (key === "a" && currentDir[0] !== 1) directionRef.current = [-1, 0];
    if (key === "d" && currentDir[0] !== -1) directionRef.current = [1, 0];
  };

  const resetGame = () => {
    setSnake([[10, 10]]);
    setFood([5, 5]);
    directionRef.current = [0, -1];
    setScore(0);
    setGameOver(false);
    setIsPaused(false);
  };

  return (
    <main className="min-h-screen w-full bg-black flex flex-col items-center justify-center p-4 font-mono select-none overflow-hidden">
        
      {/* Title */}
      <div className="mb-8 text-center space-y-2 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-green-500 tracking-widest drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">
          NEON SNAKE
        </h1>
        <p className="text-zinc-500 text-sm">Use Arrow Keys or WASD to Move</p>
      </div>

      {/* Game Board Container */}
      <div className="relative p-1 bg-zinc-800 rounded-lg shadow-2xl z-10 border-4 border-zinc-700">
        
        {/* The Grid */}
        <div 
            className="grid bg-black rounded-md relative overflow-hidden"
            style={{
                gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                width: 'min(80vw, 400px)',
                height: 'min(80vw, 400px)',
            }}
        >
            {/* Render Snake */}
            {snake.map((segment, index) => (
                <div
                    key={`${segment[0]}-${segment[1]}`}
                    className={`absolute w-full h-full border border-black/20 ${index === 0 ? 'bg-white z-10' : 'bg-green-500 z-0'}`}
                    style={{
                        gridColumnStart: segment[0] + 1,
                        gridRowStart: segment[1] + 1,
                        width: `${100 / GRID_SIZE}%`,
                        height: `${100 / GRID_SIZE}%`,
                        left: `${(segment[0] * 100) / GRID_SIZE}%`,
                        top: `${(segment[1] * 100) / GRID_SIZE}%`,
                    }} 
                />
            ))}

            {/* Render Food */}
            <div
                className="absolute bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse rounded-full"
                style={{
                    width: `${80 / GRID_SIZE}%`,
                    height: `${80 / GRID_SIZE}%`,
                    left: `${(food[0] * 100) / GRID_SIZE + (10 / GRID_SIZE)}%`, // Center slighty
                    top: `${(food[1] * 100) / GRID_SIZE + (10 / GRID_SIZE)}%`,
                }}
            />
        </div>

        {/* Game Over Overlay */}
        {gameOver && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in z-20">
                <h2 className="text-3xl font-bold text-red-500">GAME OVER</h2>
                <div className="text-white">
                    <p>Score: {score}</p>
                    <p className="text-xs text-zinc-400">High Score: {highScore}</p>
                </div>
                <div className="flex flex-col gap-2 w-full px-12">
                    <Button onClick={resetGame} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold">
                        <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
                    </Button>
                    <Link href="/software-engineering" className="w-full">
                        <Button variant="outline" className="w-full border-zinc-700 text-zinc-300 hover:bg-zinc-800">
                             View Portfolio
                        </Button>
                    </Link>
                </div>
            </div>
        )}
      </div>

      {/* Score Board */}
      <div className="mt-6 flex gap-8 z-10">
        <div className="flex flex-col items-center">
            <span className="text-zinc-500 text-xs uppercase tracking-wider">Current Score</span>
            <span className="text-3xl font-bold text-white">{score}</span>
        </div>
        <div className="flex flex-col items-center">
            <span className="text-zinc-500 text-xs uppercase tracking-wider">High Score</span>
            <div className="flex items-center gap-2 text-3xl font-bold text-yellow-500">
                <Trophy className="h-5 w-5" />
                <span>{highScore}</span>
            </div>
        </div>
      </div>

      {/* Skip Button */}
      {!gameOver && (
          <Link href="/software-engineering" className="mt-12 opacity-50 hover:opacity-100 transition-opacity z-10">
            <Button variant="ghost" className="text-zinc-500 hover:text-white">
                <SkipForward className="mr-2 h-4 w-4" /> Skip to Portfolio
            </Button>
          </Link>
      )}

      {/* Background Grid Effect */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
               backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
               backgroundSize: '40px 40px'
           }} 
      />
    </main>
  );
}