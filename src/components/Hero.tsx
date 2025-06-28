
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Hero = () => {
  return (
   <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-dark">
  {/* Background pattern */}
  <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-black opacity-50"></div>
  
  <div className="relative z-10 text-center text-brand-gold mb-20">
    <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-thin tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] mb-6 relative">
      <span className="relative inline-block">
        FOCUS
        <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-brand-gold transform origin-left animate-pulse"></div>
      </span>
    </h1>
    
    <p className="text-base sm:text-lg md:text-2xl font-light tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] opacity-80 mb-4">
      FOTOGRAFIA PROFISSIONAL
    </p>
    
    <p className="text-xs sm:text-sm md:text-base font-light tracking-[0.1em] opacity-60">
      Capturando momentos únicos com elegância e simplicidade
    </p>
  </div>

  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
    <div className="w-6 h-10 border-2 border-brand-gold rounded-full flex justify-center">
      <div className="w-1 h-3 bg-brand-gold rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</section>
  );
};

export default Hero;
