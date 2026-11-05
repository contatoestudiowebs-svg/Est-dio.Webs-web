import { TOPAZIO_EPISODE_01_PAGES } from './topazioEpisodes/episode01';
import { TOPAZIO_EPISODE_02_PAGES } from './topazioEpisodes/episode02';
import { TOPAZIO_EPISODE_03_PAGES } from './topazioEpisodes/episode03';
import { TOPAZIO_EPISODE_04_PAGES } from './topazioEpisodes/episode04';
import { TOPAZIO_EPISODE_05_PAGES } from './topazioEpisodes/episode05';
import { TOPAZIO_EPISODE_06_PAGES } from './topazioEpisodes/episode06';
import { TOPAZIO_EPISODE_07_PAGES } from './topazioEpisodes/episode07';
import { TOPAZIO_EPISODE_08_PAGES } from './topazioEpisodes/episode08';
import { TOPAZIO_EPISODE_09_PAGES } from './topazioEpisodes/episode09';
import { TOPAZIO_EPISODE_10_PAGES } from './topazioEpisodes/episode10';
import { TOPAZIO_EPISODE_11_PAGES } from './topazioEpisodes/episode11';
import { TOPAZIO_EPISODE_12_PAGES } from './topazioEpisodes/episode12';
import { TOPAZIO_EPISODE_13_PAGES } from './topazioEpisodes/episode13';
import { TOPAZIO_EPISODE_14_PAGES } from './topazioEpisodes/episode14';
import { TOPAZIO_EPISODE_15_PAGES } from './topazioEpisodes/episode15';
import { TOPAZIO_EPISODE_16_PAGES } from './topazioEpisodes/episode16';
import { TOPAZIO_EPISODE_17_PAGES } from './topazioEpisodes/episode17';
import { TOPAZIO_EPISODE_18_PAGES } from './topazioEpisodes/episode18';
import { TOPAZIO_EPISODE_19_PAGES } from './topazioEpisodes/episode19';
import { TOPAZIO_EPISODE_20_PAGES } from './topazioEpisodes/episode20';
import { TOPAZIO_EPISODE_21_PAGES } from './topazioEpisodes/episode21';
import { TOPAZIO_EPISODE_22_PAGES } from './topazioEpisodes/episode22';
import { TOPAZIO_EPISODE_23_PAGES } from './topazioEpisodes/episode23';
import { TOPAZIO_EPISODE_24_PAGES } from './topazioEpisodes/episode24';
import { TOPAZIO_EPISODE_25_PAGES } from './topazioEpisodes/episode25';
import { ChapterEpisode } from '../types';

export interface TopazioEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
  note?: string;
}

export const TOPAZIO_EPISODES_RAW: TopazioEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Marcelo chega em casa preocupado e diz a Regina que está à beira da falência. Ele sugere vender a pedra Topázio e conta seu plano. Marcelo pede para Robério guardar o diamante. Agnes e Roberto discutem, ela entra no banheiro e sai ao ouvir barulho de tiro. Marcelo acusa Roberio de ter roubado o diamante Topázio.',
    pages: TOPAZIO_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP01.docx_8d76e4ac.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Roberio se defende das acusações. Agnes é presa pela morte de Roberto. Roberio passa mal com as acusações de Marcelo. Regina recebe a informação sobre a morte de Roberto e a prisão de Agnes. Roberio morre.',
    pages: TOPAZIO_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP02.docx_e7bd49d0.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Ítalo conversa com Melina e conta que Agnes sairá do presídio. Patrícia conversa com Lurdes. Regina avisa a Marcelo que Agnes vai sair da cadeia. Ítalo vai buscar sua mãe. Os dois conversam. Ítalo diz que matou o pai.',
    pages: TOPAZIO_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP03.docx_a204f74a.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Ítalo conta a Agnes que matou Roberto. Lurdes vai até a casa de Esmeralda e fala sobre a vaga de baba para Bita. Bita aceita o trabalho, mas depois que Lurdes sai ela questiona se deve mesmo aceitar o trabalho. Marcelo conversa com Lucas e pede pra manter Agnes longe da empresa. Bita jura vingança pela morte do pai.',
    pages: TOPAZIO_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP04.docx_69ebb630.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Lurdes leva Bita para conversar com Patrícia. Patrícia conversa com Bita. Agnes aparece na empresa e é destratada por Lucas. Ítalo conversa com Melina. Bita conversa com Lurdes. Agnes conversa com a recepcionista e consegue informações sobre Marcelo, ao sair pata ir embora, Agnes dá de cara com seu irmão Marcelo.',
    pages: TOPAZIO_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP05.docx_e1d4075b.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Agnes conversa com Marcelo e ele ameaça ela e proíbe que ela volte a empresa. Agnes conversa com Ítalo e pede pra que ele consiga o número de Regina. Patrícia fala pra Bita que vai contratá-la como Baba. Agnes liga para Regina e se convida para tomar um café. Bita ouve uma conversa de Patrícia com alguém no telefone, Patrícia conta que Douglas não é pai do seu filho.',
    pages: TOPAZIO_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP06.docx_07dda4d4.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Bita ouve a conversa de Patrícia. Douglas chega, Bita sai antes que ele entre. Patrícia apresenta Bita a Douglas. Agnes vai até a casa de Marcelo, ela conversa com Regina e vê Bita com o bebe de Patrícia. Agnes conta a Ítalo sobre a conversa que teve com Regina e o que descobriu. Lurdes pede Bita pra chamar Lucas e ao chegar ao quarto ela flagra ele se beijando com um colega de trabalho.',
    pages: TOPAZIO_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP07.docx_d0b35587.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Marcelo discute com Regina por receber Agnes. Melina aparece na casa de Agnes e as duas conversam. Lucas questiona Bita se ela viu algo. Douglas avisa a Patrícia que vai viajar. Fábio volta pra casa. Ítalo vai atrás de Bita.',
    pages: TOPAZIO_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP08.docx_65c5a412.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Ítalo insiste em querer dar carona a Bita, mas ela não aceita e pega sua condução acompanhada de Lurdes. Marcelo vai a casa de Agnes e a ameaça novamente. Bita combina com Fábio para pegar Lucas no flagra. Ítalo conta a Agnes como foi com Bita. Patrícia fala com Bita que vai viajar, Bita fica chateada.',
    pages: TOPAZIO_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP09.docx_aaf4dcb2.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Agnes aparece na casa de Marcelo e insiste para falar com Regina. Bita ouve conversa de Lucas, atrás da porta. Ítalo discute com Douglas. Lucas descobre que Bita ouviu a conversa dele. Marcelo aceita que Ítalo trabalhe na empresa. Patrícia pede a Bita para ir na viagem com ela.',
    pages: TOPAZIO_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP10.docx_7de60fed.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Marcelo conversa com Patrícia sobre Bita ir na viagem, Patrícia conta que confia em Bita. Lucas e Fábio conversam. Antes de ir embora, Fábio dá um beijo em Lucas que deixa ele mexido. Ítalo vai embora da casa de Melina, Douglas aparece para vê-la. Ítalo vai morar com Agnes e conta que falou toda a verdade para Melina. Adriana aparece na outra casa de Marcelo e revela-se ser esposa dele. Adriana conta tudo a Bita.',
    pages: TOPAZIO_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP11.docx_8072029a.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'Bita fica sabendo que agora é responsável por levar as refeições de Marcelo. Fábio liga pra Bita e conta da noite com Lucas. Bita pede pra Fábio marcar um novo encontro com Lucas. Ítalo conta a Agnes que conversou com Bita. Ele descobre que Douglas está apaixonado por Melina. Patrícia conta a Regina sobre Douglas não ser pai do seu filho. Bita encontra-se com Ítalo e conta seu plano, ele pede a ajuda dele.',
    pages: TOPAZIO_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP12.docx_ff341d91.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'Ítalo conta a Agnes sobre tudo o que conversou com Bita. Bita arma com Fábio para alguém fotografar ele e Lucas transando. Bita leva o café de Marcelo, ela põe algo no café. Douglas liga pra Melina e os dois conversam. Lucas liga para Fábio, Fábio o convida para sair e Lucas aceita. Bita colhe material e pede pra Ítalo fazer o DNA.',
    pages: TOPAZIO_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP13.docx_471af859.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Bita encontra-se com Ítalo e entrega a ele os matérias. Bita põe algo no suco de Marcelo e leva para ele. Lucas vai ao encontro de Fábio. O homem faz fotos dos dois juntos. Adriana liga para Bita e as duas conversam. Fábio conta a Lucas que vai embora. Ítalo entrega o material para fazer o DNA e depois procura um homem para revelar as fotos. Bita coloca o exame de DNA entre as coisas de Douglas.',
    pages: TOPAZIO_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP14.docx_05caf5f3.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Bita põe o exame na mala de Douglas. Douglas e Patrícia arrumam as malas para voltar da viagem. Ítalo pega as fotos que mandou revelar. Regina percebe Marcelo estranho e pede pra ele ir ao médico, mas ele recusa. Lurdes fala para Regina que não confia em Bita. Ítalo abre o envelope e vê as fotos de Lucas e Fábio.',
    pages: TOPAZIO_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP15.docx_c3a510de.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16',
    summary:
      'Ítalo vê as fotos. Regina pede para Lurdes preparar a comida de Marcelo separada. Patrícia e Douglas chegam a casa. Douglas descobre o exame de DNA. Douglas e Patrícia discutem. Ítalo mostra as fotos a Agnes. Ítalo aparece na empresa, é barrado e grita para Lucas que conhece Fábio. Lucas então permite a entrada dele. Ítalo entrega o envelope com as fotos a Lucas.',
    pages: TOPAZIO_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP16.docx_44a476b4.pdf',
  },
  {
    number: 17,
    label: 'Capítulo 17',
    slug: 'capitulo-17',
    title: 'Capítulo 17',
    summary:
      'Douglas aparece na casa de Melina e pede pra passar uns dias lá, os dois se beijam. Lucas vê as fotos e discute com Ítalo. Ítalo exige cargos importantes para ele e para Agnes na empresa. Adriana liga para Bita, e Bita pede para que ela apareça na casa de Marcelo e conte toda a verdade. Patrícia conta a Regina que Douglas descobriu a verdade. Ítalo comemora junto com Agnes. Lurdes flagra Bita colocando algo no suco de Marcelo.',
    pages: TOPAZIO_EPISODE_17_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP17.docx_b80fca1d.pdf',
  },
  {
    number: 18,
    label: 'Capítulo 18',
    slug: 'capitulo-18',
    title: 'Capítulo 18',
    summary:
      'Lurdes questiona Bita, mas Bita consegue convencer a tia de que não colocou nada. Ítalo procura Fábio e dá dinheiro a ele, os dois acabam se beijando. Agnes aparece na empresa e troca ameaças com Lucas. Adriana aparece na casa de Marcelo, mas Regina não a atende e ela decide voltar depois. Lucas conta a Marcelo que está sendo chantageado por Agnes e Ítalo.',
    pages: TOPAZIO_EPISODE_18_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP18.docx_4d18de98.pdf',
  },
  {
    number: 19,
    label: 'Capítulo 19',
    slug: 'capitulo-19',
    title: 'Capítulo 19',
    summary:
      'Lucas conta a Marcelo que é gay. Adriana aparece na casa de Marcelo e revela para Regina toda verdade, mas Regina não acredita. Patrícia flagra Douglas e Melina se beijando.',
    pages: TOPAZIO_EPISODE_19_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP19.docx_7e814659.pdf',
  },
  {
    number: 20,
    label: 'Capítulo 20',
    slug: 'capitulo-20',
    title: 'Capítulo 20',
    summary:
      'Patrícia discute com Douglas e com Melina. Ítalo conta a Agnes que pretende fazer um caixa dois na empresa de Lucas. Fábio vai embora. Melina e Douglas conversam. Agnes aparece novamente na empresa e ameaça Lucas. Lurdes flagra Bita colocando algo no café de Marcelo.',
    pages: TOPAZIO_EPISODE_20_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP20.docx_8bfe9c68.pdf',
  },
  {
    number: 21,
    label: 'Capítulo 21',
    slug: 'capitulo-21',
    title: 'Capítulo 21',
    summary:
      'Lurdes e Bita discutem. Bita conta a Lurdes que vai se vingar da família Topázio. Melina encontra-se com Patrícia e pede desculpas, as duas discutem. Bita diz a Ítalo que vai entregar as fotos para a imprensa e ele pede pra ela não fazer. Regina fala para Marcelo sobre Adriana e ele diz não conhecer. Lurdes pede para Bita parar com a vingança e ela se recusa. Lurdes mostra uma gravação que fez de Bita falando da vingança e da ameaça.',
    pages: TOPAZIO_EPISODE_21_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP21.docx_b41edd9f.pdf',
  },
  {
    number: 22,
    label: 'Capítulo 22',
    slug: 'capitulo-22',
    title: 'Capítulo 22',
    summary:
      'Lurdes e Bita continuam discutindo. Lurdes revela a Bita que ela é filha de Marcelo. Marcelo conta a Lucas sobre Adriana. Marcelo pede para Lucas procurá-la. Ítalo liga para Bita e os dois conversam. Agnes vai até a casa de Melina.',
    pages: TOPAZIO_EPISODE_22_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP22.docx_1b9a6ec4.pdf',
  },
  {
    number: 23,
    label: 'Capítulo 23',
    slug: 'capitulo-23',
    title: 'Capítulo 23',
    summary:
      'Melina e Agnes conversam, Agnes pede o perdão de Melina. Patrícia conta a Bita que vai embora. Lucas liga para Fábio e fala sobre as fotos, Fábio finge não saber e não se importa. Adriana liga para Bita e as duas acertam em desmascarar Marcelo. Bita chega em casa e fala com Esmeralda sobre Marcelo ser seu pai.',
    pages: TOPAZIO_EPISODE_23_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP23.docx_6190a288.pdf',
  },
  {
    number: 24,
    label: 'Capítulo 24',
    slug: 'capitulo-24',
    title: 'Capítulo 24',
    summary:
      'Confira agora o penúltimo capítulo de Topázio e o encaminhar dos desfechos da história e seus personagens.',
    pages: TOPAZIO_EPISODE_24_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP24.docx_df3add03.pdf',
  },
  {
    number: 25,
    label: 'Capítulo 25',
    slug: 'capitulo-25',
    title: 'Capítulo 25',
    summary:
      'Confira agora o último capítulo de Topázio e os desfechos da história e seus personagens.',
    pages: TOPAZIO_EPISODE_25_PAGES,
    pdfUrl: '/assets/aistudio/TOP_ZIO.CAP25.docx_59b77855.pdf',
  },
];

export const TOPAZIO_EPISODES: ChapterEpisode[] = TOPAZIO_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
  note: ep.note,
}));
