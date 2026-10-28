import { ChapterEpisode } from '../types';

/**
 * Calcula o tempo estimado de leitura em minutos para um capítulo ou episódio.
 * Leva em consideração o formato de roteiro dramático (~170 palavras por minuto)
 * ou páginas reais do PDF.
 */
export function calculateReadingTimeMinutes(
  episode: Pick<ChapterEpisode, 'content' | 'pdfPages' | 'summary' | 'readingTimeMinutes'>,
  category?: string
): number {
  if (episode.readingTimeMinutes && episode.readingTimeMinutes > 0) {
    return episode.readingTimeMinutes;
  }

  // 1. Se tem texto de roteiro completo ou páginas de PDF
  let fullText = '';
  if (episode.content && episode.content.trim().length > 50) {
    fullText = episode.content;
  } else if (episode.pdfPages && episode.pdfPages.length > 0) {
    fullText = episode.pdfPages.join(' ');
  }

  if (fullText.trim().length > 100) {
    const words = fullText.trim().split(/\s+/).filter(Boolean).length;
    // Média de 170 palavras por minuto para leitura de roteiro/diálogos
    return Math.max(1, Math.round(words / 170));
  }

  // 2. Se tem páginas registradas sem texto
  if (episode.pdfPages && episode.pdfPages.length > 0) {
    return Math.max(1, episode.pdfPages.length);
  }

  // 3. Padrão estimado para capítulos/episódios sem roteiro integral anexado
  return category === 'Web série' ? 10 : 12;
}

/**
 * Formata o tempo de leitura para exibição sucinta.
 * Ex: "12 min" ou "~12 min"
 */
export function formatReadingTime(
  episode: Pick<ChapterEpisode, 'content' | 'pdfPages' | 'summary' | 'readingTimeMinutes'>,
  category?: string
): string {
  const mins = calculateReadingTimeMinutes(episode, category);
  const isEstimatedPlaceholder =
    !episode.readingTimeMinutes &&
    (!episode.content || episode.content.trim().length <= 100) &&
    (!episode.pdfPages || episode.pdfPages.length === 0);

  return isEstimatedPlaceholder ? `~${mins} min` : `${mins} min`;
}

/**
 * Retorna o texto completo: "Tempo previsto de leitura: 12 min"
 */
export function getReadingTimeLabel(
  episode: Pick<ChapterEpisode, 'content' | 'pdfPages' | 'summary' | 'readingTimeMinutes'>,
  category?: string
): string {
  return `Tempo previsto de leitura: ${formatReadingTime(episode, category)}`;
}
