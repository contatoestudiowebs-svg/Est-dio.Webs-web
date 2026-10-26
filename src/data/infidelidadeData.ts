import { INFIDELIDADE_EPISODE_01_PAGES } from './infidelidadeEpisodes/episode01';
import { INFIDELIDADE_EPISODE_02_PAGES } from './infidelidadeEpisodes/episode02';
import { INFIDELIDADE_EPISODE_03_PAGES } from './infidelidadeEpisodes/episode03';
import { INFIDELIDADE_EPISODE_04_PAGES } from './infidelidadeEpisodes/episode04';
import { INFIDELIDADE_EPISODE_05_PAGES } from './infidelidadeEpisodes/episode05';
import { INFIDELIDADE_EPISODE_06_PAGES } from './infidelidadeEpisodes/episode06';
import { INFIDELIDADE_EPISODE_07_PAGES } from './infidelidadeEpisodes/episode07';
import { INFIDELIDADE_EPISODE_08_PAGES } from './infidelidadeEpisodes/episode08';
import { INFIDELIDADE_EPISODE_09_PAGES } from './infidelidadeEpisodes/episode09';
import { INFIDELIDADE_EPISODE_10_PAGES } from './infidelidadeEpisodes/episode10';
import { INFIDELIDADE_EPISODE_11_PAGES } from './infidelidadeEpisodes/episode11';
import { INFIDELIDADE_EPISODE_12_PAGES } from './infidelidadeEpisodes/episode12';
import { INFIDELIDADE_EPISODE_13_PAGES } from './infidelidadeEpisodes/episode13';
import { INFIDELIDADE_EPISODE_14_PAGES } from './infidelidadeEpisodes/episode14';
import { INFIDELIDADE_EPISODE_15_PAGES } from './infidelidadeEpisodes/episode15';
import { ChapterEpisode } from '../types';

export interface InfidelidadeEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const INFIDELIDADE_EPISODES_RAW: InfidelidadeEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — As Primeiras Fissuras',
    summary:
      'Raquel tenta disfarçar o desgaste no casamento com Paulo, mas ele percebe o distanciamento. Elza desabafa com os pais sobre a vida que leva. Raquel conhece Gutiérrez em uma entrevista que mudará seu destino.',
    pages: INFIDELIDADE_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_1.pdf',
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — Segundas Intenções',
    summary:
      'A entrevista entre Raquel e Gutiérrez revela tensão e segundas intenções. Paulo enfrenta nova frustração ao procurar emprego. Sérgio descobre que algo grave acontece com o pai, Marcello. Gutiérrez insiste em manter Raquel por perto.',
    pages: INFIDELIDADE_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_2_d8f64d47.pdf',
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — Segredos e Rupturas',
    summary:
      'Marcello recebe um diagnóstico preocupante. Tamara desconfia de Tadeu ao ver mensagens da ex no celular dele. Elza é expulsa de casa por Valter e pede abrigo a Raquel, gerando conflito no casamento. Catarina confronta Marcello sobre seus segredos.',
    pages: INFIDELIDADE_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_3_0154e3a7.pdf',
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — Sob o Mesmo Teto',
    summary:
      'Elza passa a viver na casa da irmã e ouve as discussões entre Paulo e Raquel. Catarina tenta uma última aproximação com Marcello. Margot retorna ao Brasil e observa tudo de perto. Gutiérrez pressiona Raquel a viajar com ele para Campinas.',
    pages: INFIDELIDADE_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_4_3c808cd6.pdf',
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — O Ponto Sem Retorno',
    summary:
      'Elza começa a se insinuar para Paulo. Sérgio descobre a gravidade da doença de Marcello. Raquel viaja com Gutiérrez e a proximidade entre os dois aumenta. À noite, Paulo e Raquel vivem experiências que selam novas traições.',
    pages: INFIDELIDADE_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_5_edec8943.pdf',
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06',
    summary:
      'O ressentimento de Paulo aumenta. Sérgio esconde da mãe a doença do pai. Margot começa a investigar Raquel. Elza visita Adelina e tenta resgatar laços. Tamara surpreende Tadeu com Yolanda. Paulo e Raquel enfrentam mais um embate doloroso.',
    pages: INFIDELIDADE_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_6_d6c8c2f3.pdf',
  },
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07',
    summary:
      'Elza espalha para as amigas que dormiu com Paulo. Raquel se vê dividida entre Gutiérrez e o casamento. Sérgio encontra Marcello desacordado. Catarina recebe uma carta emocionante do marido. Gutiérrez tenta comprar Raquel com dinheiro.',
    pages: INFIDELIDADE_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_7_3907f4fd.pdf',
  },
  {
    number: 8,
    label: 'Episódio 08',
    slug: 'episodio-08',
    title: 'Episódio 08',
    summary:
      'Elza e Raquel têm um confronto direto. Catarina descobre a doença de Marcello. Paulo, sozinho em casa, é surpreendido por Elza. Raquel, pressionada por Gutiérrez, acaba aceitando sua proposta.',
    pages: INFIDELIDADE_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_8_7bc7f03e.pdf',
  },
  {
    number: 9,
    label: 'Episódio 09',
    slug: 'episodio-09',
    title: 'Episódio 09',
    summary:
      'Raquel expulsa Elza de casa. Valter vê a filha dormindo na rua e se desespera. Adelina tenta resgatar Elza. Margot e Gutiérrez trocam farpas sobre poder. Raquel cede e se entrega a Gutiérrez.',
    pages: INFIDELIDADE_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_9_d820ba02.pdf',
  },
  {
    number: 10,
    label: 'Episódio 10',
    slug: 'episodio-10',
    title: 'Episódio 10',
    summary:
      'Paulo desconfia de Raquel e a confronta. Marcello busca reconciliação com o filho. Zel acompanha Nádia em um momento delicado. Margot se aproxima de Raquel. Paulo flagra a esposa chegando ao hospital com Gutiérrez e explode em raiva.',
    pages: INFIDELIDADE_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_10_7284f14c.pdf',
  },
  {
    number: 11,
    label: 'Episódio 11',
    slug: 'episodio-11',
    title: 'Episódio 11',
    summary:
      'O luto pela morte de Marcello abala a família. Paulo e Raquel brigam novamente. Paulo acaba se aproximando de Elza em um momento de fraqueza. Nádia anuncia sua gravidez, trazendo esperança. Raquel e Gutiérrez vivem uma noite ardente sob os olhos de Margot.',
    pages: INFIDELIDADE_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_11_b21988df.pdf',
  },
  {
    number: 12,
    label: 'Episódio 12',
    slug: 'episodio-12',
    title: 'Episódio 12',
    summary:
      'Paulo deixa a casa após mais uma discussão com Raquel. Tamara e Tadeu tentam reconstruir a relação. Margot avança em seu plano contra Gutiérrez e o pressiona. Elza busca o perdão da família, mas é rejeitada. Sérgio flagra Raquel e Gutiérrez juntos.',
    pages: INFIDELIDADE_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_12.pdf',
  },
  {
    number: 13,
    label: 'Episódio 13',
    slug: 'episodio-13',
    title: 'Episódio 13',
    summary:
      'Paulo confessa a Raquel que se deitou com Elza. Ele volta para a casa da mãe. Raquel se vê em ruínas. Yolanda revela a Tamara a verdade sobre seus encontros com Tadeu. Adelina expulsa Elza ao descobrir a traição contra a irmã.',
    pages: INFIDELIDADE_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_13_ee3dcfe1.pdf',
  },
  {
    number: 14,
    label: 'Episódio 14',
    slug: 'episodio-14',
    title: 'Episódio 14',
    summary:
      'Elza, rejeitada, é sequestrada por três homens após recusar um programa. As amigas avisam a família, mas é tarde demais. Na delegacia, Adelina exige respeito. Margot prepara o golpe final contra Gutiérrez. Elza é encontrada morta. O futuro de Gutiérrez será decidido.',
    pages: INFIDELIDADE_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_14_ffe7c846.pdf',
  },
  {
    number: 15,
    label: 'Episódio 15',
    slug: 'episodio-15',
    title: 'Episódio 15 — Grande Final',
    summary:
      'Adelina reconhece o corpo da filha no IML e desaba. Margot apresenta provas e Gutiérrez perde a presidência da empresa. O velório de Elza reúne todos em dor. Raquel busca um novo caminho profissional. Gutiérrez, derrotado, vaga sozinho. Paulo e Raquel se reencontram em um último gesto de perdão e despedida.',
    pages: INFIDELIDADE_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/INFIDELIDADE_-_Epis_dio_15_6bfca1bf.pdf',
  },
];

export const ALL_INFIDELIDADE_EPISODES_RAW: InfidelidadeEpisodeDef[] = [
  ...INFIDELIDADE_EPISODES_RAW,
];

export const INFIDELIDADE_EPISODES: ChapterEpisode[] = ALL_INFIDELIDADE_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
