"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-lg font-semibold tracking-tight"
        >
          Parth Singh
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop GitHub */}
        <Link
          href="https://github.com/parthsingh23"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-sm font-medium transition-colors hover:text-muted-foreground md:block"
        >
          GitHub
        </Link>

        {/* Mobile navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open navigation menu"
              className="inline-flex size-9 items-center justify-center rounded-md border border-border"
            >
              <Menu className="size-4" />
            </SheetTrigger>

            <SheetContent side="right">
              <nav className="mt-6 flex flex-col gap-2 px-6">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-base font-medium"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="https://github.com/parthsingh23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium"
                >
                  GitHub ↗
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
