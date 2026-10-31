import { RUTE_EPISODE_01_PAGES } from './ruteEpisodes/episode01';
import { RUTE_EPISODE_02_PAGES } from './ruteEpisodes/episode02';
import { RUTE_EPISODE_03_PAGES } from './ruteEpisodes/episode03';
import { RUTE_EPISODE_04_PAGES } from './ruteEpisodes/episode04';
import { RUTE_EPISODE_05_PAGES } from './ruteEpisodes/episode05';
import { RUTE_EPISODE_06_PAGES } from './ruteEpisodes/episode06';
import { RUTE_EPISODE_07_PAGES } from './ruteEpisodes/episode07';
import { RUTE_EPISODE_08_PAGES } from './ruteEpisodes/episode08';
import { RUTE_EPISODE_09_PAGES } from './ruteEpisodes/episode09';
import { RUTE_EPISODE_10_PAGES } from './ruteEpisodes/episode10';
import { RUTE_EPISODE_11_PAGES } from './ruteEpisodes/episode11';
import { RUTE_EPISODE_12_PAGES } from './ruteEpisodes/episode12';
import { RUTE_EPISODE_13_PAGES } from './ruteEpisodes/episode13';
import { RUTE_EPISODE_14_PAGES } from './ruteEpisodes/episode14';
import { RUTE_EPISODE_15_PAGES } from './ruteEpisodes/episode15';
import { RUTE_EPISODE_16_PAGES } from './ruteEpisodes/episode16';
import { ChapterEpisode } from '../types';

export interface RuteEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const RUTE_EPISODES_RAW: RuteEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Balaque apresenta Lotan, filho de Zoar, como um dos pretendentes de sua filha. Balaque se preocupa com o futuro de Rute. Em meio a fome, Elimeleque decide partir com sua família para Moabe. UM TEMPO DEPOIS... Rute e Noemi se encontram pela primeira vez. Elimeleque tenta enganar a esposa do falecido dono de vinhedos. No entanto, ela o acusa de roubo ao juiz de Moabe.',
    pages: RUTE_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo01.docx_3cff929f.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Rute e Noemi conversam e Rute conta que seu pai busca um pretendente para ela. Após perder todas as terras, Elimeleque chega em casa embriagado. Ele tenta enganar Noemi, mas Malom e Quiliom revelam os crimes cometidos pelo pai. Na sequência, os homens de Moabe agridem Elimeleque, que não resiste aos ferimentos e morre nos braços dos filhos.',
    pages: RUTE_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo02.docx_caed191f.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Homens de Moabe levam o corpo de Elimeleque até Noemi. A mulher chora pela morte do marido e recebe consolo de Rute e Orfa. Dor aproxima ainda mais Rute e Noemi. Mais tarde, a viúva se preocupa com a situação financeira de sua família. Malom e Quiliom prometem trabalhar para ajudar a mãe. Quiliom revela os seus sentimentos por Orfa e a garota o beija. Na sequência, ela sugere se casar com o filho de Noemi. No entanto, a mulher reprova a união entre eles. Malom aproveita o interesse de Quiliom em Orfa para se aproximar de Rute. O primogênito de Noemi se declara para a filha de Balaque.',
    pages: RUTE_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo03.docx_23c82d7c.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Balaque conversa com Rute. Malom mente para ficar com as economias da família. Rute e Malom se encontram escondidos. Orfa e Quiliom armam um plano para ficarem juntos. Malom gasta todas as economias da família. Malom pede ajuda financeira a Rute. Orfa conta a Quiliom que está grávida. Balaque cobra Rute por sua ausência. Balaque descobre o envolvimento de Rute com Malom.',
    pages: RUTE_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo04.docx_73653556.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Malom chega com cestos de trigos e temperos. Noemi pergunta por Quiliom. Balaque e Rute chegam a casa de Noemi, ele questiona porque Malom beijou Rute. Malom conta que Rute manter o caso deles em segredo. Rute conta que estava bancando as despesas da casa de Noemi. Quiliom revela que Orfa está grávida dele. Noemi se decepciona com as escolhas de Rute. Balaque se acerta com Malom. Noemi não aprova o casamento de Malom e Rute. Ela teme que Malom não faça Rute feliz. Malom e Rute se casa. Quiliom e Orfa também.',
    pages: RUTE_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo05.docx_7cb10d52.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Rute enfrenta problemas no seu casamento com Malom. Quiliom e Orfa briga porque ele flagra ela orando aos deuses. Malom passa noite jogando e chega em casa tarde. Ele e Rute discutem. Noemi aconselha Rute sobre casamento. Rute e Malom conversam e tenta e acertar, mas acabam brigando novamente. Rute conversa com Noemi. Noemi sugere a Rute fazer um jantar para Malom. Rute vai atrás de Malom e ouve ele falando mal dela.',
    pages: RUTE_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo06.docx_6ff9324a.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Rute conta a Noemi que Malom aceitou o convite. Noemi se oferece para ajudar Rute a preparar o jantar. Noemi e Rute cozinham. Malom encontra Oriel que o convida para uma noite de jogos. Malom troca o jantar por noite de jogos na taberna. Malom chega em casa tarde e discute com Rute. Filho de Quiliom e Orfa nasce morto.',
    pages: RUTE_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo07.docx_f20c6192.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Rute se irrita ao encontrar Malom na taberna. Malom tenta se explicar para Rute. Rute conversa com Noemi. Malom leva Quiliom para a taberna. Oriel provoca Malom. Orfa se preocupa com Quiliom. Malom e Quiliom são mortos por Oriel e seus capangas.',
    pages: RUTE_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo08.docx_7340aabe.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Malom se despede de Rute e pede perdão. Rute ora a Deus e encontra conforto em meio a sua dor. Noemi pede para Rute e Orfa voltarem para casa. Noemi se surpreende com as boas notícias sobre Belém. Noemi decide que vai voltar para Belém.',
    pages: RUTE_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo09.docx_e817924d.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Rute decide ir para Belém com Noemi. Rute conta a Balaque que quer ir para Belém. Rute conta a Noemi sobre Balaque. Orfa diz que seu pai também não concordou e decide ir com Noemi. Rute se despede de Balaque e vai embora de Moabe com Noemi.',
    pages: RUTE_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo10.docx_996b9605.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Noemi, Rute e Orfa passam por dificuldades no deserto. Rute decide acompanhar Noemi até Belém. Orfa decide voltar para Moabe. Noemi e Rute encontram dificuldades no deserto. Rute e Noemi sobrevivem a jornada no deserto. Rute e Noemi chegam a Belém.',
    pages: RUTE_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo11.docx_6257d3d8.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'Noemi encontra Tadeu. Noemi volta a casa em que morava e a encontra abandonada. Noemi adoece. Rute é rejeitada por ser moabita, ela acaba encontrando Joana que diz conhecer Noemi. Noemi culpa a Deus por seus problemas e decide se chamar Mara. Noemi descobre que seu marido mentiu para ela.',
    pages: RUTE_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo12.docx_7dd70068.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'Noemi conta a Rute que Tadeu é o seu remidor. Joana fala a Rute sobre o direito das viúvas de segar nos campos. Rute vai ao campo de Tadeu. Chaim tenta se aproveitar de Rute. Tadeu a protege. Mulheres fazem acusações contra Rute que foge desesperada.',
    pages: RUTE_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo13.docx_6293aeee.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Rute conta a Noemi o que aconteceu. Noemi alerta Rute sobre pessoas ruins em Belém. Boaz ajuda Rute e a defende de falsas acusações. Rute conta a Noemi sobre a generosidade de Boaz. Chaim expulsa as viúvas dos campos de trigo.',
    pages: RUTE_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo14.docx_44d8e60b.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Chaim faz acusações contra Boaz. Rute acaba indo segar nos campos de Boaz. Arom pede a Lis que ajude Rute no que ela precisar. Lis conversa com Rute. Boaz descobre parentesco com Rute. Boaz proíbe Chaim de fazer mal a Rute.',
    pages: RUTE_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo15.docx_a0380155.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16',
    summary:
      'Boaz convidada Rute para uma refeição. Noemi descobre que Boaz é seu parente e possível remidor de Rute. Lis conta para Rute detalhes sobre o passado de Boaz. Noemi reencontra Boaz e falam de Rute. Rute conversa com Lis. Boaz fica encantado ao saber mais de Rute.',
    pages: RUTE_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/RUTE.Cap_tulo16.docx_c2d8452d.pdf',
  },
];

// Remaining chapters 17 to 18 placeholders
const REMAINING_RUTE_EPISODES: ChapterEpisode[] = Array.from({ length: 2 }, (_, i) => {
  const num = i + 17;
  const pad = String(num).padStart(2, '0');
  return {
    number: num,
    label: `Capítulo ${pad}`,
    slug: `capitulo-${pad}`,
    title: `Capítulo ${pad}`,
    summary: `Espaço oficial preparado para o capítulo ${pad} da web novela Rute. Em breve.`,
    content: '',
    pdfPages: [],
  };
});

export const RUTE_EPISODES: ChapterEpisode[] = [
  ...RUTE_EPISODES_RAW.map((ep) => ({
    number: ep.number,
    label: ep.label,
    slug: ep.slug,
    title: ep.title,
    summary: ep.summary,
    content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
    pdfPages: ep.pages,
    pdfUrl: ep.pdfUrl,
  })),
  ...REMAINING_RUTE_EPISODES,
];
