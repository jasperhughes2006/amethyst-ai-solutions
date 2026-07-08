import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="text-lg tracking-tight text-foreground">
              Amethyst Consultancy
            </Link>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Personalised AI solutions for people who matter.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Get in touch</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="mailto:jasperhughes2006@gmail.com" className="inline-flex items-center gap-2 text-foreground hover:text-accent">
                  <Mail className="h-3.5 w-3.5" /> jasperhughes2006@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+447975578614" className="inline-flex items-center gap-2 text-foreground hover:text-accent">
                  <Phone className="h-3.5 w-3.5" /> +44 7975 578614
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" /> London, United Kingdom
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border/40 pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Amethyst Consultancy. Student-founded.
        </div>
      </div>
    </footer>
  );
}
