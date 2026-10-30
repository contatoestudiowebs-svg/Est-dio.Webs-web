import { ProductionCategory } from '../types';

export type AgeRatingCode = 'L' | '10' | '12' | '14' | '16' | '18';

export interface AgeRatingDetails {
  code: AgeRatingCode;
  title: string;
  shortLabel: string;
  badgeBg: string; // Tailwind background
  badgeText: string;
  badgeBorder: string;
  iconBg: string;
  description: string;
}

export const AGE_RATING_DEFINITIONS: Record<AgeRatingCode, AgeRatingDetails> = {
  L: {
    code: 'L',
    title: 'Livre para todos os públicos',
    shortLabel: 'Livre',
    badgeBg: 'bg-[#0C9E43]',
    badgeText: 'text-white font-extrabold',
    badgeBorder: 'border-[#0A8638]',
    iconBg: '#0C9E43',
    description:
      'Esta obra não contém conteúdos que possam causar prejuízos ou impactos negativos a nenhuma faixa etária. Adequada para toda a família.',
  },
  '10': {
    code: '10',
    title: 'Não recomendado para menores de 10 anos',
    shortLabel: '10 anos',
    badgeBg: 'bg-[#0070B8]',
    badgeText: 'text-white font-black',
    badgeBorder: 'border-[#005B96]',
    iconBg: '#0070B8',
    description:
      'Pode conter cenas de conflito leve, angústia atenuada, violência fantasiosa leve ou situações de tensão moderada.',
  },
  '12': {
    code: '12',
    title: 'Não recomendado para menores de 12 anos',
    shortLabel: '12 anos',
    badgeBg: 'bg-[#EBB000]',
    badgeText: 'text-slate-950 font-black',
    badgeBorder: 'border-[#C79500]',
    iconBg: '#EBB000',
    description:
      'Pode conter linguagem imprópria atenuada, cenas de agressão verbal ou física moderada, insinuação sexual leve e temas sensíveis como bullying e preconceito.',
  },
  '14': {
    code: '14',
    title: 'Não recomendado para menores de 14 anos',
    shortLabel: '14 anos',
    badgeBg: 'bg-[#E65A00]',
    badgeText: 'text-white font-black',
    badgeBorder: 'border-[#B84700]',
    iconBg: '#E65A00',
    description:
      'Pode conter violência física, insinuação sexual, uso de drogas lícitas (bebidas alcoólicas/cigarro), temas como depressão, chantagem e morte.',
  },
  '16': {
    code: '16',
    title: 'Não recomendado para menores de 16 anos',
    shortLabel: '16 anos',
    badgeBg: 'bg-[#DE1B1B]',
    badgeText: 'text-white font-black',
    badgeBorder: 'border-[#B31414]',
    iconBg: '#DE1B1B',
    description:
      'Contém cenas de violência gráfica, agressões físicas intensas, conteúdo sexual explícito ou sugerido com frequência, situações macabras ou temas adultos complexos.',
  },
  '18': {
    code: '18',
    title: 'Não recomendado para menores de 18 anos',
    shortLabel: '18 anos',
    badgeBg: 'bg-[#18181B]',
    badgeText: 'text-white font-black',
    badgeBorder: 'border-black',
    iconBg: '#18181B',
    description:
      'Obra estritamente destinada ao público adulto. Pode conter violência extrema, cenas explícitas de sexo, tortura física ou psicológica grave e temas de extrema perturbação.',
  },
};

export interface ProductionAdvisory {
  ageRating: AgeRatingCode;
  descriptors: string[];
  advisoryNote: string;
}

export const PRODUCTION_AGE_RATINGS: Record<string, ProductionAdvisory> = {
  // Corações de Açúcar
  'coracoes-de-acucar': {
    ageRating: '14',
    descriptors: ['Violência', 'Temas Sensíveis (Depressão)', 'Drogas Lícitas', 'Conteúdo Sexual'],
    advisoryNote:
      'Contém representações de agressão física, depressão severa e crise psicológica, consumo de bebidas alcoólicas, chantagem familiar e incêndio criminoso.',
  },
  // As Mina — Parte 2
  'as-mina-parte-2': {
    ageRating: '12',
    descriptors: ['Conflitos Familiares', 'Temas Sensíveis', 'Doping Esportivo'],
    advisoryNote:
      'Aborda conflitos entre mães e filhas, tratamento oncológico de personagem, extorsão intrafamiliar e acusação de doping esportivo.',
  },
  // As Mina (1ª Temporada)
  'as-mina': {
    ageRating: '12',
    descriptors: ['Pressão Competitiva', 'Conflitos Juvenis', 'Bullying'],
    advisoryNote:
      'Contém rivalidades acirradas na ginástica olímpica, pressão psicológica de treinadores e dilemas do início da juventude.',
  },
  // Infidelidade
  infidelidade: {
    ageRating: '16',
    descriptors: ['Conteúdo Sexual', 'Violência Psicológica', 'Drogas Lícitas', 'Obsessão'],
    advisoryNote:
      'Contém cenas de intimidade e erotismo, traição entre irmãs, chantagens emocionais e consumo frequente de álcool.',
  },
  // Pandorum
  pandorum: {
    ageRating: '16',
    descriptors: ['Violência', 'Medo', 'Mortes Violentas'],
    advisoryNote:
      'Suspense e ficção científica pós-apocalíptica com mortes, confrontos físicos brutais e perseguições mortais.',
  },
  // Pandorum 2
  'pandorum-2': {
    ageRating: '16',
    descriptors: ['Violência Intensa', 'Tortura Psicológica', 'Mortes', 'Armas de Fogo'],
    advisoryNote:
      'Guerra civil em ambiente distópico fechado, tiroteios letais, perseguições sangrentas e mortes trágicas de personagens.',
  },
  // Cold Case Brasil
  'cold-case-brasil': {
    ageRating: '16',
    descriptors: ['Violência Policial', 'Homicídios', 'Atos Criminosos', 'Drogas'],
    advisoryNote:
      'Investigação criminal forense com autópsias detalhadas, assassinatos premeditados e violência gráfica.',
  },
  // Medusa: A Maldição de Atena
  'medusa-a-maldicao-de-atena': {
    ageRating: '16',
    descriptors: ['Violência Mitológica', 'Violação Mítica Sugerida', 'Mutilação / Decapitação'],
    advisoryNote:
      'Releitura mitológica grega contendo violação mítica no templo por Poseidon, transformação monstruosa e decapitação por Perseu.',
  },
  // Rasga Mortalha 2
  'rasga-mortalha-2': {
    ageRating: '16',
    descriptors: ['Terror', 'Violência Macabra', 'Medo / Sobrenatural'],
    advisoryNote:
      'Narrativa de terror sobrenatural com assassinatos rituais, cenas de suspense assustadoras e lendas sombrias.',
  },
  // Caminho ao Poder
  'caminho-ao-poder': {
    ageRating: '14',
    descriptors: ['Corrupção Política', 'Violência Psicológica', 'Linguagem Imprópria'],
    advisoryNote:
      'Conspiração política, sabotagem de campanhas presidenciais, chantagens financeiras e vazamento criminoso de informações.',
  },
  // Terra de Bravos
  'terra-de-bravos': {
    ageRating: '14',
    descriptors: ['Violência Rural', 'Conflito de Terras', 'Armas de Fogo', 'Mortes'],
    advisoryNote:
      'Disputa sangrenta de clãs rivais no sertão nordestino por terras e recursos hídricos, com atentados e vinganças armadas.',
  },
  // Homem com H
  'homem-com-h': {
    ageRating: '16',
    descriptors: ['Homofobia', 'Violência', 'Conteúdo Sexual', 'Preconceito'],
    advisoryNote:
      'História com temática LGBTQIA+ abordando agressões físicas motivadas por intolerância, autoaceitação dolorosa e cenas de intimidade.',
  },
  // O Suplício
  'o-suplicio': {
    ageRating: '16',
    descriptors: ['Violência Psicológica', 'Sofrimento Psíquico', 'Drogas Lícitas'],
    advisoryNote:
      'Drama denso psicológico com manipulação emocional doentia, isolamento e situações de extremo estresse mental.',
  },
  // Um Novo Rei (1ª Temporada)
  'um-novo-rei-1-temporada': {
    ageRating: '14',
    descriptors: ['Violência Medieval', 'Conspirações', 'Batalhas com Espadas'],
    advisoryNote:
      'Disputas de reinos medievais, combates corpo a corpo com espadas e mortes no campo de batalha.',
  },
  // Um Novo Rei 2
  'um-novo-rei-2': {
    ageRating: '16',
    descriptors: ['Violência com Sangue', 'Batalhas Sangrentas', 'Crueldade Monárquica'],
    advisoryNote:
      'A segunda temporada amplia o nível de violência das guerras, execuções sumárias e traições no palácio real.',
  },
  // 451
  '451': {
    ageRating: '14',
    descriptors: ['Violência de Estado', 'Opressão / Distopia', 'Incêndio Criminoso'],
    advisoryNote:
      'Ficção distópica sobre controle da sociedade, queima institucional de literatura e prisões violentas.',
  },
  // Amores Feridos
  'amores-feridos': {
    ageRating: '14',
    descriptors: ['Conflitos Conjugais', 'Traição', 'Drogas Lícitas'],
    advisoryNote:
      'Drama familiar com adultério, brigas intensas entre casais e ressentimentos destrutivos.',
  },
  // Sócio do Amor
  'socio-do-amor': {
    ageRating: '12',
    descriptors: ['Conflitos Sociais', 'Linguagem Imprópria Leve', 'Preconceito de Classe'],
    advisoryNote:
      'Romance no Vidigal e no mundo corporativo abordando desigualdade socioeconômica, intrigas empresariais e preconceito.',
  },
  // Eu Sou Piaf
  'eu-sou-piaf': {
    ageRating: '12',
    descriptors: ['Preconceito', 'Conflitos Familiares', 'Rejeição'],
    advisoryNote:
      'Drama de superação pessoal com expulsão de casa por preconceito e a luta do jovem artista pela sua vocação musical.',
  },
  // Débora & Rebeca
  'debora-e-rebeca': {
    ageRating: '12',
    descriptors: ['Temas LGBTQIA+', 'Conflitos Familiares', 'Insinuação Sexual Leve'],
    advisoryNote:
      'História de amor sáfico entre amigas de infância, descobertas afetivas e conflitos com expectativas conservadoras da família.',
  },
  // A Santa do Pau Oco
  'a-santa-do-pau-oco': {
    ageRating: '10',
    descriptors: ['Linguagem Leve', 'Travessuras de Época'],
    advisoryNote:
      'Comédia histórica de costumes no interior com armações leves, mal-entendidos e personagens pitorescos.',
  },
  // Busca de Berços
  'busca-de-bercos': {
    ageRating: '12',
    descriptors: ['Conflito Familiar', 'Temas Sensíveis', 'Chantagem'],
    advisoryNote:
      'Enredo melodramático centrado na revelação de troca de bebês e disputas judiciais de herança.',
  },
  // No Te Pido Flores
  'no-te-pido-flores': {
    ageRating: '14',
    descriptors: ['Conflitos Amorosos', 'Drogas Lícitas', 'Traição'],
    advisoryNote:
      'Novela de tom dramático latino com romances turbulentos, encontros intensos e decepções amorosas.',
  },
  // Nada Além do Seu Amor
  'nada-alem-do-seu-amor': {
    ageRating: 'L',
    descriptors: ['Livre para todos os públicos'],
    advisoryNote:
      'Comédia romântica açucarada com encontros divertidos e final feliz, livre de violência ou conteúdos impróprios.',
  },
  // Rute
  rute: {
    ageRating: 'L',
    descriptors: ['Livre para todos os públicos'],
    advisoryNote:
      'Adaptação dramática de época com mensagem de amor, companheirismo e fidelidade familiar.',
  },
  // Destino ao Coração
  'destino-ao-coracao': {
    ageRating: '10',
    descriptors: ['Conflitos Românticos Leves'],
    advisoryNote:
      'História de amor com desentendimentos cotidianos leves e foco em restauração de laços afetivos.',
  },
  // Sangue Cruzado
  'sangue-cruzado': {
    ageRating: '14',
    descriptors: ['Violência', 'Rivalidade Familiar', 'Ameaças'],
    advisoryNote:
      'Conflitos entre duas linhagens com ameaças de violência patrimonial e chantagens destrutivas.',
  },
  // ACESSO 1
  'acesso-1': {
    ageRating: '12',
    descriptors: ['Intrigas Profissionais', 'Linguagem Informal'],
    advisoryNote:
      'Bastidores de um canal de televisão com competição agressiva por audiência e vaidades pessoais.',
  },
  // Topázio
  topazio: {
    ageRating: '12',
    descriptors: ['Melodrama', 'Chantagem Familiar'],
    advisoryNote:
      'Telenovela clássica com segredos de identidade, vilãs manipuladoras e romances impedidos.',
  },
  // Amar a Seu Modo
  'amar-a-seu-modo': {
    ageRating: '12',
    descriptors: ['Conflitos Românticos', 'Dilemas Éticos'],
    advisoryNote:
      'Reflexão sobre os limites e sacrifícios nos relacionamentos amorosos com conflitos de convivência.',
  },
  // Ponto Fraco
  'ponto-fraco': {
    ageRating: '14',
    descriptors: ['Suspense', 'Violência Psicológica', 'Chantagem'],
    advisoryNote:
      'História de suspense com segredos obscuros do passado e perseguições motivadas por chantagem.',
  },
  // SENA
  sena: {
    ageRating: '14',
    descriptors: ['Pressão Estética', 'Drogas Lícitas', 'Assédio no Meio da Moda'],
    advisoryNote:
      'Aborda a rotina e os perigos do mercado internacional da moda, pressões de agências e abusos de poder.',
  },
};

export function getProductionAdvisory(slug: string, defaultRating: AgeRatingCode = '12'): ProductionAdvisory {
  if (PRODUCTION_AGE_RATINGS[slug]) {
    return PRODUCTION_AGE_RATINGS[slug];
  }
  return {
    ageRating: defaultRating,
    descriptors: ['Conflitos Dramáticos'],
    advisoryNote: 'Esta obra contém temas dramáticos comuns à sua categoria.',
  };
}
