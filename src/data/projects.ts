export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: "MITScript VM",
    description: "A bytecode interpreter and virtual machine for MITScript, a Python-like language. Built for MIT 6.1120.",
    tech: ["C++", "CMake", "ANTLR"],
    github: "https://github.com/firaollemu/vmbytecode",
  },
];
