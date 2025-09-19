"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, MapPin, Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const techStack = [
  "Go",
  "Laravel",
  "React",
  "PostgreSQL",
  "TypeScript",
  "Docker"
];

const codeSnippets = [
  "func main() { fmt.Println(\"Hello, World!\") }",
  "Route::get(&apos;/api/users&apos;, [UserController::class, &apos;index&apos;]);",
  "const developer = &apos;Bravian Nyatoro&apos;;",
  "SELECT * FROM opportunities WHERE status = &apos;open&apos;;",,
  "docker run -p 8080:8080 my-go-app",
  "interface Developer { skills: string[]; }"
];

export default function Hero() {
  const [currentCode, setCurrentCode] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = codeSnippets[currentCode];
    if (!text) return;
    
    let index = 0;
    setTypedText("");
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentCode]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Bravian_Nyatoro_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-background hero-background">
      {/* Floating Shapes Background */}
      <div className="floating-shapes"></div>
      
      {/* Matrix Rain Effect */}
      <div className="matrix-rain">
        <canvas id="matrix-canvas" className="w-full h-full"></canvas>
      </div>

      <div className="container mx-auto px-6 lg:px-12 xl:px-16 pt-32 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-200px)]">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status and Location */}
            <div className="flex flex-wrap items-center gap-3 animate-fade-in">
              <Badge variant="secondary" className="flex items-center gap-2 bg-card border border-teal-400/30">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <MapPin className="w-3 h-3" />
                Kisumu, Kenya
              </Badge>
              <Badge className="bg-golden/10 text-golden border-golden/30 glow-effect">
                Available for hire
              </Badge>
            </div>

            {/* Name and Title */}
            <div className="space-y-6 animate-slide-up">
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight">
                  <span className="gradient-text">Bravian</span>
                  <br />
                  <span className="text-foreground">Nyatoro</span>
                </h1>
                <div className="text-2xl sm:text-3xl font-mono font-medium text-muted-foreground">
                  <span className="text-primary">$</span> System Designer & Full‑stack Developer
                  <span className="terminal-cursor"></span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Designing scalable systems and crafting robust backend solutions with <span className="text-teal-400 font-mono">Go</span> and <span className="text-golden font-mono">Laravel</span>. 
                Architecting the future, one system at a time.
              </p>
            </div>

            {/* Tech Stack with Animation */}
            <div className="space-y-4 animate-slide-up">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-teal-400" />
                <span className="font-mono text-sm text-muted-foreground">stack.technologies</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <Badge 
                    key={tech}
                    variant="outline" 
                    className="magnetic-hover bg-card/50 border-purple-400/20 text-foreground hover:border-teal-400 hover:bg-teal-400/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <Button 
                onClick={handleDownloadResume}
                className="magnetic-hover flex items-center gap-2 bg-gradient-to-r from-teal-400 to-golden text-black hover:from-teal-500 hover:to-yellow-500 px-8 py-6 text-lg font-medium glow-effect shadow-lg"
                size="lg"
              >
                <Download className="w-5 h-5" />
                Download Résumé
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleContactClick}
                className="magnetic-hover flex items-center gap-2 border-magenta/30 text-foreground hover:bg-magenta/10 hover:border-magenta px-8 py-6 text-lg"
                size="lg"
              >
                <Mail className="w-5 h-5" />
                Let&apos;s Connect
              </Button>
            </div>


          </div>

          {/* Right Column - Code Terminal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-purple-400/20 shadow-2xl animate-slide-up">
              <CardContent className="p-0">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 p-4 border-b border-purple-400/20 bg-card/50">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground ml-2">~/bravian-dev</span>
                </div>

                {/* Terminal Content */}
                <div className="p-6 space-y-4 font-mono text-sm bg-card code-block">
                  <div className="space-y-2">
                    <div className="text-muted-foreground">
                      <span className="text-teal-400">bravian@dev</span>
                      <span className="text-golden">:</span>
                      <span className="text-muted-foreground">~$</span>
                      <span className="ml-2">whoami</span>
                    </div>
                    <div className="text-foreground pl-4">System Designer & Full-stack Developer</div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-muted-foreground">
                      <span className="text-teal-400">bravian@dev</span>
                      <span className="text-golden">:</span>
                      <span className="text-muted-foreground">~$</span>
                      <span className="ml-2">cat current_work.go</span>
                    </div>
                    <div className="text-foreground pl-4 min-h-[20px]">
                      {typedText}
                      {isTyping && <span className="text-teal-400 animate-pulse">|</span>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-muted-foreground">
                      <span className="text-teal-400">bravian@dev</span>
                      <span className="text-golden">:</span>
                      <span className="text-muted-foreground">~$</span>
                      <span className="ml-2">ls skills/</span>
                    </div>
                    <div className="text-foreground pl-4 grid grid-cols-2 gap-1 text-xs">
                      <span className="text-teal-400">architecture/</span>
                      <span className="text-golden">backend/</span>
                      <span className="text-magenta">frontend/</span>
                      <span className="text-purple-400">systems/</span>
                    </div>
                  </div>

                  <div className="text-muted-foreground">
                    <span className="text-teal-400">bravian@dev</span>
                    <span className="text-golden">:</span>
                    <span className="text-muted-foreground">~$</span>
                    <span className="ml-2 terminal-cursor"></span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll Indicator
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </div>

      {/* Matrix Effect Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            if (typeof window === 'undefined') return;
            
            const canvas = document.getElementById('matrix-canvas');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            
            function resizeCanvas() {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
            }
            
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            
            const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
            const fontSize = 14;
            const columns = Math.floor(canvas.width / fontSize);
            const drops = Array(columns).fill(0);
            
            function draw() {
              ctx.fillStyle = 'rgba(22, 20, 28, 0.05)';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              
              ctx.fillStyle = '#4FB3B3';
              ctx.font = fontSize + 'px monospace';
              
              for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                  drops[i] = 0;
                }
                drops[i]++;
              }
            }
            
            const intervalId = setInterval(draw, 35);
            
            // Cleanup function
            window.addEventListener('beforeunload', () => {
              clearInterval(intervalId);
            });
          })();
        `
      }} />
    </section>
  );
}