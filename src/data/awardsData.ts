export interface AwardItem {
  id: string;
  year: string;
  ceremony: string;
  award: string;
  details?: string;
  winner: boolean;
}

export interface AwardedProductionItem {
  slug: string;
  title: string;
  author: string;
  category: 'Web série' | 'Web novela';
  totalUnits: number;
  coverImage: string;
  synopsisPreview: string;
  isMainHighlight?: boolean;
  awards: AwardItem[];
}

export const AWARDED_PRODUCTIONS_DATA: AwardedProductionItem[] = [
  {
    slug: 'um-novo-rei-1-temporada',
    title: 'Um Novo Rei — 1ª Temporada',
    author: 'Fred Reids',
    category: 'Web série',
    totalUnits: 11,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_c64e16466fcb49278c87acf083f99b97~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_c64e16466fcb49278c87acf083f99b97~mv2.png',
    synopsisPreview: 'Com a ambição de tomar Mont-Ar, Emma arma um plano em que mata a rainha e dá um fim ao herdeiro do trono. Ela então assume o trono com ajuda do bruxo Dalibor.',
    isMainHighlight: true,
    awards: [
      {
        id: 'unr-1',
        year: '2023',
        ceremony: 'TFA 2023 (The Felipa Awards)',
        award: 'Melhor Série',
        details: 'Vencedor oficial na principal categoria de séries virtuais do ano',
        winner: true
      },
      {
        id: 'unr-2',
        year: '2023',
        ceremony: 'TFA 2023 (The Felipa Awards)',
        award: 'Melhor Personagem de Série (Emma)',
        details: 'Vencedora pela memorável interpretação textual da vilã Emma',
        winner: true
      }
    ]
  },
  {
    slug: 'amar-a-seu-modo',
    title: 'Amar a Seu Modo',
    author: 'Everton B Dutra',
    category: 'Web novela',
    totalUnits: 10,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_52d8ad982b5f4be8a8165b4c405663b6~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_52d8ad982b5f4be8a8165b4c405663b6~mv2.png',
    synopsisPreview: 'A busca por afeto, dilemas familiares e encontros inesperados marcam os caminhos e escolhas dos protagonistas nesta trama emocionante.',
    awards: [
      {
        id: 'aasm-1',
        year: '2023',
        ceremony: 'TFA 2023 (The Felipa Awards)',
        award: 'Melhor Web Novela',
        details: 'Grande vencedora na categoria máxima de teledramaturgia virtual',
        winner: true
      }
    ]
  },
  {
    slug: 'cold-case-brasil',
    title: 'Cold Case Brasil',
    author: 'Fernando Ricoboni',
    category: 'Web série',
    totalUnits: 6,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_ec4a6e873528448ebf81a7b48950d4d7~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_ec4a6e873528448ebf81a7b48950d4d7~mv2.png',
    synopsisPreview: 'Crimes antigos e casos arquivados voltam à tona com novas pistas. A equipe de investigação precisa revisitar feridas do passado em busca da verdade.',
    awards: [
      {
        id: 'ccb-1',
        year: '2023',
        ceremony: 'Troféu Ficção Virtual',
        award: 'Melhor Roteiro de Investigação Policial',
        details: 'Reconhecimento pela precisão forense e ritmo cinematográfico',
        winner: true
      }
    ]
  },
  {
    slug: 'pandorum-2',
    title: 'Pandorum 2',
    author: 'Fernando Ricoboni',
    category: 'Web série',
    totalUnits: 7,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_aa369528d73b4002b8d002f23246eb76~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_aa369528d73b4002b8d002f23246eb76~mv2.png',
    synopsisPreview: 'A sequência eletrizante de Pandorum aprofunda o terror e o mistério cósmico em um cenário de sobrevivência claustrofóbica.',
    awards: [
      {
        id: 'pan2-1',
        year: '2023',
        ceremony: 'Troféu Destaque Sci-Fi',
        award: 'Melhor Produção de Ficção Científica & Tensão',
        details: 'Aclamação unânime de público e crítica no cenário virtual',
        winner: true
      }
    ]
  },
  {
    slug: 'rasga-mortalha-2',
    title: 'Rasga Mortalha 2',
    author: 'Fred Reids',
    category: 'Web série',
    totalUnits: 6,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_812c4c7c88e7456d95fcab3ea21034fe~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_812c4c7c88e7456d95fcab3ea21034fe~mv2.png',
    synopsisPreview: 'O mito da coruja rasga-mortalha ressurge para cobrar antigas dívidas espirituais nas entranhas da mata fechada.',
    awards: [
      {
        id: 'rm2-1',
        year: '2023',
        ceremony: 'Destaque Teledramaturgia',
        award: 'Melhor Ambientação e Terror Folclórico',
        details: 'Premiada pela originalidade nas lendas brasileiras',
        winner: true
      }
    ]
  },
  {
    slug: 'a-santa-do-pau-oco',
    title: 'A Santa do Pau Oco',
    author: 'Fred Reids',
    category: 'Web série',
    totalUnits: 6,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_48e77a1fc9b744f494c2e6fca7aa150e~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_48e77a1fc9b744f494c2e6fca7aa150e~mv2.png',
    synopsisPreview: 'Uma relíquia sacra desaparecida desencadeia conflitos familiares e ganância em uma trama satírica e de época.',
    awards: [
      {
        id: 'spo-1',
        year: '2022',
        ceremony: 'Troféu Criação Literária',
        award: 'Melhor Comédia Ácida & Roteiro de Época',
        details: 'Destaque em diálogos afiados e desenvolvimento de personagens',
        winner: true
      }
    ]
  },
  {
    slug: 'o-suplicio',
    title: 'O Suplício',
    author: 'Everton B Dutra',
    category: 'Web série',
    totalUnits: 6,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_5bd3799907fb4098bcde7a2e63509b90~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_5bd3799907fb4098bcde7a2e63509b90~mv2.png',
    synopsisPreview: 'Loureiro Vitoriosa é palco de traumas e segredos sombrios quando Carlos retorna após sete anos de exílio.',
    awards: [
      {
        id: 'os-1',
        year: '2023',
        ceremony: 'Destaque Dramaturgia Virtual',
        award: 'Melhor Suspense Psicológico & Drama Regional',
        details: 'Grande recepção crítica pela profundidade emocional dos personagens',
        winner: true
      }
    ]
  },
  {
    slug: '451',
    title: '451',
    author: 'Fernando Ricoboni',
    category: 'Web série',
    totalUnits: 8,
    coverImage: 'https://static.wixstatic.com/media/cbfc82_9d8e78880e6d4ba488d0fe5083ddabda~mv2.png/v1/fill/w_362,h_536,al_c,q_85,enc_avif,quality_auto/cbfc82_9d8e78880e6d4ba488d0fe5083ddabda~mv2.png',
    synopsisPreview: 'Uma distopia intrigante em que a memória e os livros são ameaçados por um sistema opressor e vigilante.',
    awards: [
      {
        id: '451-1',
        year: '2023',
        ceremony: 'Troféu Inovação em Formato',
        award: 'Melhor Edição em PDF & Roteiro Seriador',
        details: 'Premiada pelo formato inovador de leitura com roteiros diagramados',
        winner: true
      }
    ]
  }
];

export function getAwardedProductionBySlug(slug: string): AwardedProductionItem | undefined {
  return AWARDED_PRODUCTIONS_DATA.find((item) => item.slug === slug);
}
