import { EU_SOU_PIAF_EPISODE_01_PAGES } from './euSouPiafEpisodes/episode01';
import { EU_SOU_PIAF_EPISODE_02_PAGES } from './euSouPiafEpisodes/episode02';
import { EU_SOU_PIAF_EPISODE_03_PAGES } from './euSouPiafEpisodes/episode03';
import { EU_SOU_PIAF_EPISODE_04_PAGES } from './euSouPiafEpisodes/episode04';
import { EU_SOU_PIAF_EPISODE_05_PAGES } from './euSouPiafEpisodes/episode05';
import { EU_SOU_PIAF_EPISODE_06_PAGES } from './euSouPiafEpisodes/episode06';
import { EU_SOU_PIAF_EPISODE_07_PAGES } from './euSouPiafEpisodes/episode07';
import { EU_SOU_PIAF_EPISODE_08_PAGES } from './euSouPiafEpisodes/episode08';
import { EU_SOU_PIAF_EPISODE_09_PAGES } from './euSouPiafEpisodes/episode09';
import { EU_SOU_PIAF_EPISODE_10_PAGES } from './euSouPiafEpisodes/episode10';
import { EU_SOU_PIAF_EPISODE_11_PAGES } from './euSouPiafEpisodes/episode11';
import { EU_SOU_PIAF_EPISODE_12_PAGES } from './euSouPiafEpisodes/episode12';
import { EU_SOU_PIAF_EPISODE_13_PAGES } from './euSouPiafEpisodes/episode13';
import { EU_SOU_PIAF_EPISODE_14_PAGES } from './euSouPiafEpisodes/episode14';
import { EU_SOU_PIAF_EPISODE_15_PAGES } from './euSouPiafEpisodes/episode15';
import { EU_SOU_PIAF_EPISODE_16_PAGES } from './euSouPiafEpisodes/episode16';
import { ChapterEpisode } from '../types';

export interface EuSouPiafEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const EU_SOU_PIAF_EPISODES_RAW: EuSouPiafEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'A história começa com um flashback de Marcelo criança brincando no chão da sala, enquanto sua mãe cuida dos afazeres da casa ouvindo em uma vitrola, as músicas de Edith de Piaf. Marcelo chega ao trabalho no restaurante de Dona Heloísa, amiga dos pais dele, ela reclama com ele do atraso e o coloca para lavar pratos. Marcelo e Soraya se encontram, ele está ouvindo Piaff, ele conta que vai fazer sua primeira apresentação a noite, Soraya comemora e incentiva o amigo. Dona Heloísa reclama de Marcelo com Dora, mãe dele. Marcelo se arruma para sua primeira apresentação.',
    pages: EU_SOU_PIAF_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo01.docx.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'O dono do bar avisa a Marcelo que só tem quatro pessoas no bar e que não tem cachê. Soraya encoraja Marcelo a se apresentar mesmo assim. Norberto briga com Dora por fazer as vontades de Marcelo. Marcelo se apresenta mal e é vaiado por três pessoas que estão assistindo. Ele chora no fundo do bar e Soraya o consola e o encoraja. Norberto dá uma surra em Marcelo.',
    pages: EU_SOU_PIAF_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo02.docx_bcc9c9bd.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Marcelo chega para trabalhar e Dona Heloísa implica com ele e o manda voltar para casa. Chateado, Marcelo vai para a casa de Soraya. Soraya conta que conseguiu um bar para Marcelo se apresentar, ele tenta desistir, mas Soraya não deixa. Dona Heloísa encontra Norberto e conta que Marcelo não gosta do trabalho. No dia seguinte, Dona Heloísa demite Marcelo.',
    pages: EU_SOU_PIAF_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo03.docx_a8d70828.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Soraya ajuda Marcelo a conseguir emprego como lavador de pratos em outro restaurante. Marcelo vai para casa estudar e conversa com a mãe contando que conseguiu um trabalho. Na apresentação no bar, Marcelo acaba conhecendo Renato, um homem calmo e atencioso, que logo demonstra interesse por ele. Dora começa a desconfiar das saídas noturnas do filho e pressiona Marcelo, que prefere esconder seus shows.',
    pages: EU_SOU_PIAF_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo04.docx_aeb52837.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Marcelo participa de uma noite de microfone aberto no bar. Nervoso no início, ele conquista o público com sua performance de Piaf. As pessoas se empolgam com a apresentação de Marcelo por ser uma apresentação linda. Soraya fica animada com a repercussão e comemora com ele. Dora percebe o filho saindo de casa mais arrumado do que o normal e começa a desconfiar, mas prefere não insistir. Norberto cobra que Marcelo arrume “trabalho de verdade” e critica suas escolhas.',
    pages: EU_SOU_PIAF_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo05.docx_683a269d.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Marcelo passa mais tempo ensaiando e se dedica a melhorar sua performance. Soraya se torna sua maior incentivadora, sempre vibrando com os avanços do amigo. Renato aparece novamente no bar, e os dois conversam, se aproximando ainda mais. Marcelo sente o peso de conciliar trabalho, estudos e apresentações, mas decide não desistir. Em casa, Dora percebe a distância do filho e se preocupa, enquanto Norberto segue ríspido com ele.',
    pages: EU_SOU_PIAF_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo06.docx_80151ad1.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Marcelo se apresenta em um bar mais movimentado. Entre o público, uma mulher elegante e misteriosa observa atentamente sua performance. Ao final, Marcelo vai até ela e ela diz: “Você tem coragem”, deixando Marcelo intrigado. Soraya acha que pode ser alguém importante do meio artístico. Dora nota que o filho anda chegando tarde em casa e passa a vigiar mais seus passos.',
    pages: EU_SOU_PIAF_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo07.docx_ca09539c.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Dora conversa com Marcelo tentando arrancar explicações, mas ele desconversa. Renato e Marcelo vivem momentos mais íntimos e Renato pede Marcelo em namoro. Soraya reforça a Marcelo que ele deve se assumir como artista sem medo. Dona Heloísa vai ao bar e vê Marcelo se apresentando no bar e fica chocada.',
    pages: EU_SOU_PIAF_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo08.docx_cbacee9f.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Soraya descobre sobre um concurso de talentos que acontecerá no teatro da cidade e anima Marcelo para se inscrever. Ele fica inseguro e pensa em desistir, mas Renato insiste que é a chance da vida dele. Marcelo começa a ensaiar intensamente, com o apoio dos dois. Enquanto isso, Dora pressente que algo está prestes a acontecer e se sente inquieta.',
    pages: EU_SOU_PIAF_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo09.docx_8b9c5f8c.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Dona Heloísa que viu Marcelo no bar decide contar a Dora, que fica abalada. Dora comenta a Norberto, e ele fica furioso. Eles decidem confirmar com os próprios olhos. Marcelo, sem saber de nada, segue ensaiando para o concurso. Soraya o lembra da importância de não desistir.',
    pages: EU_SOU_PIAF_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo010.docx_967378bc.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Dora e Norberto vão ao bar numa quinta-feira à noite e se chocam ao ver Marcelo caracterizado como Piaf. Marcelo, ao perceber a presença dos pais, se desespera, mas continua até o fim da música. O silêncio pesado entre eles anuncia que algo grave está para acontecer.',
    pages: EU_SOU_PIAF_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo011.docx_31aa9827.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'De volta para casa, Norberto explode em fúria e expulsa Marcelo, acusando-o de envergonhar a família. Dora, chorando, não consegue defendê-lo. Marcelo sai de casa com poucas roupas e procura Renato, que o acolhe. Soraya fica revoltada com a atitude dos pais e promete não abandonar o amigo.',
    pages: EU_SOU_PIAF_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo012.docx_77825959.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'Marcelo encontra em Renato o apoio e o carinho que nunca teve em casa. Soraia passa a ser ainda mais presente, ajudando nos ensaios. Apesar da dor de ter sido rejeitado pela família, Marcelo decide não desistir do sonho. Entre lágrimas, ele confessa a Soraya que sente falta da mãe. Soraya inscreve Marcelo sem que ele saiba.',
    pages: EU_SOU_PIAF_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo013.docx_0e05472d.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Marcelo se dedica inteiramente à preparação para o concurso. Renato organiza momentos de carinho para ajudá-lo a relaxar. Dora, sofre pela distância, mas não procura o filho, ela conversa com Heloísa. Norberto continua irredutível e diz que não vai aceitar Marcelo.',
    pages: EU_SOU_PIAF_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo014.docx_bf62630c.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Chega o dia do concurso no teatro. Nos bastidores, uma mulher influente tenta impedir Marcelo de se apresentar, alegando que ele “não se encaixa no espetáculo”. Soraya o defende com firmeza, e nesse momento surge novamente a mulher misteriosa, que garante que Marcelo terá sua vez. Marcelo, nervoso, aguarda o chamado para subir ao palco.',
    pages: EU_SOU_PIAF_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo015.docx_8d878f35.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16',
    summary:
      'Marcelo entra no palco sob uma única luz. Parte da plateia ri e o ridiculariza, mas ele respira fundo e começa a dublar Non, je ne regrette rien. Aos poucos, o teatro silencia, e sua performance emociona o público. Ao final, ele é aplaudido de pé. Nos bastidores, o dono do teatro se aproxima e o convida para iniciar uma turnê pelo Brasil. Marcelo, emocionado, entende que aquele é apenas o começo de sua nova vida.',
    pages: EU_SOU_PIAF_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/Eu_Sou_Piaf.Cap_tulo016.docx_80f24e20.pdf',
  },
];

export const EU_SOU_PIAF_EPISODES: ChapterEpisode[] = EU_SOU_PIAF_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
