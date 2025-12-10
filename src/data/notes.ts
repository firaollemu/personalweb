export interface Note {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export const notes: Note[] = [
  {
    slug: "dsa",
    title: "Data Structures & Algorithms",
    description: "Notes on trees, graphs, sorting algorithms, and complexity analysis.",
    date: "Fall 2024",
  },
  {
    slug: "os",
    title: "Operating Systems",
    description: "Process scheduling, memory management, file systems, and concurrency.",
    date: "Fall 2024",
  },
  {
    slug: "databases",
    title: "Database Systems",
    description: "SQL, normalization, indexing, transactions, and query optimization.",
    date: "Spring 2024",
  },
  {
    slug: "networks",
    title: "Computer Networks",
    description: "TCP/IP, HTTP, DNS, routing protocols, and network security basics.",
    date: "Spring 2024",
  },
];
