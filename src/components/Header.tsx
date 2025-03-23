
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Menu, X, FileDown, Linkedin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-white/90 backdrop-blur-md shadow-sm"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a 
            href="/" 
            className="text-xl font-display font-bold tracking-tight"
          >
            Tejas Shrivastav
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button variant="default" size="sm" hasArrow>
              <FileDown className="h-4 w-4 mr-1" />
              Resume
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex items-center" 
            onClick={handleMobileMenuToggle}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation Overlay */}
      {isMobile && (
        <div 
          className={cn(
            "fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
            mobileMenuOpen ? "translate-y-0" : "translate-y-[-100%]"
          )}
          style={{ height: '100vh', overflowY: 'auto' }}
        >
          <div className="container mx-auto px-4 py-8 flex flex-col space-y-6 pt-20">
            <div className="flex flex-col space-y-0">
              <NavLinks mobile onClose={() => setMobileMenuOpen(false)} />
            </div>
            <Button className="w-full mt-6" hasArrow>
              <FileDown className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
            <Button className="w-full" variant="outline">
              <Linkedin className="h-4 w-4 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClose?: () => void;
}

const NavLinks = ({ mobile, onClose }: NavLinksProps) => {
  const links = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onClose}
          className={cn(
            "font-medium transition-colors hover:text-primary",
            mobile 
              ? "py-4 text-lg border-b border-gray-100 w-full block" 
              : "text-sm"
          )}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default Header;
