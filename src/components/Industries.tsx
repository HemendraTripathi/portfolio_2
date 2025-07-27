import { Building2, ShoppingCart, Car, Heart, GraduationCap, Briefcase, Plane, Home } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: <Building2 className="w-8 h-8" />,
      name: "Enterprise",
      description: "Large-scale solutions for corporate organizations",
      projects: "150+ Projects"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      name: "E-commerce",
      description: "Digital commerce and retail solutions",
      projects: "80+ Projects"
    },
    {
      icon: <Car className="w-8 h-8" />,
      name: "Automotive",
      description: "Connected vehicles and mobility solutions",
      projects: "45+ Projects"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      name: "Healthcare",
      description: "Digital health and medical technology",
      projects: "60+ Projects"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      name: "Education",
      description: "EdTech and learning management systems",
      projects: "75+ Projects"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      name: "Finance",
      description: "FinTech and financial services",
      projects: "90+ Projects"
    },
    {
      icon: <Plane className="w-8 h-8" />,
      name: "Travel",
      description: "Tourism and hospitality solutions",
      projects: "40+ Projects"
    },
    {
      icon: <Home className="w-8 h-8" />,
      name: "Real Estate",
      description: "Property management and listings",
      projects: "55+ Projects"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Industries We Serve
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We have successfully delivered solutions across diverse industries, understanding the unique challenges and requirements of each sector.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="group relative p-6 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/40 transition-all duration-300 text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                {industry.icon}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {industry.description}
              </p>
              <div className="text-xs font-semibold text-primary">
                {industry.projects}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Cross-Industry Expertise
            </h3>
            <p className="text-muted-foreground mb-4">
              Our diverse experience across multiple industries allows us to bring innovative solutions and best practices from one sector to another.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                Industry-specific compliance knowledge
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                Proven solutions for sector challenges
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                Regulatory expertise and guidance
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Custom Solutions
            </h3>
            <p className="text-muted-foreground mb-4">
              Every industry has unique requirements. We tailor our solutions to meet the specific needs and challenges of your business sector.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                Sector-specific feature development
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                Integration with industry tools
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                Scalable architecture design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries; 