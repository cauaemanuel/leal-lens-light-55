
import { Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-12 border-t border-brand-gold">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-brand-gold font-light tracking-wide">
              © 2025 BRENO LEAL. TODOS OS DIREITOS RESERVADOS.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-white transition-colors duration-300"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-gold hover:text-white transition-colors duration-300"
            >
              <Youtube size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
