import { Github, Linkedin, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Left: Avatar */}
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white shadow-2xl">
              <span className="text-6xl md:text-8xl font-bold">OM</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-primary">
              Om Shrimant Masal
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Aspiring Full-Stack Developer (MERN) — building responsive web apps with React & Node.js
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Download Resume</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-4 h-4" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4" />
                <a href="tel:+917499391463" className="hover:text-accent transition-colors">
                  +91-7499391463
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4" />
                <a href="mailto:ommasal1311@gmail.com" className="hover:text-accent transition-colors">
                  ommasal1311@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/om-masal-a8bb11257/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover-lift card-shadow"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/om999-ui"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover-lift card-shadow"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/8262010672"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-card hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all duration-300 hover-lift card-shadow"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
