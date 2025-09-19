"use client";

import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Linkedin,
  ExternalLink
} from "lucide-react";

export default function ContactForm() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight">
            <span className="gradient-text">Get In</span>
            <span className="text-foreground"> Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground font-mono">
            <span className="text-primary">$</span> contact --method=direct
          </p>
        </div>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Ready to collaborate on your next project? Let's connect!
        </p>
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
        <Button 
          onClick={() => window.open('mailto:nyatorobravian@gmail.com', '_blank')}
          className="w-full sm:w-auto magnetic-hover bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-lg py-8 px-12 glow-effect group"
        >
          <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
          Send me an email
          <ExternalLink className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
        
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => window.open('https://www.linkedin.com/in/bravian-nyatoro-0576021b0/', '_blank')}
          className="w-full sm:w-auto magnetic-hover border-accent/30 text-accent hover:bg-accent/10 font-mono py-8 px-12 glow-effect group"
        >
          <Linkedin className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
          Connect on LinkedIn
          <ExternalLink className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </div>
  );
}