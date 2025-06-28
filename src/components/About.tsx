
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
  <h2 className="text-4xl font-thin tracking-wider text-brand-dark mb-8">
    SOBRE
  </h2>
  <div className="space-y-6 text-gray-600 leading-relaxed">
    <p className="text-lg font-light">
      A fotografia entrou na minha vida de forma natural, quase como um chamado. Tudo começou na minha igreja, onde tive o primeiro contato com uma câmera e, desde então, algo dentro de mim despertou. O que era apenas curiosidade se transformou em paixão.
    </p>
    <p>
      Através das lentes, descobri que podia eternizar momentos, sentimentos e histórias — e foi aí que nasceu a FOCUS. Hoje, meu objetivo vai além de tirar boas fotos: quero capturar o que há de mais real em cada instante.
    </p>
    <p>
      Meu trabalho é uma mistura de sensibilidade, arte e técnica, sempre com um olhar atento ao que torna cada momento único. Busco registrar sentimentos, conexões e histórias reais, com um estilo que mistura leveza, autenticidade e um toque criativo.
    </p>
  </div>
</div>

      <div className="relative">
        <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-300 rounded-sm overflow-hidden border-2 border-brand-gold">
          <img 
            src="/IMG_4179.JPEG" 
            alt="Retrato" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;
