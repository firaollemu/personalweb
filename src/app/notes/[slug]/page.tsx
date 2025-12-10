import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "@/data/notes";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Firaol Lemu</h1>
          <nav className="flex gap-4 text-sm">
            <Link href="/" className="text-blue-600 hover:underline">Home</Link>
            <Link href="/notes" className="text-blue-600 hover:underline">Notes</Link>
            <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
          </nav>
        </header>

        {/* Content */}
        <article className="mb-8">
          <h2 className="text-xl font-semibold mb-1">{note.title}</h2>
          <p className="text-zinc-500 text-sm mb-6">{note.date}</p>
          
          <div className="text-zinc-700 leading-relaxed">
            <p className="mb-4">{note.description}</p>
            
            {/* Add your notes content here */}
            <p className="text-zinc-500 italic">
              Notes content goes here. You can add markdown support with MDX, 
              or write your notes directly in this component.
            </p>
          </div>
        </article>

        {/* Footer */}
        <footer className="text-sm text-zinc-500 pt-8 border-t border-zinc-200">
          <Link href="/notes" className="text-blue-600 hover:underline">← Back to all notes</Link>
        </footer>
      </main>
    </div>
  );
}
