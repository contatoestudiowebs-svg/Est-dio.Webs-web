import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Film, BookOpen, Calendar, Sparkles } from 'lucide-react';
import { PRODUCTIONS_DATA } from '../data/productions';
import { WebProduction, ProductionStatus } from '../types';
import { useProductionCover } from '../utils/imageManager';

interface FeaturedProgrammingCarouselProps {
  onNavigate: (path: string) => void;
}

// Ordered list of 8 requested featured productions:
// 1. Amores Feridos (destaque: estreia 11 de janeiro)
// 2. Rasga Mortalha 2
// 3. Caminho ao Poder
// 4. Cold Case Brasil
// 5. Um Novo Rei 2
// 6. 451
// 7. Sócio do Amor
// 8. Terra de Bravos
const FEATURED_SLUGS = [
  'amores-feridos',
  'rasga-mortalha-2',
  'caminho-ao-poder',
  'cold-case-brasil',
  'um-novo-rei-2',
  '451',
  'socio-do-amor',
  'terra-de-bravos',
];

interface ProductionCardItemProps {
  production: WebProduction;
  diff: number; // -2 (far left), -1 (mid left), 0 (center), 1 (mid right), 2 (far right)
  isCenter: boolean;
  onSelect: () => void;
  onNavigate: (path: string) => void;
}

function ProductionCardItem({
  production,
  diff,
  isCenter,
  onSelect,
  onNavigate,
}: ProductionCardItemProps) {
  const coverUrl = useProductionCover(production.slug, production.coverImage);
  const [imgError, setImgError] = useState(false);
  const isAmoresFeridos = production.slug === 'amores-feridos';
  const isSerie = production.category === 'Web série';

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isCenter) {
      onNavigate(`/webs/${production.slug}`);
    } else {
      onSelect();
    }
  };

  // 5-Slot Responsive Positioning
  // diff: -2 (far left peek), -1 (left), 0 (center focus), 1 (right), 2 (far right peek)
  const getSlotClasses = () => {
    switch (diff) {
      case 0:
        return 'z-30 left-1/2 -translate-x-1/2 scale-100 opacity-100 shadow-2xl shadow-black/90 ring-1 ring-white/20';
      case -1:
        return 'z-20 left-1/2 -translate-x-[calc(50%+160px)] sm:-translate-x-[calc(50%+210px)] md:-translate-x-[calc(50%+230px)] lg:-translate-x-[calc(50%+280px)] scale-[0.82] sm:scale-[0.85] lg:scale-[0.87] opacity-75 hover:opacity-95 shadow-xl cursor-pointer';
      case 1:
        return 'z-20 left-1/2 translate-x-[calc(-50%+160px)] sm:translate-x-[calc(-50%+210px)] md:translate-x-[calc(-50%+230px)] lg:translate-x-[calc(-50%+280px)] scale-[0.82] sm:scale-[0.85] lg:scale-[0.87] opacity-75 hover:opacity-95 shadow-xl cursor-pointer';
      case -2:
        return 'z-10 hidden lg:block left-1/2 -translate-x-[calc(50%+510px)] scale-[0.72] opacity-40 hover:opacity-70 shadow-lg cursor-pointer';
      case 2:
        return 'z-10 hidden lg:block left-1/2 translate-x-[calc(-50%+510px)] scale-[0.72] opacity-40 hover:opacity-70 shadow-lg cursor-pointer';
      default:
        return 'opacity-0 scale-50 pointer-events-none left-1/2 -translate-x-1/2';
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] select-none rounded-2xl overflow-hidden ${getSlotClasses()}`}
      style={{
        width: isCenter ? 'min(330px, 80vw)' : 'min(270px, 68vw)',
        height: isCenter ? 'min(490px, 66vh)' : 'min(400px, 54vh)',
      }}
      role={isCenter ? 'region' : 'button'}
      aria-label={`${production.title} - ${isCenter ? 'Destaque atual' : 'Clique para trazer ao centro'}`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (isCenter) onNavigate(`/webs/${production.slug}`);
          else onSelect();
        }
      }}
    >
      <div className="relative w-full h-full bg-slate-950 flex flex-col justify-end group">
        {/* Background Artwork */}
        {coverUrl && !imgError ? (
          <img
            src={coverUrl}
            alt={production.title}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
              isCenter ? 'group-hover:scale-105' : 'group-hover:scale-102'
            }`}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 flex flex-col justify-between items-center text-center">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#D80050] bg-white/10 px-2.5 py-0.5 rounded">
              Estúdio Webs
            </span>
            <div className="my-auto">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[#D80050]/20 border border-[#D80050]/40 flex items-center justify-center text-[#D80050]">
                {isSerie ? <Film className="w-6 h-6" /> : <BookOpen className="w-6 h-6" />}
              </div>
              <p className="text-white font-bold text-base font-brand">{production.title}</p>
            </div>
            <span className="text-xs text-slate-400">{production.category}</span>
          </div>
        )}

        {/* Semi-transparent tint overlay on lateral panels to harmonize with visual identity */}
        {!isCenter && (
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/70 to-slate-950/50 transition-colors duration-300 group-hover:bg-slate-950/40" />
        )}

        {/* Scrim gradient on central panel for contrast and readability */}
        {isCenter && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none" />
        )}

        {/* Subtle glow highlight behind center card */}
        {isCenter && (
          <div className="absolute -inset-1 rounded-2xl bg-[#D80050]/20 blur-md pointer-events-none -z-10" />
        )}

        {/* Center Card Play Button In Middle of Poster */}
        {isCenter && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(`/webs/${production.slug}`);
              }}
              className="pointer-events-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#D80050] hover:bg-[#eb0058] text-white flex items-center justify-center shadow-2xl shadow-rose-950/80 transition-all duration-300 hover:scale-110 active:scale-95 group/btn cursor-pointer ring-4 ring-white/20"
              aria-label={`Assistir ou Ler ${production.title}`}
            >
              <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white ml-1 transition-transform group-hover/btn:scale-110" />
            </button>
          </div>
        )}

        {/* CENTER CONTENT AT BOTTOM */}
        {isCenter ? (
          <div className="relative z-10 p-5 sm:p-6 flex flex-col items-center text-center">
            {/* Category / Premiere Badge */}
            <div className="mb-2">
              {isAmoresFeridos ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider bg-[#D80050] text-white shadow-md shadow-rose-950/60 animate-pulse">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Estreia 11 de janeiro</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white/15 backdrop-blur-md text-white border border-white/20">
                  {isSerie ? <Film className="w-3 h-3 text-cyan-400" /> : <BookOpen className="w-3 h-3 text-rose-400" />}
                  <span>{production.category}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-slate-300">{production.totalUnits} {production.unitType}</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-brand text-white tracking-tight leading-tight drop-shadow-md max-w-[280px]">
              {production.title}
            </h3>

            {/* Author */}
            <p className="text-xs text-slate-300 mt-1 font-medium drop-shadow-sm">
              Criada por <span className="text-white font-semibold">{production.author}</span>
            </p>

            {/* Direct access button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNavigate(`/webs/${production.slug}`);
              }}
              className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-rose-200 transition-colors drop-shadow-sm cursor-pointer"
            >
              <span>Acessar Obra</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        ) : (
          /* LATERAL CONTENT AT BOTTOM */
          <div className="relative z-10 p-3 sm:p-4 text-center">
            {isAmoresFeridos ? (
              <span className="inline-block mb-1 px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#D80050] text-white shadow-xs">
                Estreia 11/01
              </span>
            ) : (
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-300 drop-shadow-xs">
                {production.category}
              </span>
            )}
            <h4 className="text-xs sm:text-sm font-bold text-white font-brand line-clamp-1 drop-shadow-sm">
              {production.title}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
}

export function FeaturedProgrammingCarousel({ onNavigate }: FeaturedProgrammingCarouselProps) {
  // Ordered 8 productions from PRODUCTIONS_DATA
  const featuredProductions = React.useMemo(() => {
    return FEATURED_SLUGS.map((slug) => {
      const match = PRODUCTIONS_DATA.find((p) => p.slug === slug);
      if (match) return match;
      return {
        id: slug,
        title: slug.replace(/-/g, ' ').toUpperCase(),
        slug,
        author: 'Estúdio Webs',
        category: 'Web série' as const,
        unitType: 'episódios' as const,
        totalUnits: 10,
        status: 'Finalizada' as ProductionStatus,
        coverImage: '',
        synopsis: '',
        episodes: [],
      };
    });
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Swipe / Touch tracking
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);

  const total = featuredProductions.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Smooth auto-rotation timer (5.5s) with pause on hover/touch
  useEffect(() => {
    if (isPaused || total <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide, total]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartXRef.current - touchEndX;
    const deltaY = (touchStartYRef.current || 0) - touchEndY;

    // Detect horizontal swipe if deltaX is dominant and >= 40px
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
  };

  return (
    <section
      className="relative w-full bg-gradient-to-b from-[#060a12] via-[#0c1220] to-[#080d18] border-b border-slate-800/80 overflow-hidden py-8 sm:py-10 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Carrossel de Destaques da Programação"
    >
      {/* Cinematic subtle background lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-[#D80050]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle top edge border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D80050]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D80050] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D80050]"></span>
            </span>
            <h2 className="text-xs sm:text-sm uppercase tracking-widest font-black text-white flex items-center gap-2 font-brand">
              <Sparkles className="w-3.5 h-3.5 text-[#D80050]" />
              <span>Destaque da Programação</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] sm:text-xs font-semibold text-slate-400 font-mono tabular-nums">
              {String(activeIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <div className="hidden sm:flex items-center gap-1.5 ml-2">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D80050] text-white flex items-center justify-center transition border border-white/10 hover:border-[#D80050] shadow-sm cursor-pointer active:scale-95"
                aria-label="Produção anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D80050] text-white flex items-center justify-center transition border border-white/10 hover:border-[#D80050] shadow-sm cursor-pointer active:scale-95"
                aria-label="Próxima produção"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Stage: 5-Card Horizon */}
        <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[540px] flex items-center justify-center overflow-hidden">
          {featuredProductions.map((prod, idx) => {
            // Calculate cyclic diff
            let diff = idx - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            // Render cards within range [-2, 2]
            if (Math.abs(diff) > 2) return null;

            return (
              <ProductionCardItem
                key={prod.slug}
                production={prod}
                diff={diff}
                isCenter={diff === 0}
                onSelect={() => setActiveIndex(idx)}
                onNavigate={onNavigate}
              />
            );
          })}

          {/* Floating Chevrons for direct lateral navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#D80050] text-white border border-white/20 flex items-center justify-center transition-all duration-200 shadow-xl backdrop-blur-md cursor-pointer active:scale-90"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 hover:bg-[#D80050] text-white border border-white/20 flex items-center justify-center transition-all duration-200 shadow-xl backdrop-blur-md cursor-pointer active:scale-90"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Bottom Navigation Indicators */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          {featuredProductions.map((prod, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={prod.slug}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isActive
                    ? 'w-7 sm:w-8 h-2 bg-[#D80050] shadow-sm shadow-[#D80050]/50'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Ir para ${prod.title}`}
                title={prod.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
