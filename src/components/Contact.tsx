
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-brand-dark text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-thin tracking-wider text-brand-gold mb-8">
              CONTATO
            </h2>
            <div className="space-y-6">
              <p className="text-gray-300 font-light leading-relaxed">
                Interessado em uma colaboração? Entre em contato para 
                discutirmos seu projeto fotográfico.
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm tracking-wider text-gray-400 mb-1">EMAIL</p>
                  <p className="font-light text-brand-gold">brenoleal048@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm tracking-wider text-gray-400 mb-1">TELEFONE</p>
                  <p className="font-light text-brand-gold">+55 (81) 98287-9530</p>
                </div>
                <div>
                  <p className="text-sm tracking-wider text-gray-400 mb-1">LOCALIZAÇÃO</p>
                  <p className="font-light text-brand-gold">Paulista, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="NOME"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-brand-gold focus:outline-none transition-colors duration-300 font-light tracking-wide"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="request"
                  placeholder="O QUE DESEJA?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-brand-gold focus:outline-none transition-colors duration-300 font-light tracking-wide"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="MENSAGEM"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-brand-gold focus:outline-none transition-colors duration-300 font-light tracking-wide resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full mt-8 py-3 border border-brand-gold text-brand-gold font-light tracking-wider hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
