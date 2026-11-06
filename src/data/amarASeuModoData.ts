import { AMAR_A_SEU_MODO_EPISODE_01_PAGES } from './amarASeuModoEpisodes/episode01';
import { AMAR_A_SEU_MODO_EPISODE_02_PAGES } from './amarASeuModoEpisodes/episode02';
import { AMAR_A_SEU_MODO_EPISODE_03_PAGES } from './amarASeuModoEpisodes/episode03';
import { AMAR_A_SEU_MODO_EPISODE_04_PAGES } from './amarASeuModoEpisodes/episode04';
import { AMAR_A_SEU_MODO_EPISODE_05_PAGES } from './amarASeuModoEpisodes/episode05';
import { AMAR_A_SEU_MODO_EPISODE_06_PAGES } from './amarASeuModoEpisodes/episode06';
import { AMAR_A_SEU_MODO_EPISODE_07_PAGES } from './amarASeuModoEpisodes/episode07';
import { AMAR_A_SEU_MODO_EPISODE_08_PAGES } from './amarASeuModoEpisodes/episode08';
import { AMAR_A_SEU_MODO_EPISODE_09_PAGES } from './amarASeuModoEpisodes/episode09';
import { AMAR_A_SEU_MODO_EPISODE_10_PAGES } from './amarASeuModoEpisodes/episode10';
import { AMAR_A_SEU_MODO_EPISODE_11_PAGES } from './amarASeuModoEpisodes/episode11';
import { AMAR_A_SEU_MODO_EPISODE_12_PAGES } from './amarASeuModoEpisodes/episode12';
import { AMAR_A_SEU_MODO_EPISODE_13_PAGES } from './amarASeuModoEpisodes/episode13';
import { AMAR_A_SEU_MODO_EPISODE_14_PAGES } from './amarASeuModoEpisodes/episode14';
import { AMAR_A_SEU_MODO_EPISODE_15_PAGES } from './amarASeuModoEpisodes/episode15';
import { AMAR_A_SEU_MODO_EPISODE_16_PAGES } from './amarASeuModoEpisodes/episode16';
import { AMAR_A_SEU_MODO_EPISODE_17_PAGES } from './amarASeuModoEpisodes/episode17';
import { AMAR_A_SEU_MODO_EPISODE_18_PAGES } from './amarASeuModoEpisodes/episode18';
import { AMAR_A_SEU_MODO_EPISODE_19_PAGES } from './amarASeuModoEpisodes/episode19';
import { AMAR_A_SEU_MODO_EPISODE_20_PAGES } from './amarASeuModoEpisodes/episode20';
import { AMAR_A_SEU_MODO_EPISODE_21_PAGES } from './amarASeuModoEpisodes/episode21';
import { AMAR_A_SEU_MODO_EPISODE_22_PAGES } from './amarASeuModoEpisodes/episode22';
import { AMAR_A_SEU_MODO_EPISODE_23_PAGES } from './amarASeuModoEpisodes/episode23';
import { AMAR_A_SEU_MODO_EPISODE_24_PAGES } from './amarASeuModoEpisodes/episode24';
import { AMAR_A_SEU_MODO_EPISODE_25_PAGES } from './amarASeuModoEpisodes/episode25';
import { AMAR_A_SEU_MODO_EPISODE_26_PAGES } from './amarASeuModoEpisodes/episode26';
import { AMAR_A_SEU_MODO_EPISODE_27_PAGES } from './amarASeuModoEpisodes/episode27';
import { AMAR_A_SEU_MODO_EPISODE_28_PAGES } from './amarASeuModoEpisodes/episode28';
import { AMAR_A_SEU_MODO_EPISODE_29_PAGES } from './amarASeuModoEpisodes/episode29';
import { AMAR_A_SEU_MODO_EPISODE_30_PAGES } from './amarASeuModoEpisodes/episode30';
import { AMAR_A_SEU_MODO_EPISODE_31_PAGES } from './amarASeuModoEpisodes/episode31';
import { ChapterEpisode } from '../types';

export interface AmarASeuModoEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
  note?: string;
}

export const AMAR_A_SEU_MODO_EPISODES_RAW: AmarASeuModoEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Elói e Felippo, crianças, juram sempre ser amigos. Incomodado com essa amizade Alberto bola um plano para separá-los. Alberto diz que Elói morreu e deixa Felippo no escuro de seu quarto. Elói é levado para fora da cidade. 13 anos se passam. Felippo se acidenta na pista de Speedway. Maitê organiza o buffet de seu casamento com Felippo e reclama de sua irresponsabilidade. Elói lamenta com Manoela a situação de urgência das crianças da Abraço. Elói e Felippo quase se cruzam.',
    pages: AMAR_A_SEU_MODO_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_CAP_TULO_01.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Felippo se desculpa com Maitê e por pouco não se encontra com Elói no shopping. Os dois ficam lado a lado, mas não se vêm. Elói comenta que sentiu saudade com os pais, mas não explica o que é. Cecília pressiona Paulo a contar a verdade para Elói. Rodrigo sequestra sua tia, Rosemary, e arruaça na pista com ela amordaçada dentro do porta-malas do carro. Maitê conversa sobre seu casamento com Brigitte, e confessa estar insegurança com o casamento. Brigitte lembra-a da falência das duas. Felippo e Alberto discutem feio. Elói acalma Guto e Clarinha sobre o encerramento da ONG.',
    pages: AMAR_A_SEU_MODO_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/____________________________Amar_a_Seu_Modo_CAP_TULO_02_f9217efa.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Uakstei foge do marido de uma mulher casada com quem se envolveu e é perguido, nu, por um cão raivoso. Uakstei é pego pelos policiais. Felippo sente-se exausto e Maitê aconselha-o a tirar o dia de folga, mas lamenta seu esquecimento para com a relação dos dois. Felippo vai até a Temporada das Flores e quase tomba com Elói. Manoela percebe sua tristeza e aflição, aconselhando-o. Elói questiona sobre o rapaz, desconhecendo-o. Maitê recebe flores de Felippo e se alegra. Elói e Felippo ficam cara a cara pela primeira vez.',
    pages: AMAR_A_SEU_MODO_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_CAP_TULO_03__70e9dd43.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Elói e Felippo não lembram um do outro e seguem seus caminhos normalmente. Maitê passa a noite com Felippo e o adverte a respeito da festa de casamento de logo mais. Daisy liga para Elói e oferece um bico na festa de Felippo. Cecília tenta falar com Elói sobre o passado. Elói vai trabalhar como garçom no buffet da festa de Felippo e os dois voltam a se encontrar. Elói ajuda Alberto em seu escritório e quase o reconhece. Maitê tem uma crise de ansiedade na festa e é acalmada por Felippo. Elói encontra uma foto de Felippo criança e o reconhece. Rodrigo planeja acabar com o casamento de Maitê e Felippo. Luiza e Alberto confessam a tramoia do passado são flagrados por Felippo, que os questiona sobre a morte do amigo Elói.',
    pages: AMAR_A_SEU_MODO_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/AMAR_A_SEU_MODO_CAP_TULO_04_b92278d3.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Felippo descobre a verdade sobre Elói e briga feio com Alberto e Luiza. Felippo e Elói se reconhecem na festa de casamento e os dois fogem juntos, confusos. Daisy dança com Uakstei no Bar do Baco. Felippo e Elói se conhecem e descobrem o que se passou em suas vidas nos últimos anos. Elói confessa a Felippo que nunca foi amado verdadeiramente por ninguém e os dois ficam sem graça com os elogios que tecem mesmo sem querer. Elói comenta sobre a ONG em que é voluntário e brinca sobre a fortuna de Felippo, que se ofende, ocasionando numa discussão entre os dois, que se separam novamente. Elói volta para casa e questiona os pais sobre a mentira que ambos contaram a respeito da venda de sua "morte" para Alberto.',
    pages: AMAR_A_SEU_MODO_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo__CAP_TULO_05_706485ec.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Elói pede um tempo para perdoar os pais depois de saber de tudo. Maite reclama do sumiço de Felippo. Cecília lamenta seu sonho de ser cantora interrompido e sente-se exausta com as tarefas domésticas de sua casa. Felippo se encontram sem querer. Rodrigo beija Maitê e ela dá um tapa em seu rosto. Os dois discutem. Felippo briga com Alberto. Felippo vai atrás de Elói na Temporada das Flores.',
    pages: AMAR_A_SEU_MODO_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/AMAR_A_SEU_MODO_CAP_TULO_06_9c2c584c.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Rodrigo é ameaçado por Nilo quanto à Rosemary, que foi internada numa clínica de repouso após ser sequestrada. Rosemary ameaça Rodrigo ao telefone e promete se vingar. Felippo e Elói conversam sobre suas diferenças. Elói questiona o motivo de Alberto querer os afastar e os dois evitam responder. Maitê tem notícias de Felippo enquanto separa os convites de casamento. Felippo e Elói se entreolham quando Felippo hesita em lhe fazer uma pergunta. Cecília e Paulo se desculpam com Felippo e o mesmo sente-se acolhido pela família de Elói. Felippo e Elói acabam agarrados no chão da sala após escorregarem numa brincadeira. Elói questiona Felippo sobre a pergunta que ele não o fez. Os dois se entreolham e um clima rola.',
    pages: AMAR_A_SEU_MODO_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/AMAR_A_SEU_MODO__CAP_TULO_07__55e930ec.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Elói leva Felippo para conhecer a Abraço e os dois brincam com Guto e Clarinha. Rodrigo ameaça Maitê e ela expulsa o vilão de sua casa. Elói se chateia com Felippo quando ele usa a designação errada e diz que Guto, criança com Síndrome de Down, é doente. Os dois discutem a terminologia correta para pessoas com Síndrome de Down. Luiza e Alberto conversam sobre contar a Felippo da doença terminal do pai. Felippo leva Elói para andar de moto na pista de corrida e o questiona sobre sua sexualidade. Daisy sai à procura de uma colega de quarto para dividir aluguel. Uakstei aposta na loteria. Felippo leva Elói para conhecer o empresarial Manhaes e encontram Maitê e Rodrigo por lá. Rodrigo provoca Felippo e desdenha da relação oblíqua que ele tem com Elói.',
    pages: AMAR_A_SEU_MODO_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/AMAR_A_SEU_MODO_CAP_TULO_08_fcc584eb.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Elói diz para Rodrigo o que sente por ele. Felippo se despede de Elói e Maitê é acometida por uma súbita insegurança. Rodrigo se enfurece com tudo o que Elói lhe disse e jura vingança. Maitê comenta com Felippo que gostou de ter conhecido Elói e ele lhe fala, com empolgação, do amigo. Elói flagra Cecília cantando e os dois conversam sobre Felippo. Elói afirma que é pouco provável que a amizade dos dois continue, pois vivem em mundos diferentes. Felippo volta para casa e revela que passou a noite com Elói e sua família. Luiza escuta Felippo contar sobre sua experiência com Elói. Luiza entrega a Felippo o solitário que pertenceu à ela para que ele dê à Maitê. Felippo se mostra pouco empolgado com a ideia do casamento. Elói descobre que tem uma entrega a fazer no Empresarial Manhaes. Felippo se recorda da primeira vez que se encontrou com Elói quando criança enquanto prática Speedway. Rodrigo rouba o solitário da sala de Felippo e dá um jeito de colocá-lo na mochila de Elói na intenção de incriminá-lo.',
    pages: AMAR_A_SEU_MODO_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/AMAR_A_SEU_MODO_CAP_TULO_09_a6f6f419.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Alberto acusa Elói de ter roubado o solitário da sala de Felippo, com apoio de Rodrigo. Cecília reencontra Afonso depois de anos, mas foge dele. Alberto revista a mochila de Elói e o humilha, mas não encontra o anel em nenhuma parte. Felippo acha o anel no bolso de sua calça, inocentando Elói. Felippo entrega o anel à Maitê. Rodrigo não sabe como o anel que deixou na mochila de Elói foi parar no bolso de Felippo. Daisy se atrapalha no evento da Hudson e esbarra em Dário, que fica encantado pela jovem. Daisy se tranca no quarta de Núbia e brinca com seus perucas e roupas, sendo flagrada por Edgard. Daisy inventa que se chama Carela Carmela e que é atriz de teatro, deixando o irmão gêmeo de Dário intrigado. Daisy foge da festa pela janela. Felippo dá uma surra em Rodrigo, numa cena que homenageia a novela Celebridade. Elói se surpreende com a visita de Felippo em sua casa.',
    pages: AMAR_A_SEU_MODO_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/AMAR_A_SEU_MODO_CAP_TULO_10__ebef86ef.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Elói e Felippo converam do Parque Riso do Quati. Luiza flagra Francis nu no banheiro e se assusta. Daisy encontra Dário e Edgard no Buffet Solar. Luiza convida Elói para um jantar de retratação na Mansão Manhaes. Um clima rola entre Felippo e Elói e os dois são flagrados por Maitê e Brigitte de mãos dadas.',
    pages: AMAR_A_SEU_MODO_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo__Cap_tulo_11_5ea67347.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'Felippo despista Maitê. Uakstei e Samuel conversam sobre relações amorosas. Daisy se convence de que Samuel e Elói formariam um belo par e planeja armar para apresentar os dois. Elói conta de seu trabalho na ABRAÇO para Luiza. Maitê sente-se deixada de lado no jantar a ver o entrosamento entre Felippo e Elói. Luiza se oferece para ajudar a Abraço contra a vontade de Alberto. Brigitte alerta Maitê sobre Felippo e Elói e teme que o casamento entre os dois possa não acontecer. Luiza questiona Felippo sobre seus sentimentos em relação a Elói.',
    pages: AMAR_A_SEU_MODO_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/AMAR_A_SEU_MODO__CAP_TULO_12_271588a0.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'Felippo fica confuso e não responde ao questionamento de Luiza. Alberto e Elói discutem. Luiza se masturba no banho e lembra-se do incidente com Francis. Felippo leva Elói para casa e no caminho deixa subtendido em que nível está a relação entre os dois. Brigitte e Maitê têm uma conversa sobre oa sentimentos de Felippo, resgatando diálogos de infidelidade e traição. Rodrigo visita Rosemary na clínica de repouso e a ameça. Maitê vai até a casa de Elói e o pede para ficar longe de Felippo.',
    pages: AMAR_A_SEU_MODO_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo__Cap_tulo_13_d3db81ca.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Maitê e Elói discutem sobre a relação de ambos com Felippo. Elói concorda em se afastar do amigo. Cecília se encontra com Afonso e os dois relembram o passado. Alberto paga a primeira parte do acordo com Francis e o mesmo concorda em continuar seduzindo Luiza. Paulo flagra Cecília com Afonso e discute com a esposa. Felippo se declara para Elói e tem seu coração partido pelo rapaz. Um personagem da trama acaba morrendo num acidente de carro.',
    pages: AMAR_A_SEU_MODO_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/AMAR_A_SEU_MODO_CAP_TULO_14_b002a072.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Cecília e Elói enterram Paulo e choram em seu luto. Daisy encontra Dário na praia e os dois lutam por uma causa ambiental. Daisy dá em cima de Dário. Francis e Luiza se entrosam um pouco mais. Maitê lamenta a mudança de Felippo e diz não mais reconhecer o noivo para Brigitte. Cecília sente-se culpada pela morte de Paulo e é consolada por Elói. Felippo toma psicoestimulantes para se manter acordado escondido de todo mundo. Clarinha questiona Elói sobre a ONG e ele se surpreende com a aparição de Alberto na instituição. Clarinha dá um desenho para Alberto e ele se emociona. Maitê descobre que Felippo está se drogando. Samuel conhece Elói e se encanta pelo rapaz.',
    pages: AMAR_A_SEU_MODO_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo__Cap_tulo_15_a4b75438.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16',
    summary:
      'Felippo e Maitê discutem sobre os psicoestimulantes. Maitê acusa Felippo de estar apaixonado por Elói. Samuel dá em cima de Elói ao conversar com ele no Bar do Baco. Rodrigo recorda-se de seu passado e sente-se como quando Elói praticou bullying com ele. Samuel afirma que está determinado a conquistar Elói e que o fará esquecer Felippo. Elói e Felippo sofrem a distância um do outro. Tomado pelo ódio e solidão, Rodrigo põe fogo na amendoeira da Escola de Educação Infantil e jura atrapalhar a felicidade de Felippo e Elói. O dia do Casamento de Felippo e Maitê chega. Cecília descobre um segredo de Paulo. Elói decide lutar por Felippo e impedir o casamento. Rodrigo briga com Maitê e retalha seu vestido de noiva.',
    pages: AMAR_A_SEU_MODO_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo__Cap_tulo_16_7c7dcaf3.pdf',
  },
  {
    number: 17,
    label: 'Capítulo 17',
    slug: 'capitulo-17',
    title: 'Capítulo 17',
    summary:
      'Rodrigo e Maitê se enfrentam. Elói corre contra o tempo para impedir o casamento. Maitê conta a verdade a Felippo e desiste de se casar. Elói invade a festa de casamento. Maitê foge sob os olhares de todos os convidados. Elói beija Felippo e foge com ele do casamento. Cecília conversa com Afonso. Luiza discute com Alberto a sexualidade de Felippo. Maitê acaba desnorteada num terminal de ônibus e tem a conversa com um Mendigo. Felippo leva Elói para um chalé e os dois transam.',
    pages: AMAR_A_SEU_MODO_EPISODE_17_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_Cap_tulo_17_5c779846.pdf',
  },
  {
    number: 18,
    label: 'Capítulo 18',
    slug: 'capitulo-18',
    title: 'Capítulo 18',
    summary:
      'Cecília canta Vanusa. Luiza dança sozinha no quarto. Maitê se redescobre e toma uma importante decisão. Felippo e Elói conversam sobre a relação no chalé. Daisy planeja armar para Edgard. Alberto elogia Luiza e um clima se faz entre Francis. Rodrigo vigia a casa de Elói e flagra Felippo com ele. Elói apresenta Felippo como seu namorado para Cecília, despertando o ciúme de Samuel. Rodrigo surta dentro do carro.',
    pages: AMAR_A_SEU_MODO_EPISODE_18_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo__Cap_tulo_18__a96fb9f3.pdf',
  },
  {
    number: 19,
    label: 'Capítulo 19',
    slug: 'capitulo-19',
    title: 'Capítulo 19',
    summary:
      'Afonso aconselha a Samuel lutar por Elói. Carela Carmela aparece no Teatro Municipal, chamando a atenção de Edgard. Miguel Dellafranco participa do Capítulo. Rodrigo visita Maitê e debocha por ela estar pobre. Maitê dá uma surra em Rodrigo, que jura vingança. Daisy deixa Edgard confuso e ele a humilha. Felippo conversa com Luiza e lhe conta seus medos sobre a relação Elói. Alberto escuta e sente falta do filho. Elói faz o mesmo com Cecília. Rodrigo contrata garotos de programa para fingir serem Felippo e Elói. Maitê passa a morar com Daisy e sobe a ladeira. Maitê acaba trombando em Uakstei. Os dois discutem. Samuel dá  cima de Elói no Temporada das Flores e Felippo flagra os dois.',
    pages: AMAR_A_SEU_MODO_EPISODE_19_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_Cap_tulo_19_9550dc78.pdf',
  },
  {
    number: 20,
    label: 'Capítulo 20',
    slug: 'capitulo-20',
    title: 'Capítulo 20',
    summary:
      'Felippo e Samuel disputam o amor de Elói. Daisy apresenta o apartamento para Maitê, que lamenta ter ficado pobre. Elói é vítima de racismo num almoço com Felippo. Maitê encontra um rato no apartamento de Daisy e se despera. Uakstei vai ajudá-la e também se desespera. Alberto mente para Luiza. Daisy convida Dário para o forró. Felippo liga para Miguel Dellafranco e pede ajuda.',
    pages: AMAR_A_SEU_MODO_EPISODE_20_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo__Cap_tulo_20_8c12b0a4.pdf',
  },
  {
    number: 21,
    label: 'Capítulo 21',
    slug: 'capitulo-21',
    title: 'Capítulo 21',
    summary:
      'Noite de Forró no Bar do Baco. Miguel e Juliano parecem por lá. Felippo e Samuel saem no soco por causa de Elói depois dele se declarar e beijar o mocinho. Daisy dá em cima de Dário. Maitê e Felippo se encontram pela primeira vez depois do casamento. Rodrigo se revolta faz um barraco no bar, ferindo Felippo com um caco de vidro. Elói dá uma surra em Rodrigo e o expulsa do bar. Luiza e Francis transam no jardim da mansão. Cecília canta pela primeira vez num palco. Felippo e Elói transam.',
    pages: AMAR_A_SEU_MODO_EPISODE_21_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo__Cap_tulo_21_c438c7e1.pdf',
  },
  {
    number: 22,
    label: 'Capítulo 22',
    slug: 'capitulo-22',
    title: 'Capítulo 22',
    summary:
      'Alberto oferece um passeio às crianças da ABRAÇO. Maitê pede emprego de faxineira para Felippo após ter um choque de realidade. Luiza foge de Francis. Alberto se emociona com as crianças no parque e Elói sente. Todas as crianças se reunem para brincar com Alberto. Elói tem uma crise de baixo autoestima e chora no banheiro. Rodrigo e Samuel discutem e depois transam. Maitê começa a trabalhar no Empresarial Manhes. Rodrigo humilha Maitê.',
    pages: AMAR_A_SEU_MODO_EPISODE_22_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo__Cap_tulo_22_a88e9bf2.pdf',
  },
  {
    number: 23,
    label: 'Capítulo 23',
    slug: 'capitulo-23',
    title: 'Capítulo 23',
    summary:
      'Rodrigo humilha Maitê. Daisy e Savanna saem no tapa no meio do shopping. Rodrigo arma para Elói e dá um jeito de interditar a Floricultura Temporada Das Flores. Maitê tem um primeiro dia de trabalho difícil e chora, sendo aconselhada por Daisy. Felippo e Elói se reconciliam e Felippo faz uma surpresa para o amado. Cecília recebe uma proposta de uma Gravadora. Felippo pede Elói em casamento. Samuel vai até a casa de Rodrigo e dá uma surra de toalha e de palmadas no vilão.',
    pages: AMAR_A_SEU_MODO_EPISODE_23_PAGES,
    pdfUrl: '/assets/aistudio/AMAR_A_SEU_MODO__CAP_TULO_23_b8ad5c61.pdf',
  },
  {
    number: 24,
    label: 'Capítulo 24',
    slug: 'capitulo-24',
    title: 'Capítulo 24',
    summary:
      'Guto se sente sozinho e foge da ABRAÇO. Elói confessa a Daisy que não aceitou o pedido de Felippo. Felippo visita apartamentos e faz planos de construir uma família com Elói. Núbia aceita criar uma linha popular da Hudson e fica acordado a participação de Daisy e Carela Carmela na mesma campanha. Samuel e Elói conversam. Rodrigo flagra Samuel se insinuando para Elói. Eduarda convida Maitê para jantar. Durand dá em cima de Felippo. Rodrigo atropela Samuel. Elói descobre que Guto sumiu. Rodrigo ameaça Samuel e espalha uma Fake News de Elói na internet. Casagrande assedia Cecília em sua sala na gravadora. Elói sofre as consequências da fake news espalhada por Rodrigo.',
    pages: AMAR_A_SEU_MODO_EPISODE_24_PAGES,
    pdfUrl: '/assets/aistudio/AMAR_A_SEU_MODO__CAP_TULO_24_c7751da0.pdf',
  },
  {
    number: 25,
    label: 'Capítulo 25',
    slug: 'capitulo-25',
    title: 'Capítulo 25',
    summary:
      'Elói sofre a repressão do povo, que propagam a fake news inventada por Rodrigo. Cecília foge de Casagrande, mas sente-se enojada com tudo que ouviu dele. A polícia leva Elói para prestar esclarecimentos e ele é agredido no caminho para a viatura. Clarinha chora ao vê-lo partir. Maitê desconfia da armação de Rodrigo. Elói tem sua prisão temporária decretada. Guto se perde na rua. Felippo teme o fechamento da ONG ABRAÇO e a realocação das crianças para outras instituições. Elói sofre na prisão.',
    pages: AMAR_A_SEU_MODO_EPISODE_25_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_-_Cap_tulo_25_74f518d5.pdf',
  },
  {
    number: 26,
    label: 'Capítulo 26',
    slug: 'capitulo-26',
    title: 'Capítulo 26',
    summary:
      'Rodrigo e Durand conversam a armam um plano para separar Felippo e Elói. Maitê nota que seu vestido rasgou e Daisy o conserta, deixando Maitê surpresa com as habilidades de costureira de Daisy. Cecília se desespera com Elói preso e é acalmada por Afonso. Rodrigo encontra Guto num passeio no parque e resolve o levar para sua casa. Elói se entristece sozinho na prisão. Maitê e Eduarda conversam e Eduarda beija Maitê. Rodrigo cuida de Guto e decide deixá-lo escondido para que Elói continue sofrendo. Durand embebeda Felippo e passa a seduzí-lo. Alberto recebe um prazo de morte e pensa no pode fazer com o seu resto de vida. Samuel vai tirar satisfações com Rodrigo e flagra Guto escondido. Samuel ameaça Rodrigo e o mesmo o sequestra, mantendo-o em cárcere. Rosemary foge da casa de repouso com a ajuda de Nilo. Maitê descobre as armações de Rodrigo.',
    pages: AMAR_A_SEU_MODO_EPISODE_26_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_-_Cap_tulo_26_c0e450b6.pdf',
  },
  {
    number: 27,
    label: 'Capítulo 27',
    slug: 'capitulo-27',
    title: 'Capítulo 27',
    summary:
      'Elói recebe fotos de Felippo e Durand juntos. Daisy beija Edgard pensando que é Dário. Samuel afoga Rodrigo na banheira. Rodrigo e Samuel fazem amor pela primeira e última vez. Guto aparece na porta da ABRAÇO. Daisy e Savanna armam barraco na piscina. Elói é solto da prisão e sua inocência é comprovada. Alberto e Maitê desmascaram Rodrigo na frente de todos. Felippo e Elói discutem feio e os dois terminam. Rodrigo vai preso.',
    pages: AMAR_A_SEU_MODO_EPISODE_27_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_-_Cap_tulo_27_3b04c4b9.pdf',
  },
  {
    number: 28,
    label: 'Capítulo 28',
    slug: 'capitulo-28',
    title: 'Capítulo 28',
    summary:
      'Luiza descobre a verdade sobre Francis e decide se separar de Alberto. Elói vai até a delegacia e conversa com Rodrigo. Felippo desasbafa com Maitê. Rodrigo sai da cadeia. Daisy fica encurralada ao se passar por Carela Carmela. Rodrigo é sequestrado por Rosemary. Elói descobre que seu pai traía Cecília com outra mulher. Daisy é desmascarada por Savanna no Theatro Municipal. Ocorre o monólogo de Elói. Felippo vai tirar satisfações com Alberto e o pai lhe conta que está morrendo. Felippo socorre Alberto numa crise e a caminho do hospital sofrem um acidente de carro.',
    pages: AMAR_A_SEU_MODO_EPISODE_28_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_-_Cap_tulo_28_2517ea23.pdf',
  },
  {
    number: 29,
    label: 'Capítulo 29',
    slug: 'capitulo-29',
    title: 'Capítulo 29 (Antepenúltimo Capítulo)',
    summary:
      'Confira agora o antepenúltimo capítulo de Amar a Seu Modo e o encaminhar dos desfechos da história e seus personagens.',
    pages: AMAR_A_SEU_MODO_EPISODE_29_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_-_Cap_tulo_29_1aa04692.pdf',
  },
  {
    number: 30,
    label: 'Capítulo 30',
    slug: 'capitulo-30',
    title: 'Capítulo 30 (Penúltimo Capítulo)',
    summary:
      'Confira agora o penúltimo capítulo de Amar a Seu Modo e o encaminhar dos desfechos da história e seus personagens.',
    pages: AMAR_A_SEU_MODO_EPISODE_30_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_-_Cap_tulo_30_2d65e2ba.pdf',
  },
  {
    number: 31,
    label: 'Capítulo 31',
    slug: 'capitulo-31',
    title: 'Capítulo 31 (Último Capítulo)',
    summary:
      'Confira agora o último capítulo de Amar a Seu Modo e os desfechos da história e seus personagens.',
    pages: AMAR_A_SEU_MODO_EPISODE_31_PAGES,
    pdfUrl: '/assets/aistudio/Amar_a_Seu_Modo_-_CAP_TULO_31_4a2fe0bb.pdf',
  },
];

export const AMAR_A_SEU_MODO_EPISODES: ChapterEpisode[] = AMAR_A_SEU_MODO_EPISODES_RAW.map((ep) => ({
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
