import { ACESSO_1_EPISODE_01_PAGES } from './acesso1Episodes/episode01';
import { ACESSO_1_EPISODE_02_PAGES } from './acesso1Episodes/episode02';
import { ACESSO_1_EPISODE_03_PAGES } from './acesso1Episodes/episode03';
import { ACESSO_1_EPISODE_04_PAGES } from './acesso1Episodes/episode04';
import { ACESSO_1_EPISODE_05_PAGES } from './acesso1Episodes/episode05';
import { ACESSO_1_EPISODE_06_PAGES } from './acesso1Episodes/episode06';
import { ACESSO_1_EPISODE_07_PAGES } from './acesso1Episodes/episode07';
import { ACESSO_1_EPISODE_08_PAGES } from './acesso1Episodes/episode08';
import { ACESSO_1_EPISODE_09_PAGES } from './acesso1Episodes/episode09';
import { ACESSO_1_EPISODE_10_PAGES } from './acesso1Episodes/episode10';
import { ACESSO_1_EPISODE_11_PAGES } from './acesso1Episodes/episode11';
import { ACESSO_1_EPISODE_12_PAGES } from './acesso1Episodes/episode12';
import { ACESSO_1_EPISODE_13_PAGES } from './acesso1Episodes/episode13';
import { ACESSO_1_EPISODE_14_PAGES } from './acesso1Episodes/episode14';
import { ACESSO_1_EPISODE_15_PAGES } from './acesso1Episodes/episode15';
import { ACESSO_1_EPISODE_16_PAGES } from './acesso1Episodes/episode16';
import { ACESSO_1_EPISODE_17_PAGES } from './acesso1Episodes/episode17';
import { ACESSO_1_EPISODE_18_PAGES } from './acesso1Episodes/episode18';
import { ACESSO_1_EPISODE_19_PAGES } from './acesso1Episodes/episode19';
import { ACESSO_1_EPISODE_20_PAGES } from './acesso1Episodes/episode20';
import { ChapterEpisode } from '../types';

export interface Acesso1EpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const ACESSO_1_EPISODES_RAW: Acesso1EpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Amélia está no trabalho e liga para o pai. Os dois conversam. Samuel ignora as ligações de Rafaela. Lia fica chateada ao ser ignorada por Douglas. Amélia recebe ligação do colégio informando que sua vaga foi negada.',
    pages: ACESSO_1_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP01.docx_fa348a32.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Alberto chega ao Rio. Miguel e Lucas correm na praia, Miguel acaba contando que Samuel já chegou no Brasil. Amélia vai ao colégio ACESSO conversar com o diretor. Samanta vê Samuel, ela liga para Rafaela e conta.',
    pages: ACESSO_1_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP02.docx_53393779.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Amélia passeia no shopping. Samanta conta a Rafaela que viu Samuel entrar no shopping com Manuel. Alberto descobre que Amélia se mudou para o Rio para encontrar sua mãe. Samuel tomba em Amélia e a derruba, ele fixa os olhos nela e não a ajuda. Manuel ajuda Amélia. Samuel e Manuel vão atrás de Amélia. Manuel vê Amélia entrar no ônibus. Ao chegar em casa, Samuel dá de cara com Rafaela.',
    pages: ACESSO_1_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP03.docx_3e653011.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Rafaela e Samuel discutem e ele diz que não quer mais nada com ela. Lucas conversa com Lia. Alberto questiona Amélia por querer procurar sua mãe. Miguel liga para Lucas e conta o que aconteceu com Samuel e Amélia, Rafaela acaba ouvindo.',
    pages: ACESSO_1_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP04.docx_4d19cdcb.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Miguel leva Lucas para seu barco, os dois conversam e Miguel beija Lucas, que fica chateado e vai embora. Rafaela conta a Samanta que Samuel está apaixonado por uma garota. Lia conversa sobre o caso deles e acabam brigando. Samuel e Manuel vão a cafeteria onde Amélia trabalha e ele exige que ela atenda ele. Alberto encontra Alessandra.',
    pages: ACESSO_1_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP05.docx_88adea89.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Rafaela chega ao colégio acompanhada de Lucas e Lia. Samanta e Douglas chegam. Lia vai falar com Douglas e ele ignora ela. Samuel chega no colégio conversando com Miguel. Miguel vai falar com Lucas, mas Lucas sai sem querer conversa. Amélia chega ao colégio e é apresentada na sala de aula. Lucas vê Miguel ir para o banheiro e vai atrás. Miguel tenta pedir desculpas e Lucas o agarra e os dois se beijam. Samuel vai falar com Amélia e Rafaela vê.',
    pages: ACESSO_1_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP06.docx_28e276e2.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Amélia destrata Samuel. Rafaela vai procurar saber o que está acontecendo e Samuel a trata mal. Miguel e Lucas conversam sobre o que aconteceu. Lucas diz que ficou pensando em Manuel. Lia procura Douglas e os dois conversam. Lucas e Samanta conversam sobre o namoro deles. Samuel confessa a Miguel que está apaixonado por Amélia. Alberto vai até a casa de Alessandra.',
    pages: ACESSO_1_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP07.docx_5a5a0313.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Alberto e Alessandra conversam. Samuel aparece na cafeteria e Amélia se esconde. Rose conta a Samuel que Amélia gosta dele. Rafaela diz que vai ficar de olho em Amélia. Lia aparece na cafeteria e acaba fazendo amizade com Amélia. Samanta vai à casa de Miguel buscar informações sobre Amélia e os dois se beijam.',
    pages: ACESSO_1_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP08.docx_eb4f5c68.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Rafaela chega em casa e encontra Alessandra, as duas conversam. Amélia conversa com Lia sobre Samuel. Lucas vai se encontrar com Miguel. Alberto tenta convencer Amélia que desista de procurar sua mãe. Samanta conta a Rafaela o que descobriu sobre Amélia.',
    pages: ACESSO_1_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP09.docx_b3f171ce.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Rafaela diz que não vai aceitar perder Samuel pra Amélia. Alessandra procura Alberto e oferece dinheiro para ele ir embora do Rio com Amélia. Lia fala de Douglas para Amélia. Lucas e Samanta conversam. Na saída do colégio Samuel vai atrás de Amélia e a beija, Rafaela sai e vê os dois.',
    pages: ACESSO_1_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP10.docx_9b05a56f.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Amélia pede pra Samuel passar na cafeteria. Rafaela apenas observa os dois. Lucas marca encontro com Miguel. Miguel encontra-se com Samanta e ela o convida para a casa dela. Amélia conversa com Rose. Samuel aparece na cafeteria e os dois conversam. Alessandra chega acompanhada de Rafaela a cafeteria e Rafaela xinga Amélia.',
    pages: ACESSO_1_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP11.docx_1afaa95c.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'Rafaela e Amélia causam uma grande confusão e Amélia bate em Rafaela. Amélia é demitida da cafeteria. Alessandra convida Amélia para trabalhar em sua casa. Rafaela fica irritada. Samuel conta a Miguel que beijou Amélia e que os dois conversaram. Lia recebe Miguel e ele sobe para o quarto de Lucas. Alessandra chega com Rafaela e Amélia. Alessandra conta que Amélia vai trabalhar lá. Lia sobe a escada em direção a seu quarto e flagra Lucas e Miguel se beijando.',
    pages: ACESSO_1_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP12.docx_3a170ed2.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'Amélia chega em casa e conta a Alberto que foi demitida da cafeteria. Ela conta a Alberto o que aconteceu. Rafaela exige que Alessandra demita Amélia. Lia defende Amélia. Miguel vai se encontrar com Samanta. Rafaela vai até a casa de Samuel conversar com ele. Samuel ouve Lia falar que Amélia está trabalhando em sua casa.',
    pages: ACESSO_1_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP13.docx_9b116aa4.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Samuel procura Amélia e questiona sobre ela trabalhar na casa de Rafaela. Samanta combina de se encontrar com Miguel na biblioteca. Douglas procura Lia e ela diz que não quer mais nada com ele. Rafaela conta a Samanta que Amélia está trabalhando em sua casa. Douglas conta que pega Lia escondido. Samanta vai se encontrar com Miguel na biblioteca e Lia vê os dois se beijando.',
    pages: ACESSO_1_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP14.docx_196d6aa3.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Douglas procura Lia para conversar e ela rejeita ele. Samuel e Amélia vão ao cinema. Lia conta a Lucas que colocou fim no caso dela com Douglas. Lia diz a Lucas que sabe do caso dele com Miguel. Alberto descobre que Amélia está trabalhando na casa de Alessandra. Rafaela dá a entender que está pegando Douglas, Lia ouve.',
    pages: ACESSO_1_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP15.docx_46ea3cf0.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16',
    summary:
      'MESES DEPOIS... Amélia e Samuel continuam juntos. Miguel continua tendo caso com Lucas e Samanta. Douglas corre atrás de Lia e ela o rejeita. Alberto não mexe mais no assunto da mãe de Amélia.  Rafaela pede à empregada que fale com Amélia para lhe servir um suco. Rafaela humilha Amélia e Alessandra vê tudo. Lucas diz a Miguel que vai terminar com Samanta para ficar com ele. Samanta conversa com Miguel e diz que vai terminar com Lucas para ficar com ele. Lia conta a Douglas que não quer ele porque sabe que ele está ficando com Rafaela. Alberto conta a Alessandra que Amélia é a filha deles. Ao sair do colégio, Samuel flagra Amélia e Elton se beijando.',
    pages: ACESSO_1_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP16.docx_da304a2c.pdf',
  },
  {
    number: 17,
    label: 'Capítulo 17',
    slug: 'capitulo-17',
    title: 'Capítulo 17',
    summary:
      'Samuel briga com Amélia por causa de Elton. Samuel dá um soco em Elton. Rafaela vai contar a Samanta o que aconteceu e a encontra chorando. Miguel procura Lia e pede ajuda sobre Lucas e Samanta. Douglas vê os dois conversando juntos. Rafaela e Elton comemoram a briga de Amélia e Samuel. Alessandra conta a Amélia que é sua mãe.',
    pages: ACESSO_1_EPISODE_17_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP17.docx_c460b5f6.pdf',
  },
  {
    number: 18,
    label: 'Capítulo 18',
    slug: 'capitulo-18',
    title: 'Capítulo 18',
    summary:
      'Alessandra conta tudo a Amélia. Douglas vai conversar com Lia e ela diz que não vai dar mais chances a ele. Miguel encontra-se Lucas e marca com ele na biblioteca do colégio. Lia recebe Guilherme (Gui) seu amigo da internet. Miguel liga para Samanta e marca com ela na biblioteca. Alessandra reúne seus filhos e conta que Amélia é filha dela, Samuel chega na hora e ouve.',
    pages: ACESSO_1_EPISODE_18_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP18.docx_86a1e13b.pdf',
  },
  {
    number: 19,
    label: 'Capítulo 19',
    slug: 'capitulo-19',
    title: 'Capítulo 19',
    summary:
      'Alessandra conta toda a verdade sobre seu passado e sobre Amélia. Rafaela e Samanta conversam sobre Elton e Samuel ouve. Ele briga com Rafaela. Elton procura Amélia novamente e ela destrata ele. Samanta se desespera com o resultado da prova. Lucas vai à biblioteca no horário marcado por Miguel, Samanta também vai e os dois encontram-se e ficam surpresos. Miguel conta tudo sobre os três. Douglas se declara para Lia na frente de todo colégio. Samuel pede desculpas a Amélia e deixa Rafaela irritada.',
    pages: ACESSO_1_EPISODE_19_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP19.docx_72b5e438.pdf',
  },
  {
    number: 20,
    label: 'Capítulo 20',
    slug: 'capitulo-20',
    title: 'Capítulo 20',
    summary:
      'Confira agora o último capítulo de ACESSO e os desfechos da história e seus personagens.',
    pages: ACESSO_1_EPISODE_20_PAGES,
    pdfUrl: '/assets/aistudio/ACESSO_TP1.CAP20.docx_948b2bac.pdf',
  },
];

export const ACESSO_1_EPISODES: ChapterEpisode[] = ACESSO_1_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
