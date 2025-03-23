
import React, { useEffect, useRef } from "react";
import { Button } from "./Button";
import { ArrowUpRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
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
            <p className="text-white/80 mb-3 text-sm line-clamp-3">{project.description}</p>
            <a 
              href={project.link} 
              className="inline-flex items-center text-white/90 hover:text-white text-sm font-medium"
            >
              View Case Study <ArrowUpRight className="ml-1 h-3 w-3" />
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
      title: "Automated SaaS Billing System",
      category: "Financial Operations",
      description: "A comprehensive automation solution for SaaS billing, integrating multiple payment gateways and optimizing revenue recognition.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Power BI Reporting Dashboard",
      category: "Data Analytics",
      description: "Custom financial dashboard displaying real-time metrics, forecasting, and trend analysis for executive decision-making.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Multi-Currency Reconciliation Tool",
      category: "Financial Systems",
      description: "Automated reconciliation system handling transactions across multiple currencies, banks, and payment processors.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "KYC Compliance Framework",
      category: "Banking Operations",
      description: "Standardized framework for KYC verification, risk assessment, and regulatory compliance in fintech applications.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "Financial Process Automation",
      category: "Workflow Optimization",
      description: "End-to-end automation of financial workflows from invoice generation to payment reconciliation and reporting.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3",
      link: "#"
    },
    {
      title: "GST Compliance System",
      category: "Tax Management",
      description: "Automated GST calculation, filing, and reconciliation system integrated with accounting software.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="reveal text-sm font-medium text-primary/60 mb-4 block">CASE STUDIES</span>
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
