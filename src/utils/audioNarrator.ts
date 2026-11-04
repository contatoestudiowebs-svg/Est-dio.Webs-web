import {
  ScreenplayElement,
  parseScreenplayPagesContinuous,
  parseScreenplayPage,
} from './writerSoloFormatter';

export interface NarrationChunk {
  id: number;
  text: string;
  label?: string;
  type: 'intro' | 'scene-heading' | 'dialogue' | 'action' | 'summary' | 'outro';
  characterName?: string;
}

/**
 * Formats a screenplay scene heading into natural spoken Portuguese
 * e.g. "CENA 01 – EXTERNA – RIO DE JANEIRO – DIA" -> "Cena 01: Exterior, Rio de Janeiro, dia."
 * e.g. "INT. QUARTO DE AQUILES - NOITE" -> "Cena: Interior, Quarto de Aquiles, noite."
 */
export function formatSceneHeadingForAudio(rawHeading: string): string {
  let heading = rawHeading.trim();

  // Strip separator lines, underscores and tab characters
  heading = heading.replace(/[_\t—–-]+/g, ' ').replace(/\s{2,}/g, ' ').trim();

  // Strip leading numbering e.g. "1. ", "01. "
  heading = heading.replace(/^\d+[\.\)\-]?\s*/, '');

  // Spoken Portuguese replacements for script shorthand
  heading = heading
    .replace(/\bINT\/EXT[\.\:]?\s+|\bEXT\/INT[\.\:]?\s+/gi, 'Interior e Exterior, ')
    .replace(/\bINT[\.\:]?\s+/gi, 'Interior, ')
    .replace(/\bEXT[\.\:]?\s+/gi, 'Exterior, ')
    .replace(/\bINTERNA[\.\:]?\s+/gi, 'Interior, ')
    .replace(/\bEXTERNA[\.\:]?\s+/gi, 'Exterior, ')
    .replace(/\bINTERNO[\.\:]?\s+/gi, 'Interior, ')
    .replace(/\bEXTERNO[\.\:]?\s+/gi, 'Exterior, ')
    .replace(/\s*[-–—]?\s*\bDIA\b/gi, ', dia')
    .replace(/\s*[-–—]?\s*\bNOITE\b/gi, ', noite')
    .replace(/\s*[-–—]?\s*\bTARDE\b/gi, ', tarde')
    .replace(/\s*[-–—]?\s*\bMANH[ÃA]\b/gi, ', manhã')
    .replace(/\s*[-–—]?\s*\bMADRUGADA\b/gi, ', madrugada')
    .replace(/\s*[-–—]?\s*\bAMANHECER\b/gi, ', amanhecer')
    .replace(/\s*[-–—]?\s*\bENTARDECER\b/gi, ', entardecer');

  // Format scene title prefix
  if (/^cena\s*\d+/i.test(heading)) {
    heading = heading.replace(/^cena\s*(\d+)[\s\-–—:]*/i, 'Cena $1: ');
  } else if (!heading.toLowerCase().startsWith('cena')) {
    heading = `Cena: ${heading}`;
  }

  // Final cleanup
  heading = heading.replace(/\s{2,}/g, ' ').trim();
  if (!/[.!?]$/.test(heading)) {
    heading += '.';
  }

  return heading;
}

/**
 * Cleans narrative action / description lines of screenplay formatting noise
 */
function cleanDescriptionText(raw: string): string {
  return raw
    .replace(/[_\t]+/g, ' ')
    .replace(/\b[A-ZÀ-Ú\s]{4,}\t[A-ZÀ-Ú0-9\s]{4,}\b/g, '') // remove header leaks
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Prepares clean, natural Portuguese narration chunks from chapter/episode data.
 * When mode === 'full', includes 100% of the screenplay:
 * - Cenas (Cabeçalhos de cena e ambientação)
 * - Discrições (Descrições de ação, ambientes, rubricas e comportamentos)
 * - Personagens (Identificação do personagem antes de sua fala)
 * - Suas Falas (Diálogos completos, pontuação e indicações cênicas parentéticas)
 * - Transições (Corta para, dissolve para, etc.)
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

  // MODE 1: SUMMARY ONLY (when user explicitly requests just the short synopsis)
  if (mode === 'summary') {
    chunks.push({
      id: idCounter++,
      text: `Estúdio Webs apresenta o resumo oficial de: ${productionTitle}, ${chapterLabel}. Autoria de ${author}.`,
      label: 'Abertura do Resumo',
      type: 'intro',
    });

    if (summary && summary.trim()) {
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
        text: 'Resumo oficial em preparação para publicação.',
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

  // MODE 2: FULL CHAPTER / SCRIPT (CENAS, DISCRIÇÕES, PERSONAGENS E SUAS FALAS)
  chunks.push({
    id: idCounter++,
    text: `Estúdio Webs apresenta: ${productionTitle}. ${chapterLabel}, autoria de ${author}. Narração dramatizada do roteiro completo com cenas, descrições, personagens e falas.`,
    label: 'Abertura',
    type: 'intro',
  });

  // Collect screenplay continuous elements
  let continuous: { pageIndex: number; element: ScreenplayElement }[] = [];

  if (pdfPages && pdfPages.length > 0) {
    continuous = parseScreenplayPagesContinuous(pdfPages);
  } else if (rawContent && rawContent.trim()) {
    // If pdfPages array is not provided, parse raw content (using page breaks if present)
    const virtualPages = rawContent.includes('--- PÁGINA SEGUINTE ---')
      ? rawContent.split('--- PÁGINA SEGUINTE ---')
      : [rawContent];
    continuous = parseScreenplayPagesContinuous(virtualPages);
  }

  if (continuous.length > 0) {
    let i = 0;
    while (i < continuous.length) {
      const item = continuous[i];
      const el = item.element;

      // 1. CENAS (Scene Headings / Sluglines)
      if (el.type === 'scene-heading') {
        const spokenHeading = formatSceneHeadingForAudio(el.text);
        chunks.push({
          id: idCounter++,
          text: spokenHeading,
          label: `Cena: ${el.text.trim()}`,
          type: 'scene-heading',
        });
        i++;
        continue;
      }

      // 2. PERSONAGENS E SUAS FALAS (Character Cues with Dialogue & Parentheticals)
      if (el.type === 'character') {
        const charName = el.text.trim();

        // Filter out running page headers that match the production title or chapter label
        if (
          charName.toUpperCase() === productionTitle.toUpperCase() ||
          charName.toUpperCase() === chapterLabel.toUpperCase() ||
          /^CAPÍTULO\s+\d+$/i.test(charName) ||
          /^EPISÓDIO\s+\d+$/i.test(charName)
        ) {
          i++;
          while (
            i < continuous.length &&
            (continuous[i].element.type === 'dialogue' || continuous[i].element.type === 'parenthetical')
          ) {
            i++;
          }
          continue;
        }

        let paren = '';
        const dialogueParts: string[] = [];
        i++;

        // Check for immediate parenthetical after character name
        if (i < continuous.length && continuous[i].element.type === 'parenthetical') {
          paren = continuous[i].element.text.replace(/[\(\)]/g, '').trim();
          i++;
        }

        // Consume dialogue and any subsequent mid-speech parentheticals/dialogues for this character
        while (i < continuous.length) {
          const nextEl = continuous[i].element;
          if (nextEl.type === 'dialogue') {
            dialogueParts.push(nextEl.text.trim());
            i++;
          } else if (nextEl.type === 'parenthetical') {
            const midParen = nextEl.text.replace(/[\(\)]/g, '').trim();
            if (midParen) {
              dialogueParts.push(`(${midParen})`);
            }
            i++;
          } else {
            break;
          }
        }

        const dialogueText = dialogueParts.join(' ').trim();

        if (dialogueText) {
          const introPhrase = paren ? `${charName}, ${paren}, fala:` : `${charName} fala:`;
          const sentences = dialogueText
            .split(/(?<=[.!?])\s+/)
            .map((s) => s.trim())
            .filter(Boolean);

          if (sentences.length <= 2) {
            chunks.push({
              id: idCounter++,
              text: `${introPhrase} "${dialogueText}"`,
              label: charName,
              characterName: charName,
              type: 'dialogue',
            });
          } else {
            // First sentence carries the character announcement
            chunks.push({
              id: idCounter++,
              text: `${introPhrase} "${sentences[0]}"`,
              label: charName,
              characterName: charName,
              type: 'dialogue',
            });
            // Remaining sentences continue the character's speech
            for (let sIdx = 1; sIdx < sentences.length; sIdx++) {
              chunks.push({
                id: idCounter++,
                text: `"${sentences[sIdx]}"`,
                label: `${charName} (cont.)`,
                characterName: charName,
                type: 'dialogue',
              });
            }
          }
        } else {
          // Character cue without speech (e.g. dramatic entrance or reaction)
          const charAction = paren ? `${charName}, ${paren}.` : `${charName}.`;
          chunks.push({
            id: idCounter++,
            text: charAction,
            label: charName,
            characterName: charName,
            type: 'action',
          });
        }
        continue;
      }

      // 3. DIALOGUE (Isolated dialogue line without immediate character cue)
      if (el.type === 'dialogue') {
        const cleanSpeech = el.text.trim();
        if (cleanSpeech) {
          chunks.push({
            id: idCounter++,
            text: `Fala: "${cleanSpeech}"`,
            label: 'Fala do Personagem',
            type: 'dialogue',
          });
        }
        i++;
        continue;
      }

      // 4. PARENTHETICAL (Isolated stage/acting direction)
      if (el.type === 'parenthetical') {
        const parenText = el.text.replace(/[\(\)]/g, '').trim();
        if (parenText) {
          chunks.push({
            id: idCounter++,
            text: `Indicação cênica: ${parenText}.`,
            label: 'Indicação Cênica',
            type: 'action',
          });
        }
        i++;
        continue;
      }

      // 5. TRANSIÇÕES (Transitions: Corta para, corte rápido para, etc.)
      if (el.type === 'transition') {
        let transText = el.text.trim();
        if (!/[.!?:]$/.test(transText)) transText += '.';
        chunks.push({
          id: idCounter++,
          text: `Transição: ${transText}`,
          label: 'Transição Cênica',
          type: 'action',
        });
        i++;
        continue;
      }

      // 6. DISCRIÇÕES / DESCRIÇÕES DE CENA (Action / Scene descriptions / Environment)
      if (el.type === 'action') {
        const cleaned = cleanDescriptionText(el.text);
        if (cleaned) {
          // Skip running header lines (e.g. "SÓCIO DO AMOR CAPÍTULO 01")
          if (
            cleaned.toUpperCase().includes(productionTitle.toUpperCase()) &&
            (cleaned.toUpperCase().includes('CAPÍTULO') || cleaned.toUpperCase().includes('EPISÓDIO'))
          ) {
            i++;
            continue;
          }

          const sentences = cleaned
            .split(/(?<=[.!?])\s+/)
            .map((s) => s.trim())
            .filter(Boolean);

          sentences.forEach((sentence) => {
            // Filter out empty or raw separator lines
            if (sentence && !/^[_\-—\s]{3,}$/.test(sentence)) {
              chunks.push({
                id: idCounter++,
                text: sentence,
                label: 'Descrição da Cena',
                type: 'action',
              });
            }
          });
        }
        i++;
        continue;
      }

      // Fallback for any other element
      if (el.text && el.text.trim()) {
        const fallbackText = cleanDescriptionText(el.text);
        if (fallbackText && !/^[_\-—\s]{3,}$/.test(fallbackText)) {
          chunks.push({
            id: idCounter++,
            text: fallbackText,
            label: 'Descrição',
            type: 'action',
          });
        }
      }
      i++;
    }
  } else if (summary && summary.trim()) {
    // If no screenplay pages or full text available, fallback to summary
    const sentences = summary
      .split(/(?<=[.!?])\s+/)
      .map((s) => s.trim())
      .filter(Boolean);

    sentences.forEach((s) => {
      chunks.push({
        id: idCounter++,
        text: s,
        label: 'Resumo Oficial',
        type: 'summary',
      });
    });
  }

  // OUTRO CHUNK
  chunks.push({
    id: idCounter++,
    text: `Fim do ${chapterLabel}. Estúdio Webs, web emissora do Mundo Virtual.`,
    label: 'Encerramento',
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
