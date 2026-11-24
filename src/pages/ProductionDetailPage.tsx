import React, { useMemo, useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Film,
  Globe,
  Headphones,
  Image as ImageIcon,
  ImagePlus,
  LayoutGrid,
  List as ListIcon,
  Play,
  Search,
  Share2,
  SlidersHorizontal,
  Star,
  Tv,
  User,
  X
} from 'lucide-react';
import { AgeRatingBadgeButton } from '../components/AgeRatingBadgeButton';
import { AwardedWebsModal } from '../components/AwardedWebsModal';
import { ImageUploadModal } from '../components/ImageUploadModal';
import { ProductionExtrasModal } from '../components/ProductionExtrasModal';
import { SEOHead } from '../components/SEOHead';
import { WebCard } from '../components/WebCard';
import { getAuthorBySlug } from '../data/authors';
import { getProductionAward } from '../data/awardsData';
import { getProductionBySlug, PRODUCTIONS_DATA } from '../data/productions';
import { useProductionCover } from '../utils/imageManager';
import { useManager } from '../utils/managerAuth';
import {
  CastMember,
  getYouTubeEmbedUrl,
  getYouTubeThumbnailUrl,
  MediaGalleryItem,
  useProductionExtras,
  useProductionRating
} from '../utils/productionExtras';
import { calculateReadingTimeMinutes, formatReadingTime } from '../utils/readingTime';

interface ProductionDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

function parseReleaseBadgeParts(
  status: string,
  releaseDateText?: string,
  releaseYear?: string
): { day: string; monthYear: string } | null {
  if (releaseDateText) {
    const tokens = releaseDateText.trim().split(/\s+/);
    if (tokens.length >= 2) {
      return {
        day: tokens[0],
        monthYear: tokens.slice(1).join(' '),
      };
    }
    return { day: releaseDateText, monthYear: 'Estreia' };
  }

  if (status.includes('11 de Janeiro')) {
    return { day: '11', monthYear: 'Jan · Estreia' };
  }

  if (releaseYear) {
    return { day: releaseYear, monthYear: status === 'Finalizada' ? 'Completa' : 'Estúdio Webs' };
  }

  return {
    day: status === 'Finalizada' ? 'Oficial' : 'Breve',
    monthYear: status === 'Finalizada' ? 'Finalizada' : status,
  };
}

export function ProductionDetailPage({ slug, onNavigate }: ProductionDetailPageProps) {
  const { isManager } = useManager();
  const production = getProductionBySlug(slug);

  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [isExtrasModalOpen, setIsExtrasModalOpen] = useState(false);
  const [isAwardsModalOpen, setIsAwardsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Interactive chapters browser state
  const [episodeQuery, setEpisodeQuery] = useState('');
  const [selectedRangeIndex, setSelectedRangeIndex] = useState<number>(0); // 0 = All
  const [episodeViewMode, setEpisodeViewMode] = useState<'list' | 'grid'>('list');

  // Cast & Media Lightbox states
  const [selectedCastMember, setSelectedCastMember] = useState<CastMember | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number | null>(null);

  const resolvedSlug = production?.slug || slug;
  const { extras, updateExtras } = useProductionExtras(resolvedSlug);
  const { userRating, rateProduction } = useProductionRating(resolvedSlug);
  const [hoverStar, setHoverStar] = useState<number>(0);

  // Reset filters when navigating between productions
  useEffect(() => {
    setEpisodeQuery('');
    setSelectedRangeIndex(0);
    setActiveGalleryIndex(null);
    setSelectedCastMember(null);
  }, [slug]);

  const coverImage = useProductionCover(resolvedSlug, production?.coverImage);

  // Build unified Media Gallery (Trailer + Cover + Episode Videos + Custom Gallery)
  const galleryItems = useMemo<MediaGalleryItem[]>(() => {
    if (!production) return [];
    const items: MediaGalleryItem[] = [];

    if (extras.trailerUrl) {
      items.push({
        id: 'trailer-principal',
        type: 'video',
        title: `Trailer Oficial — ${production.title}`,
        category: 'Trailer',
        url: extras.trailerUrl,
        thumbnailUrl: getYouTubeThumbnailUrl(extras.trailerUrl) || coverImage || undefined,
      });
    }

    if (coverImage) {
      items.push({
        id: 'capa-oficial',
        type: 'image',
        title: `Pôster Oficial — ${production.title}`,
        category: 'Arte Oficial',
        url: coverImage,
        thumbnailUrl: coverImage,
      });
    }

    production.episodes.forEach((ep) => {
      if (ep.videoUrl) {
        items.push({
          id: `ep-video-${ep.slug}`,
          type: 'video',
          title: `${ep.label}${ep.title && ep.title !== ep.label ? ` · ${ep.title}` : ''}`,
          category: 'Episódio em Vídeo',
          url: ep.videoUrl,
          thumbnailUrl: getYouTubeThumbnailUrl(ep.videoUrl) || coverImage || undefined,
        });
      }
    });

    if (extras.mediaGallery && extras.mediaGallery.length > 0) {
      items.push(...extras.mediaGallery);
    }

    return items;
  }, [production, extras.trailerUrl, extras.mediaGallery, coverImage]);

  // Keyboard navigation for gallery lightbox
  useEffect(() => {
    if (activeGalleryIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveGalleryIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveGalleryIndex((prev) =>
          prev === null ? null : (prev + 1) % galleryItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveGalleryIndex((prev) =>
          prev === null ? null : (prev - 1 + galleryItems.length) % galleryItems.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeGalleryIndex, galleryItems.length]);

  // Dynamic ranges for long episode lists (> 10 units)
  const rangeBuckets = useMemo(() => {
    const episodes = production?.episodes || [];
    const total = episodes.length;
    if (total <= 10) return [];
    const step = 10;
    const buckets: Array<{ label: string; start: number; end: number }> = [];
    for (let i = 0; i < total; i += step) {
      const startNum = i + 1;
      const endNum = Math.min(i + step, total);
      buckets.push({
        label: `${String(startNum).padStart(2, '0')}–${String(endNum).padStart(2, '0')}`,
        start: i,
        end: Math.min(i + step, total),
      });
    }
    return buckets;
  }, [production]);

  const filteredEpisodes = useMemo(() => {
    const episodes = production?.episodes || [];
    const q = episodeQuery.trim().toLowerCase();
    if (q) {
      return episodes.filter(
        (ep) =>
          ep.label.toLowerCase().includes(q) ||
          (ep.title || '').toLowerCase().includes(q) ||
          (ep.summary || '').toLowerCase().includes(q) ||
          String(ep.number).includes(q)
      );
    }

    if (rangeBuckets.length > 0 && selectedRangeIndex > 0) {
      const bucket = rangeBuckets[selectedRangeIndex - 1];
      if (bucket) {
        return episodes.slice(bucket.start, bucket.end);
      }
    }

    return episodes;
  }, [production, episodeQuery, rangeBuckets, selectedRangeIndex]);

  if (!production) {
    return (
      <div className="min-h-[70vh] bg-white flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-950 mb-2 font-brand">
          Produção Não Encontrada
        </h2>
        <p className="text-sm text-slate-600 mb-6">
          A obra solicitada não existe em nosso catálogo de produções oficiais.
        </p>
        <button
          type="button"
          onClick={() => onNavigate('/webs')}
          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          Voltar ao Catálogo
        </button>
      </div>
    );
  }

  const isSerie = production.category === 'Web série';
  const unitLabelSingular = isSerie ? 'Episódio' : 'Capítulo';
  const firstEpisodeSlug =
    production.episodes[0]?.slug || (isSerie ? 'episodio-01' : 'capitulo-01');
  const awardInfo = getProductionAward(production.slug);
  const authorSlug = production.author.toLowerCase().replace(/\s+/g, '-');
  const officialAuthor = getAuthorBySlug(authorSlug);

  const avgReadingMinutes = Math.max(
    1,
    Math.round(
      production.episodes.reduce(
        (acc, ep) => acc + calculateReadingTimeMinutes(ep, production.category),
        0
      ) / (production.episodes.length || 1)
    )
  );

  const hasPdfScripts = production.episodes.some(
    (e) => (e.pdfPages && e.pdfPages.length > 0) || Boolean(e.pdfUrl)
  );

  const releaseBadge = parseReleaseBadgeParts(
    production.status,
    extras.releaseDateText,
    production.releaseYear
  );

  const hasTrailerOrVideo = galleryItems.some((item) => item.type === 'video');

  // Cast list: registered cast members + Official Author
  const castList: CastMember[] = [
    ...(extras.cast || []),
    {
      id: `author-${authorSlug}`,
      actorName: production.author,
      characterName: 'Autoria & Roteiro',
      authorSlug: officialAuthor ? officialAuthor.slug : undefined,
      bio:
        officialAuthor?.bio ||
        `Criador(a) e roteirista responsável por ${production.title} no Estúdio Webs.`,
    },
  ];

  const relatedWorks = PRODUCTIONS_DATA.filter(
    (p) =>
      p.id !== production.id &&
      (p.author === production.author || p.category === production.category)
  ).slice(0, 4);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenTrailer = () => {
    const videoIndex = galleryItems.findIndex((i) => i.type === 'video');
    if (videoIndex !== -1) {
      setActiveGalleryIndex(videoIndex);
    }
  };

  const seoTitle = `${production.title} | Estúdio Webs`;
  const seoDescription = `Conheça ${production.title}, ${production.category.toLowerCase()} de ${production.author}, com ${production.totalUnits} ${production.unitType}. Estúdio Webs.`;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/webs/${production.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': isSerie ? 'TVSeries' : 'CreativeWork',
          name: production.title,
          author: {
            '@type': 'Person',
            name: production.author,
          },
          description: production.synopsis,
          numberOfEpisodes: production.totalUnits,
          genre: extras.genreDetail || production.category,
          publisher: {
            '@type': 'Organization',
            name: extras.broadcaster || 'Estúdio Webs',
          },
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Top Breadcrumb & Quick Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-slate-200/80">
          <nav
            aria-label="Navegação estrutural"
            className="flex items-center gap-2 text-xs text-slate-500 flex-wrap"
          >
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Início
            </button>
            <span aria-hidden="true" className="text-slate-300">
              /
            </span>
            <button
              type="button"
              onClick={() => onNavigate('/webs')}
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              Produções
            </button>
            <span aria-hidden="true" className="text-slate-300">
              /
            </span>
            <button
              type="button"
              onClick={() =>
                onNavigate(`/webs?categoria=${encodeURIComponent(production.category)}`)
              }
              className="hover:text-slate-950 transition-colors cursor-pointer"
            >
              {isSerie ? 'Séries' : 'Novelas'}
            </button>
            <span aria-hidden="true" className="text-slate-300">
              /
            </span>
            <span className="text-blue-600 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {production.title}
            </span>
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:text-slate-950 transition-colors cursor-pointer whitespace-nowrap"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Share2 className="w-3.5 h-3.5 text-slate-500" />
              )}
              <span>{copied ? 'Link Copiado' : 'Compartilhar'}</span>
            </button>

            {isManager && (
              <button
                type="button"
                onClick={() => setIsExtrasModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors cursor-pointer whitespace-nowrap"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Gerenciar Ficha</span>
              </button>
            )}
          </div>
        </div>

        {/* ===================================================================
            2. MAIN PRODUCTION TWO-COLUMN AREA (POSTER LEFT + INFO RIGHT)
           =================================================================== */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start pb-12 border-b border-slate-200/80">
          {/* LEFT COLUMN — LARGE VERTICAL POSTER */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-[430px] mx-auto lg:mx-0 aspect-[2/3] rounded-2xl overflow-hidden bg-slate-100 shadow-lg border border-slate-200/80 group">
              {coverImage ? (
                <img
                  src={coverImage}
                  alt={`Cartaz oficial de ${production.title}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-100 to-slate-200">
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    {isSerie ? <Film className="w-8 h-8" /> : <BookOpen className="w-8 h-8" />}
                  </div>
                  <p className="text-xl font-black text-slate-900 font-brand">
                    {production.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">por {production.author}</p>
                </div>
              )}

              {/* Blue Date / Release Overlay Badge (Top Left) */}
              {releaseBadge && (
                <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-xl px-3.5 py-2 shadow-lg pointer-events-none select-none">
                  <div className="text-lg font-black font-brand leading-none tabular-nums">
                    {releaseBadge.day}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-100 mt-1">
                    {releaseBadge.monthYear}
                  </div>
                </div>
              )}

              {/* Blue Play Button (Bottom Right, rendered when trailer/video is available) */}
              {hasTrailerOrVideo && (
                <button
                  type="button"
                  onClick={handleOpenTrailer}
                  title="Assistir ao trailer ou vídeo da produção"
                  aria-label="Reproduzir trailer"
                  className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl flex items-center justify-center transition-transform duration-150 hover:scale-105 cursor-pointer"
                >
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </button>
              )}

              {/* Manager Cover Shortcut */}
              {isManager && (
                <button
                  type="button"
                  onClick={() => setIsUploadOpen(true)}
                  className="absolute top-4 right-4 px-2.5 py-1.5 rounded-lg bg-slate-950/85 hover:bg-blue-600 text-white text-[11px] font-bold inline-flex items-center gap-1.5 backdrop-blur-xs transition-colors cursor-pointer"
                  title="Alterar cartaz oficial por URL"
                >
                  <ImagePlus className="w-3.5 h-3.5" />
                  <span>Alterar Capa</span>
                </button>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN — STRUCTURED PRODUCTION DETAILS */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Format Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              <span>{production.category}</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="text-slate-500">{production.status}</span>
            </div>

            {/* 1. Título */}
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 font-brand tracking-tight leading-[1.08] text-balance">
              {production.title}
            </h1>

            {/* 2. Informações Gerais (Clean editorial definition grid, zero pill clutter) */}
            <dl className="mt-7 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-5 py-6 border-y border-slate-200/80">
              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Gênero
                </dt>
                <dd className="mt-1 text-sm font-bold text-slate-900">
                  {extras.genreDetail || production.category}
                </dd>
              </div>

              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Nacionalidade
                </dt>
                <dd className="mt-1 text-sm font-bold text-slate-900 inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-slate-400" />
                  <span>{extras.nationality || 'Brasil'}</span>
                </dd>
              </div>

              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Idioma
                </dt>
                <dd className="mt-1 text-sm font-bold text-slate-900">
                  {extras.language || 'Português'}
                </dd>
              </div>

              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Lançamento
                </dt>
                <dd className="mt-1 text-sm font-bold text-slate-900 tabular-nums">
                  {extras.releaseDateText ||
                    production.releaseYear ||
                    (production.status.includes('11 de Janeiro')
                      ? '11 de Janeiro'
                      : 'Catálogo Oficial')}
                </dd>
              </div>

              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Extensão & Duração
                </dt>
                <dd className="mt-1 text-sm font-bold text-slate-900 tabular-nums">
                  {production.totalUnits} {production.unitType} · ~{avgReadingMinutes} min/{isSerie ? 'ep.' : 'cap.'}
                </dd>
              </div>

              <div>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Classificação
                </dt>
                <dd>
                  <AgeRatingBadgeButton
                    productionSlug={production.slug}
                    productionTitle={production.title}
                    productionCategory={production.category}
                    variant="badge"
                  />
                </dd>
              </div>
            </dl>

            {/* 3. Avaliação */}
            <div className="py-5 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Avaliação do Público
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1" role="group" aria-label="Avaliar produção">
                    {[1, 2, 3, 4, 5].map((starValue) => {
                      const active = (hoverStar || userRating) >= starValue;
                      return (
                        <button
                          key={starValue}
                          type="button"
                          onMouseEnter={() => setHoverStar(starValue)}
                          onMouseLeave={() => setHoverStar(0)}
                          onClick={() => rateProduction(starValue)}
                          aria-label={`Avaliar com ${starValue} estrela${starValue > 1 ? 's' : ''}`}
                          className="p-0.5 transition-transform hover:scale-110 cursor-pointer"
                        >
                          <Star
                            className={`w-5 h-5 transition-colors ${
                              active
                                ? 'fill-blue-600 text-blue-600'
                                : 'text-slate-300 hover:text-blue-400'
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>

                  <span className="text-sm font-extrabold text-slate-950 tabular-nums">
                    {userRating > 0 ? `${userRating}.0 / 5.0` : 'Avalie esta obra'}
                  </span>
                </div>
              </div>

              {/* Official Award Indicator if present */}
              {awardInfo && (
                <button
                  type="button"
                  onClick={() => setIsAwardsModalOpen(true)}
                  className="text-left group inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200/80 transition-colors cursor-pointer"
                  title="Ver premiações oficiais"
                >
                  <Star className="w-4 h-4 fill-blue-600 text-blue-600 shrink-0" />
                  <div className="text-xs">
                    <span className="font-extrabold text-blue-700 block">
                      {awardInfo.festivalOrAward}
                    </span>
                    <span className="text-slate-600 line-clamp-1 max-w-[240px]">
                      Obra Premiada · Ver detalhes
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-blue-600 shrink-0" />
                </button>
              )}
            </div>

            {/* 4. Emissora / Plataforma */}
            <div className="py-5 border-b border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Emissora / Plataforma
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-950">
                  <Tv className="w-4 h-4 text-blue-600" />
                  <span>{extras.broadcaster || 'Estúdio Webs'}</span>
                  <span aria-hidden="true" className="text-slate-300">
                    ·
                  </span>
                  <span className="font-medium text-slate-600">
                    Autoria de{' '}
                    {officialAuthor ? (
                      <button
                        type="button"
                        onClick={() => onNavigate(`/autores/${officialAuthor.slug}`)}
                        className="font-bold text-slate-950 hover:text-blue-600 underline underline-offset-4 decoration-slate-300 cursor-pointer"
                      >
                        {production.author}
                      </button>
                    ) : (
                      <span className="font-bold text-slate-950">{production.author}</span>
                    )}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                {hasPdfScripts && (
                  <span className="inline-flex items-center gap-1.5 text-slate-700">
                    <FileText className="w-3.5 h-3.5 text-blue-600" />
                    <span>Roteiros em PDF</span>
                  </span>
                )}
                <span className="inline-flex items-center gap-1.5 text-slate-700">
                  <Headphones className="w-3.5 h-3.5 text-blue-600" />
                  <span>Áudio PCD</span>
                </span>
              </div>
            </div>

            {/* 5. Primary Action Bar */}
            <div className="pt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigate(`/webs/${production.slug}/${firstEpisodeSlug}`)}
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ler {unitLabelSingular} 01</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onNavigate(`/webs/${production.slug}/${firstEpisodeSlug}?audio=true`)
                }
                className="px-5 py-3.5 rounded-xl border border-slate-200 hover:border-blue-600 bg-white hover:bg-blue-50/40 text-slate-800 hover:text-blue-700 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Headphones className="w-4 h-4 text-blue-600" />
                <span>Ouvir em Áudio</span>
              </button>

              {hasTrailerOrVideo && (
                <button
                  type="button"
                  onClick={handleOpenTrailer}
                  className="px-5 py-3.5 rounded-xl border border-slate-200 hover:border-blue-600 bg-white text-slate-800 hover:text-blue-700 font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap"
                >
                  <Play className="w-4 h-4 text-blue-600" />
                  <span>Assistir Trailer</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => onNavigate('/webs')}
                className="px-4 py-3.5 rounded-xl text-slate-500 hover:text-slate-950 font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Catálogo</span>
              </button>
            </div>
          </div>
        </section>

        {/* ===================================================================
            3. ELENCO & CRIAÇÃO
           =================================================================== */}
        <section className="py-10 border-b border-slate-200/80">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-950">
              Elenco & Criação
            </h2>
            {isManager && (
              <button
                type="button"
                onClick={() => setIsExtrasModalOpen(true)}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                + Gerenciar elenco
              </button>
            )}
          </div>

          <div className="flex items-start gap-6 overflow-x-auto pb-2">
            {castList.map((member) => {
              const initials = member.actorName
                .split(' ')
                .map((p) => p[0])
                .slice(0, 2)
                .join('')
                .toUpperCase();

              return (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => {
                    if (member.authorSlug) {
                      onNavigate(`/autores/${member.authorSlug}`);
                    } else {
                      setSelectedCastMember(member);
                    }
                  }}
                  className="group flex flex-col items-center text-center min-w-[96px] max-w-[110px] shrink-0 cursor-pointer focus:outline-none"
                >
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 border border-slate-200 group-hover:border-blue-600 group-hover:ring-2 group-hover:ring-blue-600/20 flex items-center justify-center transition-all duration-150">
                    {member.photoUrl ? (
                      <img
                        src={member.photoUrl}
                        alt={member.actorName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-sm font-black text-slate-700 group-hover:text-blue-600 font-brand">
                        {initials}
                      </span>
                    )}
                  </div>
                  <span className="mt-2.5 text-xs font-bold text-slate-950 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {member.actorName}
                  </span>
                  {member.characterName && (
                    <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                      {member.characterName}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* ===================================================================
            4. SINOPSE
           =================================================================== */}
        <section className="py-10 border-b border-slate-200/80">
          <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-950 mb-4">
            Sinopse
          </h2>
          <p className="max-w-3xl text-base sm:text-[17px] text-slate-700 leading-relaxed font-reading whitespace-pre-line text-left">
            {production.synopsis}
          </p>
        </section>

        {/* ===================================================================
            5. CAPÍTULOS / EPISÓDIOS (DINÂMICO E ORGANIZADO, SEM REMOVER ARQUIVOS)
           =================================================================== */}
        <section id="lista-episodios" className="py-10 border-b border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600">
                Roteiros & Leitura Oficial
              </span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-black text-slate-950 font-brand tracking-tight">
                {isSerie ? 'Episódios' : 'Capítulos'} ({production.totalUnits})
              </h2>
            </div>

            {/* Dynamic Filter, Range & View Mode Toolbar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="relative min-w-[210px] sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={episodeQuery}
                  onChange={(e) => setEpisodeQuery(e.target.value)}
                  placeholder={`Buscar ${unitLabelSingular.toLowerCase()} ou resumo...`}
                  aria-label={`Filtrar ${production.unitType}`}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 focus:bg-white border border-slate-200 focus:border-blue-600 text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200">
                <button
                  type="button"
                  onClick={() => setEpisodeViewMode('list')}
                  title="Visualização em lista organizada"
                  aria-label="Modo lista"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    episodeViewMode === 'list'
                      ? 'bg-white text-blue-600 shadow-2xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <ListIcon className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setEpisodeViewMode('grid')}
                  title="Visualização em grade"
                  aria-label="Modo grade"
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    episodeViewMode === 'grid'
                      ? 'bg-white text-blue-600 shadow-2xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Range Tabs for long novels/series */}
          {rangeBuckets.length > 0 && !episodeQuery.trim() && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-2">
              <button
                type="button"
                onClick={() => setSelectedRangeIndex(0)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  selectedRangeIndex === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                Todos ({production.episodes.length})
              </button>
              {rangeBuckets.map((bucket, idx) => (
                <button
                  key={bucket.label}
                  type="button"
                  onClick={() => setSelectedRangeIndex(idx + 1)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold tabular-nums whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                    selectedRangeIndex === idx + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                  }`}
                >
                  {bucket.label}
                </button>
              ))}
            </div>
          )}

          {/* Filtered Empty State */}
          {filteredEpisodes.length === 0 ? (
            <div className="py-12 text-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50">
              <p className="text-sm font-semibold text-slate-700">
                Nenhum {unitLabelSingular.toLowerCase()} encontrado para &ldquo;{episodeQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => setEpisodeQuery('')}
                className="mt-2 text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                Limpar busca
              </button>
            </div>
          ) : episodeViewMode === 'list' ? (
            /* CLEAN EDITORIAL LIST VIEW */
            <div className="divide-y divide-slate-200/80 border-t border-b border-slate-200/80">
              {filteredEpisodes.map((ep) => {
                const hasPages = Boolean(ep.pdfPages && ep.pdfPages.length > 0);
                const hasPdfAvailable = hasPages || Boolean(ep.pdfUrl);
                const availabilityText = hasPdfAvailable
                  ? `${unitLabelSingular} disponível`
                  : `${unitLabelSingular} em breve`;

                return (
                  <div
                    key={ep.slug}
                    onClick={() => onNavigate(`/webs/${production.slug}/${ep.slug}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onNavigate(`/webs/${production.slug}/${ep.slug}`);
                      }
                    }}
                    className="group py-4 sm:py-5 px-2 sm:px-4 hover:bg-slate-50/80 transition-colors cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="flex items-start gap-4 min-w-0 flex-1">
                      <div
                        className={`w-10 h-10 rounded-xl font-black text-xs flex items-center justify-center shrink-0 tabular-nums transition-colors ${
                          hasPdfAvailable
                            ? 'bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white'
                            : 'bg-slate-100 text-slate-400'
                        }`}
                      >
                        {String(ep.number).padStart(2, '0')}
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm sm:text-base font-extrabold text-slate-950 group-hover:text-blue-600 font-brand transition-colors">
                            {ep.title && ep.title !== ep.label
                              ? `${ep.label} · ${ep.title}`
                              : ep.label}
                          </h3>
                          <span className="text-xs text-slate-400">·</span>
                          <span
                            className={`text-xs font-bold inline-flex items-center gap-1 ${
                              hasPdfAvailable ? 'text-emerald-700' : 'text-amber-700'
                            }`}
                          >
                            {hasPdfAvailable ? (
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Clock className="w-3.5 h-3.5 text-amber-600" />
                            )}
                            <span>{availabilityText}</span>
                          </span>
                          {hasPdfAvailable && (
                            <>
                              <span className="text-xs text-slate-400">·</span>
                              <span className="text-xs font-medium text-slate-500 inline-flex items-center gap-1 tabular-nums">
                                <Clock className="w-3 h-3 text-slate-400" />
                                <span>{formatReadingTime(ep, production.category)}</span>
                              </span>
                            </>
                          )}
                          {hasPages && (
                            <>
                              <span className="text-xs text-slate-400">·</span>
                              <span className="text-xs font-semibold text-slate-600 tabular-nums">
                                {ep.pdfPages!.length} páginas WriterSolo
                              </span>
                            </>
                          )}
                        </div>

                        {ep.summary && (
                          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-reading line-clamp-2 leading-relaxed">
                            {ep.summary}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Preserved Action Controls: Ler, Ouvir Áudio, PDF Original or Em Breve */}
                    <div className="flex items-center gap-2 shrink-0 pl-14 sm:pl-0">
                      {hasPdfAvailable ? (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigate(`/webs/${production.slug}/${ep.slug}?audio=true`);
                            }}
                            title="Ouvir leitura acessível em áudio (PCD/PSD)"
                            className="px-3 py-2 rounded-lg border border-slate-200 hover:border-blue-600 bg-white text-slate-700 hover:text-blue-600 text-xs font-bold inline-flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                          >
                            <Headphones className="w-3.5 h-3.5" />
                            <span>Ouvir</span>
                          </button>

                          {ep.pdfUrl && (
                            <a
                              href={ep.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              title="Abrir arquivo PDF original"
                              className="px-3 py-2 rounded-lg border border-slate-200 hover:border-blue-600 bg-white text-slate-700 hover:text-blue-600 text-xs font-bold inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
                            >
                              <FileText className="w-3.5 h-3.5 text-blue-600" />
                              <span>PDF Original</span>
                            </a>
                          )}

                          <span className="px-3.5 py-2 rounded-lg bg-slate-950 group-hover:bg-blue-600 text-white text-xs font-bold inline-flex items-center gap-1 transition-colors whitespace-nowrap">
                            <span>Ler</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                        </>
                      ) : (
                        <span className="px-3.5 py-2 rounded-lg bg-slate-100 text-slate-500 text-xs font-bold inline-flex items-center gap-1.5 whitespace-nowrap">
                          <Clock className="w-3.5 h-3.5 text-amber-600" />
                          <span>Em breve</span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* CLEAN COMPACT GRID VIEW */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredEpisodes.map((ep) => {
                const hasPages = Boolean(ep.pdfPages && ep.pdfPages.length > 0);
                const hasPdfAvailable = hasPages || Boolean(ep.pdfUrl);
                const availabilityText = hasPdfAvailable
                  ? `${unitLabelSingular} disponível`
                  : `${unitLabelSingular} em breve`;

                return (
                  <div
                    key={ep.slug}
                    onClick={() => onNavigate(`/webs/${production.slug}/${ep.slug}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onNavigate(`/webs/${production.slug}/${ep.slug}`);
                      }
                    }}
                    className="group p-5 rounded-2xl bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-blue-300 transition-colors cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-2">
                        <span className="font-extrabold text-blue-600 uppercase tracking-wider tabular-nums">
                          {ep.label}
                        </span>
                        <span
                          className={`font-bold inline-flex items-center gap-1 ${
                            hasPdfAvailable ? 'text-emerald-700' : 'text-amber-700'
                          }`}
                        >
                          {hasPdfAvailable ? (
                            <Check className="w-3 h-3 text-emerald-600" />
                          ) : (
                            <Clock className="w-3 h-3 text-amber-600" />
                          )}
                          <span>{availabilityText}</span>
                        </span>
                      </div>

                      <h3 className="text-sm font-extrabold text-slate-950 group-hover:text-blue-600 font-brand line-clamp-1 transition-colors">
                        {ep.title || ep.label}
                      </h3>

                      {hasPages && (
                        <div className="mt-1 text-[11px] font-semibold text-slate-500">
                          Roteiro WriterSolo · {ep.pdfPages!.length} páginas · {formatReadingTime(ep, production.category)}
                        </div>
                      )}

                      <p className="mt-2.5 text-xs text-slate-600 font-reading line-clamp-3 leading-relaxed">
                        {ep.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      {hasPdfAvailable ? (
                        <>
                          <span className="text-xs font-extrabold text-blue-600 inline-flex items-center gap-1">
                            <span>Ler agora</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>

                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onNavigate(`/webs/${production.slug}/${ep.slug}?audio=true`);
                              }}
                              className="p-1.5 rounded-lg border border-slate-200 hover:border-blue-600 text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
                              title="Ouvir em áudio"
                            >
                              <Headphones className="w-3.5 h-3.5" />
                            </button>
                            {ep.pdfUrl && (
                              <a
                                href={ep.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="px-2 py-1 rounded-lg border border-slate-200 hover:border-blue-600 text-[11px] font-bold text-slate-700 hover:text-blue-600 inline-flex items-center gap-1 transition-colors"
                                title="Abrir PDF original"
                              >
                                <FileText className="w-3 h-3 text-blue-600" />
                                <span>PDF</span>
                              </a>
                            )}
                          </div>
                        </>
                      ) : (
                        <span className="text-xs font-bold text-amber-700 inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{availabilityText}</span>
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* ===================================================================
            6. VÍDEOS / IMAGENS
           =================================================================== */}
        <section className="py-10 border-b border-slate-200/80">
          <div className="flex items-center justify-between gap-4 mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-950">
              Vídeos / Imagens
            </h2>
            {isManager && (
              <button
                type="button"
                onClick={() => setIsExtrasModalOpen(true)}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                + Adicionar mídia
              </button>
            )}
          </div>

          {galleryItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {galleryItems.map((media, idx) => {
                const thumb = media.thumbnailUrl || (media.type === 'image' ? media.url : coverImage);
                return (
                  <button
                    key={media.id}
                    type="button"
                    onClick={() => setActiveGalleryIndex(idx)}
                    className="group text-left cursor-pointer focus:outline-none"
                  >
                    <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 border border-slate-200 group-hover:border-blue-600 transition-colors">
                      {thumb ? (
                        <img
                          src={thumb}
                          alt={media.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-slate-400">
                          <ImageIcon className="w-6 h-6" />
                        </div>
                      )}

                      {media.type === 'video' && (
                        <div className="absolute inset-0 bg-slate-950/35 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                            <Play className="w-4 h-4 fill-white ml-0.5" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                        {media.category || (media.type === 'video' ? 'Vídeo' : 'Imagem')}
                      </div>
                      <div className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
                        {media.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="py-8 px-5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-500 flex items-center justify-between gap-4">
              <span>Nenhuma mídia adicional cadastrada para esta produção.</span>
              {isManager && (
                <button
                  type="button"
                  onClick={() => setIsExtrasModalOpen(true)}
                  className="font-bold text-blue-600 hover:underline cursor-pointer"
                >
                  Cadastrar trailer ou imagens
                </button>
              )}
            </div>
          )}
        </section>

        {/* ===================================================================
            7. OBRAS RELACIONADAS
           =================================================================== */}
        {relatedWorks.length > 0 && (
          <section className="pt-10 pb-4">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-600">
                  Catálogo Estúdio Webs
                </span>
                <h2 className="mt-1 text-xl font-black text-slate-950 font-brand tracking-tight">
                  Obras Relacionadas
                </h2>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('/webs')}
                className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
              >
                Ver catálogo completo →
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedWorks.map((rw) => (
                <WebCard key={rw.id} production={rw} onNavigate={onNavigate} compact />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* =====================================================================
          MODALS: MEDIA GALLERY LIGHTBOX, CAST MEMBER DETAIL, AWARDS, MANAGER
         ===================================================================== */}
      {activeGalleryIndex !== null && galleryItems[activeGalleryIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveGalleryIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-600">
                  {galleryItems[activeGalleryIndex].category || 'Mídia'}
                </span>
                <h3 className="text-sm font-extrabold text-slate-950 font-brand">
                  {galleryItems[activeGalleryIndex].title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {galleryItems.length > 1 && (
                  <span className="text-xs font-semibold text-slate-500 tabular-nums mr-2">
                    {activeGalleryIndex + 1} / {galleryItems.length}
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => setActiveGalleryIndex(null)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-950 hover:bg-slate-100 cursor-pointer"
                  aria-label="Fechar mídia"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative bg-slate-950 flex items-center justify-center aspect-video max-h-[75vh] w-full">
              {(() => {
                const current = galleryItems[activeGalleryIndex];
                if (current.type === 'video') {
                  const ytEmbed = getYouTubeEmbedUrl(current.url);
                  if (ytEmbed) {
                    return (
                      <iframe
                        src={ytEmbed}
                        title={current.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    );
                  }
                  return (
                    <video
                      src={current.url}
                      controls
                      autoPlay
                      className="w-full h-full max-h-[75vh]"
                    />
                  );
                }

                return (
                  <img
                    src={current.url}
                    alt={current.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[75vh] object-contain"
                  />
                );
              })()}

              {galleryItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveGalleryIndex(
                        (activeGalleryIndex - 1 + galleryItems.length) % galleryItems.length
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-blue-600 text-slate-900 hover:text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                    aria-label="Mídia anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveGalleryIndex((activeGalleryIndex + 1) % galleryItems.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 hover:bg-blue-600 text-slate-900 hover:text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                    aria-label="Próxima mídia"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Cast Member Info Modal */}
      {selectedCastMember && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedCastMember(null)}
        >
          <div
            className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCastMember(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                {selectedCastMember.photoUrl ? (
                  <img
                    src={selectedCastMember.photoUrl}
                    alt={selectedCastMember.actorName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-7 h-7 text-slate-400" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-950 font-brand">
                  {selectedCastMember.actorName}
                </h3>
                {selectedCastMember.characterName && (
                  <p className="text-xs font-bold text-blue-600 mt-0.5">
                    {selectedCastMember.characterName}
                  </p>
                )}
              </div>
            </div>

            {selectedCastMember.bio && (
              <p className="mt-4 text-sm text-slate-600 font-reading leading-relaxed">
                {selectedCastMember.bio}
              </p>
            )}
          </div>
        </div>
      )}

      <AwardedWebsModal
        isOpen={isAwardsModalOpen}
        onClose={() => setIsAwardsModalOpen(false)}
        onNavigate={onNavigate}
        currentSlug={production.slug}
      />

      {isManager && (
        <>
          <ImageUploadModal
            productionTitle={production.title}
            productionSlug={production.slug}
            currentImage={coverImage}
            isOpen={isUploadOpen}
            onClose={() => setIsUploadOpen(false)}
          />
          <ProductionExtrasModal
            isOpen={isExtrasModalOpen}
            onClose={() => setIsExtrasModalOpen(false)}
            productionTitle={production.title}
            extras={extras}
            onSave={updateExtras}
          />
        </>
      )}
    </div>
  );
}
