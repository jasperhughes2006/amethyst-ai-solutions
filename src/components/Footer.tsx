import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Link to="/" className="text-lg tracking-tight text-foreground">
              Amethyst Consultancy
            </Link>
            <p className="mt-1 max-w-xs text-sm text-muted-foreground">
              Personalised AI solutions for people who matter.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
            <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-6 text-sm text-muted-foreground">
          {new Date().getFullYear()} Amethyst Consultancy. Student-founded.
        </div>
      </div>
    </footer>
  );
}
