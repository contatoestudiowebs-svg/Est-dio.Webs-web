import React from 'react';
import { X, ShieldAlert, AlertCircle, Info, Sparkles, CheckCircle2 } from 'lucide-react';
import {
  AgeRatingCode,
  AGE_RATING_DEFINITIONS,
  getProductionAdvisory,
} from '../utils/ageRating';

interface AgeRatingModalProps {
  isOpen: boolean;
  onClose: () => void;
  productionSlug: string;
  productionTitle: string;
  productionCategory: string;
}

export function AgeRatingModal({
  isOpen,
  onClose,
  productionSlug,
  productionTitle,
  productionCategory,
}: AgeRatingModalProps) {
  if (!isOpen) return null;

  const advisory = getProductionAdvisory(productionSlug);
  const ratingDef = AGE_RATING_DEFINITIONS[advisory.ageRating];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with decorative colored top stripe based on rating */}
        <div
          className="h-2.5 w-full"
          style={{ backgroundColor: ratingDef.iconBg }}
        />

        <div className="p-6 sm:p-7">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title & Badge Header */}
          <div className="flex items-start gap-4 mb-5">
            {/* Authentic Brazilian ClassInd Square Badge */}
            <div
              className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center text-2xl shadow-md border-2 ${ratingDef.badgeBg} ${ratingDef.badgeText} ${ratingDef.badgeBorder}`}
              title={`Classificação Indicativa: ${ratingDef.title}`}
            >
              {ratingDef.code}
            </div>

            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#D80050]" />
                Classificação Indicativa Oficial
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-editorial tracking-wide leading-tight mt-0.5">
                {ratingDef.title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {productionTitle} • {productionCategory}
              </p>
            </div>
          </div>

          {/* Descriptors tags / Conteúdos presentes */}
          {advisory.descriptors && advisory.descriptors.length > 0 && (
            <div className="mb-5 bg-slate-50 rounded-xl p-4 border border-slate-200">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block mb-2">
                Conteúdos e Elementos Identificados:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {advisory.descriptors.map((desc, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-300 text-slate-800 shadow-2xs"
                  >
                    <AlertCircle className="w-3 h-3 text-slate-500" />
                    {desc}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Narrative justification / Contexto na história */}
          <div className="mb-5 space-y-3">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#D80050]" />
                Por que esta web tem esta classificação?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-rose-50/40 p-3.5 rounded-xl border border-rose-100/80">
                {advisory.advisoryNote}
              </p>
            </div>

            {/* Official Standard Explanation */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                Critério Geral do Sistema de Classificação:
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                {ratingDef.description}
              </p>
            </div>
          </div>

          {/* Footer note & Close button */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
            <span className="text-[11px] text-slate-400">
              Guia de Classificação Indicativa • Estúdio Webs
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#D80050] text-white text-xs font-bold transition shadow-xs"
            >
              Entendi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
