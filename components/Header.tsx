import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Menu,
  MessageCircle,
  ShoppingCart,
  X,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { CONTACT_INFO } from "../constants";
import { Logo } from "./Logo";

interface HeaderProps {
  onCartOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Cardápio", path: "/cardapio" },
    { name: "Sobre", path: "/sobre" },
    { name: "Contato", path: "/contato" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-[#0a0a0a]/95 shadow-2xl backdrop-blur-xl transition-all duration-300">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-4 bg-gradient-to-b from-transparent via-[#0a0a0a]/80 to-[#0a0a0a]" />

      <div className="relative z-10 mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[5.55rem] lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <Logo className="h-11 w-11 drop-shadow-lg transition-transform duration-500 group-hover:scale-105 md:h-12 md:w-12" />
          <div className="flex flex-col justify-center">
            <span className="font-serif text-lg font-bold leading-none tracking-tight text-white md:text-xl">
              Tudo na <span className="text-ember">Brasa</span>
            </span>
            <span className="mt-1 font-serif text-[9px] italic uppercase tracking-[0.18em] text-gold md:text-[10px]">
              Carnes e Pizzas
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:text-ember ${
                isActive(link.path) ? "text-ember" : "text-gray-400"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href={CONTACT_INFO.getin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold uppercase tracking-widest text-gray-400 transition-all duration-300 hover:text-ember"
          >
            Reservas
          </a>
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          <button
            onClick={onCartOpen}
            aria-label={`Abrir carrinho com ${totalItems} item${totalItems === 1 ? "" : "s"}`}
            className="relative p-2 text-gray-400 transition-colors hover:text-white"
          >
            <ShoppingCart className="h-6 w-6" />
            {totalItems > 0 && (
              <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-ember text-[10px] font-bold text-white shadow-lg">
                {totalItems}
              </span>
            )}
          </button>

          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:scale-105 hover:bg-[#1ebd5a] md:flex"
          >
            <MessageCircle className="h-5 w-5" />
            Pedir no WhatsApp
          </a>

          <button
            type="button"
            className="p-2 text-gray-300 transition-colors hover:text-white lg:hidden"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-white/5 bg-charcoal lg:hidden"
          >
            <div className="flex flex-col gap-3 px-5 py-5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-3 text-lg font-medium ${
                    isActive(link.path) ? "text-ember" : "text-gray-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <a
                href={CONTACT_INFO.getin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-ember py-3.5 font-bold text-white"
              >
                <CalendarDays className="h-5 w-5" />
                Fazer reserva
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 font-bold text-white"
              >
                <MessageCircle className="h-5 w-5" />
                Pedir no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
