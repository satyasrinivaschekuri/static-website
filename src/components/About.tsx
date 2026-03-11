
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
