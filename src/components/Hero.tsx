import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container relative z-10 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
            // Technology Consulting & Software Services
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Engineering Technology Solutions for the <span className="text-gradient">Modern Enterprise</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Srivi Technologies is a technology consulting and software services company delivering innovative solutions in cloud engineering, enterprise software development, and technology talent solutions.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="gap-2 px-8" asChild>
              <a href="#services">
                Our Services <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
