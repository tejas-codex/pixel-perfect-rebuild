
import React, { useEffect, useRef } from "react";
import { Button } from "./Button";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  image: string;
  link: string;
}

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div 
      className={`reveal reveal-delay-${index % 3} group relative overflow-hidden rounded-lg cursor-pointer hover-lift`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="w-full">
            <span className="text-xs font-medium text-white/70 uppercase mb-1 block">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <a 
              href={project.link} 
              className="inline-flex items-center text-white/90 hover:text-white text-sm font-medium"
            >
              View Project <ArrowUpRight className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
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

  const projects: Project[] = [
    {
      title: "E-Commerce Redesign",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1523540939399-141cbff6a8d7?ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Financial Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Mobile Banking App",
      category: "App Design",
      image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Brand Identity System",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Social Media Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Healthcare Portal",
      category: "UX Research & Design",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="reveal text-sm font-medium text-primary/60 mb-4 block">MY WORK</span>
            <h2 className="reveal text-3xl md:text-4xl font-bold">Featured Projects</h2>
          </div>
          <div className="reveal reveal-delay-1 mt-4 md:mt-0">
            <Button variant="outline" hasArrow>
              View All Projects
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
