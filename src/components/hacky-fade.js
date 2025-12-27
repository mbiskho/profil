"use client";

import { motion } from "framer-motion";

export function BlurFade({ children, delay = 0, inView = false }) {
  // If inView is true, it only animates when scrolled into view
  // If false, it animates on load
  
  const variants = {
    hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={inView ? "visible" : undefined}
      animate={!inView ? "visible" : undefined}
      viewport={{ once: true }}
      transition={{ delay: 0.04 + delay, duration: 0.6, ease: "easeOut" }}
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}