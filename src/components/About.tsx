
const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="font-mono text-sm tracking-widest uppercase text-primary">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Srivi Technologies is a modern technology services company focused on delivering high-quality software engineering solutions and technology talent to organizations building next-generation digital platforms.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team consists of experienced software architects, engineers, and technology consultants who specialize in solving complex technical challenges using modern cloud platforms and emerging technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work closely with organizations to translate business ideas into scalable technical solutions while ensuring reliability, security, and long-term maintainability.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="p-10 rounded-2xl bg-card border border-border text-center w-full max-w-xs">
              <p className="text-6xl md:text-7xl font-bold text-gradient mb-3">20+</p>
              <p className="text-base text-muted-foreground font-mono tracking-wide">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
