import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  MessageCircle,
  Star,
} from "lucide-react";
import Seo from "../components/Seo";
import { CONTACT_INFO } from "../constants";
import { GOOGLE_RATING, PAGE_SEO } from "../site";

const highlights = [
  {
    title: "Castelo e região",
    text: "Uma localização prática para quem quer almoçar, jantar, reservar ou pedir em casa em Belo Horizonte.",
  },
  {
    title: "Sabores da casa",
    text: "Carnes na brasa, pizzas artesanais, burgers, rodízio e opções para compartilhar com a família.",
  },
  {
    title: "Ambiente acolhedor",
    text: "Varanda, salão confortável e espaço kids para aproveitar com calma em diferentes ocasiões.",
  },
  {
    title: "Atendimento elogiado",
    text: "A casa reúne avaliações positivas de clientes que destacam o serviço, o clima do salão e a qualidade dos pratos.",
  },
];

const About: React.FC = () => {
  return (
    <>
      <Seo
        title={PAGE_SEO.about.title}
        description={PAGE_SEO.about.description}
      />

      <div className="min-h-screen bg-charcoal pt-24 pb-12 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Sobre a casa
              </p>
              <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">
                Brasa, sabor e um ambiente para reunir quem você gosta
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-gray-400">
                O Tudo na Brasa combina churrasco, pizzas artesanais e burgers
                em uma experiência pensada para quem quer comer bem, celebrar
                momentos especiais e aproveitar o melhor do bairro Castelo.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1ebd5a]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir agora
                </a>
                <a
                  href={CONTACT_INFO.getin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  <CalendarDays className="h-4 w-4" />
                  Reservar mesa
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop"
                alt="Ambiente Tudo na Brasa"
                className="h-full w-full object-cover max-h-[18rem] md:max-h-none"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-white/8 bg-black/25 p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                  Tudo na Brasa
                </p>
                <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
                  Uma experiência completa para salão, reservas e delivery
                </h2>
                <p className="text-base leading-7 text-gray-400">
                  Seja para um almoço em família, um jantar especial ou um
                  pedido rápido em casa, a proposta da casa é unir boa comida,
                  ambiente agradável e atendimento que faz o cliente querer
                  voltar.
                </p>

                <div className="rounded-3xl border border-white/8 bg-neutral-900/70 p-6">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-gold" />
                    <p className="font-bold text-white">
                      {GOOGLE_RATING.value.toFixed(1).replace(".", ",")} no
                      Google com {GOOGLE_RATING.count.toLocaleString("pt-BR")}{" "}
                      avaliações
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Um reflexo da experiência de quem já passou pelo salão,
                    provou os pratos e recomendou a casa.
                  </p>
                </div>

                <a
                  href={CONTACT_INFO.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-ember transition hover:text-orange-300"
                >
                  <MapPin className="h-4 w-4" />
                  Ver localização no Maps
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="rounded-3xl border border-white/8 bg-neutral-900/70 p-6"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-400">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
