
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio = () => {
  const portfolioCategories = [
    {
      id: "pre-wedding",
      title: "PRÉ-WEDDING",
      description: "Momentos íntimos e românticos antes do grande dia",
      images: Array.from({ length: 6 }, (_, i) => ({
        id: i + 1,
        url: `/preWedding%20(${i + 1}).jpeg`,
        alt: `Pré-wedding ${i + 1}`
      }))
    },
    {
      id: "casamento",
      title: "CASAMENTO",
      description: "O dia mais especial eternizado com perfeição",
      images: Array.from({ length: 6 }, (_, i) => ({
        id: i + 7,  // começando no 7
        url: `/casamento%20(${i + 1}).jpeg`,
        alt: `Casamento ${i + 1}`
      }))
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-thin tracking-wider text-brand-gold mb-6">
            PORTFÓLIO
          </h2>
          <p className="text-gray-300 font-light tracking-wide text-lg">
            Uma seleção dos meus trabalhos organizados por categoria
          </p>
        </div>

        <Tabs defaultValue="pre-wedding" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12 bg-brand-black border border-brand-gold gap-2">
            {portfolioCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="text-sm font-light tracking-wider text-brand-gold data-[state=active]:bg-brand-gold data-[state=active]:text-brand-black"
              >
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {portfolioCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-light tracking-wider text-brand-gold mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-300 font-light">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.images.map((image) => (
                  <div
                    key={image.id}
                    className="group cursor-pointer aspect-[3/4] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 overflow-hidden transition-all duration-500 hover:scale-105 border-2 border-brand-gold"
                  >
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-all duration-500"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-brand-gold text-xs tracking-wider font-light">
                          VER DETALHES
                        </span>
                      </div>

                      <img
                        src={image.url}
                        alt={image.alt}
                        className="object-cover w-full h-full"
                      />

                      {/* Placeholder pattern */}
                      <div
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23daa520' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20zm0-20V-2H18v2.5h-2.5V2H18v2.5h2V2h2.5V.5H20zm20 20v-1.5H38V18h-2v2.5h-2.5V22H38v2.5h2V22h2.5v-1.5H40z'/%3E%3C/g%3E%3C/svg%3E")`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-12">
                <button className="px-8 py-3 border border-brand-gold text-brand-gold font-light tracking-wider hover:bg-brand-gold hover:text-brand-black transition-all duration-300">
                  VER GALERIA COMPLETA
                </button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
