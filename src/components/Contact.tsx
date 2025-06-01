
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
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-thin tracking-wider mb-8">
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
                  <p className="font-light">contato@brenoleal.com</p>
                </div>
                <div>
                  <p className="text-sm tracking-wider text-gray-400 mb-1">TELEFONE</p>
                  <p className="font-light">+55 (11) 99999-9999</p>
                </div>
                <div>
                  <p className="text-sm tracking-wider text-gray-400 mb-1">LOCALIZAÇÃO</p>
                  <p className="font-light">São Paulo, Brasil</p>
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
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 font-light tracking-wide"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 font-light tracking-wide"
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
                  className="w-full bg-transparent border-b border-gray-600 py-3 text-white placeholder-gray-400 focus:border-white focus:outline-none transition-colors duration-300 font-light tracking-wide resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full mt-8 py-3 border border-white text-white font-light tracking-wider hover:bg-white hover:text-black transition-all duration-300"
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
