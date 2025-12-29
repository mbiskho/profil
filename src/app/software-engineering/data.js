import { Github, Linkedin, Mail } from "lucide-react";

export const DATA = {
  name: "Bisma Khomeini",
  initials: "BK",
  url: "https://linkedin.com/in/mbiskho",
  location: "Singapore",
  locationLink: "https://www.google.com/maps/place/Singapore",
  description:
    "Senior Software Engineer & Technical Lead. Specializing in High-Performance Backend Systems, Cloud Infrastructure, and AI Integration.",
  avatarUrl: "/me.png",
  contact: {
    email: "khomeini.bisma@gmail.com",
    tel: "+6287778126920",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com",
        icon: Github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/mbiskho",
        icon: Linkedin,
      },
      email: {
        name: "Email",
        url: "mailto:khomeini.bisma@gmail.com",
        icon: Mail,
      },
    },
  },
  skills: [
    "Golang",
    "Java (Spring Boot)",
    "Python",
    "Rust",
    "React.js",
    "Kubernetes",
    "Docker",
    "AWS",
    "Terraform",
    "GraphQL",
    "PostgreSQL",
    "Microservices",
    "Large Language Models (LLMs)",
    "CI/CD",
  ],
  achievements: [
    {
      title: "Honroable Mention of Development Category",
      organization: "TopCoder",
      year: "2020",
      description: "Getting honorable mention among 8000+ global participants in a competitive development challenge.",
    },
    {
      title: "Finalist Top 5 Team - Dataton By Novartis",
      organization: "Novartis",
      year: "2022",
      description: "Achieved Top 5 position among 100+ teams in a healthcare data analytics competition.",
    },
    {
      title: "Academic Distinction",
      organization: "MIT & UI",
      year: "2020, 2021",
      description: "Achieved a high distinction GPA of 4.8/5.0 during Associate Degree studies & Top 3% in Computer Science at University of Indonesia.",
    },
  ],
  work: [
    {
      company: "SMBC Group",
      href: "#",
      title: "Senior Software Engineer - Technical Lead",
      start: "2024",
      end: "Present",
      description:
        "Orchestrated software architecture for electronic cards using Java, Ruby, and Golang, enhancing system efficiency by 40%. Implemented Terraform & Kubernetes for multi-cloud infrastructure supporting 500+ microservices.",
    },
    {
      company: "Morgan Stanley",
      href: "#",
      title: "Software Engineer",
      start: "2023",
      end: "2024",
      description:
        "Engineered automated reporting tools with Python & PySpark, reducing data processing time by 50%. Integrated advanced financial modeling tools for transactions valued up to $1B.",
    },
    {
      company: "Praktis",
      href: "#",
      title: "Software Engineer",
      start: "2022",
      end: "2023",
      description:
        "Led migration of 500TB data to Alibaba Cloud, cutting costs by 30%. Developed Golang/Java microservices that increased transaction speeds by 59% with 99.9% uptime.",
    },
    {
      company: "Impact",
      href: "#",
      title: "Software Engineer",
      start: "2021",
      end: "2022",
      description:
        "Built a full-stack web app that boosted user engagement by 20%. Spearheaded a critical API migration from OAuth 1 to OAuth 2, reducing unauthorized access incidents by 95%.",
    },
    {
      company: "Waresix",
      href: "#",
      title: "Software Engineer",
      start: "2020",
      end: "2021",
      description:
        "Developed a cutting-edge fleet management system using React & Rust, reducing launch time by 40%. Managed high-stakes rollbacks and stakeholder communication.",
    },
  ],
  education: [
    {
      school: "University of Indonesia",
      degree: "BS in Computer Science",
      start: "2016",
      end: "2020",
    },
    {
      school: "Massachusetts Institute of Technology",
      degree: "Diploma - Associate Degree",
      start: "2020",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "Fleet Management System",
      href: "#",
      dates: "2021",
      active: true,
      description:
        "A high-performance logistics tracking platform built with React and Rust to optimize fleet operations.",
      technologies: ["React", "Rust", "Real-time Data"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Profit & Loss Strategy Platform",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Self-service financial platform empowering stakeholders to analyze P&L data independently, reducing manual reporting by 75%.",
      technologies: ["Python", "AWS", "Data Analysis"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Multi-Cloud Infra Migration",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Orchestrated the migration of 500TB+ of product data and 500+ microservices to Alibaba Cloud using Terraform.",
      technologies: ["Terraform", "Kubernetes", "Alibaba Cloud"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "AI Reporting Automation",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Automated reporting pipeline processing 1 million+ records daily using PySpark and AWS Glue.",
      technologies: ["PySpark", "AWS Glue", "Python"],
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "RAG-Powered AI Legal Assistant",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Developed a Retrieval-Augmented Generation (RAG) system to query 10,000+ legal documents with 95% accuracy using vector embeddings.",
      technologies: ["LangChain", "OpenAI", "Pinecone", "Python"],
      image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "DeFi Liquidity Aggregator",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Engineered a smart contract-based protocol to optimize token swap rates across multiple decentralized exchanges, reducing slippage by 15%.",
      technologies: ["Solidity", "Ethereum", "Ethers.js", "Hardhat"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Serverless Media Processing Engine",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Built a cloud-native automated video transcoding pipeline handling 10k+ monthly uploads using an event-driven architecture.",
      technologies: ["AWS Lambda", "S3", "FFmpeg", "Node.js"],
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop",
    },
    {
      title: "Low-Latency HFT Trading Engine",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Architected a high-frequency trading simulation engine in C++ with sub-millisecond execution times and custom memory allocators.",
      technologies: ["C++20", "STL", "Linux Systems", "Multithreading"],
      image: "/hft.png",
    },
    {
      title: "Real-time Fraud Detection System",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Deployed a streaming ML pipeline to detect fraudulent transactions in under 200ms using SageMaker and Kinesis.",
      technologies: ["AWS SageMaker", "Kinesis", "Scikit-Learn", "Terraform"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    },
  ],
};