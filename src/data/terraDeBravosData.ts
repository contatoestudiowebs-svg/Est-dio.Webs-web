import { TERRA_DE_BRAVOS_EPISODE_01_PAGES } from './terraDeBravosEpisodes/episode01';
import { TERRA_DE_BRAVOS_EPISODE_02_PAGES } from './terraDeBravosEpisodes/episode02';
import { TERRA_DE_BRAVOS_EPISODE_03_PAGES } from './terraDeBravosEpisodes/episode03';
import { TERRA_DE_BRAVOS_EPISODE_04_PAGES } from './terraDeBravosEpisodes/episode04';
import { TERRA_DE_BRAVOS_EPISODE_05_PAGES } from './terraDeBravosEpisodes/episode05';
import { TERRA_DE_BRAVOS_EPISODE_06_PAGES } from './terraDeBravosEpisodes/episode06';
import { TERRA_DE_BRAVOS_EPISODE_07_PAGES } from './terraDeBravosEpisodes/episode07';
import { TERRA_DE_BRAVOS_EPISODE_08_PAGES } from './terraDeBravosEpisodes/episode08';
import { ChapterEpisode } from '../types';

export interface TerraDeBravosEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const TERRA_DE_BRAVOS_EPISODES_RAW: TerraDeBravosEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Joaquim Monteiro toma a Fazenda do Brejo à força, expulsando os Ferraz. Dona Eulália, esposa de Joaquim, se cala diante da injustiça. Um filho bastardo nasce de uma relação proibida entre Joaquim e a sobrinha de Agenor Ferraz. Anos depois. Joaquim vê seu Neto Miguel no Brejo com Manuela, ele apenas observa. Quando chega em casa, as coisas de Miguel estão na mala. Joaquim decide mandar Miguel para São Paulo. Joaquim é morto.',
    pages: TERRA_DE_BRAVOS_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo01.docx_f4a061c1.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Miguel retorna ao sertão para o enterro do avô Joaquim Monteiro. Dona Eulália, matriarca dos Monteiro, teme que os Ferraz tentem tomar a Fazenda do Brejo. Miguel conversa com Tonho e Tonho diz que a morte de Joaquim é um mistério. Tonho, capataz dos Monteiro, alerta sobre movimentações estranhas dos Ferraz. José Ferraz discute com o filho, Caio, sobre a antiga dívida dos Monteiro. Eulália jura manter a terra com sangue se for preciso.',
    pages: TERRA_DE_BRAVOS_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo02.docx_ddcd2bb8.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Caio invade uma nascente próxima ao Brejo e Tonho flagra. Miguel conversa com o Delegado Silvério sobre o mistério na morte do avó Jaquim. Miguem busca entender o porque da briga das famílias e Dona Eulália confessa a Miguel que a terra foi tomada à força por Joaquim. Tonho e Caio trocam ameaças. Miguel e Manuela se reencontram escondidos. Manuela conta a Miguel que o avó dele mandou ele embora por descobrir o caso deles.',
    pages: TERRA_DE_BRAVOS_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo03.docx_1d5e0c97.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Tonho convence Miguel a não confiar nos Ferraz. Manuela fica sabendo por Caio, que Miguel voltou para investigar o passado. José Ferraz reúne documentos que supostamente provam a posse da Fazenda do Brejo. Dona Eulália procura o prefeito, que promete apoio político em troca de favores. A tensão entre os trabalhadores da fazenda aumenta e por conta do atraso dos salarios.',
    pages: TERRA_DE_BRAVOS_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo04.docx_c485e9ab.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Tonho tenta manter os peões fiéis, mas um grupo ameaça desertar por falta de pagamento. Miguel procura Dona Zefa, que revela que Joaquim teria expulsado os antigos donos da terra com violência. O juiz local recebe um envelope com dinheiro dos Ferraz. Caio e Miguel discutem na vila. Eulália confronta José Ferraz na missa de domingo.',
    pages: TERRA_DE_BRAVOS_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo05.docx_7446f86b.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Miguel decide continuar investigando e encontra cartas antigas de sua avó. Caio se sente traído por sua irmã Manuela, que defende Miguel. Tonho arma emboscada para impedir os Ferraz de entrarem nas terras. Eulália desconfia que Miguel tenha voltado a se encontrar com Manuela. José Ferraz conversa com Alba sua mulher e planeja tomar o Brejo por vias legais. Um incêndio criminoso destrói parte da plantação dos Monteiros.',
    pages: TERRA_DE_BRAVOS_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo06.docx_a400a747.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'A polícia investiga o incêndio e desconfia de Caio. Tonho tenta incriminar os Ferraz. Miguel desconfia que o fogo foi armação dos próprios Monteiro. Manuela e Miguel se encontram e conversam sobre a briga das famílias. Dona Zefa encontra o testamento original de Joaquim, escondido num livro antigo. Dona Eulália briga com Miguel por se envolver com uma Ferraz.',
    pages: TERRA_DE_BRAVOS_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo07.docx_1f85987b.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Miguel encontra fotos de seu avô com a mãe de Caio. Dona Eulália revela que Joaquim teve um filho bastardo com uma Ferraz, que pode ser Caio. Tonho desconfia que Eulália sabe mais do que diz. José Ferraz acusa Eulália de falsificar documentos. Manuela escuta a conversa dos pais e descobre que eles escondem um segredo antigo. O juiz Almeida marca audiência sobre a disputa de terras.',
    pages: TERRA_DE_BRAVOS_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo08.docx_ad9880d8.pdf',
  },
];

// Chapters 09 to 16 placeholders
const REMAINING_EPISODES: ChapterEpisode[] = Array.from({ length: 8 }, (_, i) => {
  const num = i + 9;
  const pad = String(num).padStart(2, '0');
  return {
    number: num,
    label: `Capítulo ${pad}`,
    slug: `capitulo-${pad}`,
    title: `Capítulo ${pad}`,
    summary: `Capítulo ${pad} da web novela Terra de Bravos. Em breve.`,
    content: '',
    pdfPages: [],
  };
});

export const TERRA_DE_BRAVOS_EPISODES: ChapterEpisode[] = [
  ...TERRA_DE_BRAVOS_EPISODES_RAW.map((ep) => ({
    number: ep.number,
    label: ep.label,
    slug: ep.slug,
    title: ep.title,
    summary: ep.summary,
    content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
    pdfPages: ep.pages,
    pdfUrl: ep.pdfUrl,
  })),
  ...REMAINING_EPISODES,
];
