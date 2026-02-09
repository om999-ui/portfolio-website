import { useState } from "react";
import { Mail, Github, Linkedin, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:ommasal1311@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email app will open with the message.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-primary">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm open to internships and junior developer roles. Feel free to reach out for 
            collaborations or opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <div className="bg-background p-6 md:p-8 rounded-xl card-shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message..."
                    rows={5}
                  />
                </div>
                <Button type="submit" variant="hero" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-xl card-shadow">
                <h3 className="font-semibold text-primary mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:ommasal1311@gmail.com"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-colors">
                      <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <span>ommasal1311@gmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/8262010672"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-colors">
                      <MessageCircle className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="bg-background p-6 rounded-xl card-shadow">
                <h3 className="font-semibold text-primary mb-4">Connect Online</h3>
                <div className="space-y-3">
                  <a
                    href="https://www.linkedin.com/in/om-masal-a8bb11257/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-colors">
                      <Linkedin className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <span>LinkedIn Profile</span>
                  </a>
                  <a
                    href="https://github.com/om999-ui"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground hover:text-accent transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-colors">
                      <Github className="w-5 h-5 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <span>GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
