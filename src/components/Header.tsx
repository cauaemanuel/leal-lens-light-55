import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-xl font-light tracking-wider text-black">
            FOCUS
          </h1>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-light tracking-wider text-gray-600 hover:text-black transition-colors duration-300"
            >
              SOBRE
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-sm font-light tracking-wider text-gray-600 hover:text-black transition-colors duration-300"
            >
              PORTFÓLIO
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-light tracking-wider text-gray-600 hover:text-black transition-colors duration-300"
            >
              CONTATO
            </button>
          </div>

          <button 
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-light tracking-wider text-gray-600 hover:text-black transition-colors duration-300 text-left"
              >
                SOBRE
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-sm font-light tracking-wider text-gray-600 hover:text-black transition-colors duration-300 text-left"
              >
                PORTFÓLIO
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm font-light tracking-wider text-gray-600 hover:text-black transition-colors duration-300 text-left"
              >
                CONTATO
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
