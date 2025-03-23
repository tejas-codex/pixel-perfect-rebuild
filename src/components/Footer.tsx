import React from "react";
import { Button } from "./Button";
import { Mail, Github, Twitter, Instagram, Coffee } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">Louis Nguyen</h3>
            <p className="text-muted-foreground mb-4">
              Designer & developer crafting thoughtful digital experiences that matter.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Github className="h-4 w-4" />} label="GitHub" />
              <SocialLink href="#" icon={<Twitter className="h-4 w-4" />} label="Twitter" />
              <SocialLink href="#" icon={<Instagram className="h-4 w-4" />} label="Instagram" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Home" />
              <FooterLink href="#about" label="About" />
              <FooterLink href="#experience" label="Experience" />
              <FooterLink href="#projects" label="Projects" />
              <FooterLink href="#contact" label="Contact" />
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#" label="Case Studies" />
              <FooterLink href="#" label="Process" />
              <FooterLink href="#" label="Articles" />
              <FooterLink href="#" label="Inspiration" />
              <FooterLink href="#" label="Tools" />
            </ul>
          </div>
          
          <div id="contact">
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="text-muted-foreground mb-4">
              Have a project in mind or just want to say hello?
            </p>
            <Button variant="default" className="mb-3 w-full sm:w-auto" hasArrow>
              Let's Chat
            </Button>
            <a 
              href="mailto:hello@example.com" 
              className="flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              <Mail className="h-4 w-4 mr-2" /> hello@example.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © {new Date().getFullYear()} Louis Nguyen. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center">
            Made with brewed coffee <Coffee className="h-4 w-4 mx-1" /> in Prague
          </p>
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
