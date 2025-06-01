
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-thin tracking-wider text-black mb-8">
          SOBRE
        </h2>
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="text-lg font-light">
            Fotógrafo profissional com mais de uma década de experiência, 
            especializado em capturar momentos únicos através de uma 
            perspectiva minimalista e atemporal.
          </p>
          <p>
            Meu trabalho é caracterizado pela busca constante da essência 
            em cada frame, priorizando a composição, luz natural e 
            narrativas visuais que transcendem o tempo.
          </p>
          <p>
            Colaborei com marcas renomadas e artistas, sempre mantendo 
            uma abordagem autoral que valoriza a simplicidade e 
            elegância em cada projeto.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-300 rounded-sm overflow-hidden">
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
