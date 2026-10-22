export interface ProductionAwardInfo {
  slug: string;
  title: string;
  author: string;
  category: 'Web série' | 'Web novela';
  totalUnits: number;
  coverImage: string;
  festivalOrAward: string;
  awardText: string;
  detailedCategories?: string[];
  type: 'production' | 'author';
}

export const OFFICIAL_AWARDS: Record<string, ProductionAwardInfo> = {
  'um-novo-rei-1-temporada': {
    slug: 'um-novo-rei-1-temporada',
    title: 'Um Novo Rei — 1ª Temporada',
    author: 'Fred Reids',
    category: 'Web série',
    totalUnits: 11,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_c64e16466fcb49278c87acf083f99b97~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_c64e16466fcb49278c87acf083f99b97~mv2.png',
    festivalOrAward: 'TFA 2023 (The Felipa Awards)',
    awardText: 'Vencedor de Melhor Série e Melhor Personagem de Série (Emma) no TFA 2023.',
    type: 'production'
  },
  'amar-a-seu-modo': {
    slug: 'amar-a-seu-modo',
    title: 'Amar a Seu Modo',
    author: 'Everton B Dutra',
    category: 'Web novela',
    totalUnits: 10,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_52d8ad982b5f4be8a8165b4c405663b6~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_52d8ad982b5f4be8a8165b4c405663b6~mv2.png',
    festivalOrAward: 'TFA 2023 (The Felipa Awards)',
    awardText: 'Vencedor de Melhor Autor (Everton B. Dutra) e Melhor Obra Inspiradora no TFA 2023.',
    type: 'production'
  },
  'busca-de-bercos': {
    slug: 'busca-de-bercos',
    title: 'Busca de Berços',
    author: 'Guilhardo Almeida',
    category: 'Web novela',
    totalUnits: 25,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_d74116c9dc8648e89793081e7d23d8e5~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_d74116c9dc8648e89793081e7d23d8e5~mv2.png',
    festivalOrAward: 'Festival Carta Aberta',
    awardText: 'Vencedora de Melhor Coadjuvante Feminino e Melhor Argumento no Festival Carta Aberta.',
    type: 'production'
  },
  'medusa-a-maldicao-de-atena': {
    slug: 'medusa-a-maldicao-de-atena',
    title: 'Medusa: A Maldição de Atena',
    author: 'Fred Reids',
    category: 'Web série',
    totalUnits: 6,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_017b2b0728c347919865f3775b8bebf6~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_017b2b0728c347919865f3775b8bebf6~mv2.png',
    festivalOrAward: 'Festival Carta Aberta',
    awardText: 'Vencedora de Melhor Estética no Festival Carta Aberta.',
    type: 'production'
  },
  'eu-sou-piaf': {
    slug: 'eu-sou-piaf',
    title: 'Eu Sou Piaf',
    author: 'Fred Reids',
    category: 'Web novela',
    totalUnits: 8,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_89a008c26bb547bf841ebaf6bf6e3305~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_89a008c26bb547bf841ebaf6bf6e3305~mv2.png',
    festivalOrAward: 'Festival Carta Aberta',
    awardText: 'Vencedora de Melhor Série ou Minissérie no Festival Carta Aberta.',
    type: 'production'
  },
  'nada-alem-do-seu-amor': {
    slug: 'nada-alem-do-seu-amor',
    title: 'Nada Além do Seu Amor',
    author: 'Everton B Dutra',
    category: 'Web novela',
    totalUnits: 10,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_1d8d9b15852542a9b3d0cf3f4165561a~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_1d8d9b15852542a9b3d0cf3f4165561a~mv2.png',
    festivalOrAward: 'Global Choice Awards',
    awardText: 'Vencedora no Global Choice Awards, premiação internacional nas categorias: Best Foreign Language Soap Opera (Melhor Telenovela em Língua Estrangeira), Best Soap Opera (Melhor Telenovela), Best Soap Opera Author (Melhor Autor de Telenovela), Best Male Protagonist (Melhor Protagonista Masculino) e Best Male Supporting Role (Melhor Ator Coadjuvante).',
    detailedCategories: [
      'Best Foreign Language Soap Opera (Melhor Telenovela em Língua Estrangeira)',
      'Best Soap Opera (Melhor Telenovela)',
      'Best Soap Opera Author (Melhor Autor de Telenovela)',
      'Best Male Protagonist (Melhor Protagonista Masculino)',
      'Best Male Supporting Role (Melhor Ator Coadjuvante)'
    ],
    type: 'production'
  }
};

export interface AuthorAwardInfo {
  authorSlug: string;
  authorName: string;
  festivalOrAward: string;
  awardText: string;
}

export const AUTHOR_AWARDS: Record<string, AuthorAwardInfo> = {
  'fred-reids': {
    authorSlug: 'fred-reids',
    authorName: 'Fred Reids',
    festivalOrAward: 'Festival Carta Aberta',
    awardText: 'Vencedor de Melhor Autor no Festival Carta Aberta.'
  }
};

export const ALL_OFFICIAL_AWARDS_LIST: ProductionAwardInfo[] = Object.values(OFFICIAL_AWARDS);

export function getProductionAward(slug: string): ProductionAwardInfo | undefined {
  if (slug === 'um-novo-rei' || slug === 'um-novo-rei-1' || slug === 'um-novo-rei-1-temporada') {
    return OFFICIAL_AWARDS['um-novo-rei-1-temporada'];
  }
  return OFFICIAL_AWARDS[slug];
}

export function getAuthorAward(slug: string): AuthorAwardInfo | undefined {
  return AUTHOR_AWARDS[slug];
}
