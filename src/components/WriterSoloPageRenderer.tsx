import React from 'react';
import { parseScreenplayPage } from '../utils/writerSoloFormatter';

interface WriterSoloPageRendererProps {
  rawPageText: string;
  pageIndex: number;
  totalPages: number;
  productionTitle: string;
  episodeLabel: string;
  author: string;
  viewFormat?: 'writersolo' | 'raw';
}

export function WriterSoloPageRenderer({
  rawPageText,
  pageIndex,
  totalPages,
  productionTitle,
  episodeLabel,
  author,
  viewFormat = 'writersolo',
}: WriterSoloPageRendererProps) {
  if (viewFormat === 'raw') {
    return (
      <div className="bg-white border border-slate-300 rounded-sm shadow-md p-6 sm:p-14 font-mono text-[13px] sm:text-[14px] leading-relaxed text-slate-950 relative select-text">
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200 text-xs text-slate-400 font-sans">
          <span>
            {productionTitle} • {episodeLabel}
          </span>
          <span className="font-mono font-bold text-slate-700">
            Página {pageIndex + 1} de {totalPages}
          </span>
        </div>
        <pre className="whitespace-pre-wrap font-mono text-slate-900 leading-relaxed font-medium">
          {rawPageText}
        </pre>
        <div className="mt-8 pt-4 border-t border-slate-100 text-right text-[11px] text-slate-400 font-sans">
          {pageIndex + 1}.
        </div>
      </div>
    );
  }

  const parsed = parseScreenplayPage(rawPageText, pageIndex);

  // 1. WriterSolo Title Page
  if (parsed.isTitlePage && parsed.titlePageData) {
    return (
      <div className="bg-white border border-slate-300/80 rounded-sm shadow-xl p-8 sm:p-16 lg:p-20 relative select-text min-h-[580px] sm:min-h-[720px] flex flex-col justify-between text-center font-['Courier_Prime',Courier,monospace]">
        {/* Top subtle identifier */}
        <div className="text-[11px] font-sans text-slate-400 uppercase tracking-widest flex items-center justify-between border-b border-slate-100 pb-2">
          <span>Estúdio Webs • Roteiro Oficial</span>
          <span className="text-[#D80050] font-bold">WriterSolo Formatter</span>
        </div>

        {/* Center title lockup */}
        <div className="my-auto py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-widest text-black mb-4">
            {parsed.titlePageData.title || productionTitle}
          </h1>

          <div className="text-base sm:text-lg font-bold text-slate-800 uppercase tracking-wider mb-2">
            {parsed.titlePageData.episode || episodeLabel}
          </div>

          {parsed.titlePageData.subtitle && (
            <div className="text-sm sm:text-base italic text-slate-700 mb-8">
              “{parsed.titlePageData.subtitle}”
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-200/60 max-w-xs mx-auto">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-1 font-sans">
              Escrito por
            </p>
            <p className="text-base sm:text-lg font-bold text-black">
              {parsed.titlePageData.author || author}
            </p>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="text-[11px] text-slate-500 pt-4 border-t border-slate-100 font-sans flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>ESTÚDIO WEBS — Teledramaturgia Virtual</span>
          <span className="text-[#D80050] font-semibold">
            Padrão de Roteiro WriterSolo (writersolo.com)
          </span>
        </div>
      </div>
    );
  }

  // 2. WriterSolo Standard Screenplay Page
  return (
    <div className="bg-white border border-slate-300/90 rounded-sm shadow-xl p-6 sm:p-12 lg:p-16 relative select-text min-h-[640px] font-['Courier_Prime',Courier,monospace] text-black">
      {/* WriterSolo Header: Page number in top right */}
      <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-200/60 text-xs text-slate-500 font-sans">
        <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-600">
          {productionTitle} • {episodeLabel}
        </span>
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
            WriterSolo
          </span>
          <span className="font-['Courier_Prime',Courier,monospace] font-bold text-slate-900 text-sm">
            {pageIndex + 1}.
          </span>
        </div>
      </div>

      {/* Screenplay Content Body */}
      <div className="space-y-0 text-[13px] sm:text-[14px] leading-[1.25]">
        {parsed.elements.map((el, idx) => {
          switch (el.type) {
            case 'scene-heading':
              return (
                <div
                  key={idx}
                  className="font-bold uppercase tracking-wide text-black text-left pt-4 pb-2 border-b border-slate-100/60"
                >
                  {el.text}
                </div>
              );

            case 'character':
              return (
                <div
                  key={idx}
                  className="font-bold uppercase text-black pt-3 pb-0.5 ml-[36%] text-left"
                >
                  {el.text}
                </div>
              );

            case 'parenthetical':
              return (
                <div
                  key={idx}
                  className="italic text-slate-800 ml-[30%] pb-0.5 max-w-[34ch] text-left"
                >
                  {el.text}
                </div>
              );

            case 'dialogue':
              return (
                <div
                  key={idx}
                  className="text-black leading-[1.2] ml-[20%] mr-[14%] max-w-[42ch] pb-3 text-left"
                >
                  {el.text}
                </div>
              );

            case 'transition':
              return (
                <div key={idx} className="font-bold uppercase text-right py-3 text-slate-900">
                  {el.text}
                </div>
              );

            case 'action':
            default:
              return (
                <div key={idx} className="text-black text-left leading-[1.25] pb-2.5">
                  {el.text}
                </div>
              );
          }
        })}
      </div>

      {/* Page bottom indicator */}
      <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-sans">
        <span>Formatado no padrão WriterSolo</span>
        <span className="font-['Courier_Prime',Courier,monospace] font-bold text-slate-700">
          {pageIndex + 1}.
        </span>
      </div>
    </div>
  );
}
