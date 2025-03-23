
import React, { useEffect, useState } from "react";
import { Heart, Share2, MessageCircle } from "lucide-react";

const ShareButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [claps, setClaps] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show after hero section
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      setIsVisible(scrollTop > window.innerHeight * 0.7);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClap = () => {
    setClaps(prev => prev + 1);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed left-4 bottom-1/3 z-40 hidden lg:flex flex-col gap-4 animate-fade-in-left">
      <button 
        className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-secondary transition-colors relative group"
        onClick={handleClap}
        aria-label="Clap"
      >
        <Heart className="h-4 w-4 text-primary" />
        {claps > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {claps}
          </span>
        )}
        <span className="absolute left-12 bg-white px-2 py-1 rounded shadow-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Appreciate
        </span>
      </button>
      
      <button 
        className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-secondary transition-colors relative group"
        aria-label="Share"
      >
        <Share2 className="h-4 w-4 text-primary" />
        <span className="absolute left-12 bg-white px-2 py-1 rounded shadow-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Share
        </span>
      </button>
      
      <button 
        className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-secondary transition-colors relative group"
        aria-label="Comment"
      >
        <MessageCircle className="h-4 w-4 text-primary" />
        <span className="absolute left-12 bg-white px-2 py-1 rounded shadow-sm text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Comment
        </span>
      </button>
    </div>
  );
};

export default ShareButtons;
