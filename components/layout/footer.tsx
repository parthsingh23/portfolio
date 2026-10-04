import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Designed & built by Parth Singh · 2026</p>

        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/parthsingh23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </Link>

          <Link
            href="mailto:parthsingh1866@gmail.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Mail
          </Link>

          <Link
            href="https://www.linkedin.com/in/parthsingh23"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
