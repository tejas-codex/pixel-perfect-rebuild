
import React, { useEffect, useRef } from "react";
import { 
  ChartBar, 
  FileSpreadsheet, 
  Buildings, 
  BarChart4, 
  BadgeCheck 
} from "lucide-react";

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

  // Updated experience items with your financial skills and tech stack
  const financialSkills = [
    {
      title: "Financial Analysis",
      description: "Expertise in GST, budgeting, reconciliation, and financial compliance.",
      icon: <FileSpreadsheet className="h-6 w-6 text-primary" />,
      delay: 1
    },
    {
      title: "SaaS Billing Systems",
      description: "Implementation and management of automated billing processes and credit tracking.",
      icon: <ChartBar className="h-6 w-6 text-primary" />,
      delay: 2
    },
    {
      title: "Banking Compliance",
      description: "KYC procedures, regulatory compliance, and risk management frameworks.",
      icon: <BadgeCheck className="h-6 w-6 text-primary" />,
      delay: 3
    },
    {
      title: "Data Visualization",
      description: "Creating insightful dashboards and reports using Power BI and other tools.",
      icon: <BarChart4 className="h-6 w-6 text-primary" />,
      delay: 4
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/30" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-4xl font-bold mb-4">Experience & Expertise</h2>
          <p className="reveal reveal-delay-1 text-muted-foreground max-w-2xl mx-auto">
            Over 6 years of experience in financial operations, banking, and fintech sectors.
          </p>
        </div>
        
        {/* Financial Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {financialSkills.map((skill, index) => (
            <ExperienceCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
              delay={skill.delay}
            />
          ))}
        </div>
        
        {/* Work Experience Timeline */}
        <div className="mt-16">
          <h3 className="reveal text-2xl font-bold mb-10 text-center">Work History</h3>
          
          <div className="space-y-12">
            {/* Testlify & HNR Tech */}
            <div className="reveal grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <div className="md:text-right">
                <span className="text-sm text-primary/60 font-medium">2019 - PRESENT</span>
                <h4 className="text-xl font-bold mt-1">Testlify & HNR Tech</h4>
                <p className="text-muted-foreground mt-1">Financial Operations Manager</p>
              </div>
              <div className="md:col-span-3">
                <ul className="space-y-3 text-muted-foreground list-disc ml-5">
                  <li>Implemented automated SaaS billing integration, reducing manual errors by 95%</li>
                  <li>Developed credit tracking system for multi-currency transactions across 5 countries</li>
                  <li>Streamlined payroll process, cutting processing time from 3 days to 4 hours</li>
                  <li>Created Power BI dashboards for real-time financial insights and forecasting</li>
                </ul>
              </div>
            </div>
            
            {/* YES Bank */}
            <div className="reveal reveal-delay-2 grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
              <div className="md:text-right">
                <span className="text-sm text-primary/60 font-medium">2017 - 2019</span>
                <h4 className="text-xl font-bold mt-1">YES Bank</h4>
                <p className="text-muted-foreground mt-1">KYC & Compliance Specialist</p>
              </div>
              <div className="md:col-span-3">
                <ul className="space-y-3 text-muted-foreground list-disc ml-5">
                  <li>Led KYC verification team, processing over 3,000 applications monthly</li>
                  <li>Developed and maintained risk assessment models for regulatory compliance</li>
                  <li>Automated reconciliation processes, improving accuracy by 40%</li>
                  <li>Conducted staff training on compliance protocols and regulatory updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
