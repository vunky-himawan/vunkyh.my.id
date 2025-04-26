import { Line, Logo } from "@/once-ui/components";

const person = {
  firstName: "Vunky",
  lastName: "Himawan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Frontend - Backend TypeScript",
  avatar: "/images/gallery/IMG_20250310_060647.jpg",
  email: "vunkyhimawan19@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English (basic)", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I explore technology, and the fusion of creativity and engineering through
      my code and insights.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vunky-himawan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vunky-himawan",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://threads.net/vunky-himawan",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpeg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hii, I Code, I Create, I Teach Machines to Think.</>,
  featured: {
    display: true,
    title: <>Frontend to Fullstack Engineer Internship at PT DOT Indonesia</>,
    href: "/about",
  },
  subline: (
    <>
      Hi, I'm Vunky Himawan from Malang, Indonesia, a TypeScript fullstack
      wizard, spinning code spells with AI sidekicks and coffee potions—without
      AI, I’d be stuck untangling my own bugs in a coffee-fueled haze!
      <br />
      <Line vertical="center" color="brand" marginY="4" />
      English? I fumble it like a bad juggler, but AI’s my hype squad, turning
      my words into a global comedy show! 😂
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a full-stack web developer with a knack for TypeScript, crafting
        responsive UIs using React/Next.js and TailwindCSS, and building robust
        APIs with NestJS and ExpressJS. I’ve dipped my toes into mobile
        development and machine learning, but my curiosity for tech runs
        deep—always wondering why things work and how to make them better. I’m
        constantly exploring new tools, ideas, and solutions, driven by a
        passion for creating efficient, scalable, and user-focused digital
        experiences. My journey? It’s just getting started!
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "PT DOT Indonesia",
        timeframe: `November 2024 - ${
          new Date() < new Date("2025-06-30") ? "Present" : "June 2025"
        }`,
        role: "Frontend to Fullstack Engineer Internship",
        achievements: [
          <>
            Migrated an internal HRIS application from Laravel to Next.js with
            tRPC, focusing on responsive UI and seamless API integration.
          </>,
          <>
            Developed the frontend using Next.js and Ant Design, ensuring an
            intuitive and high-performance UI.
          </>,
          <>
            Took over backend responsibilities after a team turnover, managing
            server logic, tRPC APIs, and MySQL with Prisma ORM.
          </>,
          <>
            Provided ongoing maintenance and improvements for the legacy web
            version.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/dotify/dotify-new.webp",
            alt: "Dotify New Project",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/dotify/dotify.webp",
            alt: "Dotify Old Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "HR Management Dashboard",
        timeframe: "January 2025",
        role: "Frontend Engineer Freelance",
        achievements: [
          <>
            Successfully built a photo and GPS-based attendance system with
            automatic watermarking on captured photos.
          </>,
          <>
            Developed an admin dashboard using React Vite, TanStack Router, and
            TanStack Query for efficient data fetching and routing.
          </>,
          <>
            Integrated React Leaflet to display employee locations dynamically
            on a map.
          </>,
          <>
            Structured a modular and scalable frontend architecture using
            file-based routing principles.
          </>,
          <>
            Delivered the project within a tight timeline, ensuring seamless UX.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/freelances/hr-dashboard/dashboard.webp",
            alt: "Dashboard Page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/freelances/hr-dashboard/user-page.webp",
            alt: "Users Page",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Politeknik Negeri Malang",
        description: <>Studying computer science.</>,
      },
      {
        name: "SMK Yosonegoro Magetan",
        description: <>Studied networking and computer science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend",
        description: (
          <>
            I'm a beginner backend engineer with experience in Laravel for
            PHP-based development, and TypeScript-based frameworks like Express
            and NestJS for building APIs. I’m also familiar with SQL databases,
            working with MySQL and handling basic database queries and
            relationships.
            <Line vertical="center" color="brand" marginY="4" />
            Currently, I'm learning how to build a backend API with NestJS and
            I'm excited to dive into the world of modern web development.
          </>
        ),
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>
            I'm a frontend developer skilled in React and Next.js with
            TypeScript, currently focusing on optimizing React performance. I'm
            also exploring Vue and Svelte to broaden my frontend toolkit and
            deepen my understanding of modern web frameworks.
            <Line vertical="center" color="brand" marginY="4" />
            Currently, I'm learning NuxtJS and Svelte-Kit, and I'm excited to
            dive into the world of modern web development.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech or random things...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const avatars = {
  male: "https://api.dicebear.com/9.x/adventurer/svg?seed=Easton",
  female: "https://api.dicebear.com/9.x/adventurer/svg?seed=Aiden",
};

export { person, social, newsletter, home, about, blog, work, avatars };
