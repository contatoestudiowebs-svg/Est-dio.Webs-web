import React, { useState, useEffect } from 'react';
import { X, Plus, Trash2, Film, Image as ImageIcon, Users, Save } from 'lucide-react';
import { CastMember, MediaGalleryItem, ProductionExtras } from '../utils/productionExtras';

interface ProductionExtrasModalProps {
  isOpen: boolean;
  onClose: () => void;
  productionTitle: string;
  extras: ProductionExtras;
  onSave: (patch: Partial<ProductionExtras>) => void;
}

export function ProductionExtrasModal({
  isOpen,
  onClose,
  productionTitle,
  extras,
  onSave,
}: ProductionExtrasModalProps) {
  const [releaseDateText, setReleaseDateText] = useState('');
  const [genreDetail, setGenreDetail] = useState('');
  const [nationality, setNationality] = useState('Brasil');
  const [language, setLanguage] = useState('Português');
  const [broadcaster, setBroadcaster] = useState('Estúdio Webs');
  const [trailerUrl, setTrailerUrl] = useState('');
  const [cast, setCast] = useState<CastMember[]>([]);
  const [mediaGallery, setMediaGallery] = useState<MediaGalleryItem[]>([]);

  // Draft inputs for adding cast / gallery
  const [newActorName, setNewActorName] = useState('');
  const [newCharacterName, setNewCharacterName] = useState('');
  const [newActorPhoto, setNewActorPhoto] = useState('');
  const [newActorBio, setNewActorBio] = useState('');

  const [newMediaType, setNewMediaType] = useState<'video' | 'image'>('video');
  const [newMediaTitle, setNewMediaTitle] = useState('');
  const [newMediaCategory, setNewMediaCategory] = useState('Teaser');
  const [newMediaUrl, setNewMediaUrl] = useState('');

  useEffect(() => {
    if (isOpen) {
      setReleaseDateText(extras.releaseDateText || '');
      setGenreDetail(extras.genreDetail || '');
      setNationality(extras.nationality || 'Brasil');
      setLanguage(extras.language || 'Português');
      setBroadcaster(extras.broadcaster || 'Estúdio Webs');
      setTrailerUrl(extras.trailerUrl || '');
      setCast(extras.cast || []);
      setMediaGallery(extras.mediaGallery || []);
    }
  }, [isOpen, extras]);

  if (!isOpen) return null;

  const handleAddCast = () => {
    if (!newActorName.trim()) return;
    setCast((prev) => [
      ...prev,
      {
        id: `cast-${Date.now()}`,
        actorName: newActorName.trim(),
        characterName: newCharacterName.trim() || undefined,
        photoUrl: newActorPhoto.trim() || undefined,
        bio: newActorBio.trim() || undefined,
      },
    ]);
    setNewActorName('');
    setNewCharacterName('');
    setNewActorPhoto('');
    setNewActorBio('');
  };

  const handleAddMedia = () => {
    if (!newMediaUrl.trim() || !newMediaTitle.trim()) return;
    setMediaGallery((prev) => [
      ...prev,
      {
        id: `media-${Date.now()}`,
        type: newMediaType,
        title: newMediaTitle.trim(),
        category: newMediaCategory.trim() || (newMediaType === 'video' ? 'Vídeo' : 'Imagem'),
        url: newMediaUrl.trim(),
      },
    ]);
    setNewMediaTitle('');
    setNewMediaUrl('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      releaseDateText: releaseDateText.trim() || undefined,
      genreDetail: genreDetail.trim() || undefined,
      nationality: nationality.trim() || undefined,
      language: language.trim() || undefined,
      broadcaster: broadcaster.trim() || undefined,
      trailerUrl: trailerUrl.trim() || undefined,
      cast,
      mediaGallery,
    });
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600">
              Painel Dinâmico da Produção
            </span>
            <h3 className="text-lg font-extrabold text-slate-950 font-brand">
              Editar Ficha — {productionTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          {/* General Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Data de Estreia (ex: 11 Jan 2026)
              </label>
              <input
                type="text"
                value={releaseDateText}
                onChange={(e) => setReleaseDateText(e.target.value)}
                placeholder="Ex: 11 Jan 2026"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Gênero Detalhado
              </label>
              <input
                type="text"
                value={genreDetail}
                onChange={(e) => setGenreDetail(e.target.value)}
                placeholder="Ex: Drama, Suspense, Romance"
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nacionalidade
              </label>
              <input
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Idioma
              </label>
              <input
                type="text"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Emissora / Plataforma
              </label>
              <input
                type="text"
                value={broadcaster}
                onChange={(e) => setBroadcaster(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                URL do Trailer (YouTube ou MP4)
              </label>
              <input
                type="url"
                value={trailerUrl}
                onChange={(e) => setTrailerUrl(e.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:border-blue-600 focus:outline-none text-xs"
              />
            </div>
          </div>

          {/* Cast Editor */}
          <div className="pt-4 border-t border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-900">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Elenco ({cast.length})</span>
            </div>

            {cast.length > 0 && (
              <div className="space-y-2">
                {cast.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                  >
                    <div>
                      <strong className="text-slate-900">{member.actorName}</strong>
                      {member.characterName && (
                        <span className="text-slate-500"> · {member.characterName}</span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setCast((prev) => prev.filter((c) => c.id !== member.id))}
                      className="text-slate-400 hover:text-rose-600 cursor-pointer"
                      aria-label={`Remover ${member.actorName}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <input
                type="text"
                value={newActorName}
                onChange={(e) => setNewActorName(e.target.value)}
                placeholder="Nome do ator / intérprete"
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs focus:border-blue-600 focus:outline-none"
              />
              <input
                type="text"
                value={newCharacterName}
                onChange={(e) => setNewCharacterName(e.target.value)}
                placeholder="Personagem (opcional)"
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs focus:border-blue-600 focus:outline-none"
              />
              <input
                type="url"
                value={newActorPhoto}
                onChange={(e) => setNewActorPhoto(e.target.value)}
                placeholder="URL da foto (opcional)"
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs focus:border-blue-600 focus:outline-none"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newActorBio}
                  onChange={(e) => setNewActorBio(e.target.value)}
                  placeholder="Bio curta (opcional)"
                  className="flex-1 px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs focus:border-blue-600 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddCast}
                  className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Adicionar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Media Gallery Editor */}
          <div className="pt-4 border-t border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-900">
              <Film className="w-4 h-4 text-blue-600" />
              <span>Vídeos e Imagens ({mediaGallery.length})</span>
            </div>

            {mediaGallery.length > 0 && (
              <div className="space-y-2">
                {mediaGallery.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      {item.type === 'video' ? (
                        <Film className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      ) : (
                        <ImageIcon className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      )}
                      <span className="font-bold text-slate-900 truncate">{item.title}</span>
                      {item.category && (
                        <span className="text-slate-500 shrink-0">· {item.category}</span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        setMediaGallery((prev) => prev.filter((m) => m.id !== item.id))
                      }
                      className="text-slate-400 hover:text-rose-600 cursor-pointer shrink-0"
                      aria-label={`Remover ${item.title}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <select
                value={newMediaType}
                onChange={(e) => setNewMediaType(e.target.value as 'video' | 'image')}
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs focus:border-blue-600 focus:outline-none"
              >
                <option value="video">Vídeo (YouTube / MP4)</option>
                <option value="image">Imagem / Foto de Cena</option>
              </select>
              <input
                type="text"
                value={newMediaCategory}
                onChange={(e) => setNewMediaCategory(e.target.value)}
                placeholder="Categoria (Teaser, Chamada, Cena...)"
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs focus:border-blue-600 focus:outline-none"
              />
              <input
                type="text"
                value={newMediaTitle}
                onChange={(e) => setNewMediaTitle(e.target.value)}
                placeholder="Título da mídia"
                className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs focus:border-blue-600 focus:outline-none"
              />
              <div className="flex gap-2">
                <input
                  type="url"
                  value={newMediaUrl}
                  onChange={(e) => setNewMediaUrl(e.target.value)}
                  placeholder="URL do vídeo ou imagem"
                  className="flex-1 px-3 py-2 rounded-lg bg-white border border-slate-200 text-xs focus:border-blue-600 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleAddMedia}
                  className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold inline-flex items-center gap-1 cursor-pointer shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Incluir</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Salvar Alterações</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
