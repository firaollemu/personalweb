import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Firaol Lemu</h1>
          <nav className="flex gap-4 text-sm">
            <span className="text-zinc-500">Home</span>
            <Link href="/notes" className="text-blue-600 hover:underline">Notes</Link>
            <Link href="/projects" className="text-blue-600 hover:underline">Projects</Link>
          </nav>
        </header>

        {/* Bio */}
        <section className="mb-8 text-zinc-700 leading-relaxed">
          <p className="mb-4">
            Welcome to my website! I&apos;m a computer science student at [Your University]. 
            I&apos;m interested in web development, systems programming, and machine learning. 
            If you&apos;re here for my <Link href="/notes" className="text-blue-600 hover:underline">class notes</Link>, 
            click here to see them.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Projects</h2>
          <p className="text-zinc-700 leading-relaxed">
            I like building things in my free time. Check out my{" "}
            <Link href="/projects" className="text-blue-600 hover:underline">projects page</Link>{" "}
            or my <a href="https://github.com" className="text-blue-600 hover:underline">GitHub</a>.
          </p>
        </section>

        {/* Section */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Other interests</h2>
          <p className="text-zinc-700 leading-relaxed">
            Outside of coding, I enjoy [your hobbies here]. 
          </p>
        </section>

        {/* Contact */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-3">Contact</h2>
          <p className="text-zinc-700">
            Email me at{" "}
            <a href="mailto:you@example.com" className="text-blue-600 hover:underline">
              you@example.com
            </a>{" "}
            if you&apos;d like to chat!
          </p>
        </section>

        {/* Footer */}
        <footer className="text-sm text-zinc-500 pt-8 border-t border-zinc-200">
          Last updated: December 2024
        </footer>
      </main>
    </div>
  );
}
