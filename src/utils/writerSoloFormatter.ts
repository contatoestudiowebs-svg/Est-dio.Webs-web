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
export function isSceneHeading(line: string): boolean {
  const trimmed = line.trim();
  if (!trimmed) return false;

  // Standard slugline prefixes
  if (/^(INT\.|EXT\.|INT\/EXT\.|INT\.\/EXT\.|I\/E\.|EST\.|CENA\s+\d+)/i.test(trimmed)) {
    return true;
  }

  // Common Portuguese slugline patterns (e.g. "CONDOMÍNIO – CASA DE RÔMULO – VARANDA – NOITE.")
  const timeEndings = /[-–—]\s*(DIA|NOITE|TARDE|MANHÃ|MADRUGADA|ENTARDECER|AMANHECER|CONT\.|CONTINUAÇÃO|FLASHBACK)[\.:]?$/i;
  if (timeEndings.test(trimmed) && trimmed === trimmed.toUpperCase()) {
    return true;
  }

  return false;
}

/**
 * Checks if a line matches a transition (e.g. "CORTE PARA:", "FADE OUT.")
 */
export function isTransition(line: string): boolean {
  const trimmed = line.trim();
  return /^(CORTE PARA|CORTA PARA|FADE IN|FADE OUT|DISSOLVE PARA|FIM DO EPISÓDIO|FIM DA CENA|FIM)[\.:]?$/i.test(
    trimmed
  );
}

/**
 * Checks if a line is a character cue in WriterSolo format (uppercase name on its own line)
 */
export function isCharacterCue(line: string): boolean {
  const trimmed = line.trim();
  if (trimmed.length < 2 || trimmed.length > 40) return false;
  if (trimmed.endsWith('.') || trimmed.endsWith(':') || trimmed.endsWith('!') || trimmed.endsWith('?')) {
    // Only allow extensions like (V.O.), (O.S.), (CONT.)
    if (!/\([A-Z0-9\.\s\']+\)$/i.test(trimmed)) return false;
  }

  // Matches ALL CAPS name with optional (V.O.) / (CONT.) / (TELEFONE)
  const characterRegex = /^[A-ZÀ-Ú0-9\s\.\']+(?:\s*\([A-ZÀ-Ú0-9\.\s\']+\))?$/;
  if (!characterRegex.test(trimmed)) return false;

  // Exclude common slugline starts or keywords
  if (/^(INT|EXT|EST|FADE|CORTE|CENA|CAPÍTULO|EPISÓDIO)/i.test(trimmed)) return false;

  return true;
}

/**
 * Checks if a line is a parenthetical (e.g. "(baixo)", "(ao telefone)")
 */
export function isParenthetical(line: string): boolean {
  const trimmed = line.trim();
  return /^\([^)]{1,60}\)$/.test(trimmed);
}

/**
 * Parses a page of script into structured WriterSolo screenplay elements
 */
export function parseScreenplayPage(rawPageText: string, pageIndex: number): ParsedScreenplayPage {
  const lines = rawPageText.split('\n');

  // Detect Title Page (usually page 0 or page 1 if it contains title and author without scene headings)
  const isTitleCandidate =
    pageIndex === 0 ||
    (!rawPageText.includes('INT.') &&
      !rawPageText.includes('EXT.') &&
      lines.length <= 15 &&
      /(EPISÓDIO|CAPÍTULO|DE\s+|POR\s+)/i.test(rawPageText));

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
      } else if (/^(DE|POR|ESCRITO POR|AUTOR|AUTORA)/i.test(line)) {
        author = cleanLines[i + 1] || '';
        i++;
      } else if (!author && i === cleanLines.length - 1) {
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

  // Filter out raw pagination artifacts like "SENA EPISÓDIO 01 Pag.: 1" or "---------------------"
  const filteredLines: string[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip top header artifacts
    if (i < 4 && (trimmed.includes('Pag.:') || trimmed.includes('Pag:') || /^[-=_]{5,}$/.test(trimmed))) {
      continue;
    }
    // Skip trailing page number indicator like "1." at very bottom
    if (i > lines.length - 4 && /^\d+\.$/.test(trimmed)) {
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
    if (isSceneHeading(trimmed)) {
      elements.push({
        type: 'scene-heading',
        text: trimmed.toUpperCase(),
      });
      i++;
      continue;
    }

    // 2. Transition (e.g. CORTE PARA:)
    if (isTransition(trimmed)) {
      elements.push({
        type: 'transition',
        text: trimmed.toUpperCase(),
      });
      i++;
      continue;
    }

    // 3. Brazilian / TV Drama dialogue format: "Character (Parenthetical) - Dialogue..."
    // e.g. "Rômulo (Desesperado) - Entra! Entra! Pega a Denise..."
    const speechMatch = trimmed.match(/^([A-ZÀ-Úa-zà-ú0-9\s\.\']+?)(?:\s*\(([^)]+)\))?\s*[-–—]\s*(.+)$/);
    if (
      speechMatch &&
      speechMatch[1].length < 35 &&
      !speechMatch[1].toLowerCase().includes('condomínio') &&
      !speechMatch[1].toLowerCase().includes('quando') &&
      !speechMatch[1].toLowerCase().includes('depois')
    ) {
      const charName = speechMatch[1].trim().toUpperCase();
      const parenthetical = speechMatch[2]?.trim();
      const dialogueText = speechMatch[3]?.trim();

      elements.push({
        type: 'character',
        text: charName,
        characterName: charName,
      });

      if (parenthetical) {
        elements.push({
          type: 'parenthetical',
          text: `(${parenthetical})`,
          parenthetical: `(${parenthetical})`,
        });
      }

      if (dialogueText) {
        elements.push({
          type: 'dialogue',
          text: dialogueText,
          dialogue: dialogueText,
        });
      }

      i++;
      continue;
    }

    // 4. WriterSolo Standard Character Cue on separate line
    if (isCharacterCue(trimmed)) {
      elements.push({
        type: 'character',
        text: trimmed.toUpperCase(),
        characterName: trimmed.toUpperCase(),
      });
      i++;

      // Check next line for parenthetical or dialogue
      if (i < filteredLines.length) {
        const nextTrimmed = filteredLines[i].trim();
        if (isParenthetical(nextTrimmed)) {
          elements.push({
            type: 'parenthetical',
            text: nextTrimmed,
            parenthetical: nextTrimmed,
          });
          i++;
        }
      }

      // Collect consecutive dialogue lines
      const dialogueLines: string[] = [];
      while (i < filteredLines.length) {
        const dLine = filteredLines[i].trim();
        if (!dLine || isSceneHeading(dLine) || isCharacterCue(dLine) || isTransition(dLine)) {
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
      if (
        !aLine ||
        isSceneHeading(aLine) ||
        isCharacterCue(aLine) ||
        isTransition(aLine) ||
        aLine.match(/^[A-ZÀ-Úa-zà-ú0-9\s\.\']+?\s*[-–—]\s*/)
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
