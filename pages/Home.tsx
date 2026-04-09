import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import { CONTACT_INFO } from "../constants";
import { mapa_3d_png } from "../images";
import ReviewCarousel from "../components/ReviewCarousel";
import Seo from "../components/Seo";
import { GOOGLE_REVIEWS } from "../data/googleReviews";
import {
  DEFAULT_OG_IMAGE,
  FAQS,
  GOOGLE_RATING,
  GOOGLE_REVIEWS_URL,
  PAGE_SEO,
  SITE_URL,
} from "../site";

const backgroundImages = [
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2000&auto=format&fit=crop",
  "https://cdn.accon.app/177231757792408612313131598781-1080p.jpg",
  "https://cdn.accon.app/17559829709915905722256618262-1080p.jpg",
  "https://cdn.accon.app/175694387447849322064917559616-1080p.jpg",
  "https://cdn.accon.app/17619479684057958457384958615-1080p.jpg",
  "https://cdn.accon.app/1732308522186995552412657682-1080p.jpg",
  "https://cdn.accon.app/176825807788008273633949766901-1080p.jpg",
  "https://cdn.accon.app/176549683023612954786941618912-1080p.jpg",
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2000&auto=format&fit=crop",
  "https://cdn.accon.app/175657546447132539108321492627-1080p.jpg",
  "https://cdn.accon.app/172366903756805280641759351101-1080p.jpg",
  "https://cdn.accon.app/17569438549258563592277819263-1080p.jpg",
  "https://cdn.accon.app/17582000114415149507524875838-1080p.jpg",
  "https://cdn.accon.app/173230979644833203592827361583-1080p.jpg",
  "https://cdn.accon.app/172366881049649254992369708983-1080p.jpg",
  "https://cdn.accon.app/17569438352202959359974154008-1080p.jpg",
  "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=2000&auto=format&fit=crop",
  "https://cdn.accon.app/17327314331102790861658853585-1080p.jpg",
  "https://cdn.accon.app/175796770054806310759284060952-1080p.jpg",
  "https://cdn.accon.app/175694377563643227742378949396-1080p.jpg",
  "https://cdn.accon.app/17582003622756926966285306411-1080p.jpg",
  "https://cdn.accon.app/173273083464717292175078151573-1080p.jpg",
  "https://cdn.accon.app/17692884894766404945613718203-1080p.jpg",
  "https://acconstorage.blob.core.windows.net/acconpictures/202002141430_OWe1_t.jpg",
  "https://cdn.accon.app/173230858371448239885319053166-1080p.jpg",
  "https://cdn.accon.app/17692880420965835370753894868-1080p.jpg",
  "https://cdn.accon.app/17582207711395887193408640323-1080p.jpg",
  "https://cdn.accon.app/17317078579099748096520125185-1080p.jpg",
  "https://cdn.accon.app/17581996721840036268484939494527-1080p.jpg",
  "https://cdn.accon.app/17247916863934051877613460986-1080p.jpg",
  "https://cdn.accon.app/17323086965009039812713166686-1080p.jpg",
];

const highlightBadges = [
  {
    icon: Star,
    title: "4,6 no Google",
    sub: `${GOOGLE_RATING.count.toLocaleString("pt-BR")} avaliações`,
  },
  {
    icon: UtensilsCrossed,
    title: "Rodízio, pizzas e burgers",
    sub: "Sabores para almoço, jantar e momentos especiais",
  },
  {
    icon: MapPin,
    title: "Castelo · Belo Horizonte",
    sub: "Fácil de chegar, pedir e reservar",
  },
  {
    icon: ShieldCheck,
    title: "Ambiente para famílias",
    sub: "Salão amplo, varanda e espaço kids",
  },
];

const featuredProducts = [
  {
    name: "Pizza Gigante 8 Fatias",
    price: "A partir de R$ 84,90",
    img: "https://static.ifood-static.com.br/image/upload/t_high/pratos/e23aa9f7-77de-4596-96fa-686825550bd9/202408081356_FW1Y_i.jpg",
  },
  {
    name: "Strogonoff de Frango",
    price: "A partir de R$ 49,90",
    img: "https://static.ifood-static.com.br/image/upload/t_high/pratos/e23aa9f7-77de-4596-96fa-686825550bd9/202501311646_FIFD_i.jpg",
  },
  {
    name: "Executivo Misto de Carnes",
    price: "A partir de R$ 52,30",
    img: "https://static.ifood-static.com.br/image/upload/t_high/pratos/e23aa9f7-77de-4596-96fa-686825550bd9/202401301040_1AEM_i.jpg",
  },
  {
    name: "Executivo Alcatra na Brasa",
    price: "R$ 59,90",
    img: "https://static.ifood-static.com.br/image/upload/t_high/pratos/e23aa9f7-77de-4596-96fa-686825550bd9/202501311658_A2A4_i.jpg",
  },
];

const galleryItems = [
  {
    img: "/espaco-fachada-1.jpg",
    title: "Entrada e varanda",
    desc: "Fachada convidativa com mesas ao ar livre para aproveitar as noites de BH.",
  },
  {
    img: "/espaco-salao-4.jpg",
    title: "Salão principal",
    desc: "Espaço amplo e climatizado, perfeito para receber grupos com conforto.",
  },
  {
    img: "/espaco-kids-2.jpg",
    title: "Espaço kids",
    desc: "Área de lazer completa para deixar a experiência da família ainda melhor.",
  },
  {
    img: "/espaco-rustico-3.jpg",
    title: "Ambiente acolhedor",
    desc: "Decoração rústica e iluminação quente para encontros com comida boa e boa companhia.",
  },
];

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Preload da próxima imagem para evitar tela preta no momento da transição
    const nextIndex = (currentImageIndex + 1) % backgroundImages.length;
    const img = new window.Image();
    img.src = backgroundImages[nextIndex];
  }, [currentImageIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImageIndex(
        (previous) => (previous + 1) % backgroundImages.length,
      );
    }, 4000);

    return () => window.clearInterval(interval);
  }, []);

  const schemas = useMemo(
    () => [
      {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        name: "Tudo na Brasa",
        image: DEFAULT_OG_IMAGE,
        url: SITE_URL,
        telephone: CONTACT_INFO.phone,
        servesCuisine: ["Churrasco", "Pizza", "Hamburgueria"],
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. dos Engenheiros, 1104",
          addressLocality: "Belo Horizonte",
          addressRegion: "MG",
          addressCountry: "BR",
          postalCode: "30840-300",
        },
        areaServed: "Castelo e região, Belo Horizonte - MG",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "11:30",
            closes: "23:00",
          },
        ],
        sameAs: [
          CONTACT_INFO.instagram,
          CONTACT_INFO.facebook,
          CONTACT_INFO.ifood,
          CONTACT_INFO.googleReviews,
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: GOOGLE_RATING.value,
          reviewCount: GOOGLE_RATING.count,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
    [],
  );

  return (
    <>
      <Seo
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        schema={schemas}
      />

      <div className="pt-18 md:pt-24">
        <section className="relative flex min-h-[68vh] items-start overflow-hidden pb-10 pt-2 md:min-h-[72vh] md:pb-12">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 md:left-[35%] lg:left-[45%]">
              <AnimatePresence>
                <motion.div
                  key={currentImageIndex}
                  className="absolute inset-0 h-full w-full"
                  initial={{ opacity: 0, zIndex: 1 }}
                  animate={{ opacity: 1, zIndex: 1 }}
                  exit={{ opacity: 0.99, zIndex: 0 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  <img
                    src={backgroundImages[currentImageIndex]}
                    alt="Experiência Tudo na Brasa"
                    className="h-full w-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent md:hidden" />
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-[62rem]"
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gold">
                Castelo · Belo Horizonte
              </p>
              <h1 className="mb-4 max-w-[58rem] font-serif text-[2.2rem] font-bold leading-[1.05] tracking-[-0.03em] text-white md:text-[4.1rem] lg:text-[4.55rem]">
                <span className="block">A Autêntica</span>
                <span className="block text-ember italic md:whitespace-nowrap">
                  Churrascaria, Pizzaria e
                </span>
                <span className="block md:whitespace-nowrap">
                  <span className="text-ember italic">Hamburgueria</span> de BH
                </span>
                <span className="block">na sua Casa</span>
              </h1>
              <p className="mb-6 max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">
                Carnes selecionadas, fogo de verdade, pizzas artesanais e
                hambúrgueres suculentos. Peça agora e receba a experiência
                premium no conforto do seu lar.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-xl shadow-green-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1ebd5a] hover:shadow-green-500/40 sm:px-8 sm:py-4 sm:text-lg"
                >
                  <MessageCircle className="h-6 w-6" />
                  Faça um Pedido
                </a>
                <a
                  href={CONTACT_INFO.getin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl bg-ember px-6 py-3.5 text-base font-bold text-white shadow-xl shadow-ember/20 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600 hover:shadow-ember/40 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Garanta sua Reserva
                </a>
                <Link
                  to="/cardapio"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-base font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:px-8 sm:py-4 sm:text-lg"
                >
                  Ver Cardápio
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 sm:gap-x-4 text-xs sm:text-sm text-gray-300">
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2">
                  {CONTACT_INFO.hours}
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2">
                  4,6 no Google
                </span>
                <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2">
                  Castelo · Belo Horizonte
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/5 bg-charcoal py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
            >
              <h2 className="mb-5 font-serif text-4xl font-bold text-white md:text-5xl">
                A Melhor Experiência da Região
              </h2>
              <p className="text-lg text-gray-400">
                Um lugar pensado para reunir boa comida, atendimento atencioso e
                um ambiente agradável para toda a família.
              </p>
            </motion.div>

            <div className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {highlightBadges.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/8 bg-neutral-900/60 p-6"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-charcoal shadow-inner">
                    <item.icon className="h-7 w-7 text-ember" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {item.sub}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
              <motion.a
                href={CONTACT_INFO.maps}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, rotateY: -12, rotateX: 6, scale: 0.96 }}
                whileInView={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
                transition={{ duration: 0.9, type: "spring" }}
                viewport={{ once: true }}
                style={{ perspective: 1000 }}
                className="group relative mx-auto aspect-[5/4] max-h-[31rem] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-800 shadow-2xl shadow-black/40 lg:mx-0"
              >
                <img
                  src={mapa_3d_png}
                  alt="Mapa ilustrado do Tudo na Brasa"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/85 via-[#0a0a0a]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                    Visite o salão
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-white">
                    Av. dos Engenheiros, 1104
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Castelo, Belo Horizonte - MG
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                    Abrir rota no Google Maps
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>

              <div className="grid gap-5">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="rounded-[2rem] border border-white/8 bg-neutral-900/75 p-7"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                    Muito bem avaliado
                  </p>
                  <div className="mt-5 flex items-end gap-4">
                    <span className="font-serif text-6xl font-bold leading-none text-white">
                      4,6
                    </span>
                    <div className="pb-2">
                      <div className="flex items-center gap-1 text-gold">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={`summary-star-${index}`}
                            className={`h-5 w-5 ${index < Math.round(GOOGLE_RATING.value) ? "fill-current" : "fill-transparent text-white/25"}`}
                          />
                        ))}
                      </div>
                      <p className="mt-2 text-sm text-gray-400">
                        {GOOGLE_RATING.label}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-7 text-gray-300">
                    Clientes destacam o atendimento, o rodízio, a qualidade dos
                    pratos e o ambiente acolhedor da casa.
                  </p>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-ember transition hover:text-orange-300"
                  >
                    Ver perfil no Google
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  <div className="rounded-3xl border border-white/8 bg-black/35 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                      Ambiente acolhedor
                    </p>
                    <p className="mt-3 text-lg font-bold text-white">
                      Varanda, salão e espaço kids
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Um espaço pensado para encontros em família, aniversários
                      e refeições com calma.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/8 bg-black/35 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">
                      Sabores para todos os momentos
                    </p>
                    <p className="mt-3 text-lg font-bold text-white">
                      Churrasco, pizzas e burgers
                    </p>
                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      Do almoço ao jantar, com opções para dividir, pedir em
                      casa ou aproveitar no salão.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-black py-12 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                  Avaliações no Google
                </p>
                <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
                  O que os clientes dizem
                </h2>
              </div>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:border-ember/40 hover:bg-white/10"
              >
                Ver todas no Google
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <ReviewCarousel reviews={GOOGLE_REVIEWS} />
          </div>
        </section>

        <section className="relative overflow-hidden bg-black pb-24 pt-12 md:pt-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-10 text-center md:mb-12">
              <h2 className="mb-4 font-serif text-3xl font-bold text-white md:text-5xl">
                Conheça o nosso espaço
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                Um ambiente preparado com carinho para receber você, sua
                família, seus amigos e eventos especiais com muito mais
                conforto.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-900"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-85 transition-opacity group-hover:opacity-95" />
                  <div className="absolute bottom-0 left-0 p-5 md:p-8">
                    <h3 className="mb-2 text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300 md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-neutral-900 py-12 md:py-24">
          <div className="mx-auto mb-16 max-w-7xl px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
              Destaques da casa
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
              Sabores que conquistam
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Uma seleção de pratos que representam bem a experiência do Tudo na
              Brasa.
            </p>
          </div>

          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
              {featuredProducts.map((product) => (
                <article
                  key={product.name}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-0 left-0 p-4 sm:p-8">
                    <h3 className="mb-1 sm:mb-2 text-lg sm:text-2xl font-bold text-white leading-tight">
                      {product.name}
                    </h3>
                    <p className="mb-2 sm:mb-4 text-sm sm:text-lg font-bold text-gold">
                      {product.price}
                    </p>
                    <Link
                      to="/cardapio"
                      className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base font-bold text-white"
                    >
                      Ver no cardápio
                      <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-charcoal py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gold">
                FAQ
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                Tire suas dúvidas
              </h2>
              <p className="mt-4 text-gray-400">
                Confira as informações mais procuradas antes de pedir, reservar
                ou visitar o restaurante.
              </p>
            </div>

            <div className="grid gap-4">
              {FAQS.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-white/8 bg-neutral-900/65 p-6 text-left"
                >
                  <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-white marker:hidden relative">
                    {item.question}
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-base leading-7 text-gray-300">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-black/30 p-6 text-center md:p-10">
              <h3 className="font-serif text-3xl font-bold text-white">
                Faça seu pedido ou reserve sua mesa
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-400">
                Estamos prontos para receber você no salão ou no delivery, com o
                sabor e o cuidado que já fazem parte da casa.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 font-bold text-white transition hover:bg-[#1ebd5a]"
                >
                  <MessageCircle className="h-5 w-5" />
                  Pedir no WhatsApp
                </a>
                <a
                  href={CONTACT_INFO.getin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-ember px-8 py-4 font-bold text-white transition hover:bg-orange-600"
                >
                  Reservar mesa
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
