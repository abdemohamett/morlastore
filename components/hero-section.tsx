"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Set loaded state after a brief delay to ensure proper mounting
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Dynamic background with parallax */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1920&h=1080&fit=crop&crop=entropy&auto=format"
            alt="Morla Store menswear collection"
            fill
            className={`object-cover transition-all duration-3000 ease-in-out ${
              isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}
            priority
            style={{ filter: 'contrast(1.2) saturate(0.8) brightness(0.4)' }}
          />
        </div>
        
        {/* Aggressive gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black/60" />
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/80" />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/30 to-black/70" />
      </div>

      {/* Floating text elements */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className={`absolute top-20 right-20 transition-all duration-2000 delay-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <div className="text-white/20 text-xs font-black tracking-widest transform rotate-90">MORLA STORE</div>
        </div>
        
        <div className={`absolute bottom-32 left-20 transition-all duration-2000 delay-1500 ${
          isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <div className="text-white/20 text-xs font-black tracking-widest">EST 2024</div>
        </div>
      </div>

      {/* Main content - dramatic positioning */}
      <div className={`relative z-10 h-full flex items-center justify-center transition-all duration-2000 delay-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="text-center px-6 max-w-6xl mx-auto">
          {/* Dramatic headline */}
          <div className="space-y-4 mb-12">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-none tracking-tighter">
              MORLA
              <br />
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/60 font-light tracking-widest mt-2">
                STORE
              </span>
            </h1>
          </div>

          {/* Minimal subtext */}
          <p className="text-sm md:text-base text-white/40 tracking-widest mb-16 font-light">
            PREMIUM MENSWEAR • MODERN LUXURY • TIMELESS DESIGN
          </p>

          {/* Dramatic CTA */}
          <div className="flex flex-col items-center gap-6">
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-sm px-12 py-6 font-black tracking-widest rounded-none transition-all duration-500 hover:scale-105 uppercase"
            >
              ENTER STORE
              <ArrowRight className="ml-3 h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-8 text-white/20 text-xs font-light">
              <span>NEW ARRIVALS</span>
              <span>•</span>
              <span>COLLECTION 2024</span>
              <span>•</span>
              <span>EXCLUSIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation hint */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-1000 delay-2000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-8 bg-white/20"></div>
          <div className="w-1 h-1 bg-white/40"></div>
        </div>
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 z-30 pointer-events-none opacity-20">
        <div className="w-full h-full bg-noise"></div>
      </div>
    </section>
  );
}
