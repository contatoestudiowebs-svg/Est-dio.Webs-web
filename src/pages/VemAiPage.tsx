import React, { useState } from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  Maximize2,
  X,
  BookOpen,
  ArrowRight,
  Send,
  Film
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { UPCOMING_PRODUCTIONS_DATA, UpcomingProduction } from '../data/vemAiData';

interface VemAiPageProps {
  onNavigate: (path: string) => void;
}

export function VemAiPage({ onNavigate }: VemAiPageProps) {
  const [selectedCover, setSelectedCover] = useState<UpcomingProduction | null>(null);

  return (
    <div className="min-h-screen py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="Vem Aí | Próximas Web Novelas | Estúdio Webs"
        description="Confira as capas e produções de web novelas que vão estrear em breve na programação oficial do Estúdio Webs."
        canonicalPath="/vem-ai"
      />

      {/* Header Banner */}
      <div className="mb-10 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-[#D80050]" />
            <span>Grade Futura • Em Breve</span>
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-brand tracking-tight">
          VEM AÍ
        </h1>

        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Novas web novelas que estão chegando à grade de programação do Estúdio Webs. Produções em fase de preparação com estreias em breve e datas a definir.
        </p>
      </div>

      {/* Grid of Upcoming Productions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7">
        {UPCOMING_PRODUCTIONS_DATA.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedCover(item)}
            className="group bg-white rounded-2xl border border-slate-200/90 hover:border-rose-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
          >
            {/* Poster Cover Container */}
            <div className="relative aspect-[2/3] w-full bg-slate-900/5 overflow-hidden flex items-center justify-center p-2.5">
              <img
                src={item.coverImage}
                alt={item.altText}
                className="w-full h-full object-contain drop-shadow-sm group-hover:scale-103 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />

              {/* Hover Zoom Overlay Button */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/95 text-slate-900 font-bold text-xs shadow-lg backdrop-blur-xs">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D80050]" />
                  <span>Ampliar Capa</span>
                </span>
              </div>

              {/* Index Number Badge */}
              <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-white text-[10px] font-black tracking-wider uppercase">
                #{index + 1}
              </span>
            </div>

            {/* Card Information (No authors, strictly per instructions) */}
            <div className="p-4 border-t border-slate-100 bg-white space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-50 text-[#D80050] border border-rose-200">
                  {item.category}
                </span>

                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Estúdio Webs
                </span>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-200">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span className="text-[11px] leading-tight font-black">
                  Estreia em breve • Data a definir
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Institutional Callout Banner */}
      <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#131c2e] to-slate-950 border border-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-rose-400 text-xs font-black uppercase tracking-widest">
            <Film className="w-4 h-4" />
            <span>Teledramaturgia Virtual em Expansão</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-brand text-white">
            Acompanhe a chegada das novas web novelas
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            As datas de lançamento serão divulgadas em breve aqui e na Sala de Imprensa. Enquanto isso, aproveite as 31 produções 100% finalizadas do nosso catálogo.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <button
            onClick={() => onNavigate('/webs')}
            className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/20 transition cursor-pointer"
          >
            Ver Catálogo Atual
          </button>
          <button
            onClick={() => onNavigate('/envie-seu-projeto')}
            className="px-5 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-bold uppercase tracking-wider transition shadow-lg shadow-[#D80050]/20 flex items-center gap-1.5 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Envie seu Projeto</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal for Full Resolution Cover Preview */}
      {selectedCover && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setSelectedCover(null)}
        >
          <div
            className="relative max-w-md w-full bg-slate-950 rounded-3xl p-4 shadow-2xl border border-slate-800 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCover(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition cursor-pointer z-10"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full aspect-[2/3] max-h-[70vh] flex items-center justify-center p-2">
              <img
                src={selectedCover.coverImage}
                alt={selectedCover.altText}
                className="w-full h-full object-contain rounded-xl drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="w-full mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs px-2">
              <span className="font-bold text-[#D80050] uppercase tracking-wider">
                {selectedCover.category}
              </span>
              <span className="text-amber-400 font-bold text-[11px] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Estreia em breve • Data a definir
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
