import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, FileText } from "lucide-react";

export const DATA = {
  name: "Vunky Himawan",
  initials: "VH",
  url: "https://vunkyh.my.id",
  location: "Malang, Indonesia",
  locationLink: "https://www.google.com/maps/place/malang",
  description:
    "A software developer who is studying software architecture, aspiring to become an entrepreneur by building innovative products.",
  summary:
    "As a software developer specializing in [TypeScript and full-stack development](/), I'm deepening my knowledge in [software architecture for robust app design](/). I love blending technologies like AI with coffee inspired creativity in my projects. [My ambition: To become a successful entrepreneur 🛐](/).",
  avatarUrl: "/images/avatar.jpg",
  skills: [
    "React",
    "Svelte (Basic)",
    "Vue (Basic)",
    "Next.js",
    "Flutter",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Laravel",
    "FastAPI",
    "Python",
    "Typescript",
    "Rust (Basic)",
    "GraphQL",
    "REST API",
    "MySQL",
    "Postgres",
    "Docker (Basic)",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/Vunky Himawan - CV.pdf", icon: FileText, label: "Resume" },
  ],
  contact: {
    email: "vunkyhimawan19@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vunky-himawan",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vunky-himawan",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vunkyhimawan19@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "PT Dutakom Wibawa Putra (D~NET)",
      badges: [],
      href: "https://dnetprovider.id",
      location: "Surabaya, Indonesia",
      title: "Fullstack Developer",
      logoUrl: "/images/companies/dutakom/logo.png",
      start: "Juli 2025",
      end: "December 2025",
      description:
        "Contribute at open source error tracking system based on Sentry by implement error alert notification to Telegram group with Telegram Bot at internal error tracking app.",
    },
    {
      company: "DOT Indonesia",
      badges: [],
      href: "https://www.dot.co.id",
      location: "Remote",
      title: "Fullstack Engineer",
      logoUrl: "/images/companies/dot-indonesia/logo.svg",
      start: "February 2025",
      end: "June 2025",
      description:
        "Developing a full-stack internal HRIS, from building the backend, integrating APIs using tRPC, to slicing and implementing the front-end.",
    },
    {
      company: "DOT Indonesia",
      href: "https://www.dot.co.id",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/images/companies/dot-indonesia/logo.svg",
      start: "November 2024",
      end: "January 2025",
      description:
        "Developing an internal HRIS front-end by slicing the UI from the design and integrating type-safe using Typescript Remote Procedure Call (tRPC)",
    },
  ],
  education: [
    {
      school: "Politeknik Negeri Malang",
      href: "https://www.polinema.ac.id",
      degree: "Diploma in Informatics Engineering",
      logoUrl: "/images/schools/polinema/logo.png",
      start: "2022",
      end: "present",
    },
    {
      school: "SMK Yosonegoro - Magetan",
      href: "https://sekolah.smk-yosonegoro.sch.id",
      degree: "Computer and Network Engineering",
      logoUrl: "/images/schools/yosonegoro/logo.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Dynamic Vehicle Routing Problem Simulation",
      href: "",
      dates: "Active",
      active: true,
      description:
        "This thesis project focuses on simulating the Dynamic Vehicle Routing Problem (DVRP), aiming to optimize vehicle routes by adapting to changing conditions within the simulation.",
      technologies: [
        "Next.js",
        "Node.js",
        "Python",
        "Google OR-Tools",
        "Typescript",
        "TomTom API",
      ],
      links: [
        {
          type: "Repository",
          href: "https://github.com/geinala",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "/images/projects/dynamic-vehicle-routing-problem/simulation-screen-mockup.webp",
      video: "",
    },
    {
      title: "Event Attendance System",
      href: "",
      dates: "December 2024",
      active: true,
      description:
        "An event attendance system using face recognition, built with FastAPI, Flutter, and DeepFace.",
      technologies: ["FastAPI", "Flutter", "DeepFace"],
      links: [
        {
          type: "Frontend",
          href: "https://github.com/vunky-himawan/attendance-system",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Backend",
          href: "https://github.com/vunky-himawan/Eventpass-Backend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "2nd Portfolio",
      href: "",
      dates: "June 2024 - April 2025",
      active: true,
      description:
        "My second portfolio is a bold leap, built with Astro, React, and UnoCSS, and showcased on GitHub Pages. Born to flaunt fresh React skills and ride the Astro hype from campus community chats.",
      technologies: ["Astro", "React", "UnoCSS"],
      links: [
        {
          type: "Website",
          href: "https://second.vunkyh.my.id/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vunky-himawan/sec-portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/projects/second-portfolio/second-portfolio.webp",
      video: "",
    },
    {
      title: "Hidden Gem Promotion System",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "The Hidden Gem Promotion System is a web platform aimed at promoting lesser-known tourist destinations and local MSMEs. Built as part of a competition, the project placed 6th out of over 20 entries.",
      technologies: [
        "React",
        "Vite",
        "Typescript",
        "Tiptap",
        "NestJS",
        "Typescript",
      ],
      links: [
        {
          type: "Backend",
          href: "https://github.com/vunky-himawan/ngevacation.git",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Frontend",
          href: "https://github.com/vunky-himawan/ngevacation.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Quizin: A Full-Stack Quiz Application for Internship Challenge",
      href: "",
      dates: "August 2024",
      active: true,
      description:
        "Quizin is a full-stack quiz app I built for an internship challenge. What started as a simple frontend task became a bold journey into backend development, authentication, and custom API building.",
      technologies: ["React", "Vite", "Typescript", "ExpressJS", "ShadCN UI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/vunky-himawan/quizin.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/projects/quizin/quizin-cover.webp",
      video: "",
    },
    {
      title: "RT Management System",
      href: "",
      dates: "June 2024",
      active: true,
      description:
        "What do Laravel, LaTeX, and cwimie have in common? They’re all part of a wild ride called the RT Management System—a college project to digitize a real neighborhood.",
      technologies: [
        "Laravel",
        "LaTeX",
        "Typescript",
        "MySQL",
        "Alpine.js",
        "CKEditor",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/vunky-himawan/SatuRT.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/projects/saturt/saturt-cover.webp",
      video: "",
    },
    {
      title: "Campus Inventory System",
      href: "",
      dates: "December 2023",
      active: true,
      description:
        "The Campus Inventory System was a semester 3 group project to manage campus inventory using PHP native and Bootstrap 5.",
      technologies: ["PHP", "Bootstrap 5", "MySQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/raihanachmad8/inventory-jti.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/projects/inti/inti-cover.webp",
      video: "",
    },
    {
      title: "Cat Adoption System",
      href: "",
      dates: "December 2023",
      active: true,
      description:
        "Cat Adoption System is a simple CRUD web app built for an Advanced Database course project. It uses Express.js + SQL Server for the backend and React for the frontend (learned on the go!).",
      technologies: ["React", "Express.js", "SQL Server"],
      links: [
        {
          type: "Source",
          href: "https://github.com/raihanachmad8/Basis-Data-CATSTORIES.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/projects/cat-stories/cat-stories-cover.webp",
      video: "",
    },
    {
      title: "Exclusive Portfolio",
      href: "",
      dates: "June 2023",
      active: true,
      description:
        "My first personal portfolio was a passion project built with HTML, CSS, JS, and Tailwind, proudly hosted on GitHub Pages.",
      technologies: ["HTML", "CSS", "JS", "Tailwind"],
      links: [
        {
          type: "Source",
          href: "https://github.com/vunky-himawan/first-portfolio.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/projects/first-portfolio/first-portfolio-cover.webp",
      video: "",
    },
  ],
  freelances: [
    {
      title: "Laundry Cashier App",
      dates: "October 2025 - November 2025",
      description:
        "Makes it easier for cashiers to manage transactions, select customers and services, and track orders more quickly. Equipped with a camera and Riverpod state management for a more efficient user experience.",
      image: "",
    },
    {
      title: "HR Management Dashboard",
      dates: "January 2025",
      description:
        "Simple HR Management Dashboard is a system used by HR and employees to record attendance using cameras and GPS, while monitoring activity locations through Leaflet-based map visualizations. It is equipped with simple analytics to facilitate monitoring of attendance and daily activities.",
      image: "",
    },
  ],
} as const;
