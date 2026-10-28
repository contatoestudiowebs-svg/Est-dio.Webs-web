// WriterSolo (writersolo.com) Screenplay Formatting Engine
// Parses screenplay pages into industry-standard WriterSolo elements:
// Sluglines (Scene Headings), Action, Characters, Parentheticals, Dialogue, Transitions

export type ScreenplayElementType =
  | 'title-page'
  | 'scene-heading'
  | 'action'
  | 'character'
  | 'parenthetical'
  | 'dialogue'
  | 'transition'
  | 'general';

export interface ScreenplayElement {
  type: ScreenplayElementType;
  text: string;
  characterName?: string;
  parenthetical?: string;
  dialogue?: string;
}

export interface ParsedScreenplayPage {
  pageNumber: number;
  isTitlePage: boolean;
  titlePageData?: {
    title: string;
    episode?: string;
    subtitle?: string;
    author?: string;
  };
  elements: ScreenplayElement[];
}

/**
 * Checks if a line matches a scene heading (slugline)
 */
/**
 * Checks if a line matches a scene heading (slugline)
 */
export function isSceneHeading(line: string, nextLine?: string): boolean {
  const trimmed = line.trim();
  if (!trimmed || trimmed.length > 120) return false;

  // Strip leading scene numbers like "01.", "01", "1.", "1 -", "CENA 1 -"
  const clean = trimmed.replace(/^\d+[\.\)\-]?\s*/, '').replace(/^CENA\s+\d+[\s\-\:]*/i, '');

  // Standard slugline prefixes
  if (/^(INT\.|EXT\.|INT\/EXT\.|INT\.\/EXT\.|I\/E\.|EST\.|CENA\b|SCENE\b)/i.test(clean)) {
    return true;
  }

  // Common Portuguese slugline patterns (e.g. "CONDOMÍNIO – CASA DE RÔMULO – VARANDA – NOITE.")
  // or "02. CASA DE GENEBRA. SALA DE ESTAR. DIA" or "Casa de Berto. Sala de estar. Manhã."
  const timeEndings = /[-–—一\.]\s*(DIA|NOITE|TARDE|MANHÃ|MADRUGADA|ENTARDECER|AMANHECER|CONT\.|CONTINUAÇÃO|FLASHBACK)[\.:]?$/i;
  if (timeEndings.test(trimmed)) {
    // Exclude full narrative action sentences
    if (!/\b(está|estava|chegou|foram|disse|olhou|entrou|quando|depois)\b/i.test(trimmed)) {
      return true;
    }
  }

  // Numeric scene start with location: e.g. "01 CIDADE FICTÍCIA DE BOA ESPERANÇA. BIBLIOTECA."
  if (/^\d+[\.\)\-]?\s+[A-ZÀ-Ú0-9\s\.\,\'\-]+$/.test(trimmed)) {
    if (nextLine && /^(DIA|NOITE|TARDE|MANHÃ|MADRUGADA|CONTINUAÇÃO)[\.:]?$/i.test(nextLine.trim())) {
      return true;
    }
    if (clean.includes('.') && clean === clean.toUpperCase() && !COMMON_ACTION_VERBS.test(clean)) {
      return true;
    }
  }

  // Standalone time jumps / scene markers
  if (
    /^(MESES DEPOIS|DOIS DIAS DEPOIS|ALGUMAS SEMANAS DEPOIS|UMA SEMANA DEPOIS|MINUTOS DEPOIS|HORAS MAIS TARDE|CAI A NOITE|ABERTURA|INTERVALO COMERCIAL|NOITE SEGUINTE|DIA SEGUINTE|TEMPO DEPOIS)[\.\…]*$/i.test(
      trimmed
    )
  ) {
    return true;
  }

  return false;
}

/**
 * Checks if a line matches a transition (e.g. "CORTE PARA:", "CORTA PARA:", "FADE OUT.")
 */
export function isTransition(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;
  return /^(CORTE PARA|CORTA PARA|FADE IN|FADE OUT|DISSOLVE PARA|FIM DO CAPÍTULO|FIM DO EPISÓDIO|FIM DA CENA|FIM)[\.:;]?(\s.*)?$/i.test(
    trimmed
  );
}

/**
 * Checks if a line is a parenthetical (e.g. "(baixo)", "(ao telefone)", "(surpresa)")
 */
export function isParenthetical(line: string): boolean {
  const trimmed = line.trim();
  return /^\([^)]{1,100}\)$/.test(trimmed);
}

/**
 * Helper to check if a standalone word/phrase is an action verb in Portuguese
 */
const COMMON_ACTION_VERBS =
  /\b(está|estava|vai|vão|entra|entram|sai|saem|caminha|caminham|corre|correm|senta|sentam|levanta|levantam|olha|olham|vira|viram|pega|pegam|puxa|puxam|coloca|colocam|chora|sorri|abraça|beija|observa|espera|continua|começa|percebe|respira|suspira|encara|aponta|mostra|entrega|guarda|fecha|abre|bate|desmaia|acorda|reage|bufa|escreve|sobe|desce|passa|arrasta|agarra|larga|sacode|solta|toca|liga|serve|bebe|assente|cata|esfrega|se |diz|fala|pergunta|responde)\b/i;

/**
 * Extracts character name and optional parenthetical from a character cue line
 */
export function extractCharacterCue(
  line: string,
  nextLine?: string
): { name: string; parenthetical?: string } | null {
  const trimmed = line.trim();
  if (trimmed.length < 2 || trimmed.length > 45) return null;

  // Exclude single time words (e.g. "DIA.", "NOITE.", "MANHÃ.")
  if (/^(DIA|NOITE|TARDE|MANHÃ|MADRUGADA|CONTINUAÇÃO)[\.:]?$/i.test(trimmed)) {
    return null;
  }

  // Exclude standalone chapter/episode headings
  if (/^(CAPÍTULO|EPISÓDIO)\s+\d+[\.:]?$/i.test(trimmed)) {
    return null;
  }

  // Exclude transitions, sluglines and common action starters
  if (isSceneHeading(trimmed, nextLine) || isTransition(trimmed)) return null;
  if (/^(INT|EXT|EST|FADE|CORTE|CORTA|CENA|CAPÍTULO|EPISÓDIO|SONOPLASTIA|DETALHE|PLANO|CAM|CÂMERA)/i.test(trimmed)) {
    return null;
  }

  // 1. ALL CAPS character cue with optional parenthetical: e.g. "THALES", "THALES (nervoso)", "LYKA (V.O.)"
  const allCapsMatch = trimmed.match(/^([A-ZÀ-Ú0-9\s\.\'\-]+?)(?:\s*\(([^)]+)\))?$/);
  if (allCapsMatch) {
    const rawName = allCapsMatch[1].trim();
    const paren = allCapsMatch[2]?.trim();

    // Check that rawName is all caps
    if (rawName === rawName.toUpperCase() && rawName.length >= 2 && rawName.length <= 35) {
      // Must not end in sentence punctuation
      if (!/[,\!\?]$/.test(rawName)) {
        return {
          name: rawName,
          parenthetical: paren,
        };
      }
    }
  }

  // 2. Title Case character cue (standard in Brazilian TV scripts like "Tamara", "Dr. Guilherme", "Salete", "Berto")
  const titleCaseMatch = trimmed.match(/^([A-ZÀ-Ú][a-zà-ú0-9\.\'\s\-]+?)(?:\s*\(([^)]+)\))?$/);
  if (titleCaseMatch) {
    const rawName = titleCaseMatch[1].trim();
    const paren = titleCaseMatch[2]?.trim();

    // Must be short (1 to 4 words), under 30 chars
    const words = rawName.split(/\s+/);
    if (words.length <= 4 && rawName.length <= 32) {
      // Exclude lines ending with punctuation (. ! ? ; ,) except title abbrev like "Dr." or "Sr."
      if (/[!?,;:]$/.test(rawName)) return null;
      if (rawName.endsWith('.') && !/^(Dr|Sr|Sra|Dra)\.$/i.test(rawName)) return null;

      // Exclude common preposition / article starters
      if (/^(O|A|Os|As|Um|Uma|De|Do|Da|Em|No|Na|Depois|Quando|Enquanto|Logo|Mas|Com|Sem|Pelo|Pela)\b/i.test(rawName)) {
        return null;
      }

      // Must not contain action verbs
      if (COMMON_ACTION_VERBS.test(rawName)) {
        return null;
      }

      // If it has an embedded parenthetical: e.g. "Dr. Guilherme (calmo)", "Tamara (surpresa)" -> 100% character cue
      if (paren) {
        return {
          name: rawName,
          parenthetical: paren,
        };
      }

      // If followed by standalone parenthetical or direct spoken dialogue line:
      if (nextLine) {
        const nextTrim = nextLine.trim();
        if (isParenthetical(nextTrim)) {
          return { name: rawName };
        }
        // Direct spoken dialogue cues in next line
        if (
          nextTrim.length > 0 &&
          !isSceneHeading(nextTrim) &&
          !isTransition(nextTrim) &&
          (/^[“\"\'\—\–\-]/.test(nextTrim) ||
            /^(Mãe|Pai|Filha|Filho|Oi|Olá|Sim|Não|Mas|Por que|Como|Eu|Você|O que|Quem|Onde|Quando|Nem|Então|Pode|Deixa|Vai|Se|Olha|Ah|Ih|Ai|Dona|Doutor|Desculpe|Cê|Agora|É!)/i.test(
              nextTrim
            ) ||
            /[!\?]$/.test(nextTrim))
        ) {
          return { name: rawName };
        }
      }
    }
  }

  return null;
}

/**
 * Checks if a line is a character cue
 */
export function isCharacterCue(line: string, nextLine?: string): boolean {
  return extractCharacterCue(line, nextLine) !== null;
}

/**
 * Parses inline Brazilian TV drama dialogue format: "Character (Parenthetical) - Dialogue..."
 * e.g. "Dorival – Yula Gurgel, grande autora..." or "Tamara - Deixa que eu atendo, pai."
 * Excludes hyphenated words like "levanta-se" or "dar-lhe".
 */
export function parseInlineSpeech(line: string): {
  characterName: string;
  parenthetical?: string;
  dialogueText: string;
} | null {
  const trimmed = line.trim();

  // Match dialogue separator:
  // - Em-dash (—) or En-dash (–) with optional spaces
  // - Colon (:) followed by space
  // - Hyphen with space before and after: \s+-\s+
  // - Closing parenthesis followed by hyphen and space: \)\s*-\s+
  // MUST NOT match enclitic hyphen inside words like "levanta-se" or "dar-lhe"
  const match = trimmed.match(
    /^([A-ZÀ-Úa-zà-ú0-9\s\.\'\-]+?)(?:\s*\(([^)]+)\))?\s*(?:[–—]|(?<=\s|\))-(?=\s)|:(?=\s))\s*(.+)$/
  );
  if (!match) return null;

  const rawName = match[1].trim();
  const parenthetical = match[2]?.trim();
  const dialogueText = match[3]?.trim();

  // Validate character name length and exclude scene action starters
  if (rawName.length < 2 || rawName.length > 35) return null;
  if (/^(INT|EXT|EST|CENA|CAPÍTULO|EPISÓDIO|SONOPLASTIA|DETALHE|PLANO|CAM|CÂMERA|CORTA|CORTE)/i.test(rawName)) {
    return null;
  }
  if (/^(Depois|Quando|Enquanto|Condomínio|Casa|Quarto|Sala|Prédio|Rua|Avenida|Stock Shot)/i.test(rawName)) {
    return null;
  }
  if (!dialogueText) return null;

  return {
    characterName: rawName.toUpperCase(),
    parenthetical,
    dialogueText,
  };
}

/**
 * Checks if a line following dialogue is an action/narration line (so dialogue shouldn't swallow it)
 */
export function isActionNarration(line: string, previousDialogueLines: string[]): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;

  // 1. Any line starting with lowercase or punctuation is ALWAYS dialogue continuation
  if (/^[a-zà-ú0-9,\.\:\;\!\?\"\'\”\’\-\–\—\)]/.test(trimmed)) {
    return false;
  }

  // 2. Technical screenplay action cues are always action
  if (
    /^(SONOPLASTIA|DETALHE|PLANO|CAM|CÂMERA|A CÂMERA|CORTES RÁPIDOS|VEMOS|IMAGENS|A VOZ|A MÚSICA|MÚSICA)/i.test(
      trimmed
    )
  ) {
    return true;
  }

  // 3. Check if previous dialogue line finished a sentence
  const prevLine = previousDialogueLines[previousDialogueLines.length - 1] || '';
  const prevTrimmed = prevLine.trim();
  const prevEndedSentence = /[\.\!\?\…\"”\/—–]$/.test(prevTrimmed) || prevTrimmed.endsWith('!');

  // 4. Enclitic third-person verbs (e.g. senta-se, levanta-se, vira-se, aproxima-se, dá-lhe, sobressalta-se)
  if (/\b[A-Za-zÀ-Úa-zà-ú]+-(se|lhe|o|a|os|as|nos)\b/i.test(trimmed)) {
    return true;
  }

  // 5. Reflexive third-person actions (e.g. se levanta, se senta, se olham, se encaram, se desespera, se entristece)
  if (
    /\bse (levanta|levantam|senta|sentam|aproxima|aproximam|afasta|afastam|olham|encaram|abraçam|beijam|desespera|entristece|assusta|surpreende|vira|recosta|apruma|esconde|cala|emociona|incomoda|choca|despede)\b/i.test(
      trimmed
    )
  ) {
    return true;
  }

  // 6. Common 3rd person narration action verbs when preceded by completed sentence or subject
  const actionVerbsRegex =
    /\b(entra|entram|sai|saem|caminha|caminham|corre|correm|olha|olham|pega|pegam|puxa|puxam|coloca|colocam|tira|tiram|chora|choram|sorri|sorriem|abraça|abraçam|beija|beijam|observa|observam|continua|continuam|começa|começam|percebe|percebem|respira|respiram|suspira|suspiram|encara|encaram|aponta|apontam|mostra|mostram|mostrando|entregando|entrega|entregam|guarda|guardam|fecha|fecham|abre|abrem|bate|batem|ouve-se|escuta-se|desmaia|desmaiam|acorda|acordam|hesita|reage|bufa|escreve|sobe|desce|passa|passam|arrasta|agarra|agarrando|larga|largando|sacode|solta|toca|liga|serve|bebe|assente|cata|esfrega|limpa|arruma|aparece|surge)\b/i;

  if (prevEndedSentence && actionVerbsRegex.test(trimmed)) {
    // Exclude first-person / direct conversational speech
    if (!/^(Eu|Você|Nós|Vocês|Tu|Pra mim|Por que|Mas eu|Se eu)\b/i.test(trimmed)) {
      return true;
    }
  }

  // 7. Third-person environmental narration
  if (
    /^(Uma?|O|A|Os|As|Dois|Duas|Alguns|Algumas)\s+(quarto|porta|sala|mesa|cadeira|cama|médico|música|som|tempo|luz|telefone|campainha|silêncio|expressão|olhar|lágrimas|carro|cão|relógio|homem|mulher|pessoa)\b/i.test(
      trimmed
    )
  ) {
    return true;
  }

  return false;
}

/**
 * Parses a page of script into structured WriterSolo screenplay elements
 */
export function parseScreenplayPage(rawPageText: string, pageIndex: number): ParsedScreenplayPage {
  const lines = rawPageText.split('\n');

  // Detect Title Page (page 0 or early page with title/author metadata and no scene headings)
  const isTitleCandidate =
    pageIndex === 0 &&
    !rawPageText.includes('INT.') &&
    !rawPageText.includes('EXT.') &&
    lines.length <= 20 &&
    /(EPISÓDIO|CAPÍTULO|DE\s+|POR\s+|ESCRITA|AUTOR)/i.test(rawPageText);

  if (isTitleCandidate) {
    const cleanLines = lines.map((l) => l.trim()).filter(Boolean);
    let title = cleanLines[0] || 'ROTEIRO';
    let episode = '';
    let subtitle = '';
    let author = '';

    for (let i = 1; i < cleanLines.length; i++) {
      const line = cleanLines[i];
      if (/^(EPISÓDIO|CAPÍTULO)/i.test(line)) {
        episode = line;
      } else if (/^["“']/.test(line)) {
        subtitle = line.replace(/["“']/g, '');
      } else if (/^(DE|POR|ESCRITO POR|ESCRITA POR|AUTOR|AUTORA)/i.test(line)) {
        author = cleanLines[i + 1] || '';
        i++;
      } else if (!author && i === cleanLines.length - 1 && !line.includes('@')) {
        author = line;
      }
    }

    return {
      pageNumber: pageIndex + 1,
      isTitlePage: true,
      titlePageData: {
        title,
        episode,
        subtitle,
        author,
      },
      elements: [],
    };
  }

  const elements: ScreenplayElement[] = [];

  // Filter out raw pagination artifacts and top header metadata
  const filteredLines: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip top header artifacts like "PRODUÇÃO CAPÍTULO 01 Pag.: 1", rule lines, or chapter labels
    if (
      i < 4 &&
      (/^(CAPÍTULO|EPISÓDIO)\s+\d+[\.:]?$/i.test(trimmed) ||
        trimmed.includes('Pag.:') ||
        trimmed.includes('Pag:') ||
        trimmed.includes('Pág.:') ||
        /^[-=_~]{4,}$/.test(trimmed))
    ) {
      continue;
    }

    // Skip standalone page number indicator at top or bottom (e.g. "2.", "3.", "14.")
    if ((i < 3 || i > lines.length - 4) && /^\d+\.?$/.test(trimmed)) {
      continue;
    }

    filteredLines.push(line);
  }

  // Parsing loop for regular screenplay pages
  let i = 0;
  while (i < filteredLines.length) {
    const line = filteredLines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      i++;
      continue;
    }

    // 1. Scene Heading (Slugline)
    if (isSceneHeading(trimmed, filteredLines[i + 1]?.trim())) {
      let headingText = trimmed.toUpperCase();

      // Check if next line is a two-line slugline continuation (e.g. "DIA.", "NOITE.", "MANHÃ.")
      if (i + 1 < filteredLines.length) {
        const nextTrim = filteredLines[i + 1].trim();
        if (/^(DIA|NOITE|TARDE|MANHÃ|MADRUGADA|CONTINUAÇÃO)[\.:]?$/i.test(nextTrim)) {
          headingText = `${headingText} 一 ${nextTrim.toUpperCase()}`;
          i++; // consume continuation line
        }
      }

      elements.push({
        type: 'scene-heading',
        text: headingText,
      });
      i++;
      continue;
    }

    // 2. Transition (e.g. "CORTE PARA:", "CORTA PARA;", "FIM DO CAPÍTULO")
    if (isTransition(trimmed)) {
      // Check if transition has trailing scene heading on same line: e.g. "CORTA PARA; Quarto..."
      const splitMatch = trimmed.match(/^(CORTE PARA|CORTA PARA|FADE IN|FADE OUT|DISSOLVE PARA)[\.:;]\s*(.+)$/i);
      if (splitMatch && splitMatch[2]?.trim()) {
        elements.push({
          type: 'transition',
          text: `${splitMatch[1].toUpperCase()}:`,
        });
        // Replace current line with remainder so it is processed in next step
        filteredLines[i] = splitMatch[2].trim();
        continue;
      }

      elements.push({
        type: 'transition',
        text: trimmed.toUpperCase(),
      });
      i++;
      continue;
    }

    // 3. Inline Brazilian / TV Drama dialogue format: "Character (Parenthetical) - Dialogue..."
    const inlineSpeech = parseInlineSpeech(trimmed);
    if (inlineSpeech) {
      elements.push({
        type: 'character',
        text: inlineSpeech.characterName,
        characterName: inlineSpeech.characterName,
      });

      if (inlineSpeech.parenthetical) {
        elements.push({
          type: 'parenthetical',
          text: `(${inlineSpeech.parenthetical})`,
          parenthetical: `(${inlineSpeech.parenthetical})`,
        });
      }

      const dialogueLines: string[] = [inlineSpeech.dialogueText];
      i++;

      // Collect multi-line continuation of this inline dialogue
      while (i < filteredLines.length) {
        const dLine = filteredLines[i].trim();
        if (!dLine) {
          i++;
          break; // Empty line ends speech
        }

        if (
          isSceneHeading(dLine) ||
          isTransition(dLine) ||
          parseInlineSpeech(dLine) ||
          extractCharacterCue(dLine, filteredLines[i + 1]?.trim()) ||
          isParenthetical(dLine)
        ) {
          break;
        }

        if (isActionNarration(dLine, dialogueLines)) {
          break;
        }

        dialogueLines.push(dLine);
        i++;
      }

      elements.push({
        type: 'dialogue',
        text: dialogueLines.join(' '),
        dialogue: dialogueLines.join(' '),
      });

      continue;
    }

    // 4. Standalone Character Cue on its own line (ALL CAPS or Title Case)
    const charCueInfo = extractCharacterCue(trimmed, filteredLines[i + 1]?.trim());
    if (charCueInfo) {
      elements.push({
        type: 'character',
        text: charCueInfo.name.toUpperCase(),
        characterName: charCueInfo.name.toUpperCase(),
      });
      i++;

      // If parenthetical was embedded on cue line (e.g. "THALES (nervoso)")
      if (charCueInfo.parenthetical) {
        elements.push({
          type: 'parenthetical',
          text: `(${charCueInfo.parenthetical})`,
          parenthetical: `(${charCueInfo.parenthetical})`,
        });
      } else if (i < filteredLines.length && isParenthetical(filteredLines[i].trim())) {
        // Next line is standalone parenthetical: e.g. "(surpresa)"
        const parenLine = filteredLines[i].trim();
        elements.push({
          type: 'parenthetical',
          text: parenLine,
          parenthetical: parenLine,
        });
        i++;
      }

      // Collect consecutive dialogue lines
      const dialogueLines: string[] = [];
      while (i < filteredLines.length) {
        const dLine = filteredLines[i].trim();
        if (!dLine) {
          i++;
          break;
        }

        if (
          isSceneHeading(dLine) ||
          isTransition(dLine) ||
          parseInlineSpeech(dLine) ||
          extractCharacterCue(dLine, filteredLines[i + 1]?.trim())
        ) {
          break;
        }

        // Mid-dialogue parenthetical (e.g. (MORE) or (pausa))
        if (isParenthetical(dLine)) {
          if (dialogueLines.length > 0) {
            elements.push({
              type: 'dialogue',
              text: dialogueLines.join(' '),
              dialogue: dialogueLines.join(' '),
            });
            dialogueLines.length = 0;
          }
          elements.push({
            type: 'parenthetical',
            text: dLine,
            parenthetical: dLine,
          });
          i++;
          continue;
        }

        // Check if dLine is action narration describing scene/action
        if (isActionNarration(dLine, dialogueLines)) {
          break;
        }

        dialogueLines.push(dLine);
        i++;
      }

      if (dialogueLines.length > 0) {
        elements.push({
          type: 'dialogue',
          text: dialogueLines.join(' '),
          dialogue: dialogueLines.join(' '),
        });
      }

      continue;
    }

    // 5. Standalone parenthetical
    if (isParenthetical(trimmed)) {
      elements.push({
        type: 'parenthetical',
        text: trimmed,
        parenthetical: trimmed,
      });
      i++;
      continue;
    }

    // 6. Action / Description paragraph
    const actionLines: string[] = [trimmed];
    i++;
    while (i < filteredLines.length) {
      const aLine = filteredLines[i].trim();
      if (!aLine) {
        i++;
        break; // Empty line separates action paragraphs
      }
      if (
        isSceneHeading(aLine) ||
        isTransition(aLine) ||
        parseInlineSpeech(aLine) ||
        extractCharacterCue(aLine, filteredLines[i + 1]?.trim())
      ) {
        break;
      }
      actionLines.push(aLine);
      i++;
    }

    elements.push({
      type: 'action',
      text: actionLines.join(' '),
    });
  }

  return {
    pageNumber: pageIndex + 1,
    isTitlePage: false,
    elements,
  };
}

/**
 * Exports screenplay pages into WriterSolo / WriterDuet / Final Draft compatible .Fountain text
 */
export function exportToFountain(
  pages: string[],
  title: string,
  author: string,
  episodeLabel: string
): string {
  const header = `Title: ${title}
Credit: escrito por
Author: ${author}
Draft date: ${new Date().toLocaleDateString('pt-BR')}
Contact: Estúdio Webs • Teledramaturgia Virtual
Episode: ${episodeLabel}

===
`;

  const scriptBody = pages
    .map((pageText, idx) => {
      const parsed = parseScreenplayPage(pageText, idx);
      if (parsed.isTitlePage) return '';

      return parsed.elements
        .map((el) => {
          switch (el.type) {
            case 'scene-heading':
              return `\n${el.text}\n`;
            case 'character':
              return `\n${el.text}`;
            case 'parenthetical':
              return `${el.text}`;
            case 'dialogue':
              return `${el.text}\n`;
            case 'transition':
              return `\n> ${el.text}\n`;
            case 'action':
            default:
              return `\n${el.text}\n`;
          }
        })
        .join('');
    })
    .join('\n\n=== [ QUEBRA DE PÁGINA ] ===\n\n');

  return header + scriptBody;
}

/**
 * Generates an authentic WriterSolo screenplay print HTML document with Courier Prime styling
 */
export function generateWriterSoloPrintHtml(
  productionTitle: string,
  episodeLabel: string,
  author: string,
  pages: string[]
): string {
  const parsedPages = pages.map((page, idx) => parseScreenplayPage(page, idx));

  const pagesHtml = parsedPages
    .map((page, pageIdx) => {
      // 1. Title Page in WriterSolo format
      if (page.isTitlePage && page.titlePageData) {
        return `
        <div class="ws-page ws-title-page">
          <div class="ws-title-wrap">
            <h1 class="ws-title">${page.titlePageData.title || productionTitle}</h1>
            ${
              page.titlePageData.episode
                ? `<div class="ws-subtitle">${page.titlePageData.episode}</div>`
                : `<div class="ws-subtitle">${episodeLabel}</div>`
            }
            ${page.titlePageData.subtitle ? `<div class="ws-episodename">“${page.titlePageData.subtitle}”</div>` : ''}
            
            <div class="ws-byline">
              <p>Escrito por</p>
              <p class="ws-author">${page.titlePageData.author || author}</p>
            </div>
          </div>
          
          <div class="ws-title-footer">
            <p><strong>ESTÚDIO WEBS</strong></p>
            <p>Teledramaturgia Virtual Oficial</p>
            <p>Formatado no Padrão WriterSolo (writersolo.com)</p>
          </div>
        </div>
        `;
      }

      // 2. Regular Screenplay Page
      const elementsHtml = page.elements
        .map((el) => {
          switch (el.type) {
            case 'scene-heading':
              return `<div class="ws-slugline">${escapeHtml(el.text)}</div>`;
            case 'character':
              return `<div class="ws-character">${escapeHtml(el.text)}</div>`;
            case 'parenthetical':
              return `<div class="ws-parenthetical">${escapeHtml(el.text)}</div>`;
            case 'dialogue':
              return `<div class="ws-dialogue">${escapeHtml(el.text)}</div>`;
            case 'transition':
              return `<div class="ws-transition">${escapeHtml(el.text)}</div>`;
            case 'action':
            default:
              return `<div class="ws-action">${escapeHtml(el.text)}</div>`;
          }
        })
        .join('');

      return `
      <div class="ws-page">
        <div class="ws-page-header">
          <span class="ws-page-num">${pageIdx + 1}.</span>
        </div>
        <div class="ws-page-content">
          ${elementsHtml}
        </div>
      </div>
      `;
    })
    .join('');

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>${productionTitle} - ${episodeLabel} | Roteiro WriterSolo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <style>
    @page {
      size: A4;
      margin: 25mm 20mm 25mm 35mm;
    }
    * {
      box-sizing: border-box;
    }
    body {
      margin: 0;
      padding: 0;
      background: #f1f5f9;
      color: #000000;
      font-family: 'Courier Prime', 'Courier Final Draft', 'Courier New', Courier, monospace;
      font-size: 12pt;
      line-height: 1.15;
      -webkit-font-smoothing: antialiased;
    }

    /* Screen toolbar */
    .ws-toolbar {
      position: sticky;
      top: 0;
      background: #090d16;
      color: #ffffff;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 100;
      font-family: system-ui, -apple-system, sans-serif;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .ws-toolbar-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 13px;
    }
    .ws-badge {
      background: #D80050;
      color: #fff;
      font-weight: 800;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 11px;
      letter-spacing: 0.5px;
    }
    .ws-btn-print {
      background: #D80050;
      color: white;
      border: none;
      padding: 9px 20px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      cursor: pointer;
      transition: background 0.2s;
    }
    .ws-btn-print:hover {
      background: #eb0058;
    }

    /* WriterSolo Screenplay Page Geometry */
    .ws-page {
      width: 210mm;
      min-height: 297mm;
      margin: 24px auto;
      background: #ffffff;
      padding: 25mm 20mm 25mm 35mm; /* Standard binder margin 35mm left */
      box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.1);
      position: relative;
      page-break-after: always;
      page-break-inside: avoid;
    }

    .ws-page-header {
      position: absolute;
      top: 15mm;
      right: 20mm;
      font-size: 11pt;
      color: #000000;
      font-weight: normal;
    }

    /* Screenplay Typography Elements */
    .ws-slugline {
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 16pt;
      margin-bottom: 9pt;
      text-align: left;
      letter-spacing: 0.2px;
    }

    .ws-action {
      text-align: left;
      margin-top: 0;
      margin-bottom: 11pt;
      line-height: 1.25;
    }

    .ws-character {
      font-weight: 700;
      text-transform: uppercase;
      margin-top: 13pt;
      margin-bottom: 1pt;
      margin-left: 37%;
      text-align: left;
    }

    .ws-parenthetical {
      margin-left: 31%;
      margin-top: 0;
      margin-bottom: 1pt;
      font-style: italic;
      max-width: 35ch;
    }

    .ws-dialogue {
      margin-left: 20%;
      margin-right: 15%;
      max-width: 42ch;
      margin-top: 0;
      margin-bottom: 11pt;
      line-height: 1.2;
      text-align: left;
    }

    .ws-transition {
      font-weight: 700;
      text-transform: uppercase;
      text-align: right;
      margin-top: 14pt;
      margin-bottom: 14pt;
    }

    /* Title Page */
    .ws-title-page {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      padding: 60mm 20mm 30mm 35mm;
    }
    .ws-title-wrap {
      margin: auto 0;
    }
    .ws-title {
      font-size: 24pt;
      font-weight: 700;
      text-transform: uppercase;
      margin: 0 0 16pt 0;
      letter-spacing: 2px;
    }
    .ws-subtitle {
      font-size: 14pt;
      font-weight: 700;
      margin-bottom: 6pt;
    }
    .ws-episodename {
      font-size: 13pt;
      font-style: italic;
      margin-bottom: 30pt;
    }
    .ws-byline {
      font-size: 12pt;
      margin-top: 30pt;
    }
    .ws-author {
      font-size: 14pt;
      font-weight: 700;
      margin-top: 6pt;
    }
    .ws-title-footer {
      font-size: 10pt;
      line-height: 1.4;
      color: #333333;
    }

    @media print {
      body {
        background: #ffffff;
      }
      .no-print {
        display: none !important;
      }
      .ws-page {
        margin: 0;
        padding: 0;
        width: 100%;
        min-height: 100%;
        box-shadow: none;
        page-break-after: always;
      }
    }
  </style>
</head>
<body>
  <div class="ws-toolbar no-print">
    <div class="ws-toolbar-brand">
      <span class="ws-badge">WRITERSOLO</span>
      <span><strong>${productionTitle}</strong> — ${episodeLabel} (${parsedPages.length} páginas)</span>
    </div>
    <div style="display:flex; align-items:center; gap:12px;">
      <span style="font-size:12px; opacity:0.8;">Padrão Oficial de Roteiro WriterSolo (writersolo.com)</span>
      <button class="ws-btn-print" onclick="window.print()">Salvar como PDF / Imprimir</button>
    </div>
  </div>

  ${pagesHtml}
</body>
</html>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
