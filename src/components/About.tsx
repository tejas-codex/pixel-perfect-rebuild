
import React, { useEffect, useRef } from "react";
import { Button } from "./Button";
import { 
  FileDown, 
  Linkedin 
} from "lucide-react";

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
              Financial Operations & Analytics Expert
            </h2>
            <div className="space-y-4">
              <p className="reveal reveal-delay-1 text-muted-foreground">
                I'm Tejas, a Financial Operations and Analytics professional with extensive experience in SaaS billing, KYC compliance, and process automation. My expertise lies in streamlining financial workflows and implementing data-driven solutions that enhance efficiency and accuracy.
              </p>
              <p className="reveal reveal-delay-2 text-muted-foreground">
                With a background spanning fintech and banking, I've successfully led projects in automated billing systems, reconciliation processes, and regulatory compliance frameworks. My approach combines strategic financial management with technological innovation.
              </p>
              <p className="reveal reveal-delay-3 text-muted-foreground">
                I'm passionate about leveraging tools like Power BI, QuickBooks, and various payment platforms to create seamless financial ecosystems that drive business growth and transparency.
              </p>
            </div>
            <div className="reveal reveal-delay-4 mt-8">
              <Button hasArrow>
                <FileDown className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-2xl overflow-hidden reveal">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3"
                alt="Financial dashboard visualization"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-secondary rounded-xl reveal reveal-delay-2 hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3"
                alt="Working with financial data"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
        
        {/* Tools Section */}
        <div className="mt-16">
          <h3 className="reveal text-xl font-bold mb-6 text-center">Tools & Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 justify-items-center">
            <div className="reveal reveal-delay-1 flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-2">
                <span className="text-primary text-xs">QuickBooks</span>
              </div>
              <span className="text-sm text-muted-foreground">QuickBooks</span>
            </div>
            <div className="reveal reveal-delay-2 flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-2">
                <span className="text-primary text-xs">Zoho</span>
              </div>
              <span className="text-sm text-muted-foreground">Zoho Books</span>
            </div>
            <div className="reveal reveal-delay-2 flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-2">
                <span className="text-primary text-xs">Power BI</span>
              </div>
              <span className="text-sm text-muted-foreground">Power BI</span>
            </div>
            <div className="reveal reveal-delay-3 flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-2">
                <span className="text-primary text-xs">Stripe</span>
              </div>
              <span className="text-sm text-muted-foreground">Stripe</span>
            </div>
            <div className="reveal reveal-delay-3 flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-2">
                <span className="text-primary text-xs">Chargebee</span>
              </div>
              <span className="text-sm text-muted-foreground">Chargebee</span>
            </div>
            <div className="reveal reveal-delay-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-2">
                <span className="text-primary text-xs">Jira</span>
              </div>
              <span className="text-sm text-muted-foreground">Jira</span>
            </div>
            <div className="reveal reveal-delay-4 flex flex-col items-center">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-2">
                <span className="text-primary text-xs">RazorpayX</span>
              </div>
              <span className="text-sm text-muted-foreground">RazorpayX</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
