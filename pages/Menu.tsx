import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, MessageCircle } from "lucide-react";
import MenuCard from "../components/MenuCard";
import Seo from "../components/Seo";
import { CONTACT_INFO, MENU_CATEGORIES, PRODUCTS } from "../constants";
import { PAGE_SEO } from "../site";

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = useMemo(
    () =>
      activeCategory === "all"
        ? PRODUCTS
        : PRODUCTS.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <Seo
        title={PAGE_SEO.menu.title}
        description={PAGE_SEO.menu.description}
      />

      <div className="min-h-screen bg-charcoal pt-24 pb-12 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 rounded-[2rem] border border-white/8 bg-black/25 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                  Cardápio
                </p>
                <h1 className="mt-4 font-serif text-4xl font-bold text-white md:text-6xl">
                  Sabores para todos os momentos
                </h1>
                <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-400">
                  Carnes na brasa, pizzas artesanais, hambúrgueres, executivos,
                  porções, sobremesas e bebidas para aproveitar no salão ou
                  pedir em casa.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:justify-end">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white transition hover:bg-[#1ebd5a]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Pedir no WhatsApp
                </a>
                <a
                  href={CONTACT_INFO.getin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-ember px-6 py-4 font-bold text-white transition hover:bg-orange-600"
                >
                  <CalendarDays className="h-5 w-5" />
                  Reservar mesa
                </a>
              </div>
            </div>
          </div>

          {/* Filter categories - horizontal scroll em mobile */}
          <div className="mb-12 flex snap-x snap-mandatory overflow-x-auto pb-4 scrollbar-hide md:flex-wrap md:justify-center md:overflow-visible relative -mx-4 px-4 md:mx-0 md:px-0">
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex-none snap-start whitespace-nowrap rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold transition-all mr-2 md:mr-0 md:mb-3 ${
                activeCategory === "all"
                  ? "bg-ember text-white shadow-lg shadow-ember/20"
                  : "border border-white/5 bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              Todos
            </button>

            {MENU_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-none snap-start whitespace-nowrap rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold transition-all mr-2 md:mr-0 md:mb-3 ${
                  activeCategory === category.id
                    ? "bg-ember text-white shadow-lg shadow-ember/20"
                    : "border border-white/5 bg-white/5 text-gray-400 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-5 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredProducts.map((product) => (
                <MenuCard key={product.id} product={product} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-500">
                Nenhum prato encontrado nesta categoria.
              </p>
            </div>
          )}

          <div className="mt-16 rounded-[2rem] border border-white/8 bg-neutral-900/70 p-8 text-center md:p-10">
            <h2 className="font-serif text-3xl font-bold text-white">
              Escolheu o prato?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Monte o pedido no carrinho ou fale com a equipe para finalizar
              pelo WhatsApp.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 font-bold text-white transition hover:bg-[#1ebd5a]"
              >
                <MessageCircle className="h-5 w-5" />
                Fazer pedido
              </a>
              <a
                href={CONTACT_INFO.ifood}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Ver no iFood
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
