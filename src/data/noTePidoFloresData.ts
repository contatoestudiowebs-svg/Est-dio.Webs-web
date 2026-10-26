import { NO_TE_PIDO_FLORES_EPISODE_01_PAGES } from './noTePidoFloresEpisodes/episode01';
import { NO_TE_PIDO_FLORES_EPISODE_02_PAGES } from './noTePidoFloresEpisodes/episode02';
import { NO_TE_PIDO_FLORES_EPISODE_03_PAGES } from './noTePidoFloresEpisodes/episode03';
import { NO_TE_PIDO_FLORES_EPISODE_04_PAGES } from './noTePidoFloresEpisodes/episode04';
import { NO_TE_PIDO_FLORES_EPISODE_05_PAGES } from './noTePidoFloresEpisodes/episode05';
import { NO_TE_PIDO_FLORES_EPISODE_06_PAGES } from './noTePidoFloresEpisodes/episode06';
import { ChapterEpisode } from '../types';

export interface NoTePidoFloresEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const NO_TE_PIDO_FLORES_EPISODES_RAW: NoTePidoFloresEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01',
    summary:
      'Hernande é preso por tráfico de drogas no A La Mexicana e afirma ter sido vítima de uma armação do grande empresário Martin Bracamontes. Esmeralda sente-se pressionada pela mãe Roxana e acaba tombando com Lupita no caminho. Lupe vai até a empresa de Martin e arma um barraco no meio de todo mundo.',
    pages: NO_TE_PIDO_FLORES_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP01.docx_8a9ba893.pdf',
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02',
    summary:
      'Lupe e Martin saem no tapa. Lupe ameaça Martin. Esmeralda e Lupita se encontram ocasionalmente e Lupita leva Esmeralda até sua casa sem saber que ela é uma atriz famosa. Roxana ameaça Martin para se casar com Esmeralda. Lupe conversa com Hernande na prisão e ele revela ao jovem que o Restaurante permanecerá interditado. Esmeralda fica nervosa com Lupita e é reconhecida pela irmã dela. Lupe caminha em busca de um novo emprego e acaba esbarrando com Martin no elevador. Os dois discutem e o elevador quebra, ocasionando num ataque de pânico de Martin.',
    pages: NO_TE_PIDO_FLORES_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP02.docx_6b32a6d7.pdf',
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03',
    summary:
      'Um clima rola entre Martin e Lupe no elevador. Esmeralda discute com Roxana e tem um ataque nervoso. Lupe descobre que Martin comprou o restaurante e dará uma festa em comemoração ao negócio. Lupe invade a festa de Martin e arma um barraco no lugar. Lupita reencontra Esmeralda no lugar e as duas se entreolham. Martin e Lupe saem no tapa. Lupita diz que admira Esmeralda.',
    pages: NO_TE_PIDO_FLORES_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP03.docx_3cded57b.pdf',
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04',
    summary:
      'Martin tenta conter as notícias do fracasso de sua festa. Esmeralda faz topless numa sessão de fotos, num acesso de rebeldia. Martin humilha Lupe em seu novo emprego e o faz ser demitido. Vingativo, Lupe risca a pintura do carro de Martin. Esmeralda e Martin saem para uma balada e acabam encontrando Lupe e Lupita por lá.',
    pages: NO_TE_PIDO_FLORES_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP04.docx_089904fc.pdf',
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05',
    summary:
      'Esmeralda e Lupita conversam e um clima rola entre as duas. Martin discute com Lupe e os dois brigam no meio da rua e da chuva. Martin beija Lupe. Lupe beija Martin. Os dois concordam em nunca mais fazer isso. Esmeralda e Lupita caminham aos risos pelas ruas. Lupita beija Esmeralda. Martin cuida de Lupe bêbado.',
    pages: NO_TE_PIDO_FLORES_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP05.docx_e36de0af.pdf',
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06',
    summary:
      'Martin e Lupe descobrem que passaram a noite juntos. Graziela começa a perseguir Lupita. Hernande conta a Lupe e Lupita que vendeu o A La Mexicana para Martin. Graziela se revolta com homens falando mal de Graziela e tenta atropelá-los. Martin aparece de surpresa na casa de Lupe e oferece um vinho.',
    pages: NO_TE_PIDO_FLORES_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP06.docx_e4e2187a.pdf',
  },
];

// Remaining episodes 7-11
const REMAINING_EPISODES: NoTePidoFloresEpisodeDef[] = Array.from({ length: 5 }, (_, i) => {
  const num = i + 7;
  const padded = String(num).padStart(2, '0');
  return {
    number: num,
    label: `Episódio ${padded}`,
    slug: `episodio-${padded}`,
    title: `Episódio ${padded}`,
    summary: `Roteiro original do episódio ${padded} de No Te Pido Flores, de Everton B Dutra.`,
    pages: [],
  };
});

export const ALL_NO_TE_PIDO_FLORES_EPISODES_RAW: NoTePidoFloresEpisodeDef[] = [
  ...NO_TE_PIDO_FLORES_EPISODES_RAW,
  ...REMAINING_EPISODES,
];

export const NO_TE_PIDO_FLORES_EPISODES: ChapterEpisode[] = ALL_NO_TE_PIDO_FLORES_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
