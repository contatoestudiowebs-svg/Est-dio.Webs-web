import React, { useState, useRef } from 'react';
import {
  Calendar,
  User,
  ArrowRight,
  ArrowUp,
  Share2,
  Copy,
  Check,
  Mail,
  FileText,
  Building,
  Sparkles
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

interface SalaDeImprensaPageProps {
  onNavigate: (path: string) => void;
}

export function SalaDeImprensaPage({ onNavigate }: SalaDeImprensaPageProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const cardTopRef = useRef<HTMLDivElement>(null);

  const toggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      // Smoothly scroll back to the top of the card when collapsing
      setTimeout(() => {
        cardTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      setIsExpanded(true);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Sala de Imprensa | Estúdio Webs"
        description="Sala de Imprensa oficial do Estúdio Webs: comunicados, notícias institucionais e informações sobre produções da teledramaturgia virtual."
        canonicalPath="/sala-de-imprensa"
      />

      {/* ============================================================ */}
      {/* 1. TOP HERO SECTION: VIBRANT YELLOW BACKGROUND & BOLD TITLE */}
      {/* ============================================================ */}
      <section className="bg-[#FFDD00] text-black pt-14 sm:pt-20 lg:pt-24 pb-36 sm:pb-44 lg:pb-52 px-4 sm:px-6 lg:px-8 border-b border-black/10">
        <div className="max-w-6xl mx-auto">
          {/* Editorial Kicker */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="text-[11px] sm:text-xs font-black tracking-[0.25em] uppercase text-black/75">
              ESTÚDIO WEBS • COMUNICAÇÃO INSTITUCIONAL
            </span>
            <span className="h-1 w-8 bg-black/40 rounded-full hidden sm:inline-block" />
            <span className="text-[11px] sm:text-xs font-bold text-black/60 hidden sm:inline-block">
              NOTÍCIAS E BASTIDORES
            </span>
          </div>

          {/* Large Editorial Headline */}
          <h1 className="font-brand font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.88] uppercase text-black select-none text-balance">
            Sala de Imprensa
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg font-medium text-black/80 max-w-2xl leading-relaxed">
            Espaço dedicado às notícias, novidades e aos bastidores das produções da Estúdio Webs. Acompanhe pré-estreias e destaques das nossas produções.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. WHITE BASE SECTION WITH OVERLAPPING NEWS CARD             */}
      {/* ============================================================ */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto">
          {/* Card Anchor for smooth collapse scroll */}
          <div ref={cardTopRef} className="-translate-y-24" />

          {/* SINGLE NEWS CARD: Overlapping the transition line */}
          <article className="-mt-28 sm:-mt-36 lg:-mt-44 relative z-20 bg-white rounded-3xl sm:rounded-4xl shadow-2xl shadow-black/12 border border-slate-200/90 overflow-hidden transition-all duration-300">
            {/* Featured Image */}
            <div className="relative w-full aspect-16/9 sm:aspect-21/9 bg-slate-900 overflow-hidden group">
              <img
                src="/src/assets/images/sala_imprensa_destaque_1792701115771.jpg"
                alt="Sala de Imprensa do Estúdio Webs - Centro de Produção e Comunicação"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

              {/* Photo Caption Overlay */}
              <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between text-[11px] text-white/90">
                <span className="font-medium drop-shadow-sm">
                  Núcleo de Produção & Dramaturgia Virtual — Estúdio Webs
                </span>
                <span className="hidden sm:inline-block text-white/70">
                  Foto: Divulgação Oficial
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 sm:p-10 lg:p-12">
              {/* Metadata strip: Zero-pill discipline with clean typographic separators */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-3 sm:mb-4">
                <span className="text-black font-extrabold tracking-wider uppercase">
                  COMUNICADO OFICIAL
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>22 de Outubro de 2026</span>
                </div>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <div className="flex items-center gap-1.5 text-slate-600">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>Por Assessoria de Comunicação Estúdio Webs</span>
                </div>
              </div>

              {/* Article Headline */}
              <h2 className="font-brand font-black text-2xl sm:text-3xl lg:text-4xl text-slate-950 tracking-tight leading-tight mb-4">
                Estúdio Webs consolida marco de 31 produções originais e estabelece novo horizonte para a teledramaturgia virtual brasileira
              </h2>

              {/* Summary / Lead */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-8 max-w-4xl">
                A emissora virtual celebra a consolidação de seu acervo com 100% das obras catalogadas e finalizadas, amplia o suporte a roteiristas independentes com a nova ala de Comunidade e reforça seu compromisso com a valorização de histórias inéditas na internet.
              </p>

              {/* EXPANDED CONTENT: Full article revealed when isExpanded === true */}
              {isExpanded && (
                <div className="pt-8 border-t border-slate-200 mt-6 space-y-6 text-slate-800 leading-relaxed font-reading text-base sm:text-lg animate-fadeIn">
                  <p>
                    <strong className="text-slate-950 font-semibold font-brand">SÃO PAULO / BRASIL —</strong> Em um momento decisivo para a criação de conteúdo dramatúrgico digital, o <strong className="text-slate-950">Estúdio Webs</strong> anuncia publicamente o fortalecimento de sua grade editorial e de sua infraestrutura digital. Com 31 produções já exibidas e integralmente disponibilizadas para leitura pública, a emissora se firma como o principal repositório e difusor de web novelas e web séries do país.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold font-brand text-slate-950 pt-2">
                    Inovação em narrativa seriada e autonomia para autores
                  </h3>
                  <p>
                    Ao contrário de formatos televisivos tradicionais, o Estúdio Webs proporciona aos roteiristas liberdade temática sem amarras mercadológicas restritivas. Obras como <em>Amores Feridos</em>, <em>Rasga Mortalha 2</em>, <em>Cold Case Brasil</em>, <em>451</em>, <em>Medusa: A Maldição de Atena</em>, <em>Pandorum</em>, <em>O Suplício</em> e <em>A Santa do Pau Oco</em> ilustram a versatilidade de gêneros — do suspense psicológico ao drama romântico e fantasia épica.
                  </p>

                  {/* Curatorial Quote Box */}
                  <blockquote className="my-8 p-6 sm:p-8 bg-amber-50/70 border-l-0 border border-amber-200/80 rounded-2xl relative">
                    <p className="font-serif italic text-lg sm:text-xl text-slate-900 leading-relaxed">
                      “A teledramaturgia virtual é mais do que um formato literário na web; é uma manifestação cultural legítima e vibrante. Nossa meta na Sala de Imprensa e em toda a plataforma é dar a cada autor o destaque que sua narrativa merece, preservando cada capítulo como patrimônio da ficção independente brasileira.”
                    </p>
                    <footer className="mt-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 font-brand">
                      — Curadoria e Coordenação Geral de Roteiros, Estúdio Webs
                    </footer>
                  </blockquote>

                  <h3 className="text-xl sm:text-2xl font-bold font-brand text-slate-950 pt-2">
                    Novo espaço de Comunidade e Convocatória Permanente
                  </h3>
                  <p>
                    Como parte da expansão institucional, a emissora inaugurou recentemente a seção <strong className="text-slate-950">Comunidade</strong>, permitindo que mini séries em formato de episódios rápidos encontrem seus primeiros leitores antes de ingressarem na grade oficial. Paralelamente, a convocatória <em>“Envie seu Projeto”</em> permanece aberta para receber sinopses, argumentos e pilotos de autores veteranos e estreantes.
                  </p>

                  <h3 className="text-xl sm:text-2xl font-bold font-brand text-slate-950 pt-2">
                    Informações e Credenciamento de Imprensa
                  </h3>
                  <p>
                    Veículos de comunicação, portais especializados em audiovisual, acadêmicos e pesquisadores de teledramaturgia virtual podem solicitar materiais institucionais em alta resolução, entrevistas com autores e relatórios sobre o consumo de ficção virtual pelo canal oficial de assessoria.
                  </p>

                  {/* Institutional Media Box */}
                  <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <div className="flex items-center gap-2 text-slate-900 font-bold font-brand text-sm">
                      <Building className="w-4 h-4 text-[#D80050]" />
                      <span>Atendimento à Imprensa e Relações Públicas</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600">
                      E-mail direto para pautas, entrevistas e releases:
                    </p>
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href="mailto:contatoestudiowebs@gmail.com"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-900 hover:border-slate-400 hover:bg-slate-100 transition shadow-xs"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#D80050]" />
                        <span>contatoestudiowebs@gmail.com</span>
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
                        title="Copiar link da notícia"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">Link Copiado!</span>
                          </>
                        ) : (
                          <>
                            <Share2 className="w-3.5 h-3.5 text-slate-500" />
                            <span>Compartilhar Notícia</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Area: Toggle Button */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={toggleExpand}
                  className={`inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg ${
                    isExpanded
                      ? 'bg-slate-900 hover:bg-black text-white'
                      : 'bg-black hover:bg-slate-800 text-white hover:translate-x-0.5'
                  }`}
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? 'Ler menos' : 'Leia mais'}</span>
                  {isExpanded ? (
                    <ArrowUp className="w-4 h-4" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>

                <div className="flex items-center justify-between sm:justify-end gap-3 text-xs text-slate-500">
                  <span className="hidden sm:inline">Notícia verificada • Estúdio Webs</span>
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 text-slate-600 hover:text-black font-semibold transition cursor-pointer py-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-bold">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copiar link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
