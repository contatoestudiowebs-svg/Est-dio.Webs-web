import { DESTINO_AO_CORACAO_EPISODE_01_PAGES } from './destinoAoCoracaoEpisodes/episode01';
import { DESTINO_AO_CORACAO_EPISODE_02_PAGES } from './destinoAoCoracaoEpisodes/episode02';
import { DESTINO_AO_CORACAO_EPISODE_03_PAGES } from './destinoAoCoracaoEpisodes/episode03';
import { DESTINO_AO_CORACAO_EPISODE_04_PAGES } from './destinoAoCoracaoEpisodes/episode04';
import { DESTINO_AO_CORACAO_EPISODE_05_PAGES } from './destinoAoCoracaoEpisodes/episode05';
import { DESTINO_AO_CORACAO_EPISODE_06_PAGES } from './destinoAoCoracaoEpisodes/episode06';
import { DESTINO_AO_CORACAO_EPISODE_07_PAGES } from './destinoAoCoracaoEpisodes/episode07';
import { DESTINO_AO_CORACAO_EPISODE_08_PAGES } from './destinoAoCoracaoEpisodes/episode08';
import { DESTINO_AO_CORACAO_EPISODE_09_PAGES } from './destinoAoCoracaoEpisodes/episode09';
import { DESTINO_AO_CORACAO_EPISODE_10_PAGES } from './destinoAoCoracaoEpisodes/episode10';
import { DESTINO_AO_CORACAO_EPISODE_11_PAGES } from './destinoAoCoracaoEpisodes/episode11';
import { DESTINO_AO_CORACAO_EPISODE_12_PAGES } from './destinoAoCoracaoEpisodes/episode12';
import { ChapterEpisode } from '../types';

export interface DestinoAoCoracaoEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const DESTINO_AO_CORACAO_EPISODES_RAW: DestinoAoCoracaoEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Thales chega a Graçaville e logo já se mete num problemão: seu carro atola num lamaçal. Mariane recebe uma ligação de Thales e conta a todos que o amigo está de volta, despertando sentimentos adormecidos por Joca, que chama o ex-amigo de traidor. Thales logo se vê sendo perseguido por uma boiada descontrolada. Joca corre em socorro de Thales mesmo dizendo que não faria isso. Joca salva Thales e os dois chegam na cidade juntos no mesmo cavalo. Os amigos se empolgam com a volta de Thales e ao ser questionado sobre seus motivos, Thales revela que só voltou para vender a fazenda de sua avó. Joca ofende Thales. Dudu aconselha Joca a lutar pelo amor de Thales. Thales convesa com Mariane sobre a paixão que sente por Joca e ela lhe confessa sentir solidão. Mariane e Jones se encontram pela primeira vez na festa comemorativa da cidade de Graçaville. Gisele tenta agarrar Dudu, que se esquiva. Cida procura por Dudu na festa, desconfiada de sua infidelidade. Cida arma um barraco quando vê Gisele beijando Dudu e uma confusão generalizada na festa se acarreta, com direito a torta na cara, socos e puxões de cabelo.',
    pages: DESTINO_AO_CORACAO_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/CAP01-DESTINO_AO_CORA__O_6050377f.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Thales cuida dos ferimentos de Joca e os dois acabam discutindo. Joca procura Dudu e propõe sabotar a fazenda para que Thales não consiga vendê-la. Thales faz uma visita no salão de Cida. Mariane vai ate o Café sem saber ser de Jones e se assusta ao ver parte de um corpo na dispensa. Thales apresenta a fazenda aos compradores, mas ela acaba dando problemas. Joca solta os bichos dos cerco que invadem a casa, expulsando os compradores. Thales é perseguido por um ganso e cai no chiqueiro. Mariane invade o Café de Jones depois de fechado para investigar o que viu. Mariane e flagrada por Jones. Thales flagra Cida com uma barriga falsa e conclui que sua gravidez nunca foi verdadeira.',
    pages: DESTINO_AO_CORACAO_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/CAP02-DESTINO_AO_CORA__O_42d2596d.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Thales aconselha Cida a contar a verdade, mas ela o convece a guardar segredo. Marcone e Tereza discutem no bar. Marcone humilha Tereza enquanto observa Thales beber. Thales é seguido por Marcone, que propõe que os dois fiquem no sigilo e beija o rapaz a força. Joca flagra o momento e fica chateado. Thales dá um soco em Marcone e o homem o humilha. Joca fala para Dudu sobre o acontecido e sofre por pensar que Thales tem algo com Marcone. Thales é encurralado pelos amigos a respeito de Marcone. As meninas o defende e confessam que também já sofreram assédio de Marcone. Joca sente-se mal por ter julgado Thales. Marcone vai atrás de Thales na praça e o assedia novamente. Joca agride Marcone e o chama para a briga.',
    pages: DESTINO_AO_CORACAO_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/CAP03-DESTINO_AO_CORA__O_f998b131.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Joca e Marcone saem no soco por causa de Thales. Tereza surge ao lado de Mariane, Cida e Justina. Marcone desdenha do mandato de comparecimento e da medida protetiva de Tereza e acaba preso por desacato, com a torcida de toda a cidade de Graçaville. Joca pede desculpas a Thales e os dois conversam sobre relacionamento. Joca se entristece ao saber que Thales já ama alguém, desconhecendo que o homem fala dele mesmo. Os dois sofrem um pelo outro. Mariane invade a casa de Jones, descobre algo misterioso e em sua fuga deixa para trás um lenço com a grafia de sua padaria. Jones encontra o lenço jogado em sua sala de estar e conclui que Mariane esteve ali.',
    pages: DESTINO_AO_CORACAO_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/CAP04-DESTINO_AO_CORA__O_613d4750.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Dudu se propõe em ajudar Joca a conquistar o amor de Thales e bola um plano infalível. Dudu entrevista Mariane e Cida a respeito do que elas consideram um homem perfeito. Joca encontra Thales e um clima rola entre os dois. Dudu intima Thalas a um passeio por Graçaville. Jones vai até a Padaria de Graçaville e convida Mariane para jantar em sua casa. A moça, mesmo hesitante, aceita. Joca e Dudu criam diversas situações para mostrar a Thales que Joca é o homem perfeito. Mariane chega a casa de Jones para a janta e ele não disfarça que tem um plano em mente.',
    pages: DESTINO_AO_CORACAO_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/CAP05-DESTINO_AO_CORA__O_2e86c92a.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Joca toma todas as pingas num bar e acaba revelando para Gisele que é apaixonado por Thales. Mariane cai da escada da casa de Jones após ouvir pedidos de socorro de dentro da residência. Joca vai bêbado para o quarto de Thales e revela que o ama depois cai desacordado. Mariane ataca Jones após acordar de seu desmaio, enquanto o mesmo tenta se explicar. Joca acorda na cama de Thales e se assusta ao vê-lo sair do banho. Acidentalmente Joca puxa a toalha do corpo de Thales e o vê pelado. Gisele vai atrás de Dudu para chantageá-lo dormir com ela, caso contrário revelará para a cidade que Joca é gay e de sua paixão por Thales.',
    pages: DESTINO_AO_CORACAO_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/CAP06-DESTINO_AO_CORA__O_cb7d2cb8.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Joca fica excitado ao ver Thales pelado e tem que disfarçar. Thales preocupa-se se Joca entendeu a situação de maneira equivocada. Mariane confronta Jones, que acaba lhe contando toda a verdade. Dudu e Joca bolam um plano para espantar Gisele e suas ameaças. Joca é aconselhado por Dudu a tentar mais uma vez conquistar Thales, desta vez mudando completamente seu estilo, para se parecer com os homens da cidade grande. Jones revela a Mariane que resolveu recomeçar sua vida em Graçaville após a rejeição da família em relação a sua identidade. Gisele manda uma mensagem provocativa para Cida, informando o lugar em que será corna. Joca aparece completamente mudado na porta de Thales. Dudu enrola Gisele, lhe dando um sonífero, mas terá de fugir do flagra de Cida.',
    pages: DESTINO_AO_CORACAO_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/CAP07-DESTINO_AO_CORA__O_d8c79bb7.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Dudu consegue escapar de Cida, mas é perseguido por um cão sedento e obrigado a fugir só de cueca pela cidade. Thales estranha a atitude de Joca com seu novo visual. Ao chegar em casa, Dudu é abordado por Cida, que ameaça cancelar o casamento. Encurralado, Dudu revela a verdade sobre Joca para Cida. Thales e Joca conversam sobre coisas que gostam já altos de vinho. Thales revela que não gosta do novo visual de Joca e o mesmo revela que também não. Thales dá um selinho em Joca espontaneamente e o homem reage com um beijo apaixonado e quente. Mariane convida Jones para um café da manhã no lago. Joca e Thales têm uma noite de amor.',
    pages: DESTINO_AO_CORACAO_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/CAP08-DESTINO_AO_CORA__O_fde44c43.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Thales e Joca acordam juntos na cama e são surpreendidos pela situação. Eles decidem conversar mais tarde, e Thales vai ao banheiro enquanto Joca se veste e sai do quarto. Mariane e Jones conversam no lago e o homem mente que não tem ninguém em seu coração. Cida confronta Gisele sobre seu comportamento e a acusa de ser falsa.Cida ameaça Gisele com uma fonte tirada no Motelzinho. Joca e Dudu discutem se o encontro foi real ou não e se houve algum sentimento envolvido. Joca também menciona que não enviou nenhuma mensagem depois. Thales, Mariane e Cida discutem as preocupações de Thales sobre Joca. Thales e Joca têm a oportunidade de se declararem. Gisele descobre que Cida não está grávida de verdade. Joca escuta uma conversa de Thales e o interpreta mal, pensando que ele não o ama. Thales se convence de que Joca talvez possa o amar. Jones vem ver Mariane na chuva e eles se beijam apaixonadamente.',
    pages: DESTINO_AO_CORACAO_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/CAP09-DESTINO_AO_CORA__O_92db0d5c.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Confira agora o antepenúltimo capítulo de Destino ao Coração e o encaminhar dos desfechos da história e seus personagens.',
    pages: DESTINO_AO_CORACAO_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/CAP10-DESTINO_AO_CORA__O_874ff129.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Confira agora o penúltimo capítulo de Destino ao Coração e o encaminhar dos desfechos da história e seus personagens.',
    pages: DESTINO_AO_CORACAO_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/CAP11-DESTINO_AO_CORA__O_8ece5d11.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'Confira agora o último capítulo de Destino ao Coração e os desfechos da história e seus personagens.',
    pages: DESTINO_AO_CORACAO_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/CAP12-DESTINO_AO_CORA__O_f028d057.pdf',
  },
];

export const ALL_DESTINO_AO_CORACAO_EPISODES_RAW: DestinoAoCoracaoEpisodeDef[] = DESTINO_AO_CORACAO_EPISODES_RAW;

export const DESTINO_AO_CORACAO_EPISODES: ChapterEpisode[] = ALL_DESTINO_AO_CORACAO_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
