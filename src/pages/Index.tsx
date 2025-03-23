
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import ScrollProgress from "@/components/ScrollProgress";
import ShareButtons from "@/components/ShareButtons";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add scroll reveal functionality
    const revealElements = document.querySelectorAll(".reveal");
    
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
    
    revealElements.forEach((el) => observer.observe(el));
    
    return () => {
      revealElements.forEach((el) => observer.disconnect());
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <Hero />
      <Experience />
      <About />
      <Projects />
      <ScrollProgress />
      <ShareButtons />
      <Footer />
    </div>
  );
};

export default Index;
