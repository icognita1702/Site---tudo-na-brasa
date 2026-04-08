
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Award, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTACT_INFO } from '../constants';
import { 
  tripadvisor_bg_png,
  mapa_3d_png
} from '../images';

const backgroundImages = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop", // Carne 1 (Alta Qualidade)
  "https://cdn.accon.app/177231757792408612313131598781-1080p.jpg", // Burger - Dourado
  "https://cdn.accon.app/17559829709915905722256618262-1080p.jpg", // Pizza - Gigantes
  "https://cdn.accon.app/175694387447849322064917559616-1080p.jpg", // Sobremesa - Pudim
  "https://cdn.accon.app/17619479684057958457384958615-1080p.jpg", // Carne 2 (Cardápio)
  "https://cdn.accon.app/1732308522186995552412657682-1080p.jpg", // Burger - Ouro Preto
  "https://cdn.accon.app/176825807788008273633949766901-1080p.jpg", // Pizza - Doce
  "https://cdn.accon.app/176549683023612954786941618912-1080p.jpg", // Sobremesa - Panna Cotta
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop", // Carne 3 (Alta Qualidade)
  "https://cdn.accon.app/175657546447132539108321492627-1080p.jpg", // Burger - Raposão
  "https://cdn.accon.app/172366903756805280641759351101-1080p.jpg", // Pizza - Grandes
  "https://cdn.accon.app/17569438549258563592277819263-1080p.jpg", // Sobremesa - Mousse
  "https://cdn.accon.app/17582000114415149507524875838-1080p.jpg", // Carne 4 (Cardápio - Refeições)
  "https://cdn.accon.app/173230979644833203592827361583-1080p.jpg", // Burger - Serra do Curral
  "https://cdn.accon.app/172366881049649254992369708983-1080p.jpg", // Pizza - Medias
  "https://cdn.accon.app/17569438352202959359974154008-1080p.jpg", // Sobremesa - Serenata
  "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2000&auto=format&fit=crop", // Carne 5 (Alta Qualidade)
  "https://cdn.accon.app/17327314331102790861658853585-1080p.jpg", // Burger - Poços de Caldas
  "https://cdn.accon.app/175796770054806310759284060952-1080p.jpg", // Pizza - Calabresa
  "https://cdn.accon.app/175694377563643227742378949396-1080p.jpg", // Sobremesa - Brownie
  "https://cdn.accon.app/17582003622756926966285306411-1080p.jpg", // Porções e Petiscos
  "https://cdn.accon.app/173273083464717292175078151573-1080p.jpg", // Burger - Tiradentes
  "https://cdn.accon.app/17692884894766404945613718203-1080p.jpg", // Pizza - Marguerita
  "https://acconstorage.blob.core.windows.net/acconpictures/202002141430_OWe1_t.jpg", // Salada 2
  "https://cdn.accon.app/173230858371448239885319053166-1080p.jpg", // Burger - Serra da Canastra
  "https://cdn.accon.app/17692880420965835370753894868-1080p.jpg", // Pizza - Milho e Bacon
  "https://cdn.accon.app/17582207711395887193408640323-1080p.jpg", // Massas e Gratinados
  "https://cdn.accon.app/17317078579099748096520125185-1080p.jpg", // Burger - Beagá
  "https://cdn.accon.app/17581996721840036268484939494527-1080p.jpg", // Caldos
  "https://cdn.accon.app/17247916863934051877613460986-1080p.jpg", // Burger - Combo Tudo na Brasa
  "https://cdn.accon.app/17323086965009039812713166686-1080p.jpg"  // Burger - Ouro Branco
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-end pb-32 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a] pointer-events-none">
          <div className="absolute inset-0 md:left-[35%] lg:left-[45%]">
            <AnimatePresence>
              <motion.div
                key={currentImageIndex}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <img
                  src={backgroundImages[currentImageIndex]}
                  alt="Background"
                  className="w-full h-full object-cover object-center opacity-90"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </AnimatePresence>
            {/* Gradient to blend the left edge of the image into the solid background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
            {/* Bottom gradient for mobile text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent md:hidden" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-[1.1] tracking-tight">
              A Autêntica <span className="text-ember italic">Churrascaria, Pizzaria e Hamburgueria</span> de BH na sua Casa
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light">
              Carnes selecionadas, fogo de verdade, pizzas artesanais e hambúrgueres suculentos. Peça agora e receba a experiência premium no conforto do seu lar.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 flex-wrap">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#1ebd5a] text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-green-500/20 hover:shadow-green-500/40 hover:-translate-y-1"
              >
                <MessageCircle className="w-6 h-6" />
                Faça um Pedido
              </a>
              <a 
                href="https://getinapp.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ember hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-ember/20 hover:shadow-ember/40 hover:-translate-y-1"
              >
                Garanta sua Reserva
              </a>
              <Link 
                to="/cardapio" 
                className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
              >
                Ver Cardápio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Badges */}
      <section className="py-16 bg-neutral-950 border-t border-white/5 relative z-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: "4.7/5 no iFood", sub: "+1000 Avaliações" },
              { icon: Clock, title: "Entrega Ágil", sub: "Rápido e quentinho" },
              { icon: MapPin, title: "Castelo e Região", sub: "Belo Horizonte - MG" },
              { icon: Award, title: "Cortes Premium", sub: "Picanha Uruguaia, Mignon..." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-3"
              >
                <div className="w-14 h-14 bg-charcoal rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
                  <item.icon className="text-ember w-7 h-7" />
                </div>
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Reviews */}
      <section className="py-24 bg-charcoal relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Map with 3D Effect */}
            <motion.div 
              initial={{ opacity: 0, rotateY: -20, rotateX: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
              style={{ perspective: 1000 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl shadow-black/50 transform-gpu bg-neutral-800 flex items-center justify-center">
                <img 
                  src={mapa_3d_png} 
                  alt="Mapa 3D Tudo na Brasa" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent" />

                {/* Address Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                  <p className="text-white font-medium">Av. dos Engenheiros, 1104 - Castelo</p>
                  <p className="text-gray-300 text-sm">Belo Horizonte - MG</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Reviews & TripAdvisor */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                  A Melhor Experiência da Região
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Nossa dedicação em entregar o melhor churrasco e as melhores pizzas de BH é reconhecida por quem mais importa: nossos clientes.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Google Reviews Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-xl transform transition-transform hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-800 font-bold text-lg">Avaliações</span>
                    <svg viewBox="0 0 24 24" className="w-6 h-6 text-blue-500 fill-current"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
                  </div>
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-5xl font-bold text-gray-900 leading-none">4,6</span>
                    <div className="flex text-gold pb-1">
                      {[...Array(4)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      <div className="relative w-5 h-5">
                        <Star className="w-5 h-5 text-gray-300 fill-current absolute" />
                        <div className="absolute inset-0 overflow-hidden w-[60%]">
                          <Star className="w-5 h-5 text-gold fill-current" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">19 mil avaliações</p>
                </motion.div>

                {/* TripAdvisor Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-[#34e0a1] rounded-2xl p-6 shadow-xl transform transition-transform hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none">
                    <img src={tripadvisor_bg_png} alt="" loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-6 h-6 text-black" />
                      <span className="text-black font-bold text-lg">TripAdvisor</span>
                    </div>
                    <h3 className="text-2xl font-black text-black leading-tight mb-2">1º Lugar</h3>
                    <p className="text-black/80 font-medium text-sm">Melhor Churrascaria @tripadvisor</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space / Gallery */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Conheça o Nosso Espaço</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Um ambiente preparado com carinho para receber você, sua família e amigos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                img: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop",
                title: "Entrada e Varanda",
                desc: "Fachada convidativa com mesas ao ar livre para aproveitar as noites de BH."
              },
              {
                img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1000&auto=format&fit=crop",
                title: "Salão Principal",
                desc: "Espaço amplo e climatizado, perfeito para receber grupos com muito conforto."
              },
              {
                img: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1000&auto=format&fit=crop",
                title: "Espaço Kids",
                desc: "Área de lazer completa com fliperamas e brinquedos para a diversão da criançada."
              },
              {
                img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop",
                title: "Ambiente Acolhedor",
                desc: "Decoração rústica e iluminação quente para criar momentos inesquecíveis."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden aspect-[16/9] bg-neutral-900"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Menu Teaser */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Destaques</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Os pratos mais pedidos que nunca saem do forno e da brasa.</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { name: "Pizza Gigante 8 Fatias", price: "A partir de R$ 84,90", img: "https://static.ifood-static.com.br/image/upload/t_high/pratos/e23aa9f7-77de-4596-96fa-686825550bd9/202408081356_FW1Y_i.jpg" },
               { name: "Strogonoff de Frango", price: "A partir de R$ 49,90", img: "https://static.ifood-static.com.br/image/upload/t_high/pratos/e23aa9f7-77de-4596-96fa-686825550bd9/202501311646_FIFD_i.jpg" },
               { name: "Executivo Misto de Carnes", price: "A partir de R$ 52,30", img: "https://static.ifood-static.com.br/image/upload/t_high/pratos/e23aa9f7-77de-4596-96fa-686825550bd9/202401301040_1AEM_i.jpg" },
               { name: "Executivo Alcatra na Brasa", price: "R$ 59,90", img: "https://static.ifood-static.com.br/image/upload/t_high/pratos/e23aa9f7-77de-4596-96fa-686825550bd9/202501311658_A2A4_i.jpg" },
             ].map((prod, idx) => (
               <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/5]">
                  <img src={prod.img} alt={prod.name} loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{prod.name}</h3>
                    <p className="text-gold font-bold text-lg mb-4">{prod.price}</p>
                    <Link to="/cardapio" className="text-white font-bold flex items-center gap-2 group/btn">
                      Pedir Agora <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
