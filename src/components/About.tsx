
import React, { useEffect, useRef } from "react";
import { Button } from "./Button";

const About = () => {
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

  return (
    <section id="about" className="py-20" ref={sectionRef}>
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="reveal text-sm font-medium text-primary/60 mb-4 block">ABOUT ME</span>
            <h2 className="reveal text-3xl md:text-4xl font-bold mb-6">
              Designer, Developer & Problem Solver
            </h2>
            <div className="space-y-4">
              <p className="reveal reveal-delay-1 text-muted-foreground">
                I'm Louis, a multidisciplinary designer and developer based in Prague. With a
                background in both design and engineering, I bring a unique perspective to digital
                product development.
              </p>
              <p className="reveal reveal-delay-2 text-muted-foreground">
                My approach combines strategic thinking with meticulous execution. I believe great
                design is not just about aesthetics, but about creating meaningful experiences that
                solve real problems.
              </p>
              <p className="reveal reveal-delay-3 text-muted-foreground">
                When I'm not designing or coding, you can find me exploring new coffee shops,
                reading about design systems, or traveling to find new sources of inspiration.
              </p>
            </div>
            <div className="reveal reveal-delay-4 mt-8">
              <Button hasArrow>More About Me</Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden reveal">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3"
                alt="Louis Nguyen"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary rounded-xl reveal reveal-delay-2 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"
                alt="Working on laptop"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
