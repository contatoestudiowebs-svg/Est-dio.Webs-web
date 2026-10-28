import { DEBORA_E_REBECA_EPISODE_01_PAGES } from './deboraERebecaEpisodes/episode01';
import { DEBORA_E_REBECA_EPISODE_02_PAGES } from './deboraERebecaEpisodes/episode02';
import { DEBORA_E_REBECA_EPISODE_03_PAGES } from './deboraERebecaEpisodes/episode03';
import { DEBORA_E_REBECA_EPISODE_04_PAGES } from './deboraERebecaEpisodes/episode04';
import { DEBORA_E_REBECA_EPISODE_05_PAGES } from './deboraERebecaEpisodes/episode05';
import { DEBORA_E_REBECA_EPISODE_06_PAGES } from './deboraERebecaEpisodes/episode06';
import { DEBORA_E_REBECA_EPISODE_07_PAGES } from './deboraERebecaEpisodes/episode07';
import { DEBORA_E_REBECA_EPISODE_08_PAGES } from './deboraERebecaEpisodes/episode08';
import { DEBORA_E_REBECA_EPISODE_09_PAGES } from './deboraERebecaEpisodes/episode09';
import { DEBORA_E_REBECA_EPISODE_10_PAGES } from './deboraERebecaEpisodes/episode10';
import { DEBORA_E_REBECA_EPISODE_11_PAGES } from './deboraERebecaEpisodes/episode11';
import { DEBORA_E_REBECA_EPISODE_12_PAGES } from './deboraERebecaEpisodes/episode12';
import { DEBORA_E_REBECA_EPISODE_13_PAGES } from './deboraERebecaEpisodes/episode13';
import { DEBORA_E_REBECA_EPISODE_14_PAGES } from './deboraERebecaEpisodes/episode14';
import { DEBORA_E_REBECA_EPISODE_15_PAGES } from './deboraERebecaEpisodes/episode15';
import { DEBORA_E_REBECA_EPISODE_16_PAGES } from './deboraERebecaEpisodes/episode16';
import { ChapterEpisode } from '../types';

export interface DeboraERebecaEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const DEBORA_E_REBECA_EPISODES_RAW: DeboraERebecaEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Débora está biblioteca lendo um livro, o Dorival conversa com ela e fala sobre o evento que terá na cidade com uma autora famosa. Dorival dá o convite para Débora. Depois de sair da biblioteca, Débora vai à casa da mãe, Genebra. Genebra critica o trabalho de Débora e a impede de ir ao evento. Débora vai ao evento e fica encantada por Rebeca.',
    pages: DEBORA_E_REBECA_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP01.docx_14db1986.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Débora chega em casa e vê que seu marido voltou. Ela inventa uma desculpa para Amadeu. Rebeca pergunta a Delfim sobre Débora e ele conta o que sabe dela. Amadeu vai a casa de Genebra para falar de negócios e Genebra conta que Débora foi a um evento sozinha.',
    pages: DEBORA_E_REBECA_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP02.docx_c538633b.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Amadeu briga com Débora por ter mentido pra ele e por ter ido ao evento sozinha. Rebeca passeia pela cidade acompanhada de seu marido Virgilio e do empregado Delfim. Débora encomenda roupas de homem com uma costureira. Amadeu dá livros a Débora para que ela não vá mais a biblioteca. Rebeca vai a mercearia acompanhada de Delfim e é destratada por Genebra. Ao chegar em casa Genebra encontra Débora. Débora questiona porque Genebra contou sobre o evento a Amadeu.',
    pages: DEBORA_E_REBECA_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP03.docx_ae5f62a9.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Débora e Genebra discutem e trocam ameaças. Rebeca vai à biblioteca acompanhada de Delfim e lá encontra Débora. As duas conversam. Amadeu e Virgilio encontram-se na estação de trem e Amadeu convida Virgilio para jantar em sua casa. Amadeu comunica a Débora que convidou Virgilio e Rebeca para jantar em sua casa. Virgilio fala pra Rebeca que eles foram convidados para jantar na casa de Amadeu e Débora.',
    pages: DEBORA_E_REBECA_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP04.docx_3a48250d.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Genebra vai à casa de Débora, e Débora comenta sobre o jantar para Rebeca e Virgílio. Genebra discorda da ideia. Genebra encontra-se com Amadeu e fala sobre o jantar. Ela se recusa ser fiadora da ideia de Amadeu. Débora e Rebeca encontram-se na biblioteca, Débora ler uma carta de Vita para Virginia. Amadeu e Virgílio conversam enquanto Débora e Rebeca dança. Amadeu fica excitado ao ver as duas dançar.',
    pages: DEBORA_E_REBECA_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP05.docx_06eef773.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Amadeu e Débora transam, ela pensa em Rebeca. Débora e Rebeca encontram-se na biblioteca, as duas conversam sobre o jantar e acabam se beijando. Surpresa, Rebeca vai embora. Débora volta a biblioteca tentando encontrar Rebeca. Amadeu comenta com Débora sobre não ver Rebeca. Virgílio comenta Rebeca sobre ela estar diferente. Débora vai à biblioteca e é reconhecida por Genebra que a segue. Genebra conta a Amadeu que Débora está saindo escondida. Amadeu questiona Débora.',
    pages: DEBORA_E_REBECA_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP06.docx_e4eca292.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Débora e Amadeu discutem. Débora vai à casa de Genebra e as duas brigam, Débora proíbe Genebra de ver os netos. Virgilio acha estranho o comportamento de Rebeca. Ele comunica a ela que irá viajar. Débora vai à casa de Rebeca, mas ela não está. Débora então vai a biblioteca e é surpreendida por Rebeca.',
    pages: DEBORA_E_REBECA_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP07.docx_5371457b.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Débora e Rebeca conversam e as duas acabam se beijando. Genebra vê as duas. Ao chegar em casa, Débora encontra Genebra. Genebra conta que viu Débora e Rebeca juntas e diz que vai contar a Amadeu sobre o beijo. Virgilio e Delfim encontram-se escondido. Débora conta a Rebeca que Genebra sabe delas duas. Rebeca vai à casa de Genebra e a ameaça.',
    pages: DEBORA_E_REBECA_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP08.docx_ca727ddb.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Débora e Rebeca encontram-se escondidas, as duas conversam enquanto bebem e dançam. Débora se declara para Rebeca. Virgilio chega em casa e não encontra Rebeca. Débora vai visitar Genebra, e ela conta a Débora que Rebeca a ameaçou. Amadeu chega em casa e conta a Débora que quer mudar de cidade.',
    pages: DEBORA_E_REBECA_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP09.docx_eca9fa65.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Débora discorda da ideia de mudar de cidade. Virgilio e Delfim encontram-se no depósito, os dois conversam e acabam se beijando. Rebeca acorda de madrugada e vê os dois juntos. Débora encontra-se com Rebeca no portão, Rebeca conta que viu Virgilio e Delfim juntos. Débora questiona Rebeca sobre a ameaça à Genebra. Genebra encontra-se com Amadeu e ele conta sobre ir embora de Boa Esperança. Rebeca anda pela rua e acaba passando mal.',
    pages: DEBORA_E_REBECA_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP10.docx_025fe4c5.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Genebra leva Rebeca para sua casa e chama o médico. Rebeca pede desculpas e agradece Genebra. Amadeu conta que encontrou Genebra e falou sobre ir embora da cidade. Delfim vai buscar Rebeca na casa de Genebra. Genebra vai à casa de Débora e fala com ela e Amadeu que não vai mais ajudar nas despesas. Rebeca conta a Virgilio que Amadeu e Débora vão embora da cidade. Rebeca diz a Virgilio que sabe do caso dele com Delfim.',
    pages: DEBORA_E_REBECA_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP11.docx_aa8b6a83.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'Rebeca diz a Virgílio que sabe do caso dele com Delfim. E conta como descobriu que os dois têm um caso. Rebeca então conta a Virgílio que está apaixonada por Débora. Os dois se apoiam. Rebeca conversa com Delfim sobre ele e Virgílio. Rebeca diz a Débora que contou para Virgílio sobre elas. Ela conta ainda que passou mal na rua.',
    pages: DEBORA_E_REBECA_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP12.docx_464eac3b.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'Confira agora o antepenúltimo capítulo de DÉBORA & Rebeca e o encaminhar dos desfechos da história e seus personagens.',
    pages: DEBORA_E_REBECA_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP13.docx_abe8d33a.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Confira agora o penúltimo capítulo de DÉBORA & Rebeca e o encaminhar dos desfechos da história e seus personagens.',
    pages: DEBORA_E_REBECA_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP14.docx_38daa1aa.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Confira agora o último capítulo de DÉBORA & Rebeca e os desfechos da história e seus personagens.',
    pages: DEBORA_E_REBECA_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP15.docx_a05894f0.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16 (Final Alternativo)',
    slug: 'capitulo-16',
    title: 'Capítulo 16 — Final Alternativo',
    summary:
      'Final alternativo: confira o desfecho alternativo de DÉBORA & Rebeca e os novos caminhos de seus personagens.',
    pages: DEBORA_E_REBECA_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/D_BORA___REBECA.CAP16.docx_1daa9a73.pdf',
  },
];

export const ALL_DEBORA_E_REBECA_EPISODES_RAW: DeboraERebecaEpisodeDef[] = DEBORA_E_REBECA_EPISODES_RAW;

export const DEBORA_E_REBECA_EPISODES: ChapterEpisode[] = ALL_DEBORA_E_REBECA_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
