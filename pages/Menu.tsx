
import React, { useState } from 'react';
import { PRODUCTS, MENU_CATEGORIES } from '../constants';
import MenuCard from '../components/MenuCard';
import { motion, AnimatePresence } from 'framer-motion';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-28 pb-24 bg-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Nosso Cardápio</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Uma seleção rigorosa dos melhores cortes e pizzas artesanais, preparados com a tradição do autêntico churrasco mineiro.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
              activeCategory === 'all' 
              ? 'bg-ember text-white shadow-lg shadow-ember/20' 
              : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            Todos
          </button>
          {MENU_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat.id 
                ? 'bg-ember text-white shadow-lg shadow-ember/20' 
                : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map(product => (
              <MenuCard key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">Nenhum prato encontrado nesta categoria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
