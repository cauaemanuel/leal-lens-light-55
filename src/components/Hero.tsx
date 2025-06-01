
import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Hero = () => {
  const photoCategories = [
    {
      title: "PRÉ-WEDDING",
      images: [
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "ESPORTIVA",
      images: [
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "CASAMENTO",
      images: [
        "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop"
      ]
    },
    {
      title: "LIFESTYLE",
      images: [
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=800&h=600&fit=crop"
      ]
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-50"></div>
      
      <div className="relative z-10 text-center text-black mb-20">
        <h1 className="text-8xl md:text-9xl font-thin tracking-[0.3em] mb-6 relative">
          <span className="relative inline-block">
            FOCUS
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-black transform origin-left animate-pulse"></div>
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-light tracking-[0.2em] opacity-80 mb-4">
          FOTOGRAFIA PROFISSIONAL
        </p>
        <p className="text-sm md:text-base font-light tracking-[0.15em] opacity-60">
          Capturando momentos únicos com elegância e simplicidade
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 space-y-12">
        {photoCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <h3 className="text-center text-sm font-light tracking-[0.3em] text-gray-600 uppercase">
              {category.title}
            </h3>
            
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent className="-ml-2 md:-ml-4">
                {category.images.map((image, imageIndex) => (
                  <CarouselItem key={imageIndex} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="aspect-[4/3] bg-gray-100 rounded-sm overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${category.title} ${imageIndex + 1}`}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-black border-gray-300 hover:bg-gray-100" />
              <CarouselNext className="text-black border-gray-300 hover:bg-gray-100" />
            </Carousel>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-black rounded-full flex justify-center">
          <div className="w-1 h-3 bg-black rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
