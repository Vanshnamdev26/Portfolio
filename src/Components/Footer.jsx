import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full relative  border-t border-border mt-20 pt-12 pb-16 px-4">
      {/* Inner content with max-width constraint */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left px-4">
        {/* Left Text */}
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-primary">Vansh.co</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/Vanshnamdev26"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/vansh-namdev-a41758245/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:vanshnwork268@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <a
          href="#hero"
          className="group flex flex-col items-center animate-bounce transition-transform hover:scale-105"
        >
          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 shadow-md">
            <ArrowUp className="h-6 w-6 text-primary group-hover:animate-pulse" />
          </div>
          <span className="text-xs text-muted-foreground mt-1 group-hover:text-primary">
            Back to Top
          </span>
        </a>
      </div>
    </footer>
  );
};
