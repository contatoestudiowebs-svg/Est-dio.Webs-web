import React, { useState } from 'react';
import { ShieldAlert, Info, AlertCircle } from 'lucide-react';
import {
  AgeRatingCode,
  AGE_RATING_DEFINITIONS,
  getProductionAdvisory,
} from '../utils/ageRating';
import { AgeRatingModal } from './AgeRatingModal';

interface AgeRatingBadgeButtonProps {
  productionSlug: string;
  productionTitle: string;
  productionCategory: string;
  variant?: 'compact' | 'badge' | 'full';
  showDescriptors?: boolean;
  className?: string;
}

export function AgeRatingBadgeButton({
  productionSlug,
  productionTitle,
  productionCategory,
  variant = 'badge',
  showDescriptors = false,
  className = '',
}: AgeRatingBadgeButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const advisory = getProductionAdvisory(productionSlug);
  const ratingDef = AGE_RATING_DEFINITIONS[advisory.ageRating];

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  if (variant === 'compact') {
    return (
      <>
        <button
          onClick={handleClick}
          title={`Classificação Indicativa: ${ratingDef.title}. Clique para ver detalhes.`}
          className={`group/rating inline-flex items-center justify-center w-6 h-6 rounded-md text-[11px] shadow-xs border transition hover:scale-105 active:scale-95 cursor-pointer ${ratingDef.badgeBg} ${ratingDef.badgeText} ${ratingDef.badgeBorder} ${className}`}
          aria-label={`Classificação Indicativa: ${ratingDef.title}`}
        >
          <span>{ratingDef.code}</span>
        </button>

        <AgeRatingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productionSlug={productionSlug}
          productionTitle={productionTitle}
          productionCategory={productionCategory}
        />
      </>
    );
  }

  if (variant === 'badge') {
    return (
      <>
        <button
          onClick={handleClick}
          title={`Classificação Indicativa: ${ratingDef.title}. Clique para ver detalhes.`}
          className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-white/95 hover:bg-white text-slate-800 text-[11px] font-bold border border-slate-200/90 shadow-xs hover:border-slate-300 transition group/badge cursor-pointer ${className}`}
        >
          <span
            className={`w-5 h-5 rounded flex items-center justify-center text-[10px] shadow-2xs border ${ratingDef.badgeBg} ${ratingDef.badgeText} ${ratingDef.badgeBorder}`}
          >
            {ratingDef.code}
          </span>
          <span className="hidden sm:inline text-slate-700 font-semibold group-hover/badge:text-slate-900">
            {ratingDef.shortLabel}
          </span>
        </button>

        <AgeRatingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productionSlug={productionSlug}
          productionTitle={productionTitle}
          productionCategory={productionCategory}
        />
      </>
    );
  }

  // Full variant (ideal for ProductionDetailPage and ChapterEpisodeReaderPage)
  return (
    <>
      <button
        onClick={handleClick}
        title="Clique para ver os critérios da classificação indicativa desta obra"
        className={`group/full inline-flex flex-wrap items-center gap-2.5 p-1.5 pr-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition text-left cursor-pointer shadow-xs ${className}`}
      >
        {/* Square ClassInd Badge */}
        <div
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm shadow-xs border ${ratingDef.badgeBg} ${ratingDef.badgeText} ${ratingDef.badgeBorder} shrink-0`}
        >
          {ratingDef.code}
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1">
            <ShieldAlert className="w-3 h-3 text-[#D80050]" />
            Classificação Indicativa
          </span>
          <span className="text-xs font-bold text-slate-900 group-hover/full:text-[#D80050] transition">
            {ratingDef.title}
          </span>
        </div>

        {showDescriptors && advisory.descriptors && advisory.descriptors.length > 0 && (
          <div className="hidden md:flex items-center gap-1 pl-2 border-l border-slate-200">
            {advisory.descriptors.slice(0, 2).map((desc, i) => (
              <span
                key={i}
                className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600"
              >
                {desc}
              </span>
            ))}
            {advisory.descriptors.length > 2 && (
              <span className="text-[10px] font-medium text-slate-400">
                +{advisory.descriptors.length - 2}
              </span>
            )}
          </div>
        )}

        <Info className="w-3.5 h-3.5 text-slate-400 group-hover/full:text-[#D80050] ml-auto shrink-0 transition" />
      </button>

      <AgeRatingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productionSlug={productionSlug}
        productionTitle={productionTitle}
        productionCategory={productionCategory}
      />
    </>
  );
}
