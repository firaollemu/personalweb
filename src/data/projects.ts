export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A full-stack task management app with real-time collaboration features.",
    tech: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    github: "https://github.com",
  },
  {
    title: "Project Two",
    description: "E-commerce platform with payment integration and inventory management.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    link: "#",
    github: "https://github.com",
  },
  {
    title: "Project Three",
    description: "CLI tool that automates repetitive development workflows.",
    tech: ["Python", "Click", "SQLite"],
    link: "#",
    github: "https://github.com",
  },
];
