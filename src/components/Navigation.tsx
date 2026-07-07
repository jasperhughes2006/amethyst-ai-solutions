import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="font-[var(--font-heading)] text-xl tracking-tight text-foreground">
          Amethyst
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: "text-foreground" }}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book free consultation
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-border/40 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-base font-medium text-foreground" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-base font-medium text-foreground" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-base font-medium text-foreground" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Link
              to="/contact"
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Book free consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
