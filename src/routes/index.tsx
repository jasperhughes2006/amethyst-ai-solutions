import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Heart, Zap, Shield } from "lucide-react";
import heroImage from "../assets/hero-amethyst.png";
import annaPortrait from "../assets/anna-portrait.png";
import jasperPortrait from "../assets/jasper-portrait.png";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      {/* Hero — Split Screen */}
      <section className="relative overflow-hidden bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center md:flex-row">
          {/* Left: Text */}
          <div className="flex w-full flex-col justify-center px-4 py-16 md:w-1/2 md:px-6 md:py-24">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-accent">
              Personalised AI Consultancy
            </p>
            <h1 className="max-w-lg text-4xl leading-[1.1] text-foreground md:text-5xl lg:text-6xl">
              AI built around <em className="text-accent">you</em>
            </h1>
            <p className="mt-4 max-w-md font-serif text-xl italic text-accent md:text-2xl">
              “AI, made human.”
            </p>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              We believe the best AI solutions come from understanding people first. 
              Every business operates on different margins — that extra hour of care can be the difference between good and transformative.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Book free consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
              >
                Our mission
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>30 minutes, completely free. No obligation.</span>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full md:w-1/2">
            <div className="relative aspect-square w-full overflow-hidden md:aspect-auto md:h-[600px] lg:h-[700px]">
              <img
                src={heroImage}
                alt="Abstract amethyst neural network visualisation"
                className="h-full w-full scale-125 object-cover object-center"
                width={1024}
                height={1024}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-amethyst-cream/50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl text-foreground md:text-4xl">Our Mission</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            To make AI genuinely accessible by treating every client as an individual. 
            We know how tight margins can be — especially for small businesses and startups. 
            That is why we take the time to understand your world before we ever propose a solution. 
            The result is AI that fits your workflow, your budget, and your ambitions — not the other way around.
          </p>
        </div>
      </section>

      {/* Values / How We Work */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl text-foreground md:text-4xl">How we work</h2>
            <p className="mt-3 text-muted-foreground">
              Efficiency and empathy, hand in hand.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <ValueCard
              icon={<Heart className="h-6 w-6" />}
              title="Personalised"
              description="We start by listening. Your context, constraints, and goals shape everything we build."
            />
            <ValueCard
              icon={<Zap className="h-6 w-6" />}
              title="Efficient"
              description="Streamlined processes mean faster delivery without cutting corners on quality."
            />
            <ValueCard
              icon={<Shield className="h-6 w-6" />}
              title="Transparent"
              description="You only pay for implementation. Our consultation and scoping phase is always free."
            />
            <ValueCard
              icon={<Clock className="h-6 w-6" />}
              title="Considered"
              description="We know small margins matter. Extra time spent understanding your needs creates outsized returns."
            />
          </div>
        </div>
      </section>

      {/* The Free Consultation Promise */}
      <section className="bg-amethyst-royal py-20 text-primary-foreground md:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <h2 className="text-3xl md:text-4xl">Free consultation. Always.</h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">
            We offer every prospective client a free 30-minute consultation because we believe 
            you should feel confident before committing. We only charge for the actual implementation — 
            never for our time getting to know you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary-foreground/90"
          >
            Book your free session
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl text-foreground md:text-4xl">Meet the founders</h2>
            <p className="mt-3 text-muted-foreground">
              Student founders building with purpose.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-64 w-52 overflow-hidden rounded-2xl">
                <img
                  src={annaPortrait}
                  alt="Anna Serebryokova, co-founder of Amethyst Consultancy"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={512}
                  height={640}
                />
              </div>
              <h3 className="mt-5 text-xl">Anna Serebryokova</h3>
              <p className="mt-1 text-sm text-accent">Co-Founder</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Driven by the belief that technology should adapt to people, not the reverse. 
                Anna brings a rigorous technical background and a deep empathy for the challenges small businesses face.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="relative h-64 w-52 overflow-hidden rounded-2xl">
                <img
                  src={jasperPortrait}
                  alt="Jasper Hughes, co-founder of Amethyst Consultancy"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  width={512}
                  height={640}
                />
              </div>
              <h3 className="mt-5 text-xl">Jasper Hughes</h3>
              <p className="mt-1 text-sm text-accent">Co-Founder</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Jasper combines strategic thinking with hands-on implementation expertise. 
                He is passionate about making AI practical, affordable, and genuinely useful for every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border/40 bg-background py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="text-3xl text-foreground md:text-4xl">Ready to see what AI can do for you?</h2>
          <p className="mt-4 text-muted-foreground">
            Start with a free 30-minute conversation. No sales pitch — just honest advice.
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
    <div className="rounded-2xl border border-border/60 bg-card p-6 transition-shadow hover:shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
        {icon}
      </div>
      <h3 className="mt-4 text-lg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
