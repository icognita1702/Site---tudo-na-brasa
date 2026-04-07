
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pb-24 pt-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000" 
            alt="BBQ" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="px-4 py-1.5 bg-ember/10 border border-ember/20 text-ember rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-ember/5">
                Churrascaria & Pizzaria #1 de BH
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight">
              A Autêntica <span className="text-ember italic">Churrascaria e Pizzaria</span> de BH na sua Casa
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed font-light">
              Carnes selecionadas, fogo de verdade e pizzas artesanais. Peça agora e receba a experiência premium no conforto do seu lar.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 flex-wrap">
              <a 
                href="https://www.ifood.com.br/delivery/belo-horizonte-mg/tudo-na-brasa-churrascaria-castelo/e23aa9f7-77de-4596-96fa-686825550bd9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ea1d2c] hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-1"
              >
                <img src="/ifood-logo.png" alt="iFood" referrerPolicy="no-referrer" className="w-6 h-6 object-contain rounded-md" />
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
                  src="/mapa-3d.png" 
                  alt="Localização" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-[400px] object-cover opacity-90"
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
                    <img src="/tripadvisor-bg.png" alt="" loading="lazy" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
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
                img: "/espaco-fachada.png.webp",
                title: "Entrada e Varanda",
                desc: "Fachada convidativa com mesas ao ar livre para aproveitar as noites de BH."
              },
              {
                img: "/espaco-salao.png.jpg",
                title: "Salão Principal",
                desc: "Espaço amplo e climatizado, perfeito para receber grupos com muito conforto."
              },
              {
                img: "/espaco-kids.png.jpg",
                title: "Espaço Kids",
                desc: "Área de lazer completa com fliperamas e brinquedos para a diversão da criançada."
              },
              {
                img: "/espaco-rustico.png.jpg",
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
                  referrerPolicy="no-referrer"
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
