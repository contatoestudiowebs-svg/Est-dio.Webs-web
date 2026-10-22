import React, { useEffect } from 'react';
import { Trophy, Star, X, Award, BookOpen, User, Sparkles, ChevronRight } from 'lucide-react';
import { ALL_OFFICIAL_AWARDS_LIST, AUTHOR_AWARDS, ProductionAwardInfo } from '../data/awardsData';

interface AwardedWebsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
  currentSlug?: string;
}

export function AwardedWebsModal({
  isOpen,
  onClose,
  onNavigate,
  currentSlug
}: AwardedWebsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectProduction = (slug: string) => {
    onNavigate(`/webs/${slug}`);
    onClose();
  };

  const handleSelectAuthor = (slug: string) => {
    onNavigate(`/autores/${slug}`);
    onClose();
  };

  const fredReidsAward = AUTHOR_AWARDS['fred-reids'];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 p-6 sm:p-8 text-slate-950 relative border-b border-amber-300">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/10 hover:bg-black/20 text-slate-950 transition cursor-pointer"
            aria-label="Fechar galeria de premiadas"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <span className="p-2 rounded-xl bg-slate-950 text-amber-400 shadow-md flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </span>
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-950/80 bg-white/40 px-2.5 py-0.5 rounded-md">
              PREMIAÇÕES & RECONHECIMENTOS OFICIAIS
            </span>
          </div>

          <h2 className="font-brand font-black text-2xl sm:text-3xl text-slate-950 tracking-tight leading-tight">
            Produções Premiadas do Estúdio Webs
          </h2>
          <p className="text-xs sm:text-sm text-slate-900/90 font-medium mt-1 max-w-2xl leading-relaxed">
            Conheça as web séries, web novelas e autores do Estúdio Webs consagrados no TFA 2023, Festival Carta Aberta e Global Choice Awards.
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50 flex-1">
          {/* Author Award Highlight: Fred Reids */}
          {fredReidsAward && (
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-50 via-amber-50/60 to-white border border-amber-300 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D80050] to-rose-600 text-white flex items-center justify-center font-black text-xl shadow-xs shrink-0">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-rose-800 bg-rose-100 px-2 py-0.5 rounded">
                      AUTOR PREMIADO
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold">
                      {fredReidsAward.festivalOrAward}
                    </span>
                  </div>
                  <h3 className="font-brand font-black text-lg text-slate-900">
                    {fredReidsAward.authorName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mt-0.5">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-600 shrink-0" />
                    <span>{fredReidsAward.awardText}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleSelectAuthor(fredReidsAward.authorSlug)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-[#D80050] text-white transition shadow-xs cursor-pointer"
              >
                <span>Ver Perfil do Autor</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Productions List */}
          {ALL_OFFICIAL_AWARDS_LIST.map((prod) => {
            const isCurrent = prod.slug === currentSlug;
            const isSerie = prod.category === 'Web série';

            return (
              <div
                key={prod.slug}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 bg-white ${
                  isCurrent
                    ? 'border-[#D80050] ring-2 ring-[#D80050]/20 shadow-md'
                    : 'border-slate-200 hover:border-slate-300 shadow-2xs'
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Thumbnail Cover */}
                  <div className="w-20 sm:w-24 aspect-[2/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs relative">
                    <img
                      src={prod.coverImage}
                      alt={prod.title}
                      className="w-full h-full object-contain p-1"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-1 right-1 p-1 rounded-full bg-amber-400 text-slate-950 shadow-xs">
                      <Star className="w-3 h-3 fill-slate-950" />
                    </span>
                  </div>

                  {/* Info and Awards */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isSerie ? 'bg-blue-100 text-blue-800' : 'bg-rose-100 text-[#D80050]'
                        }`}
                      >
                        {prod.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {prod.totalUnits} {isSerie ? 'episódios' : 'capítulos'}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-600 font-medium">
                        por <strong className="text-slate-900">{prod.author}</strong>
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-bold text-[#D80050] bg-rose-50 px-2 py-0.5 rounded border border-rose-200 ml-auto">
                          Obra Selecionada
                        </span>
                      )}
                    </div>

                    <h3 className="font-brand font-black text-lg sm:text-xl text-slate-900 mb-2 leading-snug">
                      {prod.title}
                    </h3>

                    {/* Award Banner Box */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50/60 border border-amber-300/80 mb-3 space-y-1.5">
                      <div className="flex items-start gap-2 text-xs sm:text-sm font-black text-slate-950">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{prod.awardText}</span>
                      </div>

                      {prod.detailedCategories && prod.detailedCategories.length > 0 && (
                        <div className="pl-6 pt-1 space-y-1 text-[11px] text-slate-700">
                          {prod.detailedCategories.map((cat, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 font-medium">
                              <span className="w-1 h-1 rounded-full bg-amber-500" />
                              <span>{cat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Action button */}
                    <div className="flex items-center justify-end">
                      <button
                        onClick={() => handleSelectProduction(prod.slug)}
                        className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                          isCurrent
                            ? 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                            : 'bg-slate-900 hover:bg-[#D80050] text-white shadow-xs'
                        }`}
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{isCurrent ? 'Permanecer na Obra' : 'Acessar Obra Premiada'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Premiações Oficiais da Teledramaturgia Virtual</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition cursor-pointer"
          >
            Fechar Galeria
          </button>
        </div>
      </div>
    </div>
  );
}
