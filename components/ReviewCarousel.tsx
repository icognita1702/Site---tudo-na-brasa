import React, { useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { GoogleReview } from "../types";

interface ReviewCarouselProps {
  reviews: GoogleReview[];
}

const truncateReview = (text: string, maxLength = 240) => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}...`;
};

const extractMetaLabel = (meta: string) =>
  meta.replace(/\s*Denunciar.*$/i, "").trim();

const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ active: false, startX: 0, scrollLeft: 0 });

  const slides = useMemo(
    () =>
      reviews.map((review) => ({
        ...review,
        metaLabel: extractMetaLabel(review.meta),
        excerpt: truncateReview(review.review),
      })),
    [reviews],
  );

  const scrollByAmount = (direction: 1 | -1) => {
    if (!trackRef.current) {
      return;
    }

    const amount = Math.max(trackRef.current.clientWidth * 0.85, 320);
    trackRef.current.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  const handlePointerDown: React.PointerEventHandler<HTMLDivElement> = (
    event,
  ) => {
    if (!trackRef.current || event.pointerType === "touch") {
      return;
    }

    dragState.current = {
      active: true,
      startX: event.clientX,
      scrollLeft: trackRef.current.scrollLeft,
    };

    trackRef.current.setPointerCapture(event.pointerId);
  };

  const handlePointerMove: React.PointerEventHandler<HTMLDivElement> = (
    event,
  ) => {
    if (!trackRef.current || !dragState.current.active) {
      return;
    }

    const delta = event.clientX - dragState.current.startX;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - delta;
  };

  const handlePointerUp: React.PointerEventHandler<HTMLDivElement> = (
    event,
  ) => {
    if (!trackRef.current) {
      return;
    }

    dragState.current.active = false;

    if (trackRef.current.hasPointerCapture(event.pointerId)) {
      trackRef.current.releasePointerCapture(event.pointerId);
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByAmount(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByAmount(-1);
    }
  };

  return (
    <div className="relative">
      <div className="absolute right-0 top-[-4.5rem] hidden md:flex items-center gap-3">
        <button
          type="button"
          onClick={() => scrollByAmount(-1)}
          className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white transition hover:border-ember/40 hover:bg-white/10"
          aria-label="Mostrar avaliações anteriores"
        >
          <ChevronLeft className="mx-auto h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByAmount(1)}
          className="h-11 w-11 rounded-full border border-white/10 bg-white/5 text-white transition hover:border-ember/40 hover:bg-white/10"
          aria-label="Mostrar próximas avaliações"
        >
          <ChevronRight className="mx-auto h-5 w-5" />
        </button>
      </div>

      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scroll-smooth focus:outline-none touch-pan-x"
        aria-label="Avaliações de clientes no Google"
      >
        {slides.map((review) => (
          <article
            key={`${review.author}-${review.time}`}
            className="min-w-[86%] snap-start rounded-[2rem] border border-white/8 bg-neutral-900/80 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur md:min-w-[28rem]"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-bold text-white">{review.author}</p>
                <p className="mt-1 text-sm text-gray-400">{review.metaLabel}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
                {review.time}
              </span>
            </div>

            <div className="mb-4 flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={`${review.author}-star-${index}`}
                  className={`h-4 w-4 ${index < review.rating ? "fill-current" : "fill-transparent text-white/20"}`}
                />
              ))}
              <span className="ml-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
                {review.source}
              </span>
            </div>

            <p className="text-base leading-7 text-gray-200">
              {review.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
