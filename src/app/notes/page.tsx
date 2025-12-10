import Link from "next/link";
import { notes } from "@/data/notes";

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Firaol Lemu</h1>
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <span className="text-zinc-500">Notes</span>
            <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
          </nav>
        </header>

        {/* Content */}
        <section className="mb-8">
          <p className="text-zinc-700 mb-6">
            Here are notes from classes I&apos;ve taken. Feel free to use them, but note that they may contain errors.
          </p>

          <ul className="space-y-2">
            {notes.map((note) => (
              <li key={note.slug}>
                <Link href={`/notes/${note.slug}`} className="text-blue-600 hover:underline">
                  {note.title}
                </Link>
                <span className="text-zinc-500"> ({note.date})</span>
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
