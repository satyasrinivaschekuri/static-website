const stats = [
  { value: "12+", label: "Years Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Engineers" },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="font-mono text-sm tracking-widest uppercase text-primary">About us</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Your technology partner for digital transformation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We partner with startups, enterprises, and technology teams to design, build, and scale modern digital platforms. Our expertise spans cloud architecture, enterprise integration, AI-driven solutions, and specialized IT talent services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Srivi Technologies, we believe technology should be an accelerator, not a bottleneck. Every solution we deliver is engineered for performance, security, and long-term scalability.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="p-6 rounded-xl bg-card border border-border text-center">
                <p className="text-4xl font-bold text-gradient mb-2">{s.value}</p>
                <p className="text-sm text-muted-foreground font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
