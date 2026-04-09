import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Star,
} from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { Logo } from "./Logo";
import { GOOGLE_RATING } from "../site";

const Footer: React.FC = () => {
  const phoneHref = `tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`;

  return (
    <footer className="border-t border-white/5 bg-charcoal pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 rounded-[2rem] border border-white/8 bg-black/25 p-6 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Logo className="h-16 w-16" />
                <div>
                  <p className="font-serif text-2xl font-bold text-white">
                    Tudo na Brasa
                  </p>
                  <p className="text-sm uppercase tracking-[0.3em] text-gold">
                    Carnes e Pizzas
                  </p>
                </div>
              </div>

              <p className="max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                Churrasco, pizzas artesanais, burgers e um ambiente acolhedor
                para reunir a família no Castelo, em Belo Horizonte.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1ebd5a]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir no WhatsApp
                </a>
                <a
                  href={CONTACT_INFO.getin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ember px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                >
                  Reservar mesa
                </a>
                <a
                  href={CONTACT_INFO.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-ember/40 hover:bg-white/10"
                >
                  <Star className="h-4 w-4 text-gold" />
                  {GOOGLE_RATING.label}
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-white">
                  Acesso rápido
                </h4>
                <div className="grid gap-3 text-sm text-gray-400">
                  <Link to="/cardapio" className="transition hover:text-white">
                    Ver cardápio
                  </Link>
                  <Link to="/sobre" className="transition hover:text-white">
                    Conhecer a casa
                  </Link>
                  <Link to="/contato" className="transition hover:text-white">
                    Contato e reservas
                  </Link>
                  <a
                    href={CONTACT_INFO.ifood}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    Pedir pelo iFood
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-[0.25em] text-white">
                  Contato
                </h4>
                <div className="grid gap-4 text-sm text-gray-400">
                  <a
                    href={CONTACT_INFO.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 transition hover:text-white"
                  >
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                    <span>{CONTACT_INFO.address}</span>
                  </a>

                  <a
                    href={phoneHref}
                    className="flex items-center gap-3 transition hover:text-white"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-ember" />
                    <span>{CONTACT_INFO.phone}</span>
                  </a>

                  <p className="text-sm text-gray-400">{CONTACT_INFO.hours}</p>
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram do Tudo na Brasa"
                    className="flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-neutral-800 text-white transition hover:bg-ember"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href={CONTACT_INFO.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook do Tudo na Brasa"
                    className="flex h-12 w-12 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-neutral-800 text-white transition hover:bg-ember"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/5 pt-8 text-center text-xs text-neutral-500 md:flex-row md:items-center md:justify-between md:text-left">
          <p>
            © {new Date().getFullYear()} Tudo na Brasa. Belo Horizonte, MG.
            Todos os direitos reservados.
          </p>
          <a
            href={CONTACT_INFO.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-neutral-400 transition hover:text-white md:justify-start"
          >
            Abrir rota no Google Maps
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
