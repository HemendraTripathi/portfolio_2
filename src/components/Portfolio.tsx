"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern, scalable e-commerce solution with AI-powered recommendations and seamless payment integration.",
      image: "/api/placeholder/400/250",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      results: "300% increase in sales",
      link: "#",
      github: "#"
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive healthcare platform for patient management, appointment scheduling, and medical records.",
      image: "/api/placeholder/400/250",
      category: "Healthcare",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker"],
      results: "50% reduction in admin time",
      link: "#",
      github: "#"
    },
    {
      title: "FinTech Mobile App",
      description: "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      image: "/api/placeholder/400/250",
      category: "Finance",
      technologies: ["React Native", "Firebase", "AWS", "Stripe"],
      results: "1M+ downloads",
      link: "#",
      github: "#"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence platform with machine learning insights and predictive analytics.",
      image: "/api/placeholder/400/250",
      category: "Analytics",
      technologies: ["Next.js", "Python", "TensorFlow", "Redis"],
      results: "40% improvement in decision making",
      link: "#",
      github: "#"
    },
    {
      title: "Educational Learning Platform",
      description: "Interactive online learning system with video streaming, assessments, and progress tracking.",
      image: "/api/placeholder/400/250",
      category: "Education",
      technologies: ["Angular", "Node.js", "MongoDB", "AWS S3"],
      results: "10K+ active students",
      link: "#",
      github: "#"
    },
    {
      title: "IoT Smart Home System",
      description: "Connected home automation platform with device management and energy optimization.",
      image: "/api/placeholder/400/250",
      category: "IoT",
      technologies: ["React", "Python", "MQTT", "Raspberry Pi"],
      results: "30% energy savings",
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects and see how we&apos;ve helped businesses transform their digital presence.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-card/50 backdrop-blur-sm overflow-hidden">
              {/* Project Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary/10 border-b border-primary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary/30">Project {index + 1}</div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Results */}
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-semibold text-primary">
                    🎯 {project.results}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-200 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </button>
                  <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors duration-200 text-sm">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your digital goals and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                onClick={() => smoothScrollTo("contact")}
              >
                Start Your Project
              </button>
              <button 
                className="border border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                onClick={() => smoothScrollTo("portfolio")}
              >
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 