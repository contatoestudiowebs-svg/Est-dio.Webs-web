import { SANGUE_CRUZADO_EPISODE_01_PAGES } from './sangueCruzadoEpisodes/episode01';
import { SANGUE_CRUZADO_EPISODE_02_PAGES } from './sangueCruzadoEpisodes/episode02';
import { SANGUE_CRUZADO_EPISODE_03_PAGES } from './sangueCruzadoEpisodes/episode03';
import { SANGUE_CRUZADO_EPISODE_04_PAGES } from './sangueCruzadoEpisodes/episode04';
import { SANGUE_CRUZADO_EPISODE_05_PAGES } from './sangueCruzadoEpisodes/episode05';
import { SANGUE_CRUZADO_EPISODE_06_PAGES } from './sangueCruzadoEpisodes/episode06';
import { SANGUE_CRUZADO_EPISODE_07_PAGES } from './sangueCruzadoEpisodes/episode07';
import { SANGUE_CRUZADO_EPISODE_08_PAGES } from './sangueCruzadoEpisodes/episode08';
import { SANGUE_CRUZADO_EPISODE_09_PAGES } from './sangueCruzadoEpisodes/episode09';
import { SANGUE_CRUZADO_EPISODE_10_PAGES } from './sangueCruzadoEpisodes/episode10';
import { SANGUE_CRUZADO_EPISODE_11_PAGES } from './sangueCruzadoEpisodes/episode11';
import { SANGUE_CRUZADO_EPISODE_12_PAGES } from './sangueCruzadoEpisodes/episode12';
import { SANGUE_CRUZADO_EPISODE_13_PAGES } from './sangueCruzadoEpisodes/episode13';
import { SANGUE_CRUZADO_EPISODE_14_PAGES } from './sangueCruzadoEpisodes/episode14';
import { SANGUE_CRUZADO_EPISODE_15_PAGES } from './sangueCruzadoEpisodes/episode15';
import { SANGUE_CRUZADO_EPISODE_16_PAGES } from './sangueCruzadoEpisodes/episode16';
import { ChapterEpisode } from '../types';

export interface SangueCruzadoEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const SANGUE_CRUZADO_EPISODES_RAW: SangueCruzadoEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Festa de aniversário de Cristina na fazenda da família. Elizabeth se revolta com o favoritismo dos pais e flagra Cristina e Paulo, seu noivo prometido, aos beijos combinando fugir. Mais tarde, Roberto entra no quarto de Elizabeth e tenta assediá-la; em meio ao confronto ele sofre um infarto fatal. Culpada injustamente pela mãe, Elizabeth foge para São Paulo, onde arruma emprego de doméstica na casa de Célia e descobre no hospital que está grávida.',
    pages: SANGUE_CRUZADO_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.01.docx_691980b0.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Célia descobre que Elizabeth está grávida de seu marido Hugo e decide mantê-la trabalhando até o parto. No Rio de Janeiro, Paulo e Cristina comemoram a gravidez. Meses depois, Elizabeth entra em trabalho de parto com complicações em São Paulo, assistida por uma parteira chamada Francisca. Célia faz uma proposta em dinheiro para a parteira sumir com a recém-nascida de Elizabeth.',
    pages: SANGUE_CRUZADO_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.02.docx_9409220d.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'A parteira aceita o suborno de Célia e leva a recém-nascida embora numa sacola. Em São Paulo, Célia mente friamente para Elizabeth dizendo que a menina nasceu morta, exibindo um atestado de óbito falso. No Rio, Cristina e Paulo celebram o nascimento do filho Pedro. Dias depois, Hugo volta de viagem e rompe com Célia para ficar com Elizabeth, momento em que Célia revela que deu um fim na filha deles.',
    pages: SANGUE_CRUZADO_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.03.docx_4039762c.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Célia expulsa Hugo e Elizabeth de seu apartamento sem revelar o paradeiro da criança. Anos depois, no Rio de Janeiro, Cristina, grávida novamente, quer passar o comando da empresa para o filho Pedro antes de se mudar para o Canadá com Thomas. Maurílio vigia os passos de Cristina e Pedro. Pedro desabafa sobre a insegurança nos negócios e as cobranças de sua noiva Giovana.',
    pages: SANGUE_CRUZADO_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.04.docx_b960536e.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Pedro tenta convencer Cristina a desistir de ir embora para o Canadá, mas a mãe se mantém firme. Elizabeth se encontra com Maurílio e recebe fotos de Cristina, Pedro, da noiva Giovana e de sua mãe Francisca. Elizabeth se inquieta ao achar o rosto de Francisca familiar. À noite, sob forte chuva, Elizabeth e Maurílio seguem o carro de Cristina até a casa de Pedro.',
    pages: SANGUE_CRUZADO_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.05.docx_ad4460c6.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Maurílio consegue para Elizabeth uma vaga temporária de secretária no escritório de Pedro com a cúmplice Olívia, providenciando documentos falsificados sob o nome de Cláudia. No apartamento de Pedro, Cristina se despede emocionada do filho e da noiva Giovana. Ao sair na chuva, Cristina é interceptada por Elizabeth armada e colocada desacordada no porta-malas do carro com auxílio de Maurílio.',
    pages: SANGUE_CRUZADO_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.06.docx_4bad72e8.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Elizabeth leva Cristina para uma favela deserta na chuva, revela sua identidade e jura destruir a vida da irmã. A arma de Elizabeth falha e ela chuta violentamente o ventre de Cristina grávida, abandonando-a ensanguentada. Dias depois, Elizabeth recebe os documentos falsos como Cláudia e vai à casa de Francisca. Ela reconhece a parteira que comprou sua filha Giovana no passado e exige que Francisca afaste Giovana de Pedro sob ameaça de revelar tudo.',
    pages: SANGUE_CRUZADO_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.07.docx_8982f4f6.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Elizabeth assume o posto de secretária substituta de Pedro com a identidade de Cláudia e aprende a rotina com Olívia. Abalada pelas ameaças, Francisca entrega o cartão de Elizabeth a Giovana e implora que a filha a procure. Giovana liga para Elizabeth marcando um encontro e vai até a residência dela sem imaginar quem ela é.',
    pages: SANGUE_CRUZADO_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.08.docx_9df1df5d.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Giovana vai à casa de Elizabeth tirar satisfações. Elizabeth exige que ela saia da vida de Pedro e revela que é sua verdadeira mãe biológica e que Francisca foi a parteira que a comprou. Giovana se recusa a acreditar e vai embora. Elizabeth manda Maurílio dar um susto em Giovana. Maurílio rende Giovana armada na rua, leva-a para um aterro deserto, coloca-a dentro de pneus e acende um isqueiro ameaçando queimar.',
    pages: SANGUE_CRUZADO_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.09.docx_b94968bf.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Maurílio revela a Giovana que jogou água com óleo para assustá-la e a ameaça de morte caso não termine com Pedro e fuja com a mãe. Giovana volta para casa traumatizada e conta a Francisca o sequestro e a revelação de Elizabeth. Francisca e Giovana decidem fazer as malas e fugir do Rio. No restaurante, Maurílio ouve Pedro ao telefone e arma novo plano com Elizabeth.',
    pages: SANGUE_CRUZADO_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.10.docx_829a0373.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Elizabeth senta-se na cafeteria em frente a Pedro, fingindo coincidência pelo café Macchiato e se apresenta como a nova secretária Cláudia. Pedro se encanta com ela. Em Magé, Francisca confirma em prantos a Giovana que Elizabeth é sua mãe biológica e revela todo o passado da traição com Hugo e o suborno de Célia. Giovana liga para Pedro e termina o noivado sem explicar os verdadeiros motivos.',
    pages: SANGUE_CRUZADO_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.11.docx_36fbf3a2.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'Pedro fica arrasado com o término repentino por telefone e Giovana chora em segredo. Meses depois, Pedro retorna ao escritório e elogia a competência de "Cláudia" (Elizabeth), convidando-a para um jantar. Elizabeth comemora o avanço de seu plano com Maurílio. No jantar, Pedro revela que os bens de Cristina foram passados para seu nome e a beija apaixonado.',
    pages: SANGUE_CRUZADO_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.12.docx_80756707.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'Pedro e Elizabeth passam a noite juntos no apartamento dele. Na manhã seguinte, Elizabeth humilha a empregada Ivone ao cruzar com ela na saída. No escritório, Pedro pede Elizabeth em namoro e ela aceita. Meses depois, Elizabeth passa a morar com Pedro. Pedro viaja para Brasília, e uma mulher misteriosa (Berenice) toca a campainha da casa de Pedro procurando por Elizabeth.',
    pages: SANGUE_CRUZADO_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.13.docx_abe0ad04.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Berenice aborda Elizabeth na casa de Pedro e revela que gravou o vídeo do ataque a Cristina grávida na favela, exigindo cem mil reais para não entregar à polícia. Pedro na verdade viajou para Niterói para se encontrar com sua amante Esther. Maurílio fotografa os dois juntos. Ivone descobre que o verdadeiro nome de Cláudia é Elizabeth e é ameaçada por ela. Ivone segue Elizabeth até um encontro com Maurílio e fotografa os dois.',
    pages: SANGUE_CRUZADO_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.14.docx_2a713bb9.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Elizabeth desabafa com Maurílio sobre a chantagem de Berenice e a desconfiança de Ivone, além de descobrir as fotos da traição de Pedro com Esther. Berenice consegue um colete à prova de balas com o sobrinho traficante Rafael na comunidade. Pedro liga para Ivone, que quase revela as armações de "Cláudia". Elizabeth marca de entregar metade do dinheiro a Berenice num local deserto para que Maurílio a elimine. Ivone confronta Elizabeth com as fotos dela e de Maurílio.',
    pages: SANGUE_CRUZADO_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.15.docx_8cb1f3f9.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16',
    summary:
      'Ivone exige que Elizabeth se afaste de Pedro, mas Elizabeth finge aceitar para ganhar tempo. Maurílio embosca Berenice e atira duas vezes contra ela, mas Berenice sobrevive graças ao colete e jura vingança. Berenice invade a casa de Elizabeth exigindo o dinheiro e tira uma foto dela. Enquanto isso, Maurílio vai à oficina do marido de Ivone, Jorge, simula um defeito no carro e descobre que o irmão de Ivone está preso e precisa de dinheiro de fiança.',
    pages: SANGUE_CRUZADO_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/remake-SC-cap.16.docx_5ddd571b.pdf',
  },
];

// Remaining chapters 17 to 20 placeholders
const REMAINING_SANGUE_CRUZADO_EPISODES: ChapterEpisode[] = Array.from({ length: 4 }, (_, i) => {
  const num = i + 17;
  const pad = String(num).padStart(2, '0');
  return {
    number: num,
    label: `Capítulo ${pad}`,
    slug: `capitulo-${pad}`,
    title: `Capítulo ${pad}`,
    summary: `Espaço oficial preparado para o capítulo ${pad} da web novela Sangue Cruzado. Em breve.`,
    content: '',
    pdfPages: [],
  };
});

export const SANGUE_CRUZADO_EPISODES: ChapterEpisode[] = [
  ...SANGUE_CRUZADO_EPISODES_RAW.map((ep) => ({
    number: ep.number,
    label: ep.label,
    slug: ep.slug,
    title: ep.title,
    summary: ep.summary,
    content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
    pdfPages: ep.pages,
    pdfUrl: ep.pdfUrl,
  })),
  ...REMAINING_SANGUE_CRUZADO_EPISODES,
];
