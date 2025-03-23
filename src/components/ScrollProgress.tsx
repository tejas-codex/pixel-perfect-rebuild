
import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="h-48 w-1 bg-gray-200 rounded relative">
        <div
          className="absolute left-0 bottom-0 w-full bg-primary rounded transition-all duration-150"
          style={{ height: `${scrollProgress}%` }}
        ></div>
      </div>
      <div className="mt-2 text-xs text-center font-medium text-muted-foreground">
        {Math.round(scrollProgress)}%
      </div>
    </div>
  );
};

export default ScrollProgress;
