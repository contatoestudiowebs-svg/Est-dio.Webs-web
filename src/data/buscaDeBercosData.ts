import { BUSCA_DE_BERCOS_EPISODE_01_PAGES } from './buscaDeBercosEpisodes/episode01';
import { BUSCA_DE_BERCOS_EPISODE_02_PAGES } from './buscaDeBercosEpisodes/episode02';
import { BUSCA_DE_BERCOS_EPISODE_03_PAGES } from './buscaDeBercosEpisodes/episode03';
import { BUSCA_DE_BERCOS_EPISODE_04_PAGES } from './buscaDeBercosEpisodes/episode04';
import { BUSCA_DE_BERCOS_EPISODE_05_PAGES } from './buscaDeBercosEpisodes/episode05';
import { BUSCA_DE_BERCOS_EPISODE_06_PAGES } from './buscaDeBercosEpisodes/episode06';
import { BUSCA_DE_BERCOS_EPISODE_07_PAGES } from './buscaDeBercosEpisodes/episode07';
import { BUSCA_DE_BERCOS_EPISODE_08_PAGES } from './buscaDeBercosEpisodes/episode08';
import { BUSCA_DE_BERCOS_EPISODE_09_PAGES } from './buscaDeBercosEpisodes/episode09';
import { BUSCA_DE_BERCOS_EPISODE_10_PAGES } from './buscaDeBercosEpisodes/episode10';
import { BUSCA_DE_BERCOS_EPISODE_11_PAGES } from './buscaDeBercosEpisodes/episode11';
import { BUSCA_DE_BERCOS_EPISODE_12_PAGES } from './buscaDeBercosEpisodes/episode12';
import { BUSCA_DE_BERCOS_EPISODE_13_PAGES } from './buscaDeBercosEpisodes/episode13';
import { BUSCA_DE_BERCOS_EPISODE_14_PAGES } from './buscaDeBercosEpisodes/episode14';
import { BUSCA_DE_BERCOS_EPISODE_15_PAGES } from './buscaDeBercosEpisodes/episode15';
import { BUSCA_DE_BERCOS_EPISODE_16_PAGES } from './buscaDeBercosEpisodes/episode16';
import { BUSCA_DE_BERCOS_EPISODE_17_PAGES } from './buscaDeBercosEpisodes/episode17';
import { BUSCA_DE_BERCOS_EPISODE_18_PAGES } from './buscaDeBercosEpisodes/episode18';
import { BUSCA_DE_BERCOS_EPISODE_19_PAGES } from './buscaDeBercosEpisodes/episode19';
import { BUSCA_DE_BERCOS_EPISODE_20_PAGES } from './buscaDeBercosEpisodes/episode20';
import { BUSCA_DE_BERCOS_EPISODE_21_PAGES } from './buscaDeBercosEpisodes/episode21';
import { BUSCA_DE_BERCOS_EPISODE_22_PAGES } from './buscaDeBercosEpisodes/episode22';
import { BUSCA_DE_BERCOS_EPISODE_23_PAGES } from './buscaDeBercosEpisodes/episode23';
import { BUSCA_DE_BERCOS_EPISODE_24_PAGES } from './buscaDeBercosEpisodes/episode24';
import { BUSCA_DE_BERCOS_EPISODE_25_PAGES } from './buscaDeBercosEpisodes/episode25';
import { BUSCA_DE_BERCOS_EPISODE_26_PAGES } from './buscaDeBercosEpisodes/episode26';
import { BUSCA_DE_BERCOS_EPISODE_27_PAGES } from './buscaDeBercosEpisodes/episode27';
import { BUSCA_DE_BERCOS_EPISODE_28_PAGES } from './buscaDeBercosEpisodes/episode28';
import { BUSCA_DE_BERCOS_EPISODE_29_PAGES } from './buscaDeBercosEpisodes/episode29';
import { BUSCA_DE_BERCOS_EPISODE_30_PAGES } from './buscaDeBercosEpisodes/episode30';
import { BUSCA_DE_BERCOS_EPISODE_31_PAGES } from './buscaDeBercosEpisodes/episode31';
import { BUSCA_DE_BERCOS_EPISODE_32_PAGES } from './buscaDeBercosEpisodes/episode32';
import { BUSCA_DE_BERCOS_EPISODE_33_PAGES } from './buscaDeBercosEpisodes/episode33';
import { BUSCA_DE_BERCOS_EPISODE_34_PAGES } from './buscaDeBercosEpisodes/episode34';
import { BUSCA_DE_BERCOS_EPISODE_35_PAGES } from './buscaDeBercosEpisodes/episode35';
import { ChapterEpisode } from '../types';

export interface BuscaDeBercosEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
  note?: string;
}

export const BUSCA_DE_BERCOS_EPISODES_RAW: BuscaDeBercosEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Na grande estreia da novela, conhecemos a vida de Asha, sua mãe Susana e seus conflitos. Bernardo trabalha sobre seus novos lançamentos com Raquel e Emanuel. Lara conversa com Melânia sobre seu sonho de ser uma modelo de passarela. Zaíra é ríspida com seus empregados. Bernardo anuncia um concurso.',
    pages: BUSCA_DE_BERCOS_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_1_ea4f625d.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Susana proíbe Asha de ir ao Rio de Janeiro e participar do concurso. Bernardo repreende Lara por fala preconceituosa. Asha desconfia de segredo entre Renata e Susana. Lídia e Romeu conversam sobre nova filial da Danan Academias. Asha decide investigar segredo de Susana.',
    pages: BUSCA_DE_BERCOS_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_2_83684cda.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Asha decide ir ao Rio de Janeiro para conhecer seu pai, Bernardo Cedunar. Renata confronta Susana. Raquel questiona Bernardo sobre o concurso. Leandra tenta convencer Gabriel a participar do concurso para ser famoso. Tomás e Lara ficam juntos. Zaíra oferece proposta suspeita aos seus modelos.',
    pages: BUSCA_DE_BERCOS_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_3_bfcfa672.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Asha finalmente chega ao Rio de Janeiro e começa a lidar com a sua nova realidade. Bernardo faz críticas sobre Lara para Melânia. Manuela ajuda Asha após ato nobre da filha adotiva de Susana. Zaira faz alguns dos seus modelos de traficantes. Tomás toma uma decisão sobre Lara.',
    pages: BUSCA_DE_BERCOS_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_4_ae3dfe1f.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Asha descobre mais sobre o passado de sua mãe biológica. Os modelos discutem sobre as drogas. Manuela conversa com Rosa sobre a identidade do pai do seu filho. Isaías seduz Leandra e a faz promessas. Gabriel recebe o apoio de Pietro. Zaíra dá uma boa notícia para Lara.',
    pages: BUSCA_DE_BERCOS_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_5_4147fe86.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Asha revela para Manuela a sua história. Isaías ilude Leandra e a leva para cama. Asha e Tomás se conhecem, se encantando um pelo outro. Gabriel se preocupa com os desejos da irmã. Bernardo está empolgado com as novidades do concurso. Asha toma uma decisão sobre Bernardo.',
    pages: BUSCA_DE_BERCOS_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_6_f175a0e9.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Asha pede ajuda a Emanuel. Any sofre uma overdose de drogas. Leandra discute com Patrícia. Uma notícia choca Drica e Beto. Manuela e Lara discutem no meio da rua. Zaíra é ameaçada após os últimos eventos envolvendo Any. Asha faz nova descoberta sobre Bernardo.',
    pages: BUSCA_DE_BERCOS_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_7_5f2da0ee.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Manuela decide ajudar Asha. Gabriel repreende Leandra. Java alerta Zaíra sobre as ameaças sofridas. Asha chega na mansão de Bernardo. Patrícia se preocupa com futuro de Leandra. Manuela aconselha Asha sobre os próximos passos com Bernardo. Zaíra manipula Beto.',
    pages: BUSCA_DE_BERCOS_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_8_b670cda9.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Bernardo conhece Asha e se simpatiza por ela sem saber de quem realmente se trata. Tomás toma uma decisão sobre Asha. Beto arma uma cilada para Drica, após ser manipulado por Zaíra. Lara e Manuela se esbarram novamente e brigam. Gisele insiste para Gabriel participar do concurso da Cedunar. Lara faz uma descoberta sobre Tomás.',
    pages: BUSCA_DE_BERCOS_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_9_9c851276.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Tomás e Asha conversam sobre o fato dela sair da academia. Zaíra e Beto transam. Leandra procura Isaías mais uma vez. Patrícia conversa com Onofre e assume seu medo de Leandra se envolver com os Bertolinis. Bernardo e Asha conversam e se dão bem. Zaíra manipula Melânia. Emanuel faz uma descoberta.',
    pages: BUSCA_DE_BERCOS_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_10_2131b529.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Emanuel confronta Asha. Drica se revolta com depoimento de Beto. Zaíra toma nova decisão sobre a Bertolini Models. Após nova fama, Leandra faz armação para Gabriel participar do concurso da Cedunar. Asha decide trabalhar durante jantar que Bernardo vai dar para os seus sócios. Tomás e Asha se reencontram na mansão de Bernardo e se declaram.',
    pages: BUSCA_DE_BERCOS_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_11_a4a2c687.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'Lara humilha Asha e é repreendida por Bernardo. Eliana faz uma visita a Rosa. Melânia fica contrariada com decisão de Bernardo. Pietro enfrenta Wender. Isaías faz nova ameaça a Leandra. Emanuel dá ultimato para Asha sobre suas reais intenções na casa de Bernardo.',
    pages: BUSCA_DE_BERCOS_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_12_bb49513d.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'Asha esclarece toda a verdade para Emanuel. Lara e Manuela continuam presas dentro do elevador. Wender provoca Gabriel. Pietro enfrenta Wender em uma corrida de motocross. Zaíra desconfia de Asha. Susana toma importante decisão. Gabriel descobre armação de Leandra.',
    pages: BUSCA_DE_BERCOS_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_13_cab84b7a.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Manuela descobre que está apaixonada por Lara, filha de Bernardo. Bernardo fica encantado por Asha, sem saber que é sua filha. Chega o dia do grande desfile. Asha é convidada por Bernardo, mas a sua presença causa revolta. Isaías ameaça Leandra. Bernardo desconfia de Asha ao vê-la do lado de Manuela. Wender destrói oficina de Pietro. Bernardo confronta Asha e suas verdadeiras intenções.',
    pages: BUSCA_DE_BERCOS_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_14_f4937150.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Emanuel tenta impedir de Bernardo se declarar para Asha. Lara procura Manuela para uma nova conversa e evitar uma aproximação. Romeu e Lídia repreendem Wender por vandalismo na oficina de Pietro. Bernardo prepara jantar para se declarar para Asha.',
    pages: BUSCA_DE_BERCOS_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_15_05a8448b.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16',
    summary:
      'Asha finalmente revela o seu segredo para Bernardo, agora o embate entre pai e filha é inevitável. Tales confronta Zaíra sobre seu envolvimento com Beto. Bernardo toma uma decisão.',
    pages: BUSCA_DE_BERCOS_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_16_cb97630e.pdf',
  },
  {
    number: 17,
    label: 'Capítulo 17',
    slug: 'capitulo-17',
    title: 'Capítulo 17',
    summary:
      'Bernardo afirma para a família que Asha pode ser a sua filha. Romeu obriga Wender a trabalhar na oficina de Pietro. Bernardo tem embate com Manuela. Lara revela sobre Asha para Tomás. Leandra toma uma decisão envolvendo Isaías que pode não ter volta.',
    pages: BUSCA_DE_BERCOS_EPISODE_17_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_17_d8a99e71.pdf',
  },
  {
    number: 18,
    label: 'Capítulo 18',
    slug: 'capitulo-18',
    title: 'Capítulo 18',
    summary:
      'Isaías cai na armadilha feita por Leandra. Gabriel provoca Wender. Bernardo e Asha finalmente fazem o exame de DNA. Renata e Susana chegam ao Rio de Janeiro. Wender continua trabalhando na oficina de Pietro. Bernardo confronta Emanuel sobre segredo de Asha. Susana reencontra Asha e toma decisão sobre Bernardo.',
    pages: BUSCA_DE_BERCOS_EPISODE_18_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_18_b7608064.pdf',
  },
  {
    number: 19,
    label: 'Capítulo 19',
    slug: 'capitulo-19',
    title: 'Capítulo 19',
    summary:
      'Susana confronta Bernardo sobre sua situação atual. Lara descobre que Manuela e Asha são amigas. Melânia e Bernardo brigam por causa da nova descoberta de Lara. Drica pede ajuda para Matt. Leandra divulga sua sextape com Isaías e pode ter cavado o fim da carreira do modelo.',
    pages: BUSCA_DE_BERCOS_EPISODE_19_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_19_e2f49c66.pdf',
  },
  {
    number: 20,
    label: 'Capítulo 20',
    slug: 'capitulo-20',
    title: 'Capítulo 20',
    summary:
      'Leandra enfrenta Patrícia. Zaíra tenta contornar escândalo envolvendo Isaías e Leandra. Susana repreende gastos de Renata. Tales descobre caso de Zaíra e Beto. Pietro consola Gabriel. Patrícia reencontra Zaíra e as duas se enfrentam. Isaías perde a cabeça e Leandra encontra uma nova vantagem.',
    pages: BUSCA_DE_BERCOS_EPISODE_20_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_20_fbc8ced9.pdf',
  },
  {
    number: 21,
    label: 'Capítulo 21',
    slug: 'capitulo-21',
    title: 'Capítulo 21',
    summary:
      'Zaíra briga com Isaías por causa de seu novo escândalo. Lara quer descobrir o que Manuela realmente esconde. Patrícia não aceita nova realidade da sua neta, Leandra. Lara engana Manuela. Bernardo descobre que Asha é a sua filha pelo exame de DNA.',
    pages: BUSCA_DE_BERCOS_EPISODE_21_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_21_3099aff7.pdf',
  },
  {
    number: 22,
    label: 'Capítulo 22',
    slug: 'capitulo-22',
    title: 'Capítulo 22',
    summary:
      'Lara confronta Manuela sobre a relação com o seu pai. Lara enfrenta Bernardo após saber sobre o seu passado. Beto sugere a Zaíra uma nova estratégia para salvar a agência. Tales se une a Drica e Matt contra Zaíra. Um acontecimento marca uma reviravolta nas relações de Asha, Bernardo e Lara.',
    pages: BUSCA_DE_BERCOS_EPISODE_22_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_22_672e7fb3.pdf',
  },
  {
    number: 23,
    label: 'Capítulo 23',
    slug: 'capitulo-23',
    title: 'Capítulo 23',
    summary:
      'Lara é acolhida pelos seus pais. Wender pensa em Pietro de uma forma diferente. Drica sai da prisão. Zaíra faz proposta ousada para Leandra. Lara e Bernardo tem conversa definitiva. Asha é surpreendida.',
    pages: BUSCA_DE_BERCOS_EPISODE_23_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_23_e58e0df4.pdf',
  },
  {
    number: 24,
    label: 'Capítulo 24',
    slug: 'capitulo-24',
    title: 'Capítulo 24',
    summary:
      'Tales orienta Drica e Matt sobre planos contra Zaíra. Renata se aproxima de Zaíra e vê uma oportunidade de subir na vida. Asha e Tomás começam a namorar. Matt descobre evidências contra Zaíra. Isaías faz descoberta de nova atitude de Leandra.',
    pages: BUSCA_DE_BERCOS_EPISODE_24_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_24_46a4a39a.pdf',
  },
  {
    number: 25,
    label: 'Capítulo 25',
    slug: 'capitulo-25',
    title: 'Capítulo 25',
    summary:
      'Asha e Manuela jantam com Bernardo e a família. Zaíra culpa Melânia pela entrada de Asha. Beto afirma a Zaíra que viu Drica livre e ao lado de Matt. Pietro convida Wender para uma viagem. Renata descobre um plano de vingança contra Zaíra.',
    pages: BUSCA_DE_BERCOS_EPISODE_25_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_25_fc28a717.pdf',
  },
  {
    number: 26,
    label: 'Capítulo 26',
    slug: 'capitulo-26',
    title: 'Capítulo 26',
    summary:
      'Tales, Drica e Matt avançam com planos contra Zaíra. Lara e Manuela se declaram uma para a outra. Asha decide se mudar para a mansão de Bernardo. Leandra revela a Patrícia que inocentou Isaías. Renata toma uma decisão com as informações que tem contra Zaíra.',
    pages: BUSCA_DE_BERCOS_EPISODE_26_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_26_cb000cb8.pdf',
  },
  {
    number: 27,
    label: 'Capítulo 27',
    slug: 'capitulo-27',
    title: 'Capítulo 27',
    summary:
      'Wender surpreende Pietro. Zaíra descobre o plano de vingança e decide agir por conta própria. Manuela se desculpa com Asha por reação inesperada. Wender insiste para Pietro ver uma moto abandonada. Zaíra confronta Tales.',
    pages: BUSCA_DE_BERCOS_EPISODE_27_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_27_2429ea8c.pdf',
  },
  {
    number: 28,
    label: 'Capítulo 28',
    slug: 'capitulo-28',
    title: 'Capítulo 28',
    summary:
      'Pietro e Wender acordam juntos. A casa de Manuela é destruída pelo incêndio e Lara faz um convite inesperado. Zaíra admite para Beto o que vai fazer com Tales, Drica e Matt. Gabriel alerta Leandra sobre os perigos de Zaíra. Beto e Zaíra ameaçam Matt e obrigam ele a participar do plano. Melânia confronta Manuela.',
    pages: BUSCA_DE_BERCOS_EPISODE_28_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_28_81fa0879.pdf',
  },
  {
    number: 29,
    label: 'Capítulo 29',
    slug: 'capitulo-29',
    title: 'Capítulo 29',
    summary:
      'Tales e Drica vão ao encontro de Matt. Um acidente fatal e Zaíra toma uma decisão sobre os seus inimigos. Matt procura abrigo nos fundos da academia e acaba conhecendo Asha. Renata aceita proposta de Zaíra. Wender fala para sua mãe como se sente em relação a Pietro.',
    pages: BUSCA_DE_BERCOS_EPISODE_29_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_29_4652d89b.pdf',
  },
  {
    number: 30,
    label: 'Capítulo 30',
    slug: 'capitulo-30',
    title: 'Capítulo 30',
    summary:
      'Beto tem uma amante misteriosa. Asha começa a dar razão para Matt. Tales é enterrado. Manuela acolhe Lara. Beto manipula Eliane para incriminar Matt. Pietro e Wender ficam presos dentro do carro. Bernardo desconfia de Asha, após interesse da filha sobre Zaíra. Pietro toma uma decisão sobre Wender.',
    pages: BUSCA_DE_BERCOS_EPISODE_30_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_30_752d6ef1.pdf',
  },
  {
    number: 31,
    label: 'Capítulo 31',
    slug: 'capitulo-31',
    title: 'Capítulo 31',
    summary:
      'Wender retorna e assume seu amor por Pietro. Asha descobre que o incêndio na casa de Manuela foi criminoso e, em um jantar, flagra Zaíra confessando o assassinato de Tales.',
    pages: BUSCA_DE_BERCOS_EPISODE_31_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_31_029f5a56.pdf',
  },
  {
    number: 32,
    label: 'Capítulo 32',
    slug: 'capitulo-32',
    title: 'Capítulo 32',
    summary:
      'Após descobrir que Zaíra é uma mulher perigosa e que atrapalhou a sua vida, Asha começa a executar um plano para destruí-la. Gabriel revela a Leandra o que Patrícia contou sobre o passado da mãe deles. Matt se arrisca ao procurar Eliane. Wender conta ao pai que está namorando com Pietro.',
    pages: BUSCA_DE_BERCOS_EPISODE_32_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_32_b4e295d3.pdf',
  },
  {
    number: 33,
    label: 'Capítulo 33',
    slug: 'capitulo-33',
    title: 'Capítulo 33',
    summary:
      'Asha revela tudo o que sabe para Bernardo sobre as armações e crimes de Zaíra. Gabriel discute com Wender sobre o relacionamento com Pietro. Beto desconfia de jantar inesperado de Bernardo. Asha coloca em prática plano para coletar provas contra Zaíra.',
    pages: BUSCA_DE_BERCOS_EPISODE_33_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_33_18136041.pdf',
  },
  {
    number: 34,
    label: 'Capítulo 34',
    slug: 'capitulo-34',
    title: 'Capítulo 34',
    summary:
      'Beto demonstra desconfiança de Asha e Bernardo. Pietro faz uma proposta surpreendente a Wender. Tomás flagra Asha com Matt e toma uma decisão. Lara conta a Bernardo que decidiu voltar para o curso de Administração e ele desconfia de Manuela. Atitude de Tomás gera graves consequências.',
    pages: BUSCA_DE_BERCOS_EPISODE_34_PAGES,
    pdfUrl: '/assets/aistudio/Busca_de_Ber_os_-_Cap_tulo_34_515fc9c6.pdf',
  },
  {
    number: 35,
    label: 'Capítulo 35',
    slug: 'capitulo-35',
    title: 'Capítulo 35 - Último Capítulo',
    summary:
      'No grande desfecho da novela, Matt é solto sob fiança com apoio de Bernardo. Eliane descobre os crimes de Zaíra. Lara e Manuela anunciam o casamento para Melânia e Bernardo. Asha e Matt descobrem a gravação na caneta espiã com a confissão de Zaíra, provando toda a verdade.',
    pages: BUSCA_DE_BERCOS_EPISODE_35_PAGES,
    pdfUrl: '/assets/aistudio/BUSCA_DE_BER_OS__Busca_de_Ber_os_-_Cap_tulo_35__1f34c7ab.pdf',
  },
];

export const BUSCA_DE_BERCOS_EPISODES: ChapterEpisode[] = BUSCA_DE_BERCOS_EPISODES_RAW.map((ep) => ({
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
