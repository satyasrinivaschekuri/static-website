import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="container relative z-10 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground">
            // Enterprise IT Solutions
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            We build the <span className="text-gradient">infrastructure</span> that powers your business
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From cloud architecture to cybersecurity, we deliver scalable technology solutions that drive growth and operational excellence.
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
