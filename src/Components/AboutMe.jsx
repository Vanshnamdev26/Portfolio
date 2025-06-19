import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-foreground">
              Passionate Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I’m a fresher web developer with a strong foundation in front-end
              technologies and a deep interest in clean UI/UX. I'm enthusiastic
              about solving real-world problems through code and continuously
              improving through hands-on learning.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I bring fresh perspectives, strong fundamentals in modern web
              technologies, and a constant eagerness to learn and grow through
              real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-primary to-pink-500 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
              >
                Get In Touch
              </a>
              <a
                href="#"
                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column: Skill Cards */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development",
                description:
                  "I create responsive, interactive websites using HTML, CSS, JavaScript, and frameworks like React. I love turning ideas into functional products with clean, scalable code.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                description:
                  "I care about how things look and feel. I aim to design intuitive, accessible, and aesthetically pleasing interfaces that enhance user experience.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Project Management",
                description:
                  "I'm detail-oriented and value clear communication, time management, and smooth workflows, whether working solo or in a team.",
              },
            ].map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-xl p-6 shadow-sm hover:shadow-md hover:border-primary/60 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">{icon}</div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
