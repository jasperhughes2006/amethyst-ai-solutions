import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Zap, Users, Target } from "lucide-react";
import annaPortrait from "../assets/anna-portrait.png";
import jasperPortrait from "../assets/jasper-portrait.png";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Amethyst Consultancy" },
      { name: "description", content: "Learn about Amethyst Consultancy's mission, values, and founders Anna Serebryokova and Jasper Hughes." },
    ],
  }),
});

function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-background px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl text-foreground md:text-5xl">About Amethyst</h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            We are a student-founded AI consultancy built on a simple belief: 
            technology is only valuable when it genuinely serves people.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-amethyst-cream/50 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl text-foreground md:text-4xl">Our mission</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                To make AI genuinely accessible by treating every client as an individual. 
                We know how tight margins can be — especially for small businesses and startups. 
                That is why we take the time to understand your world before we ever propose a solution.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                The result is AI that fits your workflow, your budget, and your ambitions — 
                not the other way around.
              </p>
            </div>
            <div className="rounded-2xl bg-amethyst-royal p-8 text-primary-foreground">
              <blockquote className="text-lg leading-relaxed italic">
                "We started Amethyst because we saw too many businesses being sold one-size-fits-all AI tools 
                that didn't fit their reality. Small margins deserve big care."
              </blockquote>
              <p className="mt-4 text-sm text-primary-foreground/80">
                — Anna &amp; Jasper, Co-Founders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl text-foreground md:text-4xl">What we stand for</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={<Heart className="h-5 w-5" />}
              title="Empathy"
              description="We understand that every business is different. We listen first, advise second."
            />
            <ValueCard
              icon={<Zap className="h-5 w-5" />}
              title="Efficiency"
              description="Streamlined processes and clear communication mean projects that finish on time and on budget."
            />
            <ValueCard
              icon={<Users className="h-5 w-5" />}
              title="Personalisation"
              description="No cookie-cutter solutions. Every recommendation is tailored to your specific context."
            />
            <ValueCard
              icon={<Target className="h-5 w-5" />}
              title="Honesty"
              description="Transparent pricing. You only pay for implementation — consultation is always free."
            />
          </div>
        </div>
      </section>

      {/* Founders Detail */}
      <section className="bg-amethyst-cream/50 px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl text-foreground md:text-4xl">The people behind Amethyst</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="flex flex-col items-center rounded-2xl bg-card p-8 text-center shadow-sm">
              <div className="relative h-56 w-44 overflow-hidden rounded-xl">
                <img
                  src={annaPortrait}
                  alt="Anna Serebryokova"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={512}
                  height={640}
                />
              </div>
              <h3 className="mt-5 text-xl">Anna Serebryokova</h3>
              <p className="mt-1 text-sm text-accent">Co-Founder</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Anna brings a rigorous technical background in machine learning and a deep empathy 
                for the challenges small businesses face. She believes the best AI solutions come from 
                understanding people first — their workflows, their constraints, and their goals.
              </p>
            </div>
            <div className="flex flex-col items-center rounded-2xl bg-card p-8 text-center shadow-sm">
              <div className="relative h-56 w-44 overflow-hidden rounded-xl">
                <img
                  src={jasperPortrait}
                  alt="Jasper Hughes"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={512}
                  height={640}
                />
              </div>
              <h3 className="mt-5 text-xl">Jasper Hughes</h3>
              <p className="mt-1 text-sm text-accent">Co-Founder</p>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Jasper combines strategic thinking with hands-on implementation expertise. 
                He is passionate about making AI practical, affordable, and genuinely useful — 
                stripping away the hype to deliver real value for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-4 py-20 md:px-6 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-foreground md:text-4xl">Want to learn more?</h2>
          <p className="mt-4 text-muted-foreground">
            Book a free 30-minute consultation and discover how AI could work for your business.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book free consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
