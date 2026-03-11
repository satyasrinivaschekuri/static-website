import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              <span className="text-gradient">NexaByte</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Enterprise IT solutions engineered for performance, security, and growth.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-sm tracking-widest uppercase text-primary">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-foreground transition-colors">Services</a>
              <a href="#about" className="hover:text-foreground transition-colors">About</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-sm tracking-widest uppercase text-primary">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="mailto:hello@nexabyte.io" className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Mail className="w-4 h-4 text-primary" /> hello@nexabyte.io
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-primary" /> +1 (555) 123-4567
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary" /> 350 Tech Park Dr, San Francisco, CA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground font-mono">
          © {new Date().getFullYear()} NexaByte. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
