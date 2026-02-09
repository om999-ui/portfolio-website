import { Github, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm flex items-center gap-2">
            © {currentYear} Om Shrimant Masal · Built with{" "}
            <Heart className="w-4 h-4 fill-accent text-accent" /> ·{" "}
            <a
              href="https://github.com/om999-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </p>
          <p className="text-xs text-primary-foreground/70">
            All contact information is used responsibly. Your privacy is respected.
          </p>
        </div>
      </div>
    </footer>
  );
};
