"use client";

import { useState, useEffect } from "react";
import { TrendingUp, Users, Clock, Award } from "lucide-react";

const Stats = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    satisfaction: 0,
    support: 0,
    experience: 0
  });

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: 500,
      suffix: "+",
      label: "Projects Completed",
      description: "Successfully delivered across various industries"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: 98,
      suffix: "%",
      label: "Client Satisfaction",
      description: "Consistently exceeding expectations"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: 24,
      suffix: "/7",
      label: "Support Available",
      description: "Round-the-clock technical assistance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: 5,
      suffix: "+",
      label: "Years Experience",
      description: "Deep expertise in modern technologies"
    }
  ];

  useEffect(() => {
    const animateCounts = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          projects: Math.floor(500 * progress),
          satisfaction: Math.floor(98 * progress),
          support: Math.floor(24 * progress),
          experience: Math.floor(5 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCounts({
            projects: 500,
            satisfaction: 98,
            support: 24,
            experience: 5
          });
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    // Start animation when component mounts
    const timer = setTimeout(animateCounts, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="stats" className="py-16 bg-gradient-to-b from-background to-purple-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Impact in Numbers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering exceptional results through innovation and dedication
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative p-6 rounded-2xl border border-purple-400/20 bg-card/50 backdrop-blur-sm hover:bg-card/70 hover:border-purple-400/40 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400 mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-purple-500/30 group-hover:to-blue-500/30 group-hover:text-purple-300 transition-all duration-300">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {index === 0 && counts.projects}
                {index === 1 && counts.satisfaction}
                {index === 2 && counts.support}
                {index === 3 && counts.experience}
                {stat.suffix}
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>

              {/* Description */}
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-400/20 text-purple-300 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Trusted by 500+ businesses worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 