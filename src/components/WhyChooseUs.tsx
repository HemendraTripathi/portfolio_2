import { CheckCircle, Users, Clock, Award, Headphones, Zap } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our team consists of industry veterans with 10+ years of experience in cutting-edge technologies.",
      stat: "50+ Experts"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "We deliver projects on time, every time. Our agile methodology ensures quick turnaround.",
      stat: "2-4 Weeks"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Assured",
      description: "Every project undergoes rigorous testing and quality checks before delivery.",
      stat: "99.9% Uptime"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems run smoothly at all times.",
      stat: "24/7 Available"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We stay ahead of the curve with the latest technologies and industry best practices.",
      stat: "Latest Tech"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients across various industries.",
      stat: "500+ Projects"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="group relative p-6 rounded-2xl border border-primary/20 bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {reason.description}
                  </p>
                  <div className="text-sm font-semibold text-primary">
                    {reason.stat}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-primary/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>

        {/* Testimonial Preview */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-4 italic">
              "NexTech transformed our business with their innovative solutions. The team's expertise and dedication exceeded our expectations."
            </p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">JD</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">John Doe</div>
                <div className="text-sm text-muted-foreground">CEO, TechCorp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 