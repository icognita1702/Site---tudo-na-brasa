
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-charcoal min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Tradição & Brasa</h1>
            <div className="h-1 w-24 bg-ember mx-auto" />
          </div>

          <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200" 
              className="w-full h-full object-cover" 
              alt="Grelha Tudo na Brasa" 
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-white">Nossa Origem</h2>
              <p>
                O "Tudo na Brasa" nasceu em 2005 com o sonho de levar o verdadeiro sabor da parrilla e das pizzas artesanais para o dia a dia de Belo Horizonte. Localizados no coração da Savassi, começamos como um pequeno ponto e evoluímos para uma churrascaria e pizzaria delivery de alto padrão.
              </p>
              <p>
                Acreditamos que o segredo de uma boa refeição está na paciência, no fogo correto (seja na churrasqueira ou no forno a lenha) e, claro, na procedência de cada ingrediente.
              </p>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <h2 className="text-2xl font-bold text-white">O Compromisso</h2>
              <p>
                Nossa equipe de parrilleros e pizzaiolos trabalha apenas com ingredientes selecionados. Cada pedido é preparado no momento da solicitação, garantindo que a suculência das carnes e a crocância das pizzas sejam mantidas até a sua porta.
              </p>
              <div className="bg-neutral-900/50 p-6 rounded-2xl border-l-4 border-gold italic">
                "Não vendemos apenas comida, entregamos um ritual que une famílias e amigos através do fogo."
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
