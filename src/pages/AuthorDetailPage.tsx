import React, { useState } from 'react';
import { getAuthorBySlug, getAuthorWorksCount } from '../data/authors';
import { getProductionsByAuthor } from '../data/productions';
import { WebCard } from '../components/WebCard';
import { ArrowLeft, BookOpen, Film, User, Layers, Star, ChevronRight } from 'lucide-react';
import { ProductionCategory } from '../types';
import { SEOHead } from '../components/SEOHead';
import { AwardedWebsModal } from '../components/AwardedWebsModal';
import { getAuthorAward } from '../data/awardsData';

interface AuthorDetailPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export function AuthorDetailPage({ slug, onNavigate }: AuthorDetailPageProps) {
  const author = getAuthorBySlug(slug);
  const [categoryFilter, setCategoryFilter] = useState<'TODAS' | ProductionCategory>('TODAS');
  const [isAwardsModalOpen, setIsAwardsModalOpen] = useState(false);

  if (!author) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Autor Não Encontrado</h2>
        <p className="text-sm text-slate-600 mb-6">
          O autor solicitado não foi localizado em nossa base oficial.
        </p>
        <button
          onClick={() => onNavigate('/autores')}
          className="px-6 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white text-xs font-bold uppercase transition shadow-md shadow-[#D80050]/20"
        >
          Voltar para Autores
        </button>
      </div>
    );
  }

  const allWorks = getProductionsByAuthor(author.name);
  const counts = getAuthorWorksCount(author.name);
  const authorAward = getAuthorAward(author.slug);

  const filteredWorks =
    categoryFilter === 'TODAS'
      ? allWorks
      : allWorks.filter((w) => w.category === categoryFilter);

  const seoTitle = `${author.name} | Autores | Estúdio Webs`;
  const seoDescription = `Conheça as obras publicadas de ${author.name} no Estúdio Webs. Total de ${counts.total} produções (${counts.novelas} novelas e ${counts.series} séries).`;

  return (
    <div className="min-h-screen py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={`/autores/${author.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: author.name,
          worksFor: {
            '@type': 'Organization',
            name: 'Estúdio Webs'
          }
        }}
      />

      {/* Breadcrumbs */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <button onClick={() => onNavigate('/')} className="hover:text-slate-900 transition">
            Início
          </button>
          <span className="text-slate-400">/</span>
          <button onClick={() => onNavigate('/autores')} className="hover:text-slate-900 transition">
            Autores
          </button>
          <span className="text-slate-400">/</span>
          <span className="text-[#D80050] font-bold">{author.name}</span>
        </nav>

        <button
          onClick={() => onNavigate('/autores')}
          className="inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-950 font-bold uppercase tracking-wider bg-white hover:bg-slate-100 px-3.5 py-1.5 rounded-lg border border-slate-200 shadow-xs transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para Autores</span>
        </button>
      </div>

      {/* Author Profile Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-[#D80050] font-black text-4xl shadow-xs shrink-0">
            {author.photoUrl ? (
              <img
                src={author.photoUrl}
                alt={author.name}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              author.name.charAt(0)
            )}
          </div>

          <div className="text-center sm:text-left flex-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D80050] bg-rose-50 px-3 py-1 rounded-full border border-rose-200 inline-block mb-2">
              Autor Oficial do Estúdio Webs
            </span>

            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 font-brand">
              {author.name}
            </h1>

            {author.bio && (
              <p className="text-sm text-slate-700 mt-3 font-reading leading-relaxed max-w-2xl">
                {author.bio}
              </p>
            )}

            {/* Quick Metrics */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4 pt-4 border-t border-slate-100">
              <span className="text-xs px-3 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 font-medium">
                <strong className="text-slate-900">{counts.total}</strong> obras no catálogo
              </span>
              <span className="text-xs px-3 py-1 rounded-lg bg-rose-50 text-[#D80050] border border-rose-200 font-medium flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                <strong className="text-slate-900">{counts.novelas}</strong> web novelas
              </span>
              <span className="text-xs px-3 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-medium flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5" />
                <strong className="text-slate-900">{counts.series}</strong> web séries
              </span>
            </div>

            {/* Author Award Star Badge */}
            {authorAward && (
              <div
                onClick={() => setIsAwardsModalOpen(true)}
                className="mt-5 p-4 rounded-xl bg-gradient-to-r from-amber-500/15 via-yellow-400/20 to-amber-500/10 border-2 border-amber-400/80 hover:border-amber-500 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group flex items-center justify-between gap-4"
                title="Clique na estrela para ver todas as produções premiadas"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 text-slate-950 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <Star className="w-5 h-5 fill-slate-950 text-slate-950" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-900 bg-amber-100/90 px-2 py-0.5 rounded border border-amber-300">
                        {authorAward.festivalOrAward}
                      </span>
                      <span className="text-[11px] text-amber-800 font-bold hidden sm:inline">
                        ★ Clique para ver as webs premiadas
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-black text-slate-900 font-brand leading-tight">
                      {authorAward.awardText}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-1 text-xs font-black text-amber-900 group-hover:text-amber-950 group-hover:translate-x-1 transition-transform">
                  <span className="hidden sm:inline">Ver premiadas</span>
                  <ChevronRight className="w-4 h-4 text-amber-700" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Published Works Section (Obras publicadas) */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D80050] font-extrabold">
              Catálogo Oficial
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-brand tracking-tight">
              Obras publicadas
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCategoryFilter('TODAS')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition ${
                categoryFilter === 'TODAS'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
              }`}
            >
              Todas ({allWorks.length})
            </button>
            <button
              onClick={() => setCategoryFilter('Web novela')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 ${
                categoryFilter === 'Web novela'
                  ? 'bg-[#D80050] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Web Novelas ({counts.novelas})</span>
            </button>
            <button
              onClick={() => setCategoryFilter('Web série')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition flex items-center gap-1.5 ${
                categoryFilter === 'Web série'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Web Séries ({counts.series})</span>
            </button>
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredWorks.map((work) => (
            <WebCard key={work.id} production={work} onNavigate={onNavigate} />
          ))}
        </div>
      </section>

      <AwardedWebsModal
        isOpen={isAwardsModalOpen}
        onClose={() => setIsAwardsModalOpen(false)}
        onNavigate={onNavigate}
      />
    </div>
  );
}
