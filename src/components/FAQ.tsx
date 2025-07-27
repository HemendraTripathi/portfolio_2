"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer a comprehensive range of digital services including custom software development, mobile app development, web development, AI & machine learning solutions, data analytics, and cybersecurity services. Our team specializes in creating scalable, innovative solutions tailored to your specific business needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. Small projects typically take 2-4 weeks, medium projects 1-3 months, and large enterprise solutions 3-6 months. We follow agile methodologies to ensure timely delivery and regular updates throughout the development process."
    },
    {
      question: "What is your development process?",
      answer: "Our development process follows a proven methodology: Discovery & Planning, Design & Prototyping, Development & Testing, Deployment & Launch, and Ongoing Support. We maintain transparent communication throughout each phase and provide regular updates on progress."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive ongoing support and maintenance services. This includes bug fixes, security updates, performance optimization, feature enhancements, and 24/7 technical support. We also provide hosting and server management services."
    },
    {
      question: "What technologies do you work with?",
      answer: "We work with a wide range of modern technologies including React, Next.js, Vue.js, Angular, Node.js, Python, Java, .NET, MongoDB, PostgreSQL, AWS, Azure, Docker, Kubernetes, and many more. We choose the best technology stack based on your project requirements."
    },
    {
      question: "How do you ensure project quality?",
      answer: "We maintain high quality standards through comprehensive testing strategies, code reviews, automated testing, performance optimization, and security audits. Our team follows industry best practices and maintains detailed documentation throughout the development process."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including fixed-price projects, time and materials, and retainer-based arrangements. Pricing depends on project scope, complexity, and timeline. We provide detailed proposals with transparent pricing breakdowns."
    },
    {
      question: "Do you work with startups and small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. We understand the unique challenges faced by small businesses and startups, and we offer scalable solutions that grow with your business."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get answers to the most common questions about our services and processes.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-primary/20 rounded-lg bg-card/30 backdrop-blur-sm">
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-foreground hover:text-primary transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help. Get in touch with us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                onClick={() => smoothScrollTo("contact")}
              >
                Contact Us
              </button>
              <button 
                className="border border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                onClick={() => smoothScrollTo("contact")}
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 