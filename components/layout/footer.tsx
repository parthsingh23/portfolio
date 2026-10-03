import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Parth Singh</p>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/parthsingh23"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/parthsingh23"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>

          <Link href="#top" className="transition-colors hover:text-foreground">
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
