import React, { useEffect } from 'react';
import { Trophy, Star, X, Award, ExternalLink, BookOpen, Film, CheckCircle } from 'lucide-react';
import { AWARDED_PRODUCTIONS_DATA, AwardedProductionItem } from '../data/awardsData';

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
        {/* Modal Top Header with Golden Theme */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 p-6 sm:p-8 text-slate-950 relative border-b border-amber-300">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/10 hover:bg-black/20 text-slate-950 transition cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <span className="p-2.5 rounded-xl bg-slate-950 text-amber-400 shadow-md flex items-center justify-center">
              <Trophy className="w-6 h-6" />
            </span>
            <span className="text-xs font-black uppercase tracking-widest text-slate-950/80 bg-white/40 px-2.5 py-1 rounded-md">
              THE FELIPA AWARDS & TROFÉUS OFICIAIS
            </span>
          </div>

          <h2 className="font-brand font-black text-2xl sm:text-3xl text-slate-950 tracking-tight leading-tight">
            Webs Premiadas da Teledramaturgia Virtual
          </h2>
          <p className="text-xs sm:text-sm text-slate-900/90 font-medium mt-1 max-w-2xl leading-relaxed">
            Galeria de produções do Estúdio Webs consagradas no TFA (The Felipa Awards) e pelas principais distinções da ficção seriada independente.
          </p>
        </div>

        {/* Scrollable Content List */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50 flex-1">
          {AWARDED_PRODUCTIONS_DATA.map((item) => {
            const isCurrent = item.slug === currentSlug;
            const isSerie = item.category === 'Web série';

            return (
              <div
                key={item.slug}
                className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 ${
                  item.isMainHighlight
                    ? 'bg-gradient-to-br from-amber-50/90 via-white to-amber-50/50 border-amber-300 shadow-sm ring-1 ring-amber-300/60'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs'
                } ${isCurrent ? 'ring-2 ring-[#D80050]' : ''}`}
              >
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  {/* Thumbnail Cover */}
                  <div className="w-20 sm:w-24 aspect-[2/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shrink-0 shadow-xs relative">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-contain p-1"
                      referrerPolicy="no-referrer"
                    />
                    {item.isMainHighlight && (
                      <span className="absolute top-1 right-1 p-1 rounded-full bg-amber-400 text-slate-950 shadow-xs">
                        <Star className="w-3 h-3 fill-slate-950" />
                      </span>
                    )}
                  </div>

                  {/* Info and Awards */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded ${
                          isSerie ? 'bg-blue-100 text-blue-800' : 'bg-rose-100 text-[#D80050]'
                        }`}
                      >
                        {item.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {item.totalUnits} {isSerie ? 'episódios' : 'capítulos'}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-xs text-slate-600 font-medium">
                        por <strong className="text-slate-900">{item.author}</strong>
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] font-bold text-[#D80050] bg-rose-50 px-2 py-0.5 rounded border border-rose-200 ml-auto">
                          Obra Atual
                        </span>
                      )}
                    </div>

                    <h3 className="font-brand font-black text-lg sm:text-xl text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>

                    {/* Awards list */}
                    <div className="space-y-1.5 mb-3">
                      {item.awards.map((award) => (
                        <div
                          key={award.id}
                          className="flex items-start gap-2 p-2 rounded-xl bg-amber-50/90 border border-amber-200/80 text-xs text-slate-900"
                        >
                          <Star className="w-4 h-4 fill-amber-500 text-amber-600 shrink-0 mt-0.5" />
                          <div className="leading-tight">
                            <span className="font-black text-slate-950">{award.award}</span>
                            <span className="text-amber-800 font-semibold ml-1.5">
                              ({award.ceremony})
                            </span>
                            {award.details && (
                              <p className="text-[11px] text-slate-600 mt-0.5">{award.details}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-reading mb-3">
                      {item.synopsisPreview}
                    </p>

                    {/* Action button */}
                    <div className="flex items-center justify-end pt-1">
                      <button
                        onClick={() => handleSelectProduction(item.slug)}
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

        {/* Modal Bottom Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Dados catalogados da teledramaturgia virtual e The Felipa Awards.</span>
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
