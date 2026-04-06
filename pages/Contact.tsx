
import React from 'react';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">Fale Conosco</h1>
          <p className="text-gray-400">Dúvidas, sugestões ou pedidos especiais? Estamos aqui.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900 border border-white/5 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 bg-ember/20 rounded-2xl flex items-center justify-center">
                <MapPin className="text-ember w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg">Visite-nos</h3>
              <p className="text-gray-400 text-sm">{CONTACT_INFO.address}</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900 border border-white/5 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 bg-ember/20 rounded-2xl flex items-center justify-center">
                <Phone className="text-ember w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg">Ligue</h3>
              <p className="text-gray-400 text-sm">{CONTACT_INFO.phone}</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900 border border-white/5 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 bg-ember/20 rounded-2xl flex items-center justify-center">
                <Clock className="text-ember w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg">Horários</h3>
              <p className="text-gray-400 text-sm">{CONTACT_INFO.hours}</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-neutral-900 border border-white/5 p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 bg-ember/20 rounded-2xl flex items-center justify-center">
                <MessageSquare className="text-ember w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg">WhatsApp</h3>
              <p className="text-gray-400 text-sm">Respostas rápidas em horário comercial.</p>
            </motion.div>
          </div>

          {/* Form */}
          <div className="bg-neutral-900 p-8 rounded-3xl border border-white/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nome</label>
                  <input type="text" className="w-full bg-charcoal border-none rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-ember outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-charcoal border-none rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-ember outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Assunto</label>
                <select className="w-full bg-charcoal border-none rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-ember outline-none">
                  <option>Dúvida sobre o cardápio</option>
                  <option>Sugestão</option>
                  <option>Evento Privado</option>
                  <option>Outros</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                <textarea rows={4} className="w-full bg-charcoal border-none rounded-xl px-4 py-3 text-white focus:ring-1 focus:ring-ember outline-none resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-ember hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-ember/20">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
