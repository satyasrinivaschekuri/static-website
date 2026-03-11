import { Cloud, Shield, Server, Code, BarChart3, Headphones } from "lucide-react";

const services = [
  { icon: Cloud, title: "Cloud Infrastructure", description: "Design, migrate, and manage scalable cloud environments on AWS, Azure, and GCP." },
  { icon: Shield, title: "Cybersecurity", description: "Protect your assets with threat detection, compliance audits, and zero-trust architecture." },
  { icon: Server, title: "Managed IT Services", description: "24/7 monitoring, maintenance, and support so you can focus on what matters." },
  { icon: Code, title: "Software Development", description: "Custom applications, APIs, and integrations tailored to your business workflows." },
  { icon: BarChart3, title: "Data & Analytics", description: "Turn raw data into actionable insights with modern BI and data engineering." },
  { icon: Headphones, title: "IT Consulting", description: "Strategic technology roadmaps and digital transformation guidance." },
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
