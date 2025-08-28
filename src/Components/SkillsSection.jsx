import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 60, category: "frontend" },
  { name: "TypeScript", level: 25, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "Next.js", level: 30, category: "frontend" },

  // Backend
  { name: "Node.js", level: 40, category: "backend" },
  { name: "Express", level: 60, category: "backend" },
  { name: "MongoDB", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 60, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
];

const categories = ["All", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-gradient-to-br from-secondary/30 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-14">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-All duration-300 border border-transparent",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-foreground hover:bg-muted/70 hover:border-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="group bg-card border border-border p-6 rounded-2xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-foreground">
                  {skill.name}
                </h3>
                <span className="text-sm text-muted-foreground font-medium">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 bg-muted/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-All duration-700"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
