import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Firaol Lemu</h1>
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <Link href="/notes" className="text-blue-600 hover:underline">Notes</Link>
            <span className="text-zinc-500">Projects</span>
          </nav>
        </header>

        {/* Content */}
        <section className="mb-8">
          <p className="text-zinc-700 mb-6">
            Things I&apos;ve built. Source code available on{" "}
            <a href="https://github.com" className="text-blue-600 hover:underline">GitHub</a>.
          </p>

          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index}>
                <div className="flex items-baseline gap-2">
                  {project.link ? (
                    <a href={project.link} className="text-blue-600 hover:underline font-medium">
                      {project.title}
                    </a>
                  ) : (
                    <span className="font-medium">{project.title}</span>
                  )}
                  {project.github && (
                    <a href={project.github} className="text-blue-600 hover:underline text-sm">
                      [code]
                    </a>
                  )}
                </div>
                <p className="text-zinc-600 text-sm">{project.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer className="text-sm text-zinc-500 pt-8 border-t border-zinc-200">
          Last updated: December 2024
        </footer>
      </main>
    </div>
  );
}
