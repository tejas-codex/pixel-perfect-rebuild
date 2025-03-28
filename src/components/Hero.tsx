
import React, { useEffect, useRef } from "react";
import { Button } from "./Button";
import { FileDown, Linkedin } from "lucide-react";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add animation classes with delay for a staggered effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.disconnect());
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div
        ref={containerRef}
        className="container mx-auto px-4 md:px-6 flex flex-col items-start py-12 md:py-24"
      >
        <span className="reveal text-sm md:text-base font-medium text-primary/60 mb-4">
          FINANCIAL OPERATIONS & ANALYTICS
        </span>
        <h1
          ref={headingRef}
          className="reveal text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl text-balance mb-6"
        >
          Tejas Shrivastav
        </h1>
        <p className="reveal reveal-delay-1 text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          Driving efficiency with data & automation in financial operations, billing systems, and business analytics.
        </p>
        <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 mt-2">
          <Button variant="default" size="lg" hasArrow>
            <FileDown className="h-5 w-5 mr-2" />
            Download Resume
          </Button>
          <Button variant="outline" size="lg">
            <Linkedin className="h-5 w-5 mr-2" />
            Connect on LinkedIn
          </Button>
        </div>
      </div>

      {/* Background subtle decoration */}
      <div className="absolute -top-24 -right-40 w-96 h-96 bg-secondary/60 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
