import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Film,
  Newspaper,
  Search,
  Send,
  Sparkles,
  Tv,
  Users
} from 'lucide-react';
import { FeaturedProgrammingCarousel } from '../components/FeaturedProgrammingCarousel';
import { SEOHead } from '../components/SEOHead';
import { WebCard } from '../components/WebCard';
import { ALL_OFFICIAL_AWARDS_LIST } from '../data/awardsData';
import { AUTHORS_DATA, getAuthorWorksCount } from '../data/authors';
import { COMMUNITY_STORIES } from '../data/communityData';
import { PRODUCTIONS_DATA } from '../data/productions';
import { UPCOMING_PRODUCTIONS_DATA } from '../data/vemAiData';
import { WebProduction } from '../types';
import { useProductionCover } from '../utils/imageManager';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

type ShowcaseFilter = 'destaques' | 'novelas' | 'series' | 'premiadas';
type SpotlightTab = 'grade' | 'premiadas';

interface PosterShowcaseCardProps {
  production: WebProduction;
  onNavigate: (path: string) => void;
}

function PosterShowcaseCard({ production, onNavigate }: PosterShowcaseCardProps) {
  const coverUrl = useProductionCover(production.slug, production.coverImage);
  const [imgError, setImgError] = useState(false);
  const isSerie = production.category === 'Web série';
  const isPremiere = production.slug === 'amores-feridos';

  return (
    <article
      onClick={() => onNavigate(`/webs/${production.slug}`)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onNavigate(`/webs/${production.slug}`);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Abrir ${production.title}, ${production.category} de ${production.author}`}
      className="group cursor-pointer flex flex-col focus:outline-none"
    >
      {/* Clean unobstructed 2:3 poster artwork container */}
      <div className="relative aspect-[2/3] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xs group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-200">
        {coverUrl && !imgError ? (
          <img
            src={coverUrl}
            alt={`Capa oficial de ${production.title}`}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 p-4 flex flex-col items-center justify-center text-center">
            {isSerie ? (
              <Film className="w-7 h-7 text-blue-400 mb-2" />
            ) : (
              <BookOpen className="w-7 h-7 text-[#D80050] mb-2" />
            )}
            <span className="text-xs font-bold text-white font-brand line-clamp-2">
              {production.title}
            </span>
          </div>
        )}

        {/* Subtle bottom hover cue without covering cover composition */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/75 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end justify-between p-3 pointer-events-none">
          <span className="text-[11px] font-bold uppercase tracking-wider text-white">
            {isPremiere ? 'Estreia 11/01' : 'Ler obra'}
          </span>
          <ArrowRight className="w-3.5 h-3.5 text-white" />
        </div>
      </div>

      {/* Crisp Editorial Typography Below Poster (Zero-Pill Metadata) */}
      <div className="mt-3 px-0.5">
        <h3 className="text-sm sm:text-[15px] font-extrabold text-slate-950 font-brand tracking-tight leading-snug line-clamp-1 group-hover:text-[#D80050] transition-colors">
          {production.title}
        </h3>
        <p className="mt-0.5 text-xs text-slate-500 font-medium line-clamp-1">
          <span>{production.author}</span>
          <span aria-hidden="true" className="mx-1.5 text-slate-300">
            ·
          </span>
          <span className={isSerie ? 'text-blue-600 font-semibold' : 'text-[#D80050] font-semibold'}>
            {production.totalUnits} {production.unitType}
          </span>
        </p>
      </div>
    </article>
  );
}

interface DarkSpotlightRowProps {
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  actionLabel: string;
  onNavigate: (path: string) => void;
}

function DarkSpotlightRow({
  slug,
  title,
  subtitle,
  coverImage,
  actionLabel,
  onNavigate,
}: DarkSpotlightRowProps) {
  const resolvedCover = useProductionCover(slug, coverImage);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      onClick={() => onNavigate(`/webs/${slug}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onNavigate(`/webs/${slug}`);
        }
      }}
      className="group flex items-center gap-3.5 p-2.5 rounded-2xl bg-slate-800/45 hover:bg-slate-800/90 border border-slate-800 hover:border-slate-700 transition-colors duration-150 cursor-pointer"
    >
      <div className="w-14 h-20 rounded-xl overflow-hidden bg-slate-900 shrink-0 border border-white/10">
        {resolvedCover && !imgError ? (
          <img
            src={resolvedCover}
            alt={`Capa de ${title}`}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500">
            <Tv className="w-5 h-5" />
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-bold text-white font-brand truncate group-hover:text-rose-300 transition-colors">
          {title}
        </h4>
        <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{subtitle}</p>
        <div className="mt-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-700/80 group-hover:bg-[#D80050] text-[11px] font-bold text-slate-100 group-hover:text-white transition-colors whitespace-nowrap">
            <span>{actionLabel}</span>
            <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [showcaseFilter, setShowcaseFilter] = useState<ShowcaseFilter>('destaques');
  const [quickQuery, setQuickQuery] = useState('');
  const [spotlightTab, setSpotlightTab] = useState<SpotlightTab>('grade');
  const [catalogTab, setCatalogTab] = useState<'novelas' | 'series'>('novelas');

  const novelas = useMemo(
    () => PRODUCTIONS_DATA.filter((p) => p.category === 'Web novela'),
    []
  );
  const series = useMemo(
    () => PRODUCTIONS_DATA.filter((p) => p.category === 'Web série'),
    []
  );

  const awardedSlugs = useMemo(
    () => new Set(ALL_OFFICIAL_AWARDS_LIST.map((a) => a.slug)),
    []
  );

  // Curated 6-card poster showcase in the Hero split-canvas
  const showcaseProductions = useMemo(() => {
    const q = quickQuery.trim().toLowerCase();
    let pool: WebProduction[];

    if (q) {
      pool = PRODUCTIONS_DATA.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.author.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    } else if (showcaseFilter === 'novelas') {
      pool = novelas;
    } else if (showcaseFilter === 'series') {
      pool = series;
    } else if (showcaseFilter === 'premiadas') {
      pool = PRODUCTIONS_DATA.filter((p) => awardedSlugs.has(p.slug));
    } else {
      const prioritySlugs = [
        'amores-feridos',
        'busca-de-bercos',
        'caminho-ao-poder',
        'cold-case-brasil',
        'socio-do-amor',
        'terra-de-bravos',
      ];
      const priority = prioritySlugs
        .map((s) => PRODUCTIONS_DATA.find((p) => p.slug === s))
        .filter((p): p is WebProduction => Boolean(p));
      const rest = PRODUCTIONS_DATA.filter((p) => !prioritySlugs.includes(p.slug));
      pool = [...priority, ...rest];
    }

    return pool.slice(0, 6);
  }, [quickQuery, showcaseFilter, novelas, series, awardedSlugs]);

  // Right dark column curated rows
  const spotlightGradeItems = useMemo(() => {
    const slugs = [
      'amores-feridos',
      'rasga-mortalha-2',
      'um-novo-rei-2',
      '451',
      'nada-alem-do-seu-amor',
    ];
    return slugs
      .map((s) => PRODUCTIONS_DATA.find((p) => p.slug === s))
      .filter((p): p is WebProduction => Boolean(p));
  }, []);

  const currentCatalogList = catalogTab === 'novelas' ? novelas : series;

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-slate-900">
      <SEOHead
        title="Estúdio Webs - Web Emissora de Ficção"
        description="Plataforma oficial do Estúdio Webs: catálogo de web novelas e web séries, capítulos, episódios e autores do Mundo Virtual."
        canonicalPath="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Estúdio Webs',
          alternateName: 'estúdio.webs',
          url: window.location.origin,
          description:
            'Web Emissora de Ficção especializada na exibição e catalogação de web novelas e web séries virtuais.',
        }}
      />

      {/* =====================================================================
          1. FIRST FOLD: SPLIT EDITORIAL STAGE (Pinterest Composition x Estúdio Webs)
         ===================================================================== */}
      <section className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-12">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-[68px_minmax(0,1fr)_350px] xl:grid-cols-[72px_minmax(0,1fr)_390px]">
          {/* LEFT VERTICAL CREATOR RAIL (Desktop lg+) */}
          <aside
            aria-label="Autores Oficiais em Acesso Rápido"
            className="hidden lg:flex flex-col items-center justify-between py-6 px-2 border-r border-slate-100 bg-white"
          >
            <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-slate-400 [writing-mode:vertical-rl] rotate-180 select-none">
              Autores
            </div>

            <div className="flex flex-col items-center gap-3.5 my-auto py-4">
              {AUTHORS_DATA.map((author, index) => {
                const initials = author.name
                  .split(' ')
                  .map((part) => part[0])
                  .slice(0, 2)
                  .join('')
                  .toUpperCase();
                const palette = [
                  'bg-rose-50 text-[#D80050] border-rose-200',
                  'bg-slate-900 text-white border-slate-800',
                  'bg-blue-50 text-blue-700 border-blue-200',
                  'bg-[#512f2e] text-[#efae54] border-[#efae54]/50',
                  'bg-amber-50 text-amber-800 border-amber-200',
                  'bg-slate-100 text-slate-800 border-slate-300',
                ][index % 6];

                return (
                  <button
                    key={author.id}
                    type="button"
                    onClick={() => onNavigate(`/autores/${author.slug}`)}
                    title={`${author.name} — Ver perfil e obras`}
                    aria-label={`Perfil do autor ${author.name}`}
                    className={`w-10 h-10 rounded-full border flex items-center justify-center text-[11px] font-black font-brand transition-transform duration-150 hover:scale-110 cursor-pointer shadow-2xs ${palette}`}
                  >
                    {initials}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/autores')}
              title="Ver todos os autores"
              aria-label="Ver todos os autores"
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#D80050] text-slate-600 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </aside>

          {/* CENTER LIGHT EDITORIAL STAGE */}
          <div className="p-5 sm:p-8 lg:p-10 flex flex-col justify-between bg-white">
            <div>
              {/* Kicker + Stats Summary */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#D80050]">
                  Web Emissora de Ficção · Mundo Virtual
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {PRODUCTIONS_DATA.length} obras oficiais · Leitura gratuita
                </span>
              </div>

              {/* Expressive Editorial Headline */}
              <h1 className="text-3xl sm:text-4xl xl:text-[42px] font-black text-slate-950 font-brand tracking-tight leading-[1.08] text-balance">
                Explorar histórias que ganham vida em cada capítulo.
              </h1>

              <p className="mt-2.5 text-sm text-slate-600 font-reading leading-relaxed max-w-2xl">
                Web novelas, web séries digitais, estreias e roteiros originais do Mundo Virtual reunidos em um catálogo editorial completo.
              </p>

              {/* Inline Search & Clean Category Filter Strip (Pinterest-inspired utility bar) */}
              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <div className="relative flex-1 min-w-[200px] sm:max-w-xs">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={quickQuery}
                    onChange={(e) => setQuickQuery(e.target.value)}
                    placeholder="Filtrar título ou autor..."
                    aria-label="Filtrar produções por título ou autor"
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200/70 focus:bg-white border border-slate-200/90 focus:border-[#D80050] text-xs font-semibold text-slate-900 placeholder:text-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {(
                    [
                      { key: 'destaques', label: 'Destaques' },
                      { key: 'novelas', label: `Web Novelas (${novelas.length})` },
                      { key: 'series', label: `Web Séries (${series.length})` },
                      { key: 'premiadas', label: 'Premiadas' },
                    ] as const
                  ).map((item) => {
                    const active = showcaseFilter === item.key && !quickQuery.trim();
                    return (
                      <button
                        key={item.key}
                        type="button"
                        onClick={() => {
                          setQuickQuery('');
                          setShowcaseFilter(item.key);
                        }}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          active
                            ? 'bg-slate-950 text-white'
                            : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                        }`}
                      >
                        {item.label}
                      </button>
                    );
                  })}

                  <button
                    type="button"
                    onClick={() => onNavigate('/webs')}
                    className="px-3.5 py-2 rounded-xl text-xs font-bold text-[#D80050] hover:bg-rose-50 border border-rose-200/80 transition-colors whitespace-nowrap shrink-0 cursor-pointer inline-flex items-center gap-1"
                  >
                    <span>Catálogo Completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* 3-COLUMN PORTRAIT POSTER GRID */}
            <div className="mt-7">
              {showcaseProductions.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  {showcaseProductions.map((prod) => (
                    <PosterShowcaseCard
                      key={prod.id}
                      production={prod}
                      onNavigate={onNavigate}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-14 text-center rounded-2xl border border-dashed border-slate-200 bg-slate-50">
                  <p className="text-sm font-bold text-slate-700">
                    Nenhuma produção encontrada para &ldquo;{quickQuery}&rdquo;.
                  </p>
                  <button
                    type="button"
                    onClick={() => setQuickQuery('')}
                    className="mt-3 text-xs font-bold text-[#D80050] hover:underline cursor-pointer"
                  >
                    Limpar filtro e mostrar destaques
                  </button>
                </div>
              )}

              {/* Mobile & Tablet Horizontal Author Quick Strip */}
              <div className="mt-7 pt-5 border-t border-slate-100 flex lg:hidden items-center justify-between gap-3 overflow-x-auto no-scrollbar">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 shrink-0">
                  Autores:
                </span>
                <div className="flex items-center gap-2">
                  {AUTHORS_DATA.map((author) => (
                    <button
                      key={author.id}
                      type="button"
                      onClick={() => onNavigate(`/autores/${author.slug}`)}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-rose-50 text-xs font-bold text-slate-700 hover:text-[#D80050] whitespace-nowrap shrink-0 transition-colors"
                    >
                      {author.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTRASTING DARK EDITORIAL COLUMN */}
          <aside className="bg-[#0f172a] text-white p-5 sm:p-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              {/* Top Utility Strip inside Dark Column */}
              <div className="flex items-center justify-between gap-2 pb-5 border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('/sala-de-imprensa')}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-bold text-slate-200 hover:text-[#FFDD00] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <Newspaper className="w-3.5 h-3.5 text-[#FFDD00]" />
                    <span>Imprensa</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('/vem-ai')}
                    className="px-3 py-1.5 rounded-lg bg-[#D80050] hover:bg-[#be0044] text-[11px] font-extrabold text-white transition-colors inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Vem Aí</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('/comunidade')}
                  className="px-2.5 py-1.5 rounded-lg bg-[#512f2e] text-[#efae54] border border-[#efae54]/40 hover:border-[#efae54] text-[11px] font-extrabold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer"
                >
                  Comunidade
                </button>
              </div>

              {/* Column Heading & Mode Toggle */}
              <div className="mt-6 flex items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg font-extrabold text-white font-brand tracking-tight">
                    Na Grade da Emissora
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Seleção editorial & obras premiadas
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 p-1 rounded-xl bg-slate-900 border border-slate-800">
                <button
                  type="button"
                  onClick={() => setSpotlightTab('grade')}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    spotlightTab === 'grade'
                      ? 'bg-[#D80050] text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Em Cartaz
                </button>
                <button
                  type="button"
                  onClick={() => setSpotlightTab('premiadas')}
                  className={`py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                    spotlightTab === 'premiadas'
                      ? 'bg-[#D80050] text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Premiadas ({ALL_OFFICIAL_AWARDS_LIST.length})
                </button>
              </div>

              {/* Vertical Stack of Horizontal Media Rows */}
              <div className="mt-4 space-y-3">
                {spotlightTab === 'grade'
                  ? spotlightGradeItems.map((item) => (
                      <DarkSpotlightRow
                        key={item.id}
                        slug={item.slug}
                        title={item.title}
                        subtitle={`${item.author} · ${
                          item.slug === 'amores-feridos'
                            ? 'Estreia 11/01'
                            : `${item.totalUnits} ${item.unitType}`
                        }`}
                        coverImage={item.coverImage || ''}
                        actionLabel="Ler Obra"
                        onNavigate={onNavigate}
                      />
                    ))
                  : ALL_OFFICIAL_AWARDS_LIST.slice(0, 5).map((award) => (
                      <DarkSpotlightRow
                        key={award.slug}
                        slug={award.slug}
                        title={award.title}
                        subtitle={`${award.festivalOrAward} · ${award.author}`}
                        coverImage={award.coverImage}
                        actionLabel="Ver Prêmio"
                        onNavigate={onNavigate}
                      />
                    ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/90 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-slate-400">
                {novelas.length} novelas · {series.length} séries
              </span>
              <button
                type="button"
                onClick={() => onNavigate('/webs')}
                className="text-xs font-bold text-rose-400 hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Ver todas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================================
          2. FEATURED PROGRAMMING PANORAMA CAROUSEL
         ===================================================================== */}
      <FeaturedProgrammingCarousel onNavigate={onNavigate} />

      {/* =====================================================================
          3. ASYMMETRIC EDITORIAL DUO: VEM AÍ × COMUNIDADE
         ===================================================================== */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* VEM AÍ BLOCK (5 Columns) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#D80050] inline-flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Grade Futura</span>
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {UPCOMING_PRODUCTIONS_DATA.length} estreias
                </span>
              </div>

              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-slate-950 font-brand tracking-tight">
                Vem Aí no Estúdio Webs
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-reading leading-relaxed">
                Novas web novelas em preparação para as próximas temporadas da web emissora, com estreias em breve.
              </p>

              {/* Poster strip */}
              <div className="mt-6 grid grid-cols-5 gap-2.5">
                {UPCOMING_PRODUCTIONS_DATA.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate('/vem-ai')}
                    title={`Estreia #${idx + 1} — Ver em Vem Aí`}
                    className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer"
                  >
                    <img
                      src={item.coverImage}
                      alt={item.altText}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500">
                Estreias em breve · Datas a definir
              </span>
              <button
                type="button"
                onClick={() => onNavigate('/vem-ai')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-950 hover:bg-[#D80050] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Conferir</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* COMUNIDADE SPOTLIGHT BLOCK (7 Columns - Authentic Wine/Gold Identity) */}
          <div className="lg:col-span-7 bg-[#512f2e] text-white rounded-3xl border border-[#efae54]/30 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#efae54]">
                  Espaço Exclusivo · Mini Séries em PDF
                </span>
                <span className="text-xs font-semibold text-[#efae54]/80">
                  {COMMUNITY_STORIES.length} produções originais
                </span>
              </div>

              <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white font-brand tracking-tight">
                Comunidade Estúdio Webs
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-rose-100/85 font-reading leading-relaxed max-w-2xl">
                Leia mini séries e dramas selecionados diretamente na página da comunidade, com episódios completos em PDF para leitura em tela ou download.
              </p>

              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                {COMMUNITY_STORIES.map((story) => (
                  <button
                    key={story.id}
                    type="button"
                    onClick={() => onNavigate(`/comunidade/${story.slug}`)}
                    className="group text-left cursor-pointer focus:outline-none"
                  >
                    <div className="aspect-[2/3] w-full rounded-xl overflow-hidden bg-black/30 border border-[#efae54]/25 group-hover:border-[#efae54] transition-colors">
                      <img
                        src={story.coverVertical}
                        alt={story.title}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                    </div>
                    <h3 className="mt-2 text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-[#efae54] transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-[11px] text-[#efae54]/80">
                      {story.totalEpisodes} episódios · {story.category}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-rose-100/75 font-medium">
                Leitura imersiva com suporte a PDF preservado
              </span>
              <button
                type="button"
                onClick={() => onNavigate('/comunidade')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#efae54] hover:bg-[#f4bd6e] text-[#321b1a] text-xs font-black uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Acessar Comunidade</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. FULL CATALOG SECTION WITH TABS (WEB NOVELAS & WEB SÉRIES)
         ===================================================================== */}
      <section id="secao-obras" className="py-12 sm:py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest mb-1.5">
                {catalogTab === 'novelas' ? (
                  <span className="flex items-center gap-1.5 text-[#D80050]">
                    <BookOpen className="w-4 h-4" />
                    <span>Mundo Virtual · Histórias em Capítulos</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-blue-600">
                    <Film className="w-4 h-4" />
                    <span>Séries Digitais · Temporadas e Episódios</span>
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-brand tracking-tight">
                {catalogTab === 'novelas' ? 'WEB NOVELAS' : 'WEB SÉRIES'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {catalogTab === 'novelas'
                  ? `${novelas.length} web novelas completas do nosso Mundo Virtual disponíveis para leitura.`
                  : `${series.length} web séries dinâmicas e finalizadas com todos os episódios disponíveis.`}
              </p>
            </div>

            <div className="flex items-center p-1.5 bg-slate-100 rounded-2xl border border-slate-200 sm:w-auto w-full">
              <button
                type="button"
                onClick={() => setCatalogTab('novelas')}
                className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer ${
                  catalogTab === 'novelas'
                    ? 'bg-[#D80050] text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Web Novelas ({novelas.length})</span>
              </button>

              <button
                type="button"
                onClick={() => setCatalogTab('series')}
                className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer ${
                  catalogTab === 'series'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-700 hover:text-slate-950'
                }`}
              >
                <Film className="w-4 h-4" />
                <span>Web Séries ({series.length})</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentCatalogList.slice(0, 8).map((production) => (
              <WebCard
                key={production.id}
                production={production}
                onNavigate={onNavigate}
              />
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                onNavigate(
                  catalogTab === 'novelas'
                    ? '/webs?categoria=Web%20novela'
                    : '/webs?categoria=Web%20série'
                )
              }
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-950 hover:bg-[#D80050] text-white font-extrabold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span>
                Ver todas as {catalogTab === 'novelas' ? `${novelas.length} Web Novelas` : `${series.length} Web Séries`}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/categorias')}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              <span>Explorar por Categorias</span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. PREMIAÇÕES OFICIAIS & SALA DE IMPRENSA
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#D80050] inline-flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Reconhecimento Internacional e Nacional</span>
            </span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-950 font-brand tracking-tight">
              Obras Premiadas & Sala de Imprensa
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/sala-de-imprensa')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFDD00] hover:bg-amber-300 text-slate-950 text-xs font-black uppercase tracking-wider transition-colors self-start sm:self-auto cursor-pointer"
          >
            <Newspaper className="w-4 h-4" />
            <span>Acessar Sala de Imprensa</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ALL_OFFICIAL_AWARDS_LIST.map((award) => {
            const matchedProd = PRODUCTIONS_DATA.find((p) => p.slug === award.slug);
            const originalCover = matchedProd?.coverImage || award.coverImage;
            return (
              <div
                key={award.slug}
                onClick={() => onNavigate(`/webs/${award.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onNavigate(`/webs/${award.slug}`);
                  }
                }}
                className="group bg-white hover:bg-slate-50 rounded-2xl border border-slate-200/90 hover:border-slate-300 p-5 flex items-start gap-4 transition-all duration-150 cursor-pointer shadow-2xs hover:shadow-md"
              >
                <img
                  src={originalCover}
                  alt={award.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-16 h-24 rounded-xl object-cover shrink-0 border border-slate-200"
                />
                <div className="min-w-0">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#D80050]">
                    {award.festivalOrAward}
                  </div>
                  <h3 className="mt-1 text-base font-extrabold text-slate-950 font-brand group-hover:text-[#D80050] transition-colors line-clamp-1">
                    {award.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 font-reading line-clamp-3 leading-relaxed">
                    {award.awardText}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          6. AUTORES DO ESTÚDIO WEBS
         ===================================================================== */}
      <section className="bg-white py-14 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
            <div>
              <div className="text-xs font-extrabold text-[#D80050] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>Nossos Criadores</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-brand uppercase tracking-tight">
                Autores Oficiais
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('/autores')}
              className="text-xs text-[#D80050] hover:text-[#be0044] font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Ver Todos</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUTHORS_DATA.map((author) => {
              const counts = getAuthorWorksCount(author.name);
              return (
                <div
                  key={author.id}
                  onClick={() => onNavigate(`/autores/${author.slug}`)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onNavigate(`/autores/${author.slug}`);
                    }
                  }}
                  className="p-5 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200/90 hover:border-slate-300 cursor-pointer transition-all duration-150 shadow-2xs hover:shadow-md group flex items-center justify-between"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-[#D80050] font-black text-lg group-hover:scale-105 transition-transform">
                      {author.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-950 text-base group-hover:text-[#D80050] transition-colors">
                        {author.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        <strong className="text-slate-800">{counts.total} obras</strong>{' '}
                        <span className="text-slate-500">
                          · {counts.novelas} novelas · {counts.series} séries
                        </span>
                      </p>
                    </div>
                  </div>

                  <span className="p-2 rounded-xl bg-white border border-slate-200 text-slate-500 group-hover:text-white group-hover:bg-[#D80050] group-hover:border-[#D80050] transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. EDITORIAL CTA: ENVIE SEU PROJETO
         ===================================================================== */}
      <section className="py-14 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#0f172a] border border-slate-800 p-8 sm:p-12 overflow-hidden shadow-xl text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-rose-400 mb-3">
              Espaço Aberto para Roteiristas
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white font-brand tracking-tight mb-3 text-balance">
              Tem uma Web Série ou Web Novela original?
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed font-reading">
              O Estúdio Webs apoia e divulga a produção independente do Mundo Virtual na web emissora.
              Envie a sinopse e o projeto da sua obra para análise da nossa equipe editorial.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('/envie-seu-projeto')}
              className="px-6 py-3.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-extrabold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-[#D80050]/25 inline-flex items-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Submeter Projeto de Ficção</span>
            </button>
            <button
              type="button"
              onClick={() => onNavigate('/sobre')}
              className="px-5 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Conheça a Emissora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
