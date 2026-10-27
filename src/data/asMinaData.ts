import { AS_MINA_EPISODE_01_PAGES } from './asMinaEpisodes/episode01';
import { AS_MINA_EPISODE_02_PAGES } from './asMinaEpisodes/episode02';
import { AS_MINA_EPISODE_03_PAGES } from './asMinaEpisodes/episode03';
import { AS_MINA_EPISODE_04_PAGES } from './asMinaEpisodes/episode04';
import { AS_MINA_EPISODE_05_PAGES } from './asMinaEpisodes/episode05';
import { AS_MINA_EPISODE_06_PAGES } from './asMinaEpisodes/episode06';
import { AS_MINA_EPISODE_07_PAGES } from './asMinaEpisodes/episode07';
import { AS_MINA_EPISODE_08_PAGES } from './asMinaEpisodes/episode08';
import { AS_MINA_EPISODE_09_PAGES } from './asMinaEpisodes/episode09';
import { AS_MINA_EPISODE_10_PAGES } from './asMinaEpisodes/episode10';
import { ChapterEpisode } from '../types';

export interface AsMinaEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const AS_MINA_EPISODES_RAW: AsMinaEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01',
    summary:
      'Isadora discute com a sua mãe Aurora, ao saber que irá estudar em um colégio interno. Carol está treinando, quando seus pais chegam. Bruno e Olga contam a Carol que não conseguiram o patrocínio. Tamara arruma sua irmã e depois sai para procurar seu pai, Berto, que está há alguns dias sumido. Ela liga para a vizinha e pede para que olhe Eva. Isadora está na rua mexendo no celular, um homem se aproxima dela e anuncia o assalto, desesperada, Isadora sai correndo e entra no ônibus.',
    pages: AS_MINA_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/AsMina.CAP.01.docx_42ee7f02.pdf',
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02',
    summary:
      'Isadora grita para o motorista fechar a porta. Carol discute com Isadora por conta da atitude que ela teve, Tamara entra no ônibus e tenta acalmar as duas. Carol, Isadora e Tamara contam suas histórias e acabam fazendo amizade. Carol e Isadora ajudam Tamara a encontrar Berto. Elas o encontram.',
    pages: AS_MINA_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/AsMina.CAP.02.docx_ec65d9bd.pdf',
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03',
    summary:
      'Tamara conversa com o pai e diz estar cansada de ficar procurando por ele. Ela pede que ele não saia mais de casa. Isadora sai de casa escondido de Aurora, e conta com a ajuda de Tony. Carol vai ao colégio acompanhada de sua mãe, Olga. Bruno vai para uma reunião com o vereador, mas não consegue falar com ele. Isadora chega ao colégio e se encontra com Olga e Carol. Aurora acorda e não encontra Isadora mais em casa.',
    pages: AS_MINA_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/AsMina.CAP.03.docx_6d84b956.pdf',
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04',
    summary:
      'Carol, Isadora e Tamara se encontram no colégio e conversam. As três combinam de se encontrar depois. Carol vai embora. Tamara questiona porque a mãe de Isadora não foi matricular ela, e Isadora esconde a verdade. Aurora vê Tony chegando e pergunta se ele viu Isadora e ele diz que não. Bruno conta que não foi recebido pelo vereador. Berto ia sair de casa, quando é visto por Eva. Ele desiste de sair para cuidar da filha. Carol convida as meninas para assistirem o treino dela, Tamara aceita, mas Isadora diz que precisa ir para casa. Ao chegar em casa, Aurora vê Isadora questiona onde ela estava.',
    pages: AS_MINA_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/AsMina.CAP.04.docx_ced4d776.pdf',
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05',
    summary:
      'Isadora mente para Aurora e as duas acabam discutindo. Tamara assiste o treino de Carol. Renata e Alex chegam para treinar. Tamara pergunta quem são eles e Carol explica. Tamara chega em casa e não encontra Berto, ela vê apenas Eva deitada no sofá. Isadora liga para sua amiga e conta o que está passando. Ao chegar em casa, Carol corre para saber se seu pai conseguiu o patrocínio.',
    pages: AS_MINA_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/AsMina.CAP.05.docx_98c6bb0d.pdf',
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06',
    summary:
      'Isadora conversa com Amanda. Ao descer para tomar café, Isadora mente para Aurora dizendo que se inscreveu em um curso, ela mostra a mensagem para Aurora da confirmação da matrícula. Eva sente falta do pai, Tamara conta uma história para distrair a irmã. Carol está sozinha fazendo alongamento, Renata chega e a provoca. Tamara e Isadora se encontram com Carol na saída do ginásio. Carol conta das provocações de Renata. Tamara conta às meninas que Berto fugiu novamente. Alex dá bronca em Renata por provocar Carol. Alex e Renata dão de cara com as meninas.',
    pages: AS_MINA_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/AsMina.CAP.06.docx_f37f2846.pdf',
  },
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07',
    summary:
      'Renata provoca Carol e as meninas. Alex sai levando a irmã. Elas encontram Berto. Tamara conversa novamente com seu pai e dá conselhos a ele. Dias depois… Isadora sai de casa cedo e pede ajuda a Tony. Carol, Isadora e Tamara se encontram. Ao voltar para a casa de Aurora, Tony encontra sua patroa tomando café na cozinha e pergunta para onde ele foi.',
    pages: AS_MINA_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/AsMina.CAP.07.docx_a76af7ff.pdf',
  },
  {
    number: 8,
    label: 'Episódio 08',
    slug: 'episodio-08',
    title: 'Episódio 08',
    summary:
      'Tony fica nervoso, mas responde que foi levar Isadora no curso. Aurora pergunta se ele sabe onde fica o curso, Tony desconversa. Bruno tem uma reunião com um empresário e o empresário pede a ele um documento com o valor que será necessário para ajudar Carol. Tamara vai à lanchonete conversar com o dono e pede a ele um emprego. Tamara acaba encontrando Alex e os dois conversam. Renata vê os dois conversando. Isadora chega em casa e encontra Aurora sentada no sofá. Aurora conta a Isadora que quer conhecer o lugar onde ela está fazendo o curso.',
    pages: AS_MINA_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/AsMina.CAP.08.docx_a60bf533.pdf',
  },
  {
    number: 9,
    label: 'Episódio 09',
    slug: 'episodio-09',
    title: 'Episódio 09',
    summary:
      'Isadora inventa uma desculpa para adiar que sua mãe vá até o ‘curso’. O dono da lanchonete liga para Tamara e diz que não tem vaga para ela. Bruno entrega o documento com o valor ao empresário e recebe um não. Bruno liga para Olga e conta que não conseguiu o patrocínio. Depois de falar com Olga, Bruno recebe uma ligação de alguém perguntando se ele conseguiu o patrocínio. Isadora pede ajuda das meninas para evitar que Aurora vá ao ‘curso’ que ela diz estar fazendo. Renata conta a Carol que viu Alex e Tamara conversando cheios de intimidade.',
    pages: AS_MINA_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/AsMina.CAP.09.docx_bc1b564f.pdf',
  },
  {
    number: 10,
    label: 'Episódio 10',
    slug: 'episodio-10',
    title: 'Episódio 10',
    summary:
      'Renata conta a Carol que Alex e Tamara estavam conversando bem íntimos. Bruno conta a Olga que não conseguiu nada e os dois discutem porque Bruno acha que Olga não está fazendo nada para ajudar. Carol vai tirar satisfações com Alex por estar de conversa com Tamara. Tamara arruma as coisas de Berto e encontra uma garrafa de cachaça. Carol tira satisfações com Tamara e a acusa de dar em cima de Alex.',
    pages: AS_MINA_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/AsMina.CAP.10.docx_53ae5360.pdf',
  },
];

// Remaining episodes 11-14 of season 1
const REMAINING_EPISODES: AsMinaEpisodeDef[] = Array.from({ length: 4 }, (_, i) => {
  const num = i + 11;
  const padded = String(num).padStart(2, '0');
  return {
    number: num,
    label: `Episódio ${padded}`,
    slug: `episodio-${padded}`,
    title: `Episódio ${padded}`,
    summary: `Roteiro original do episódio ${padded} de As Mina, de Liz Santos.`,
    pages: [],
  };
});

export const ALL_AS_MINA_EPISODES_RAW: AsMinaEpisodeDef[] = [
  ...AS_MINA_EPISODES_RAW,
  ...REMAINING_EPISODES,
];

export const AS_MINA_EPISODES: ChapterEpisode[] = ALL_AS_MINA_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
