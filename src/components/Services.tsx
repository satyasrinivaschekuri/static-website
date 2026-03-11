import { Cloud, Shield, Server, Code, BarChart3, Users } from "lucide-react";

const services = [
  { icon: Cloud, title: "Cloud Engineering", description: "Design, migrate, and manage scalable cloud environments across AWS, Azure, and GCP." },
  { icon: Code, title: "Enterprise Software Development", description: "Custom applications, APIs, and integrations tailored to your business workflows and growth." },
  { icon: Users, title: "Technology Talent Solutions", description: "Specialized IT staffing and team augmentation to scale your engineering capabilities." },
  { icon: BarChart3, title: "AI-Driven Solutions", description: "Leverage machine learning and AI to automate processes and unlock data-driven insights." },
  { icon: Server, title: "Enterprise Integration", description: "Seamlessly connect systems, data, and workflows across your technology ecosystem." },
  { icon: Shield, title: "Technology Consulting", description: "Strategic technology roadmaps, architecture reviews, and digital transformation guidance." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <p className="font-mono text-sm tracking-widest uppercase text-primary">What we do</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:card-glow"
            >
              <s.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
