
import React from 'react';
import { Instagram, Facebook, MapPin, Clock, Phone, Flame } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Logo className="w-16 h-16" />
              <span className="text-xl font-serif font-bold text-white">Tudo na Brasa</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              O autêntico sabor do churrasco mineiro e pizzas deliciosas, preparados com paixão para chegar quentinho na sua mesa.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-ember transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-ember transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.ifood} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-[#ea1d2c] transition-colors text-white overflow-hidden group">
                <img src="/ifood-logo.png" alt="iFood" className="w-6 h-6 object-contain rounded-md" />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Onde Estamos</h4>
            <div className="flex gap-3 text-gray-400">
              <MapPin className="w-5 h-5 text-ember shrink-0" />
              <p className="text-sm">{CONTACT_INFO.address}</p>
            </div>
            <div className="flex gap-3 text-gray-400">
              <Phone className="w-5 h-5 text-ember shrink-0" />
              <p className="text-sm">{CONTACT_INFO.phone}</p>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Horários</h4>
            <div className="flex gap-3 text-gray-400">
              <Clock className="w-5 h-5 text-ember shrink-0" />
              <p className="text-sm">{CONTACT_INFO.hours}</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Fique por dentro</h4>
            <p className="text-gray-400 text-sm">Receba promoções exclusivas.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Seu email" 
                className="bg-neutral-800 border-none rounded-l-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-ember outline-none"
              />
              <button className="bg-ember text-white px-4 py-2 rounded-r-lg font-bold text-sm">
                OK
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} Tudo na Brasa. Belo Horizonte, MG. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
