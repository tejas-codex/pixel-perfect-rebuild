
import React from "react";
import { Button } from "./Button";
import { Mail, Github, Linkedin, FileText, Power, Jira, Stripe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Tejas Shrivastav</h3>
            <p className="text-muted-foreground mb-4">
              Financial Operations & Analytics Expert driving efficiency with data & automation.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/" icon={<Github className="h-4 w-4" />} label="GitHub" />
              <SocialLink href="https://linkedin.com/" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
              <SocialLink href="mailto:hello@example.com" icon={<Mail className="h-4 w-4" />} label="Email" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Home" />
              <FooterLink href="#about" label="About" />
              <FooterLink href="#experience" label="Experience" />
              <FooterLink href="#projects" label="Projects" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Expertise</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Financial Operations" />
              <FooterLink href="#" label="SaaS Billing" />
              <FooterLink href="#" label="Data Analytics" />
              <FooterLink href="#" label="Process Automation" />
              <FooterLink href="#" label="Compliance" />
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-4">
              Looking for financial operations expertise or want to discuss a project?
            </p>
            <Button variant="default" className="mb-3 w-full sm:w-auto" hasArrow>
              Schedule a Call
            </Button>
            <a 
              href="mailto:tejas@example.com" 
              className="flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4 mr-2" /> tejas@example.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {new Date().getFullYear()} Tejas Shrivastav. All rights reserved.
          </p>
          <div className="flex items-center space-x-2">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</a>
            <span className="text-muted-foreground">•</span>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink = ({ href, label }: FooterLinkProps) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        {label}
      </a>
    </li>
  );
};

export default Footer;
