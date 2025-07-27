"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "NexTech delivered an exceptional e-commerce platform that exceeded our expectations. The team's expertise and attention to detail resulted in a 300% increase in our online sales within the first quarter.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      position: "CTO, HealthFlow",
      company: "HealthFlow",
      content: "The healthcare management system they built for us has revolutionized our patient care process. The intuitive interface and robust features have significantly improved our operational efficiency.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, FinTech Pro",
      company: "FinTech Pro",
      content: "Working with NexTech was a game-changer for our mobile banking app. Their innovative approach and technical expertise helped us achieve 1M+ downloads in just 6 months.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      position: "Operations Manager, EduTech Solutions",
      company: "EduTech Solutions",
      content: "The learning platform they developed has transformed how we deliver education. The analytics dashboard provides invaluable insights into student performance and engagement.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      position: "Product Manager, SmartHome Co.",
      company: "SmartHome Co.",
      content: "NexTech's IoT solution for our smart home system is nothing short of brilliant. The energy optimization features have helped our customers save 30% on their utility bills.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "Robert Kim",
      position: "Founder, AnalyticsCorp",
      company: "AnalyticsCorp",
      content: "The AI-powered analytics dashboard they created has given us unprecedented insights into our business data. It's like having a crystal ball for business decisions.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-primary/20 hover:border-primary/40 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/60" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.position}
                    </div>
                    <div className="text-xs text-primary">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-primary/20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Would Recommend</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Success Stories
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's create your success story together.
            </p>
            <button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              onClick={() => smoothScrollTo("contact")}
            >
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 