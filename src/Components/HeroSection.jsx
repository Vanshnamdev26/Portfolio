import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-background overflow-hidden"
    >
      <div className="container max-w-5xl mx-auto z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="inline-block opacity-0 animate-fade-in">
                Hi, I'm&nbsp;
              </span>
              <span className="inline-block bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent font-bold opacity-0 animate-fade-in-delay-1">
                Vansh&nbsp;
              </span>
              <span className="inline-block text-primary opacity-0 animate-fade-in-delay-2">
                Namdev
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed opacity-0 animate-fade-in-delay-3">
              I'm a passionate web developer focused on crafting responsive,
              elegant, and high-performance websites. I specialize in modern
              JavaScript frameworks, clean UI/UX design, and scalable solutions
              that bring ideas to life.
            </p>

            <div className="pt-6 opacity-0 animate-fade-in-delay-4">
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 text-lg font-semibold rounded-xl bg-gradient-to-r from-primary to-pink-500 text-white shadow-lg hover:shadow-xl transition-transform hover:-translate-y-1 duration-300"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 opacity-0 animate-fade-in-delay-3 flex justify-center md:justify-end">
            <img
              src="/vansh2.jpg"  // <-- Replace with your actual image path
              alt="Vansh Namdev"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-primary/40"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground animate-bounce">
        <a
          href="#about"
          className="group flex flex-col items-center transition-all duration-300 hover:scale-105"
        >
          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            <ArrowDown className="h-6 w-6 text-primary group-hover:animate-pulse" />
          </div>
        </a>
      </div>
    </section>
  );
};
