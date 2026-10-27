import { NO_TE_PIDO_FLORES_EPISODE_01_PAGES } from './noTePidoFloresEpisodes/episode01';
import { NO_TE_PIDO_FLORES_EPISODE_02_PAGES } from './noTePidoFloresEpisodes/episode02';
import { NO_TE_PIDO_FLORES_EPISODE_03_PAGES } from './noTePidoFloresEpisodes/episode03';
import { NO_TE_PIDO_FLORES_EPISODE_04_PAGES } from './noTePidoFloresEpisodes/episode04';
import { NO_TE_PIDO_FLORES_EPISODE_05_PAGES } from './noTePidoFloresEpisodes/episode05';
import { NO_TE_PIDO_FLORES_EPISODE_06_PAGES } from './noTePidoFloresEpisodes/episode06';
import { NO_TE_PIDO_FLORES_EPISODE_07_PAGES } from './noTePidoFloresEpisodes/episode07';
import { NO_TE_PIDO_FLORES_EPISODE_08_PAGES } from './noTePidoFloresEpisodes/episode08';
import { NO_TE_PIDO_FLORES_EPISODE_09_PAGES } from './noTePidoFloresEpisodes/episode09';
import { NO_TE_PIDO_FLORES_EPISODE_10_PAGES } from './noTePidoFloresEpisodes/episode10';
import { NO_TE_PIDO_FLORES_EPISODE_11_PAGES } from './noTePidoFloresEpisodes/episode11';
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
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07',
    summary:
      'Esmeralda tem uma crise de ansiedade ao discutir com Roxana. Martin tenta seduzir Lupe, que fica sem reação. Lupita fantasia Esmeralda e foge com ela. Martin e Lupe têm uma noite romântica, assim como Lupita e Esmeralda, que saboreia a liberdade ao cantar num bar da cidade.',
    pages: NO_TE_PIDO_FLORES_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP07.docx_20488773.pdf',
  },
  {
    number: 8,
    label: 'Episódio 08',
    slug: 'episodio-08',
    title: 'Episódio 08',
    summary:
      'Esmeralda e Lupita tem uma noite de amor juntas. Lupe é surpreendido quando acorda e vê sua casa lotada de flores. Martin se mostra apaixonado por Lupe enquanto tenta fugir dos paparazzis junto de Esmeralda. Lupita recebe uma carta de aprovação de um curso em Paris. Lupe é surpreendido por um flashmob no meio da rua enviado por Martin. Roxana anuncia o casamento de Esmeralda e Martin, surpreendendo até mesmo os dois.',
    pages: NO_TE_PIDO_FLORES_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP08.docx_46937750.pdf',
  },
  {
    number: 9,
    label: 'Episódio 09',
    slug: 'episodio-09',
    title: 'Episódio 09',
    summary:
      'Lupe e Lupita desabafam sobre suas vidas amorosas. Esmeralda confronta Roxana, recusa o casamento falso e corta o cabelo para se libertar. Graziela provoca um incêndio criminoso na casa de Lupita. Martin surpreende Lupe com um carro de som na rua. Esmeralda salva Lupita das chamas antes da casa explodir. Martin e Lupe admitem seus sentimentos e se beijam no parque, mas são sequestrados.',
    pages: NO_TE_PIDO_FLORES_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP09.docx_a57f0313.pdf',
  },
  {
    number: 10,
    label: 'Episódio 10',
    slug: 'episodio-10',
    title: 'Episódio 10',
    summary:
      'Roxana sequestra Martin e exige que ele mantenha a farsa do casamento com Esmeralda. Esmeralda descobre que Lupita foi aceita em Paris e fica devastada com a iminente partida. Dois meses se passam e o casamento se aproxima. Lupita se despede de Lupe e o encoraja a lutar por Martin. Lupe percebe que ama Martin e pedala desesperadamente pelas ruas rumo à igreja para impedir o casamento.',
    pages: NO_TE_PIDO_FLORES_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP10.docx_3ff9c2f9.pdf',
  },
  {
    number: 11,
    label: 'Episódio 11',
    slug: 'episodio-11',
    title: 'Episódio 11 (Final)',
    summary:
      'Mulheres vestidas de noiva invadem a igreja e armam uma confusão generalizada. Lupe chega a tempo de impedir a cerimônia, e Esmeralda cancela o casamento para buscar sua liberdade. Martin e Lupe se casam ali mesmo no altar. Esmeralda corre ao aeroporto para uma emocionante despedida com Lupita. Graziela é recrutada para a Central Purple de Vilões. Um ano depois, Lupe e Martin celebram o amor cercados de amigos em uma grande festa.',
    pages: NO_TE_PIDO_FLORES_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/NO_TE_PIDO_FLORES.EP11.docx_4d6a84f7.pdf',
  },
];

export const ALL_NO_TE_PIDO_FLORES_EPISODES_RAW: NoTePidoFloresEpisodeDef[] = NO_TE_PIDO_FLORES_EPISODES_RAW;

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
