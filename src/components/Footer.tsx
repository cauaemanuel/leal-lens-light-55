
import { Instagram, MessageCircle, Youtube, Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark py-12 border-t text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-white font-light tracking-wide">
              © 2025 BRENO LEAL. TODOS OS DIREITOS RESERVADOS.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.instagram.com/b.l.focus/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors duration-300"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="https://api.whatsapp.com/send/?phone=558182879530" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white transition-colors duration-300"
            >
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
