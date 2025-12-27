import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const DATA = {
  name: "Bisma Khomeini",
  initials: "BK",
  url: "https://linkedin.com/in/mbiskho",
  location: "Singapore",
  locationLink: "https://www.google.com/maps/place/Singapore",
  description:
    "Senior Software Engineer & Technical Lead. Specializing in High-Performance Backend Systems, Cloud Infrastructure, and AI Integration.",
  avatarUrl: "/me.jpg", // Make sure to add your photo as 'me.png' in the public folder
  contact: {
    email: "khomeini.bisma@gmail.com",
    tel: "+6287778126920",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com", // Add your actual GitHub username if you have one
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
  work: [
    {
      company: "SMBC Group",
      href: "#", // Add company URL if available
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
      degree: "BS in Computer Science (GPA: 3.6/4)",
      start: "2016",
      end: "2020",
    },
    {
      school: "Massachusetts Institute of Technology",
      degree: "Diploma - Associate Degree (GPA: 4.8/5)",
      start: "2020", // Inferred from Resume context
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
    },
    {
      title: "Profit & Loss Strategy Platform",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Self-service financial platform empowering stakeholders to analyze P&L data independently, reducing manual reporting by 75%.",
      technologies: ["Python", "AWS", "Data Analysis"],
    },
    {
      title: "Multi-Cloud Infra Migration",
      href: "#",
      dates: "2022",
      active: true,
      description:
        "Orchestrated the migration of 500TB+ of product data and 500+ microservices to Alibaba Cloud using Terraform.",
      technologies: ["Terraform", "Kubernetes", "Alibaba Cloud"],
    },
    {
      title: "AI Reporting Automation",
      href: "#",
      dates: "2023",
      active: true,
      description:
        "Automated reporting pipeline processing 1 million+ records daily using PySpark and AWS Glue.",
      technologies: ["PySpark", "AWS Glue", "Python"],
    },
  ],
};