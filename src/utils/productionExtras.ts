import { useState, useEffect, useCallback } from 'react';

export interface CastMember {
  id: string;
  actorName: string;
  characterName?: string;
  photoUrl?: string;
  bio?: string;
  authorSlug?: string;
}

export interface MediaGalleryItem {
  id: string;
  type: 'video' | 'image';
  title: string;
  category?: string; // e.g., 'Trailer', 'Teaser', 'Cena', 'Foto Oficial'
  url: string;
  thumbnailUrl?: string;
}

export interface ProductionExtras {
  releaseDateText?: string; // e.g., "11 Jan 2026"
  genreDetail?: string;
  nationality?: string;
  language?: string;
  broadcaster?: string;
  trailerUrl?: string;
  cast?: CastMember[];
  mediaGallery?: MediaGalleryItem[];
}

const EXTRAS_STORAGE_KEY = 'estudiowebs_production_extras_v1';
const RATINGS_STORAGE_KEY = 'estudiowebs_production_ratings_v1';
const EXTRAS_UPDATED_EVENT = 'estudiowebs_extras_updated';

function readAllExtras(): Record<string, ProductionExtras> {
  try {
    const raw = localStorage.getItem(EXTRAS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function getProductionExtras(slug: string): ProductionExtras {
  const all = readAllExtras();
  return all[slug] || {};
}

export function saveProductionExtras(slug: string, extras: ProductionExtras): void {
  try {
    const all = readAllExtras();
    all[slug] = { ...all[slug], ...extras };
    localStorage.setItem(EXTRAS_STORAGE_KEY, JSON.stringify(all));
    window.dispatchEvent(new CustomEvent(EXTRAS_UPDATED_EVENT, { detail: { slug } }));
  } catch (e) {
    console.error('Erro ao salvar informações da produção:', e);
  }
}

export function useProductionExtras(slug: string) {
  const [extras, setExtras] = useState<ProductionExtras>(() => getProductionExtras(slug));

  useEffect(() => {
    setExtras(getProductionExtras(slug));
    const handleUpdate = () => setExtras(getProductionExtras(slug));
    window.addEventListener(EXTRAS_UPDATED_EVENT, handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener(EXTRAS_UPDATED_EVENT, handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, [slug]);

  const updateExtras = useCallback(
    (patch: Partial<ProductionExtras>) => {
      const merged = { ...getProductionExtras(slug), ...patch };
      saveProductionExtras(slug, merged);
      setExtras(merged);
    },
    [slug]
  );

  return { extras, updateExtras };
}

export function useProductionRating(slug: string) {
  const [userRating, setUserRating] = useState<number>(() => {
    try {
      const raw = localStorage.getItem(RATINGS_STORAGE_KEY);
      const map = raw ? JSON.parse(raw) : {};
      return Number(map[slug]) || 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(RATINGS_STORAGE_KEY);
      const map = raw ? JSON.parse(raw) : {};
      setUserRating(Number(map[slug]) || 0);
    } catch {
      setUserRating(0);
    }
  }, [slug]);

  const rateProduction = useCallback(
    (stars: number) => {
      try {
        const raw = localStorage.getItem(RATINGS_STORAGE_KEY);
        const map = raw ? JSON.parse(raw) : {};
        map[slug] = stars;
        localStorage.setItem(RATINGS_STORAGE_KEY, JSON.stringify(map));
        setUserRating(stars);
      } catch {
        setUserRating(stars);
      }
    },
    [slug]
  );

  return { userRating, rateProduction };
}

export function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (match && match[1]) {
    return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
  }
  return null;
}

export function getYouTubeThumbnailUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (match && match[1]) {
    return `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`;
  }
  return null;
}
