"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function WhyMorlaStoreSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="why-morla-store" className="min-h-screen bg-background flex items-center justify-center pb-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Single powerful image */}
        <div className={`mb-16 transition-all duration-1500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/52fca467e4b01593fa50b10c/1533488718047-45021AU8Q1SVEOP63UK4/garderob-hero.jpg"
              alt="Morla Store menswear collection"
              fill
              className="object-cover"
              style={{ filter: 'contrast(1.2) brightness(0.9)' }}
            />
          </div>
        </div>

        {/* Minimal typography */}
        <div className={`space-y-8 transition-all duration-1500 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter">
            EXCEPTIONAL
            <br />
            SIMPLICITY
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            In a world of excess, we choose essential. 
            Each piece is meticulously crafted for the modern gentleman 
            who values quality over quantity.
          </p>

          <div className="pt-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-12 py-6 text-base border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-500"
            >
              EXPERIENCE MORE
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Three subtle values */}
        <div className={`grid grid-cols-3 gap-12 mt-24 transition-all duration-1500 delay-600 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div>
            <div className="text-2xl font-black mb-2">01</div>
            <p className="text-sm text-muted-foreground">QUALITY</p>
          </div>
          <div>
            <div className="text-2xl font-black mb-2">02</div>
            <p className="text-sm text-muted-foreground">TIMELESS</p>
          </div>
          <div>
            <div className="text-2xl font-black mb-2">03</div>
            <p className="text-sm text-muted-foreground">EXCLUSIVE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
