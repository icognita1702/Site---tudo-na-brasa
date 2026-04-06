
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import ImageWithFallback from './ImageWithFallback';
import { motion } from 'framer-motion';

interface MenuCardProps {
  product: Product;
}

const MenuCard: React.FC<MenuCardProps> = ({ product }) => {
  const { addItem } = useCart();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-neutral-900/50 rounded-2xl border border-white/5 overflow-hidden hover:border-ember/30 transition-all flex flex-col shadow-lg"
    >
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <ImageWithFallback 
          src={product.image} 
          alt={product.name}
          className="w-full h-full"
        />
        <div className="absolute top-4 right-4 bg-charcoal/80 backdrop-blur px-3 py-1 rounded-full border border-white/10">
          <span className="text-gold font-bold text-sm">R$ {product.price.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-ember transition-colors">
          {product.name}
        </h3>
        <p className={`text-gray-400 text-sm ${isExpanded ? '' : 'line-clamp-2'} mb-1`}>
          {product.description}
        </p>
        {product.description.length > 60 && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-ember text-xs font-medium hover:underline self-start mb-4"
          >
            {isExpanded ? 'Ler menos' : 'Ler mais'}
          </button>
        )}
        
        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">
            {product.category}
          </span>
          <button 
            onClick={() => addItem(product)}
            className="bg-ember/10 hover:bg-ember text-ember hover:text-white p-2.5 rounded-xl transition-all active:scale-90"
            title="Adicionar ao carrinho"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
