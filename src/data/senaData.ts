import { SENA_EPISODE_01_PAGES } from './senaEpisodes/episode01';
import { SENA_EPISODE_02_PAGES } from './senaEpisodes/episode02';
import { SENA_EPISODE_03_PAGES } from './senaEpisodes/episode03';
import { SENA_EPISODE_04_PAGES } from './senaEpisodes/episode04';
import { SENA_EPISODE_05_PAGES } from './senaEpisodes/episode05';
import { SENA_EPISODE_06_PAGES } from './senaEpisodes/episode06';
import { ChapterEpisode } from '../types';

export interface SenaEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
}

export const SENA_EPISODES_RAW: SenaEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — O Fim?',
    summary:
      'Jair vai à casa de Rômulo e o faz refém junto com sua esposa. Jair faz uma proposta para os dois, que recusam. Denise desce e vê os pais de joelhos. Rômulo vai pra cima dos policiais e acaba sendo morto ele e Eulália, por Dominic. ANOS DEPOIS... Jair é morto por Sena.',
    pages: SENA_EPISODE_01_PAGES,
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — Duque de Às',
    summary:
      'Helena vai a casa de Jair e descobre uma peça de dominó na cena do crime. Em pronunciamento Helena fala sobre a morte de Jair. Helena apresenta Clarisse e sua equipe. Dominic questiona Helena. Clarisse passa informações sobre Sena para Helena. Helena recebe uma ligação misteriosa. Clarisse e sua equipe prendem Duque.',
    pages: SENA_EPISODE_02_PAGES,
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — Duque',
    summary:
      'Clarisse interroga Duque, mas ele fala pouco e não dá muita informação. Silvano descobre que Helena esconde sobre a peça de dominó achada no corpo de Jair. Ele ameaça contar à imprensa. Clarisse conta a Dominic que Duque não quis colaborar. Helena lembra do acordo que fez com Sena. Sena liga para Helena e pede que ela dê um jeito de entregar um celular para Duque. Hélio e José recebem informações sobre Às. Dominic pede para ter acesso ao documento e descobre que é o endereço de sua irmã. Helena entrega o celular a Duque. Sena liga para Duque.',
    pages: SENA_EPISODE_03_PAGES,
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — Aviso',
    summary:
      'Sena conta a Duque porque entregou ele para a polícia, ele ameaça contar tudo, e Sena diz que foi para protegê-lo. Helena parabeniza Clarisse pela prisão. Dominic vai até a casa de sua irmã Madalena. Sena liga para Helena e conta da denúncia sobre Às. Sena fala que Às é casado com a irmã de Dominic. Helena conta das ameaças de Silvano. Dominic conta que é cunhado de Às. Às liga para Madalena e sua ligação é rastreada.',
    pages: SENA_EPISODE_04_PAGES,
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — Às',
    summary:
      'Clarisse organiza a equipe para ir prender Às. Silvano segue Hélio e descobre onde ele mora e que é casado com outro homem. Sena liga para Helena e exige uma sela especial para Duque. Alguém mexe no carro de Silvano. Ás é preso. Ao chegar em casa Silvano vê uma pessoa de perto que começa a atirar nele. A pessoa aproxima-se, tira Silvano do carro e atira.',
    pages: SENA_EPISODE_05_PAGES,
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — O Jogo Vai Começar!',
    summary:
      'Sena liga para Helena e diz que deu um jeito em Silvano. Helena pede para ver o rosto de Sena e é ameaçada. Sena conta porque matou Jair. Dominic e Clarisse interrogam Tadeu/Às. Silvano aparece na delegacia atrás de Helena e conta o que aconteceu. Sena liga para Madalena e faz uma proposta pra ela. Silvano descobre que o sobrinho de Hélio trafica drogas. Dominic vai visitar sua filha. Madalena liga para Sena e aceita a proposta.',
    pages: SENA_EPISODE_06_PAGES,
  },
];

export const SENA_EPISODES: ChapterEpisode[] = SENA_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
  pdfPages: ep.pages,
}));
