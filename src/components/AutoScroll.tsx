"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const AutoScroll = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('down');
  const lastAutoScrollTime = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isAutoScrolling) return;

      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const heroHeight = windowHeight;
      const statsSection = document.getElementById('stats');
      
      if (!statsSection) return;

      const statsTop = statsSection.offsetTop;
      const statsHeight = statsSection.offsetHeight;
      const currentTime = Date.now();

      // Determine scroll direction
      scrollDirection.current = currentScrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = currentScrollY;

      // Prevent auto-scroll if it was recently triggered
      if (currentTime - lastAutoScrollTime.current < 2000) {
        return;
      }

      // Auto-scroll from Hero to Stats (only when scrolling down)
      if (scrollDirection.current === 'down' && 
          currentScrollY > 150 && 
          currentScrollY < heroHeight * 0.7 &&
          currentScrollY < statsTop - 100) {
        
        setIsAutoScrolling(true);
        lastAutoScrollTime.current = currentTime;
        
        statsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        setTimeout(() => {
          setIsAutoScrolling(false);
        }, 1500);
      }

      // Auto-scroll from Stats to Hero (only when scrolling up)
      if (scrollDirection.current === 'up' && 
          currentScrollY > statsTop && 
          currentScrollY < statsTop + statsHeight * 0.4) {
        
        setIsAutoScrolling(true);
        lastAutoScrollTime.current = currentTime;
        
        document.getElementById('home')?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        setTimeout(() => {
          setIsAutoScrolling(false);
        }, 1500);
      }

      // Show/hide back to top button
      if (currentScrollY > windowHeight * 2) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAutoScrolling]);

  const scrollToTop = () => {
    document.getElementById('home')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      )}
    </>
  );
};

export default AutoScroll; 