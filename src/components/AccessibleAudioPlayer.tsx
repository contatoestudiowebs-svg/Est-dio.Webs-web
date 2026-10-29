import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Square,
  Accessibility,
  Sliders,
  Sparkles,
  BookOpen,
  Headphones,
  Check,
  ChevronDown,
  X,
  Minimize2,
  Maximize2,
  FastForward,
  Rewind,
  FileAudio
} from 'lucide-react';
import { ChapterEpisode, WebProduction } from '../types';
import {
  prepareNarrationChunks,
  getPortugueseVoices,
  NarrationChunk,
} from '../utils/audioNarrator';

interface AccessibleAudioPlayerProps {
  production: WebProduction;
  chapter: ChapterEpisode;
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'summary' | 'full';
}

export function AccessibleAudioPlayer({
  production,
  chapter,
  isOpen,
  onClose,
  initialMode = 'full',
}: AccessibleAudioPlayerProps) {
  const [mode, setMode] = useState<'summary' | 'full'>(initialMode);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [currentChunkIndex, setCurrentChunkIndex] = useState<number>(0);
  const [rate, setRate] = useState<number>(1.0);
  const [volume, setVolume] = useState<number>(1.0);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>('');
  const [followAlong, setFollowAlong] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'huge'>('large');
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [audioSource, setAudioSource] = useState<'tts' | 'file'>(
    chapter.audioUrl ? 'file' : 'tts'
  );

  // Studio audio element ref if audioUrl exists
  const audioFileRef = useRef<HTMLAudioElement | null>(null);
  const [fileProgress, setFileProgress] = useState<number>(0);
  const [fileDuration, setFileDuration] = useState<number>(0);

  // SpeechSynthesis active utterance ref
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isComponentMounted = useRef<boolean>(true);
  const textScrollRef = useRef<HTMLDivElement | null>(null);

  // Generate chunks based on mode
  const chunks: NarrationChunk[] = useMemo(() => {
    return prepareNarrationChunks(
      production.title,
      chapter.label,
      production.author,
      mode,
      chapter.summary,
      chapter.pdfPages,
      chapter.content
    );
  }, [production.title, chapter.label, production.author, mode, chapter.summary, chapter.pdfPages, chapter.content]);

  // Load voices on mount
  useEffect(() => {
    isComponentMounted.current = true;

    const loadVoices = () => {
      const ptVoices = getPortugueseVoices();
      setAvailableVoices(ptVoices);
      if (ptVoices.length > 0 && !selectedVoiceURI) {
        // Prefer pt-BR voice
        const brVoice = ptVoices.find((v) => v.lang.toLowerCase().includes('br')) || ptVoices[0];
        setSelectedVoiceURI(brVoice.voiceURI);
      }
    };

    loadVoices();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      isComponentMounted.current = false;
      stopPlayback();
    };
  }, []);

  // Reset state when chapter or mode changes
  useEffect(() => {
    stopPlayback();
    setCurrentChunkIndex(0);
    if (chapter.audioUrl) {
      setAudioSource('file');
    } else {
      setAudioSource('tts');
    }
  }, [chapter.slug, mode]);

  // Auto-scroll follow along text box
  useEffect(() => {
    if (followAlong && textScrollRef.current) {
      const activeEl = textScrollRef.current.querySelector('[data-active-chunk="true"]');
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }, [currentChunkIndex, followAlong]);

  // Keep-alive workaround for browser SpeechSynthesis bug (Chrome pauses after 14s)
  useEffect(() => {
    let keepAliveTimer: any = null;
    if (isPlaying && !isPaused && audioSource === 'tts') {
      keepAliveTimer = setInterval(() => {
        if (typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.speaking) {
          window.speechSynthesis.pause();
          window.speechSynthesis.resume();
        }
      }, 10000);
    }
    return () => {
      if (keepAliveTimer) clearInterval(keepAliveTimer);
    };
  }, [isPlaying, isPaused, audioSource]);

  // Play a specific chunk
  const speakChunk = (index: number) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    window.speechSynthesis.cancel();

    if (index >= chunks.length) {
      setIsPlaying(false);
      setIsPaused(false);
      setCurrentChunkIndex(0);
      return;
    }

    const chunk = chunks[index];
    if (!chunk || !chunk.text.trim()) {
      speakChunk(index + 1);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(chunk.text);
    utterance.rate = rate;
    utterance.volume = isMuted ? 0 : volume;

    if (selectedVoiceURI) {
      const selectedVoice = availableVoices.find((v) => v.voiceURI === selectedVoiceURI);
      if (selectedVoice) {
        utterance.voice = selectedVoice;
        utterance.lang = selectedVoice.lang;
      }
    } else {
      utterance.lang = 'pt-BR';
    }

    utterance.onend = () => {
      if (!isComponentMounted.current) return;
      if (index + 1 < chunks.length) {
        setCurrentChunkIndex(index + 1);
        speakChunk(index + 1);
      } else {
        setIsPlaying(false);
        setIsPaused(false);
        setCurrentChunkIndex(0);
      }
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      if (index + 1 < chunks.length) {
        setCurrentChunkIndex(index + 1);
        speakChunk(index + 1);
      } else {
        setIsPlaying(false);
        setIsPaused(false);
      }
    };

    currentUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
    setIsPaused(false);
  };

  const handlePlay = () => {
    if (audioSource === 'file' && audioFileRef.current) {
      audioFileRef.current.play();
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }

    if (isPaused && typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.resume();
      setIsPlaying(true);
      setIsPaused(false);
      return;
    }

    speakChunk(currentChunkIndex);
  };

  const handlePause = () => {
    if (audioSource === 'file' && audioFileRef.current) {
      audioFileRef.current.pause();
      setIsPlaying(false);
      setIsPaused(true);
      return;
    }

    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.pause();
      setIsPlaying(false);
      setIsPaused(true);
    }
  };

  const stopPlayback = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    if (audioFileRef.current) {
      audioFileRef.current.pause();
      audioFileRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setIsPaused(false);
  };

  const handleStop = () => {
    stopPlayback();
    setCurrentChunkIndex(0);
  };

  const handleSkipForward = () => {
    if (audioSource === 'file' && audioFileRef.current) {
      audioFileRef.current.currentTime = Math.min(
        audioFileRef.current.duration || 0,
        audioFileRef.current.currentTime + 10
      );
      return;
    }
    const nextIdx = Math.min(chunks.length - 1, currentChunkIndex + 2);
    setCurrentChunkIndex(nextIdx);
    if (isPlaying) {
      speakChunk(nextIdx);
    }
  };

  const handleSkipBack = () => {
    if (audioSource === 'file' && audioFileRef.current) {
      audioFileRef.current.currentTime = Math.max(0, audioFileRef.current.currentTime - 10);
      return;
    }
    const prevIdx = Math.max(0, currentChunkIndex - 2);
    setCurrentChunkIndex(prevIdx);
    if (isPlaying) {
      speakChunk(prevIdx);
    }
  };

  const handleSpeedChange = (newRate: number) => {
    setRate(newRate);
    if (audioSource === 'file' && audioFileRef.current) {
      audioFileRef.current.playbackRate = newRate;
    } else if (isPlaying) {
      speakChunk(currentChunkIndex);
    }
  };

  const handleSelectChunk = (idx: number) => {
    setCurrentChunkIndex(idx);
    speakChunk(idx);
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space') {
        e.preventDefault();
        if (isPlaying) handlePause();
        else handlePlay();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleSkipForward();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handleSkipBack();
      } else if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isPlaying, currentChunkIndex]);

  if (!isOpen) return null;

  const currentChunk = chunks[currentChunkIndex];
  const progressPercent = chunks.length > 0 ? ((currentChunkIndex + 1) / chunks.length) * 100 : 0;

  // Approximate remaining minutes
  const wordsLeft = chunks
    .slice(currentChunkIndex)
    .reduce((acc, c) => acc + c.text.split(/\s+/).length, 0);
  const minutesLeft = Math.max(1, Math.ceil(wordsLeft / (150 * rate)));

  return (
    <section
      role="region"
      aria-label="Reprodutor de Áudio Acessível Estúdio Webs"
      className="fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-auto"
    >
      {/* Hidden Studio Audio Element when audioUrl is configured */}
      {chapter.audioUrl && (
        <audio
          ref={audioFileRef}
          src={chapter.audioUrl}
          onTimeUpdate={() => {
            if (audioFileRef.current) {
              setFileProgress(audioFileRef.current.currentTime);
              setFileDuration(audioFileRef.current.duration || 0);
            }
          }}
          onEnded={() => {
            setIsPlaying(false);
            setIsPaused(false);
          }}
        />
      )}

      <div className="max-w-5xl mx-auto px-3 sm:px-6 pb-3">
        <div className="bg-slate-950 text-white rounded-2xl shadow-2xl border-2 border-[#D80050]/80 overflow-hidden backdrop-blur-md">
          {/* Header Bar */}
          <div className="px-4 py-2.5 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2.5">
              <span className="p-1.5 rounded-lg bg-[#D80050] text-white flex items-center justify-center shadow-xs">
                <Accessibility className="w-4 h-4" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">
                    Acessibilidade PCD / Leitura em Áudio
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 font-bold hidden sm:inline">
                    Voz em Português (pt-BR)
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                  {production.title} • {chapter.label}
                </h3>
              </div>
            </div>

            {/* Mode & Action Controls */}
            <div className="flex items-center gap-2">
              {/* Audio Source Selector if audioUrl is provided */}
              {chapter.audioUrl && (
                <div className="flex items-center bg-slate-800 rounded-lg p-0.5 text-[11px] font-bold">
                  <button
                    onClick={() => {
                      stopPlayback();
                      setAudioSource('file');
                    }}
                    className={`px-2 py-0.5 rounded transition ${
                      audioSource === 'file' ? 'bg-[#D80050] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Estúdio
                  </button>
                  <button
                    onClick={() => {
                      stopPlayback();
                      setAudioSource('tts');
                    }}
                    className={`px-2 py-0.5 rounded transition ${
                      audioSource === 'tts' ? 'bg-[#D80050] text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Narrador
                  </button>
                </div>
              )}

              {/* Mode Toggle (Resumo vs Completo) */}
              {audioSource === 'tts' && (
                <div className="flex items-center bg-slate-800/90 rounded-lg p-0.5 text-xs font-bold">
                  <button
                    onClick={() => setMode('full')}
                    className={`px-2.5 py-1 rounded transition flex items-center gap-1 ${
                      mode === 'full' ? 'bg-[#D80050] text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Ouvir capítulo completo com personagens e falas"
                  >
                    <BookOpen className="w-3 h-3" />
                    <span>Completo</span>
                  </button>
                  <button
                    onClick={() => setMode('summary')}
                    className={`px-2.5 py-1 rounded transition flex items-center gap-1 ${
                      mode === 'summary' ? 'bg-[#D80050] text-white shadow-xs' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Ouvir apenas o resumo oficial do capítulo"
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Resumo</span>
                  </button>
                </div>
              )}

              {/* Font Size Selector */}
              <div className="hidden sm:flex items-center bg-slate-800 rounded-lg p-0.5 text-xs">
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-1.5 py-0.5 rounded font-bold ${fontSize === 'normal' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}
                  title="Tamanho de texto normal"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-1.5 py-0.5 rounded font-bold ${fontSize === 'large' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}
                  title="Texto grande"
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize('huge')}
                  className={`px-1.5 py-0.5 rounded font-bold ${fontSize === 'huge' ? 'bg-slate-700 text-white' : 'text-slate-400'}`}
                  title="Texto muito grande para baixa visão"
                >
                  A++
                </button>
              </div>

              {/* Minimize / Expand */}
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
                title={isMinimized ? 'Expandir Reprodutor' : 'Minimizar Reprodutor'}
                aria-label={isMinimized ? 'Expandir' : 'Minimizar'}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>

              {/* Close Button */}
              <button
                onClick={() => {
                  stopPlayback();
                  onClose();
                }}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white transition cursor-pointer"
                title="Fechar reprodutor de áudio"
                aria-label="Fechar reprodutor"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Expanded Reading & Follow-Along Box */}
          {!isMinimized && audioSource === 'tts' && (
            <div className="p-3 sm:p-4 bg-slate-900/90 border-b border-slate-800 max-h-44 sm:max-h-52 overflow-y-auto" ref={textScrollRef}>
              <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-slate-800 text-[11px] text-slate-400 font-sans">
                <div className="flex items-center gap-2">
                  <span className="font-bold uppercase tracking-wider text-rose-400">
                    Acompanhamento Visual:
                  </span>
                  {currentChunk?.characterName && (
                    <span className="px-2 py-0.5 rounded font-bold uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      {currentChunk.characterName}
                    </span>
                  )}
                  <span className="text-slate-400 hidden sm:inline">
                    Trecho {currentChunkIndex + 1} de {chunks.length}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setFollowAlong(!followAlong)}
                    className={`text-[11px] font-bold flex items-center gap-1 transition ${
                      followAlong ? 'text-emerald-400' : 'text-slate-500'
                    }`}
                  >
                    <Check className={`w-3 h-3 ${followAlong ? 'opacity-100' : 'opacity-30'}`} />
                    <span>Rolar automaticamente</span>
                  </button>
                  <span className="text-slate-400">~{minutesLeft} min restantes</span>
                </div>
              </div>

              {/* Text Chunks List */}
              <div className="space-y-2">
                {chunks.map((c, i) => {
                  const isActive = i === currentChunkIndex;
                  return (
                    <div
                      key={c.id}
                      data-active-chunk={isActive ? 'true' : 'false'}
                      onClick={() => handleSelectChunk(i)}
                      className={`p-2 rounded-xl transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#D80050]/20 border-2 border-[#D80050] text-white shadow-sm ring-2 ring-[#D80050]/30'
                          : 'hover:bg-slate-800/60 text-slate-300 border border-transparent'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <span
                          className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 font-bold ${
                            isActive ? 'bg-[#D80050] text-white' : 'bg-slate-800 text-slate-500'
                          }`}
                        >
                          {i + 1}
                        </span>
                        <p
                          className={`leading-relaxed ${
                            fontSize === 'huge'
                              ? 'text-lg sm:text-xl font-medium'
                              : fontSize === 'large'
                              ? 'text-base sm:text-lg font-medium'
                              : 'text-sm'
                          } ${isActive ? 'text-white font-semibold' : 'text-slate-300'}`}
                        >
                          {c.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Main Audio Controls Bar */}
          <div className="p-3 sm:p-4 bg-slate-950 flex flex-col gap-3">
            {/* Progress Bar */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono font-bold text-slate-400 w-10 text-right">
                {audioSource === 'file'
                  ? `${Math.floor(fileProgress / 60)}:${String(Math.floor(fileProgress % 60)).padStart(2, '0')}`
                  : `${currentChunkIndex + 1}/${chunks.length}`}
              </span>

              <div className="relative flex-1 h-2.5 bg-slate-800 rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-gradient-to-r from-[#D80050] to-rose-400 transition-all duration-200 rounded-full"
                  style={{
                    width: `${
                      audioSource === 'file'
                        ? fileDuration > 0
                          ? (fileProgress / fileDuration) * 100
                          : 0
                        : progressPercent
                    }%`,
                  }}
                />
              </div>

              <span className="text-[11px] font-mono font-bold text-slate-400 w-14">
                {audioSource === 'file'
                  ? `${Math.floor(fileDuration / 60)}:${String(Math.floor(fileDuration % 60)).padStart(2, '0')}`
                  : `-${minutesLeft}min`}
              </span>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
              {/* Playback Transport Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleStop}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition border border-slate-800 cursor-pointer"
                  title="Parar e reiniciar início"
                  aria-label="Parar"
                >
                  <Square className="w-4 h-4" />
                </button>

                <button
                  onClick={handleSkipBack}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition border border-slate-800 cursor-pointer flex items-center gap-1"
                  title="Voltar 10 segundos / trecho anterior"
                  aria-label="Voltar"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span className="text-[10px] font-bold">10s</span>
                </button>

                {isPlaying ? (
                  <button
                    onClick={handlePause}
                    className="px-5 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-[#D80050]/30 transition scale-105 cursor-pointer"
                    title="Pausar áudio (Espaço)"
                    aria-label="Pausar"
                  >
                    <Pause className="w-4 h-4 fill-white" />
                    <span>PAUSAR</span>
                  </button>
                ) : (
                  <button
                    onClick={handlePlay}
                    className="px-5 py-2.5 rounded-xl bg-[#D80050] hover:bg-[#be0044] text-white font-black text-sm flex items-center gap-2 shadow-lg shadow-[#D80050]/30 transition scale-105 cursor-pointer"
                    title="Reproduzir áudio (Espaço)"
                    aria-label="Reproduzir"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>OUVIR AGORA</span>
                  </button>
                )}

                <button
                  onClick={handleSkipForward}
                  className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition border border-slate-800 cursor-pointer flex items-center gap-1"
                  title="Avançar 10 segundos / próximo trecho"
                  aria-label="Avançar"
                >
                  <RotateCw className="w-4 h-4" />
                  <span className="text-[10px] font-bold">10s</span>
                </button>
              </div>

              {/* Speed Buttons */}
              <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-bold">
                <span className="text-[10px] text-slate-500 uppercase px-1.5 hidden md:inline">
                  Velocidade:
                </span>
                {[0.75, 1.0, 1.25, 1.5, 2.0].map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSpeedChange(s)}
                    className={`px-2 py-1 rounded-lg transition ${
                      rate === s
                        ? 'bg-[#D80050] text-white font-black shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>

              {/* Voice & Volume settings */}
              <div className="flex items-center gap-2">
                {/* Voice selector */}
                {availableVoices.length > 0 && audioSource === 'tts' && (
                  <div className="hidden lg:flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-xl border border-slate-800 text-xs">
                    <Headphones className="w-3.5 h-3.5 text-rose-400" />
                    <select
                      value={selectedVoiceURI}
                      onChange={(e) => {
                        setSelectedVoiceURI(e.target.value);
                        if (isPlaying) speakChunk(currentChunkIndex);
                      }}
                      className="bg-transparent text-xs text-slate-200 font-bold focus:outline-none cursor-pointer max-w-[130px] truncate"
                    >
                      {availableVoices.map((v) => (
                        <option key={v.voiceURI} value={v.voiceURI} className="bg-slate-900 text-white">
                          {v.name.replace(/(Google|Microsoft)\s*/i, '')} ({v.lang})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Volume toggle */}
                <div className="flex items-center gap-1.5 bg-slate-900 px-2 py-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-slate-400 hover:text-white p-1"
                    title={isMuted ? 'Desmutar' : 'Mutar'}
                    aria-label={isMuted ? 'Desmutar' : 'Mutar'}
                  >
                    {isMuted || volume === 0 ? (
                      <VolumeX className="w-4 h-4 text-rose-400" />
                    ) : (
                      <Volume2 className="w-4 h-4" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => {
                      setVolume(parseFloat(e.target.value));
                      setIsMuted(false);
                    }}
                    className="w-16 accent-[#D80050] h-1 bg-slate-700 rounded-lg cursor-pointer"
                    aria-label="Volume"
                  />
                </div>
              </div>
            </div>

            {/* Live screen reader announcement */}
            <div className="sr-only" aria-live="polite">
              {isPlaying && currentChunk ? `Lendo agora: ${currentChunk.text}` : 'Áudio pausado'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
