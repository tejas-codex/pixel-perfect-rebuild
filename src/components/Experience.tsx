
import React, { useEffect, useRef } from "react";
import { Code, Briefcase, Lightbulb, Layout } from "lucide-react";

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ExperienceCard = ({ title, description, icon, delay }: ExperienceCardProps) => {
  return (
    <div className={`reveal reveal-delay-${delay} bg-white border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300`}>
      <div className="w-12 h-12 bg-secondary rounded-md flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = sectionRef.current?.querySelectorAll(".reveal");
            elements?.forEach((el) => el.classList.add("active"));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const experiences = [
    {
      title: "Design Experience",
      description: "Crafting user-centered interfaces that balance aesthetics with functionality.",
      icon: <Layout className="h-6 w-6 text-primary" />,
      delay: 1
    },
    {
      title: "Development Experience",
      description: "Building performant, accessible, and responsive web applications.",
      icon: <Code className="h-6 w-6 text-primary" />,
      delay: 2
    },
    {
      title: "Startup Experience",
      description: "Working with teams to launch and scale innovative products.",
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      delay: 3
    },
    {
      title: "Creative Problem Solving",
      description: "Finding elegant solutions to complex design and technical challenges.",
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      delay: 4
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-4">Experience & Expertise</h2>
          <p className="reveal reveal-delay-1 text-muted-foreground max-w-2xl mx-auto">
            With over 8 years of experience, I've developed a diverse skill set across design and development.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              title={exp.title}
              description={exp.description}
              icon={exp.icon}
              delay={exp.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
