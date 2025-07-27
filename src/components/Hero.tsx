"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float shadow-2xl shadow-purple-500/20" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/25 to-cyan-500/25 rounded-full blur-3xl animate-float-delayed shadow-2xl shadow-blue-500/20" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-teal-500/20 to-emerald-500/20 rounded-full blur-3xl animate-float-slow shadow-2xl shadow-teal-500/20" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-float-reverse shadow-2xl shadow-violet-500/20" />
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-32 w-24 h-24 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-lg rotate-45 animate-float-slow shadow-lg shadow-purple-400/30" />
        <div className="absolute bottom-32 left-1/3 w-16 h-16 bg-gradient-to-r from-blue-400/35 to-cyan-400/35 rounded-full animate-float-delayed shadow-lg shadow-blue-400/30" />
        <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-r from-teal-400/30 to-emerald-400/30 transform rotate-12 animate-float shadow-lg shadow-teal-400/30" />
        
        {/* Floating lines/particles */}
        <div className="absolute top-40 left-1/2 w-1 h-32 bg-gradient-to-b from-purple-400/50 to-transparent animate-float-slow" />
        <div className="absolute bottom-40 right-1/3 w-1 h-24 bg-gradient-to-b from-blue-400/40 to-transparent animate-float-delayed" />
        <div className="absolute top-1/3 left-1/4 w-1 h-20 bg-gradient-to-b from-teal-400/35 to-transparent animate-float" />
        
        {/* Small floating dots */}
        <div className="absolute top-24 left-1/3 w-2 h-2 bg-purple-400/70 rounded-full animate-float shadow-sm shadow-purple-400/50" />
        <div className="absolute bottom-24 right-1/4 w-1.5 h-1.5 bg-blue-400/60 rounded-full animate-float-delayed shadow-sm shadow-blue-400/50" />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-teal-400/50 rounded-full animate-float-slow shadow-sm shadow-teal-400/50" />
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-violet-400/55 rounded-full animate-float-reverse shadow-sm shadow-violet-400/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 text-purple-300 mb-8 backdrop-blur-sm mt-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Next-Generation Solutions</span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
            <span className="animate-gradient">
              Transform Your
            </span>
            <br />
            <span className="animate-gradient-slow">
              Digital Future
            </span> 
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            We craft cutting-edge digital solutions that propel businesses into the future. 
            From AI-powered applications to seamless user experiences, we turn your vision into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-lg shadow-purple-500/25 transition-all duration-300"
              onClick={() => smoothScrollTo("contact")}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg backdrop-blur-sm transition-all duration-300"
              onClick={() => smoothScrollTo("portfolio")}
            >
              View Our Work
            </Button>
          </div>


        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => smoothScrollTo("services")}
          className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center relative group cursor-pointer hover:border-purple-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
        >
          <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2 animate-pulse shadow-sm shadow-purple-400/50" />
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Scroll Down
          </div>
        </button>
      </div> */}
    </section>
  );
};

export default Hero; 