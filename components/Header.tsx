
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

interface HeaderProps {
  onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cardápio', path: '/cardapio' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Contato', path: '/contato' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <Logo className="w-12 h-12 md:w-14 md:h-14 transition-transform duration-500 group-hover:scale-105 drop-shadow-lg" />
          <div className="flex flex-col justify-center">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white leading-none">
              Tudo na <span className="text-ember">Brasa</span>
            </span>
            <span className="text-gold text-[10px] md:text-xs font-serif italic mt-1 uppercase tracking-[0.2em]">Carnes e Pizzas</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-ember ${
                isActive(link.path) ? 'text-ember' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="https://getinapp.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-ember transition-all duration-300"
          >
            Reservas
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button
            onClick={onCartOpen}
            className="relative p-2 text-gray-400 hover:text-white transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-ember text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-lg">
                {totalItems}
              </span>
            )}
          </button>
          
          <a
            href="https://www.ifood.com.br/delivery/belo-horizonte-mg/tudo-na-brasa-churrascaria-castelo/e23aa9f7-77de-4596-96fa-686825550bd9"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-[#ea1d2c] hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-red-500/20"
          >
            <img src="/ifood-logo.png.png" alt="iFood" referrerPolicy="no-referrer" className="w-5 h-5 object-contain rounded-md" />
            Pedir iFood
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium py-2 ${
                    isActive(link.path) ? 'text-ember' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/cardapio"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-ember text-white text-center py-3 rounded-lg font-bold"
              >
                Peça Agora
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
