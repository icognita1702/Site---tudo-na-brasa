import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { CONTACT_INFO } from "../constants";
import Seo from "../components/Seo";
import { PAGE_SEO } from "../site";

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "Dúvida sobre o cardápio",
    message: "",
  });

  const phoneHref = useMemo(
    () => `tel:${CONTACT_INFO.phone.replace(/[^\d+]/g, "")}`,
    [],
  );

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const whatsappMessage = [
      "Olá! Vim pelo site do Tudo na Brasa.",
      "",
      `Nome: ${form.name || "Não informado"}`,
      `Telefone: ${form.phone || "Não informado"}`,
      `Assunto: ${form.subject}`,
      "Mensagem:",
      form.message || "Quero mais informações.",
    ].join("\n");

    window.open(
      `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
    );
  };

  return (
    <>
      <Seo
        title={PAGE_SEO.contact.title}
        description={PAGE_SEO.contact.description}
      />

      <div className="min-h-screen bg-charcoal pt-24 pb-12 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-14 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Contato e reservas
              </p>
              <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">
                Fale com a equipe e combine sua visita ou seu pedido
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-gray-400">
                Tire dúvidas, reserve sua mesa, peça informações sobre o
                cardápio ou abra a rota para chegar ao restaurante.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-4 font-bold text-white transition hover:bg-[#1ebd5a]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chamar no WhatsApp
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
                <a
                  href={CONTACT_INFO.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  <MapPin className="h-5 w-5" />
                  Abrir no Maps
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid gap-5 sm:grid-cols-2"
            >
              <a
                href={CONTACT_INFO.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-white/5 bg-neutral-900 p-8 transition hover:border-ember/30 hover:bg-neutral-900/90"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/20">
                  <MapPin className="h-6 w-6 text-ember" />
                </div>
                <h3 className="text-lg font-bold text-white">Endereço</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {CONTACT_INFO.address}
                </p>
              </a>

              <a
                href={phoneHref}
                className="rounded-3xl border border-white/5 bg-neutral-900 p-8 transition hover:border-ember/30 hover:bg-neutral-900/90"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/20">
                  <Phone className="h-6 w-6 text-ember" />
                </div>
                <h3 className="text-lg font-bold text-white">Telefone</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {CONTACT_INFO.phone}
                </p>
              </a>

              <div className="rounded-3xl border border-white/5 bg-neutral-900 p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/20">
                  <Clock className="h-6 w-6 text-ember" />
                </div>
                <h3 className="text-lg font-bold text-white">Horários</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {CONTACT_INFO.hours}
                </p>
              </div>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-3xl border border-white/5 bg-neutral-900 p-8 transition hover:border-ember/30 hover:bg-neutral-900/90"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/20">
                  <MessageCircle className="h-6 w-6 text-ember" />
                </div>
                <h3 className="text-lg font-bold text-white">WhatsApp</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">
                  Atendimento direto para pedidos, reservas e informações.
                </p>
              </a>
            </motion.div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/8 bg-black/25 p-8 md:p-10"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                Como podemos ajudar
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white">
                Fale do seu jeito
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-400">
                Se preferir, preencha sua mensagem e a conversa já abre no
                WhatsApp com as informações principais.
              </p>

              <div className="mt-8 grid gap-4 text-sm text-gray-400">
                <div className="rounded-2xl border border-white/8 bg-neutral-900/70 p-5">
                  <p className="font-bold text-white">Pedido</p>
                  <p className="mt-2 leading-6">
                    Tire dúvidas sobre pratos, entrega, retirada ou faça seu
                    pedido com mais facilidade.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-neutral-900/70 p-5">
                  <p className="font-bold text-white">Reserva</p>
                  <p className="mt-2 leading-6">
                    Ideal para reunir a família, comemorar datas especiais ou
                    garantir sua mesa.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/8 bg-neutral-900/70 p-5">
                  <p className="font-bold text-white">Localização</p>
                  <p className="mt-2 leading-6">
                    Veja o endereço, abra a rota no Google Maps e encontre o
                    caminho mais rápido.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/8 bg-neutral-900 p-8 md:p-10"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-400">
                      Nome
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(event) =>
                        handleChange("name", event.target.value)
                      }
                      className="w-full rounded-xl bg-charcoal px-4 py-3 text-base sm:text-white outline-none ring-1 ring-transparent transition focus:ring-ember"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-400">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(event) =>
                        handleChange("phone", event.target.value)
                      }
                      className="w-full rounded-xl bg-charcoal px-4 py-3 text-base sm:text-white outline-none ring-1 ring-transparent transition focus:ring-ember"
                      placeholder="(31) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Assunto
                  </label>
                  <select
                    value={form.subject}
                    onChange={(event) =>
                      handleChange("subject", event.target.value)
                    }
                    className="w-full rounded-xl bg-charcoal px-4 py-3 text-base sm:text-white outline-none ring-1 ring-transparent transition focus:ring-ember"
                  >
                    <option>Dúvida sobre o cardápio</option>
                    <option>Reserva de mesa</option>
                    <option>Comemoração ou grupo</option>
                    <option>Pedido delivery</option>
                    <option>Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-400">
                    Mensagem
                  </label>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      handleChange("message", event.target.value)
                    }
                    className="w-full resize-none rounded-xl bg-charcoal px-4 py-3 text-base sm:text-white outline-none ring-1 ring-transparent transition focus:ring-ember"
                    placeholder="Conte rapidamente o que você precisa."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-ember py-4 font-bold text-white shadow-lg shadow-ember/20 transition hover:bg-orange-600"
                >
                  Enviar para o WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
