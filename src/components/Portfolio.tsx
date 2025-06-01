
const Portfolio = () => {
  const portfolioItems = [
    { id: 1, category: "Retrato", size: "tall" },
    { id: 2, category: "Paisagem", size: "wide" },
    { id: 3, category: "Arquitetura", size: "square" },
    { id: 4, category: "Street", size: "tall" },
    { id: 5, category: "Natureza", size: "square" },
    { id: 6, category: "Retrato", size: "wide" },
    { id: 7, category: "Conceitual", size: "square" },
    { id: 8, category: "Arquitetura", size: "tall" },
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "tall":
        return "md:row-span-2";
      case "wide":
        return "md:col-span-2";
      case "square":
      default:
        return "";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-thin tracking-wider text-black mb-4">
            PORTFÓLIO
          </h2>
          <p className="text-gray-600 font-light tracking-wide">
            Uma seleção dos meus trabalhos mais recentes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className={`group cursor-pointer ${getSizeClasses(item.size)}`}
            >
              <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 overflow-hidden transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-white text-sm tracking-wider font-light">
                    {item.category.toUpperCase()}
                  </span>
                </div>
                
                {/* Placeholder pattern */}
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M20 20.5V18H18v2.5h-2.5V22H18v2.5h2V22h2.5v-1.5H20zm0-20V-2H18v2.5h-2.5V2H18v2.5h2V2h2.5V.5H20zm20 20v-1.5H38V18h-2v2.5h-2.5V22H38v2.5h2V22h2.5v-1.5H40z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-3 border border-black text-black font-light tracking-wider hover:bg-black hover:text-white transition-all duration-300">
            VER MAIS TRABALHOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
