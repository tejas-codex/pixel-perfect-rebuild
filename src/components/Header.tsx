
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
          Louis Nguyen
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button variant="default" size="sm" hasArrow>
            Let's Talk
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20",
          mobileMenuOpen ? "translate-y-0" : "translate-y-[-100%]"
        )}
      >
        <div className="container mx-auto px-4 py-8 flex flex-col space-y-6">
          <div className="flex flex-col space-y-6 text-xl">
            <NavLinks mobile onClose={() => setMobileMenuOpen(false)} />
          </div>
          <Button className="w-full mt-4" hasArrow>
            Let's Talk
          </Button>
        </div>
      </div>
    </header>
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
            mobile ? "py-2 text-lg" : "text-sm"
          )}
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default Header;
