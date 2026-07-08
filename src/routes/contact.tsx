import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, CheckCircle, Clock, Shield, ArrowRight, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: "Book a Free Consultation — Amethyst Consultancy" },
      { name: "description", content: "Book your free 30-minute AI consultation with Amethyst Consultancy. No obligation, no sales pitch — just honest advice." },
    ],
  }),
});

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl text-foreground md:text-5xl">Book your free consultation</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Tell us a little about your business and what you are hoping to achieve with AI. 
            We will get back to you within 24 hours to schedule a 30-minute call.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-accent" />
              30 minutes
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-accent" />
              Completely free
            </span>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-4 pb-20 md:px-6 md:pb-28">
        <div className="mx-auto max-w-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1.5 block w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5 block w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground">
                  Company / Organisation
                </label>
                <input
                  id="company"
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  className="mt-1.5 block w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  What would you like to explore?
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1.5 block w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  placeholder="Tell us about your goals, current challenges, or any ideas you have in mind..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                Request consultation
                <Send className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted about your consultation. No spam, ever.
              </p>
            </form>
          ) : (
            <div className="rounded-2xl border border-border/60 bg-card p-8 text-center">
              <CheckCircle className="mx-auto h-10 w-10 text-accent" />
              <h2 className="mt-4 text-xl">Request received</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Thank you, {form.name || "there"}. We have received your request and will be in touch 
                within 24 hours to schedule your free 30-minute consultation.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Send another request
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ-ish note */}
      <section className="border-t border-border/40 bg-amethyst-cream/50 px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl text-foreground">What happens next?</h2>
          <div className="mt-8 grid gap-6 text-left sm:grid-cols-3">
            <StepCard number="1" title="We reach out" description="Within 24 hours, we will email you to find a time that works." />
            <StepCard number="2" title="The call" description="A relaxed 30-minute conversation about your goals and constraints." />
            <StepCard number="3" title="Your proposal" description="If it feels right, we will send a clear, scoped proposal — no pressure." />
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            Remember: the consultation is completely free. You only pay if you choose to move forward with implementation.
          </p>
        </div>
      </section>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="rounded-2xl bg-card p-5 text-center shadow-sm">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-sm font-medium text-accent">
        {number}
      </span>
      <h3 className="mt-3 text-base">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
