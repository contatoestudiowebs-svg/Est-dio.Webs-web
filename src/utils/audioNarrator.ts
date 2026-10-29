import { ScreenplayElement, parseScreenplayPagesContinuous } from './writerSoloFormatter';

export interface NarrationChunk {
  id: number;
  text: string;
  label?: string;
  type: 'intro' | 'scene-heading' | 'dialogue' | 'action' | 'summary' | 'outro';
  characterName?: string;
}

/**
 * Prepares clean, natural Portuguese narration chunks from chapter/episode data
 */
export function prepareNarrationChunks(
  productionTitle: string,
  chapterLabel: string,
  author: string,
  mode: 'summary' | 'full',
  summary?: string,
  pdfPages?: string[],
  rawContent?: string
): NarrationChunk[] {
  const chunks: NarrationChunk[] = [];
  let idCounter = 0;

  if (mode === 'summary') {
    chunks.push({
      id: idCounter++,
      text: `Estúdio Webs apresenta: ${productionTitle}, ${chapterLabel}. Autoria de ${author}.`,
      label: 'Introdução',
      type: 'intro',
    });

    if (summary && summary.trim()) {
      // Split summary into natural sentences for clean pacing
      const sentences = summary
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter(Boolean);

      sentences.forEach((sentence) => {
        chunks.push({
          id: idCounter++,
          text: sentence,
          label: 'Resumo Oficial',
          type: 'summary',
        });
      });
    } else {
      chunks.push({
        id: idCounter++,
        text: 'Resumo em preparação para publicação oficial.',
        label: 'Aviso',
        type: 'summary',
      });
    }

    chunks.push({
      id: idCounter++,
      text: `Fim do resumo do ${chapterLabel}.`,
      label: 'Encerramento',
      type: 'outro',
    });

    return chunks;
  }

  // MODE: FULL CHAPTER / SCRIPT
  chunks.push({
    id: idCounter++,
    text: `Estúdio Webs. ${productionTitle}. ${chapterLabel}. Escrito por ${author}.`,
    label: 'Abertura',
    type: 'intro',
  });

  if (pdfPages && pdfPages.length > 0) {
    const continuous = parseScreenplayPagesContinuous(pdfPages);

    let i = 0;
    while (i < continuous.length) {
      const item = continuous[i];
      const el = item.element;

      if (el.type === 'scene-heading') {
        const cleanHeading = el.text.replace(/^[0-9]+[\.\)\-]?\s*/, '');
        chunks.push({
          id: idCounter++,
          text: `Cena: ${cleanHeading}`,
          label: cleanHeading,
          type: 'scene-heading',
        });
        i++;
        continue;
      }

      if (el.type === 'character') {
        const charName = el.text;
        let paren = '';
        let dialogueText = '';
        i++;

        if (i < continuous.length && continuous[i].element.type === 'parenthetical') {
          paren = continuous[i].element.text.replace(/[\(\)]/g, '').trim();
          i++;
        }

        if (i < continuous.length && continuous[i].element.type === 'dialogue') {
          dialogueText = continuous[i].element.text;
          i++;
        }

        if (dialogueText) {
          const introPhrase = paren ? `${charName}, ${paren}, fala:` : `${charName} fala:`;
          chunks.push({
            id: idCounter++,
            text: `${introPhrase} "${dialogueText}"`,
            label: charName,
            characterName: charName,
            type: 'dialogue',
          });
        }
        continue;
      }

      if (el.type === 'dialogue') {
        chunks.push({
          id: idCounter++,
          text: el.text,
          label: 'Fala',
          type: 'dialogue',
        });
        i++;
        continue;
      }

      if (el.type === 'action') {
        // Break long action descriptions into manageable sentences
        const sentences = el.text
          .split(/(?<=[.!?])\s+/)
          .map((s) => s.trim())
          .filter(Boolean);

        sentences.forEach((s) => {
          chunks.push({
            id: idCounter++,
            text: s,
            label: 'Descrição',
            type: 'action',
          });
        });
        i++;
        continue;
      }

      i++;
    }
  } else if (rawContent && rawContent.trim()) {
    const paragraphs = rawContent
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean);

    paragraphs.forEach((p) => {
      chunks.push({
        id: idCounter++,
        text: p,
        label: 'Texto',
        type: 'action',
      });
    });
  } else if (summary) {
    // Fallback to summary if no full script content
    chunks.push({
      id: idCounter++,
      text: summary,
      label: 'Resumo',
      type: 'summary',
    });
  }

  chunks.push({
    id: idCounter++,
    text: `Fim do ${chapterLabel}. Estúdio Webs, teledramaturgia virtual.`,
    label: 'Fim',
    type: 'outro',
  });

  return chunks;
}

/**
 * Gets all available Brazilian Portuguese (pt-BR) or Portuguese (pt) voices from window.speechSynthesis
 */
export function getPortugueseVoices(): SpeechSynthesisVoice[] {
  if (typeof window === 'undefined' || !window.speechSynthesis) return [];
  const voices = window.speechSynthesis.getVoices();
  return voices.filter(
    (v) =>
      v.lang.toLowerCase().startsWith('pt') ||
      v.lang.toLowerCase() === 'pt-br' ||
      v.lang.toLowerCase() === 'pt-pt'
  );
}
