import { SOCIO_DO_AMOR_EPISODE_01_PAGES } from './socioDoAmorEpisodes/episode01';
import { SOCIO_DO_AMOR_EPISODE_02_PAGES } from './socioDoAmorEpisodes/episode02';
import { SOCIO_DO_AMOR_EPISODE_03_PAGES } from './socioDoAmorEpisodes/episode03';
import { SOCIO_DO_AMOR_EPISODE_04_PAGES } from './socioDoAmorEpisodes/episode04';
import { SOCIO_DO_AMOR_EPISODE_05_PAGES } from './socioDoAmorEpisodes/episode05';
import { SOCIO_DO_AMOR_EPISODE_06_PAGES } from './socioDoAmorEpisodes/episode06';
import { SOCIO_DO_AMOR_EPISODE_07_PAGES } from './socioDoAmorEpisodes/episode07';
import { SOCIO_DO_AMOR_EPISODE_08_PAGES } from './socioDoAmorEpisodes/episode08';
import { SOCIO_DO_AMOR_EPISODE_09_PAGES } from './socioDoAmorEpisodes/episode09';
import { SOCIO_DO_AMOR_EPISODE_10_PAGES } from './socioDoAmorEpisodes/episode10';
import { SOCIO_DO_AMOR_EPISODE_11_PAGES } from './socioDoAmorEpisodes/episode11';
import { SOCIO_DO_AMOR_EPISODE_12_PAGES } from './socioDoAmorEpisodes/episode12';
import { SOCIO_DO_AMOR_EPISODE_13_PAGES } from './socioDoAmorEpisodes/episode13';
import { SOCIO_DO_AMOR_EPISODE_14_PAGES } from './socioDoAmorEpisodes/episode14';
import { SOCIO_DO_AMOR_EPISODE_15_PAGES } from './socioDoAmorEpisodes/episode15';
import { SOCIO_DO_AMOR_EPISODE_16_PAGES } from './socioDoAmorEpisodes/episode16';
import { SOCIO_DO_AMOR_EPISODE_17_PAGES } from './socioDoAmorEpisodes/episode17';
import { SOCIO_DO_AMOR_EPISODE_18_PAGES } from './socioDoAmorEpisodes/episode18';
import { SOCIO_DO_AMOR_EPISODE_19_PAGES } from './socioDoAmorEpisodes/episode19';
import { SOCIO_DO_AMOR_EPISODE_20_PAGES } from './socioDoAmorEpisodes/episode20';
import { SOCIO_DO_AMOR_EPISODE_21_PAGES } from './socioDoAmorEpisodes/episode21';
import { SOCIO_DO_AMOR_EPISODE_22_PAGES } from './socioDoAmorEpisodes/episode22';
import { SOCIO_DO_AMOR_EPISODE_23_PAGES } from './socioDoAmorEpisodes/episode23';
import { SOCIO_DO_AMOR_EPISODE_24_PAGES } from './socioDoAmorEpisodes/episode24';
import { SOCIO_DO_AMOR_EPISODE_25_PAGES } from './socioDoAmorEpisodes/episode25';
import { ChapterEpisode } from '../types';

export interface SocioDoAmorEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
  note?: string;
}

export const SOCIO_DO_AMOR_EPISODES_RAW: SocioDoAmorEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Miguel acorda atrasado e já enfrenta uma cobrança dura de seu chefe, Ronald, que questiona seu desempenho na editora onde ele estagia. Em casa, ele conversa com a mãe, Griselda, e o irmão, Eduardo, revelando o cansaço da rotina puxada entre trabalho e faculdade. No caminho para o trabalho, Miguel reencontra Juan, um antigo envolvimento mal resolvido, e os dois têm um clima tenso e provocativo. Mais tarde, no metrô, Miguel cruza pela primeira vez com Rodrigo, um engenheiro arrogante, e os dois se encaram após um pequeno conflito na saída do vagão. Na editora DNA, Rebeka defende Miguel diante de Ronald, destacando sua importância para a empresa. Sem saber disso, Miguel acredita que será demitido, mas acaba sendo surpreendido: seu contrato será mantido e ele recebe uma missão decisiva para continuar na editora. Paralelamente, Rodrigo enfrenta uma grave crise profissional ao descobrir falhas estruturais em um de seus empreendimentos.',
    pages: SOCIO_DO_AMOR_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_01_8517fdab.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Rodrigo descobre que um dos prédios de seu condomínio foi interditado pela Defesa Civil por risco de desabamento, o que pode gerar um grande escândalo financeiro e midiático para a Garrido Filho Engenharia. Revoltado e desconfiado de sabotagem, ele decide assumir o controle da situação pessoalmente e cancela todos os compromissos do dia. Na editora DNA, Miguel recebe de Ronald uma missão arriscada e antiética: se infiltrar na Garrido Filho Engenharia para conseguir informações exclusivas sobre o caso. Mesmo contrariado e decepcionado, Miguel aceita a proposta para manter seu estágio. À noite, Miguel consegue entrar na empresa e vasculha a sala de Rodrigo tirando fotos de documentos confidenciais. Rodrigo retorna de surpresa ao escritório para buscar sua maleta esquecida e flagra Miguel, reconhecendo-o imediatamente como o rapaz do metrô.',
    pages: SOCIO_DO_AMOR_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_02_f2df9c77.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Miguel é surpreendido por Rodrigo dentro da sala da Garrido Filho Engenharia. Tenso e acuado, Miguel consegue disfarçar e escapar antes que a segurança seja acionada. Em casa, Miguel desabafa com o irmão Eduardo sobre o peso de suas decisões e a pressão no trabalho. Enquanto isso, Jhonatan segue com seus planos interesseiros ao lado de Clóvis, mantendo Rodrigo sob manipulação. Mais tarde no Vidigal, Miguel reencontra Juan na sorveteria com o filho Bernardo. Os dois conversam sobre o passado e vão até o Mirante do Leblon, onde revivem sentimentos mal resolvidos e terminam aos beijos sob a vista da cidade.',
    pages: SOCIO_DO_AMOR_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_03_3eed1d0d.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Miguel e Juan têm uma conversa definitiva sobre o relacionamento que viveram escondidos e os medos de assumir um amor entre dois homens perante a família. Enquanto isso, Rodrigo descobre movimentações suspeitas na construtora e tenta entender as sabotagens. Na manhã seguinte, após passar a noite em claro e refletir sobre seus valores, Miguel toma uma decisão corajosa: vai até a Editora DNA e comunica a Ronald que não compactuará com a matéria antiética nem com espionagem corporativa, pedindo seu desligamento da revista. Para sua total surpresa, Ronald cai na gargalhada e revela que tudo era um teste de integridade, anunciando Miguel como o novo editor-chefe da DNA Mistério.',
    pages: SOCIO_DO_AMOR_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_04_db610bc8.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Promovido a editor-chefe da DNA Mistério por sua postura ética e talento, Miguel comemora a nova fase profissional ao lado de Rebeka e de sua família no Vidigal. Porém, a alegria dá lugar ao luto após uma perda trágica que abala profundamente sua vida pessoal. Tentando se recompor e honrar seus compromissos, Miguel retoma a rotina na redação da editora. Ao final de um longo expediente noturno, enquanto caminha sozinho pela calçada em frente ao prédio, ele esbarra inesperadamente em Rodrigo. Em meio ao choque e à emoção do reencontro, as defesas de ambos caem: Rodrigo larga tudo o que tem nas mãos e acolhe Miguel em um abraço protetor e comovente no meio da rua deserta.',
    pages: SOCIO_DO_AMOR_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_05__7da9d15e.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Miguel e Rodrigo se reencontram, e ainda abalado pela morte de Fernanda, Miguel desaba, mas a conversa termina em agressão verbal e afastamento. Sozinho pela cidade, Miguel reafirma sua decisão de cuidar de Gabriela e Bernardo, assumindo mais responsabilidades, até receber o apoio de Juan. Rodrigo fica profundamente mexido, entra em conflito interno e percebe sentimentos que não consegue compreender. No dia seguinte, Miguel se dedica com firmeza ao trabalho como editor-chefe da DNA Mistério, enquanto Rodrigo mantém um discurso frio no trabalho, revelando contradições emocionais. Paralelamente, é apresentado Jhonatan, marcado por relações vazias e interesseiras. No final, Miguel e Rodrigo discutem novamente, Rodrigo é atropelado, e Miguel cuida dele, revelando uma conexão forte e inevitável entre os dois.',
    pages: SOCIO_DO_AMOR_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_06_socio_do_amor.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Rodrigo é atropelado durante uma briga com Miguel, que se desespera e o acompanha até o hospital. Após o susto, os dois se aproximam ainda mais, e Miguel acaba passando a tarde na cobertura de Rodrigo, onde vivem momentos de cumplicidade. Paralelamente, Juan assume para Griselda que ainda ama Miguel e quer reconquistá-lo. No final, o clima entre Miguel e Rodrigo esquenta, e os dois quase se beijam, mas são interrompidos pela chegada inesperada de Jhonatan.',
    pages: SOCIO_DO_AMOR_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_07_c1e567d1.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Jhonatan interrompe o clima entre Miguel e Rodrigo ao chegar de surpresa, provocando ciúmes e estranheza. Miguel vai embora irritado, deixando Rodrigo dividido. Em casa, Miguel é surpreendido por Juan, que se declara e pede uma nova chance, mas Miguel deixa claro que não quer voltar ao passado, embora os dois acabem se beijando. No dia seguinte, Miguel segue focado no trabalho na revista, enquanto Rodrigo confronta seus próprios sentimentos e a mentira sobre sua relação com Jhonatan. No final, Juan surpreende Miguel na editora com flores e um convite, disposto a reconquistá-lo, mas Miguel descobre uma informação comprometedora sobre o passado de Juan.',
    pages: SOCIO_DO_AMOR_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_08_07e7ce75.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Miguel confronta Juan sobre a matéria das máscaras de chumbo e a morte de seu tio, criando um clima de tensão entre os dois. Juan tenta se explicar e reafirma seu amor por Miguel, mas a desconfiança permanece. Paralelamente, a editora DNA segue a todo vapor com a produção da revista, e Miguel busca apoio em Rebeka para lidar com a nova fase. Enquanto isso, Rodrigo continua distante e frio, mas é confrontado por Stella, que o aconselha a rever suas atitudes. No final, Miguel e Rodrigo se reencontram em um evento, onde a atração e a rivalidade entre eles voltam a explodir.',
    pages: SOCIO_DO_AMOR_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_09_335738c7.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Miguel e Rodrigo vivem momentos de tensão e proximidade durante o evento, com trocas de olhares e alfinetadas que evidenciam o desejo reprimido entre eles. Rodrigo tenta manter a postura arrogante, mas não consegue esconder o impacto da presença de Miguel. Paralelamente, Juan descobre que Miguel e Rodrigo estão se aproximando e decide agir para não perder Miguel de vez. No clímax do capítulo, após uma discussão acalorada longe dos olhares dos convidados, a tensão entre Miguel e Rodrigo se transforma em paixão: os dois finalmente se entregam ao primeiro beijo, marcando uma virada definitiva na relação.',
    pages: SOCIO_DO_AMOR_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_10_0a0c47a9.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Juan entra em crise ao lembrar do beijo entre Miguel e Rodrigo e se deixa dominar pela dor. Enquanto a cidade amanhece, o romance dos dois ganha ainda mais força, com momentos de carinho e cumplicidade antes do trabalho. Na casa de Lúcio, ele e Silvia começam a desconfiar do comportamento estranho de Arthur. Já Rebeka enfrenta João Pedro, decide não aceitar mais o casamento de aparências e sai de casa abalada — mas acaba tendo um encontro inesperado com Marcos, que a ampara em meio ao desespero. O que Miguel e Rodrigo não imaginam é que o relacionamento dos dois passa a ser observado, colocando esse novo amor em risco.',
    pages: SOCIO_DO_AMOR_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_11__fc3fb40c.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'O romance de Miguel e Rodrigo avança, mas já começa a enfrentar ameaças. Após flagrar o beijo dos dois, Jhonatan decide agir e passa a investigar a vida de Miguel, aproximando-se dele com segundas intenções. Enquanto isso, Miguel vive o entusiasmo de um novo amor, celebra com as amigas na editora e aceita o convite para jantar com a família de Rodrigo, mesmo inseguro por se sentir fora daquele universo. Paralelamente, Rebeka se aproxima cada vez mais de Marcos, encontrando nele um refúgio acolhedor. No clímax do jantar na casa de Ernesto, Arthur surge distraído e, ao ver Rodrigo e Miguel juntos, deixa seu celular cair no chão em estado de puro choque.',
    pages: SOCIO_DO_AMOR_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_12_965598d9.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'O choque de Arthur ao ver Miguel na casa de seu pai instala um clima pesado, mas Silvia logo quebra a tensão ao apresentar o apartamento para Miguel. Em conversa íntima com Ernesto, Rodrigo abre seu coração e admite que, pela primeira vez na vida, sente vontade genuína de amar, cuidar e construir um futuro com alguém. Jhonatan se revolta e chora de raiva por ter sido trocado, prometendo não aceitar a perda. Enquanto isso, Rebeka e Marcos compartilham um momento especial e esperançoso no Pontão do Leblon, e Juan sofre sozinho ao perceber que perdeu Miguel. No fim, Arthur aborda Miguel no corredor, mas são flagrados por Rodrigo, instaurando novo confronto.',
    pages: SOCIO_DO_AMOR_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_13_3470c887.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'No corredor da casa de Ernesto, Rodrigo confronta Arthur e Miguel; chateado com o clima desconfortável, Miguel decide ir embora, mas Rodrigo o alcança e os dois terminam a noite juntos na cobertura, renovando seus votos de carinho e união. No Pontão, Marcos e Rebeka decidem viver seu relacionamento etapa por etapa com calma e responsabilidade. No dia seguinte, Griselda e Miguel consultam Judite sobre a guarda provisória de Gabriela e Bernardo, descobrindo os desafios burocráticos pela frente. Enquanto isso, Jhonatan aparece de surpresa na sede da construtora Garrido Filho e começa a cercar Arthur com perguntas afiadas sobre Rodrigo.',
    pages: SOCIO_DO_AMOR_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_14_7a62df28.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Na recepção da Garrido Filho, Jhonatan aborda Arthur e revela seu passado amoroso com Rodrigo, tentando manipulá-lo para afastar Miguel da vida do engenheiro. Na casa da família, Griselda e Eduardo compartilham a apreensão com o processo da guarda das crianças. Na editora DNA, uma misteriosa foto antiga de Flora com um homem desconhecido no lançamento da programação de 2011 abala Ronald e Rebeka. À noite, Rodrigo descansa em seu apartamento esperando a visita de Arthur, mas ao abrir a porta após o interfone, fica paralisado e em choque ao dar de cara com Jhonatan.',
    pages: SOCIO_DO_AMOR_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_15_d63dac1b.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16',
    summary:
      'Jhonatan aparece no apartamento de Rodrigo, declara que ainda o ama e tenta desestabilizá-lo ao relembrar o passado entre os dois. Miguel é pressionado pela família a considerar um casamento com Juan para garantir a guarda das crianças e fica completamente abalado com a proposta. Ronald confronta Flora após descobrir provas de que ela tem um amante, deixando a relação dos dois em clima de ameaça. Jhonatan enfrenta Clóvis, revela sua revolta com as manipulações do cafetão e chega a agredi-lo. O capítulo caminha para um momento emocional quando Miguel surge desesperado diante de Rodrigo, abalado com tudo o que está acontecendo.',
    pages: SOCIO_DO_AMOR_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_16_48ca7bb7.pdf',
  },
  {
    number: 17,
    label: 'Capítulo 17',
    slug: 'capitulo-17',
    title: 'Capítulo 17',
    summary:
      'Miguel procura Rodrigo abalado, e apesar do apoio, desconfia que ele esteja escondendo algo — dúvida que aumenta ao encontrar uma peça íntima feminina no apartamento. Rebeka revive o trauma da perda da filha, mas decide seguir em frente ao lado de Marcos. João Pedro se envolve ainda mais com Jhonatan, aprofundando sua vida dupla. Em meio a novas tensões familiares e profissionais, Eduardo e Luana se reencontram, Juan tenta se aproximar de Bernardo, e Flora revela um plano sombrio contra Ronald. No fim, Rodrigo recebe a notícia de que foi o escolhido para liderar um grande projeto em Dubai, colocando seu futuro em jogo.',
    pages: SOCIO_DO_AMOR_EPISODE_17_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_17_1f43f2cd.pdf',
  },
  {
    number: 18,
    label: 'Capítulo 18',
    slug: 'capitulo-18',
    title: 'Capítulo 18',
    summary:
      'Rodrigo recebe a notícia de que vai liderar o projeto em Dubai e entra em conflito entre sua carreira e o amor por Miguel. Enquanto Miguel e Juan têm uma conversa sincera sobre o passado e Bernardo, Rebeka decide se separar de João Pedro. Arthur admite seus sentimentos por Miguel para Silvia, e Ronald revela a Rebeka que seu casamento acabou. No clímax, Aline recebe fotos comprometedoras de Rodrigo com Jhonatan e alerta Miguel. Rodrigo vai até a casa de Miguel disposto a contar sobre a viagem, mas é surpreendido com as fotos e leva um tapa, deixando a relação em crise.',
    pages: SOCIO_DO_AMOR_EPISODE_18_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_18_1c4af228.pdf',
  },
  {
    number: 19,
    label: 'Capítulo 19',
    slug: 'capitulo-19',
    title: 'Capítulo 19',
    summary:
      'Miguel confronta Rodrigo com as fotos e rompe o relacionamento, deixando o engenheiro desolado. Enquanto Rebeka sai de casa e põe fim ao casamento com João Pedro, Juan tenta consolar Miguel. Desesperado e tomado pela raiva, Rodrigo procura Jhonatan, o agride fisicamente, mas a tensão entre os dois culmina em um beijo confuso e destrutivo.',
    pages: SOCIO_DO_AMOR_EPISODE_19_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_19_c1727b08.pdf',
  },
  {
    number: 20,
    label: 'Capítulo 20',
    slug: 'capitulo-20',
    title: 'Capítulo 20',
    summary:
      'Rodrigo convida Jhonatan para ir a Dubai com ele, enquanto Miguel tenta seguir em frente com o apoio de Aline. Rebeka se abriga na casa de Marcos após ser expulsa por João Pedro. Ronald confronta Flora sobre seu caso e revela que já sabe de suas intenções contra ele. No final, Arthur sofre em silêncio por Miguel, e Juan se reaproxima dele, oferecendo apoio.',
    pages: SOCIO_DO_AMOR_EPISODE_20_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_20__f591f82c.pdf',
  },
  {
    number: 21,
    label: 'Capítulo 21',
    slug: 'capitulo-21',
    title: 'Capítulo 21',
    summary:
      'Miguel decide dar uma nova chance a Juan e os dois engatam um romance, enquanto Rodrigo sofre ao vê-lo seguir em frente. Em meio a conflitos familiares, Silvia se desespera ao encontrar Arthur em recaída com o álcool. A situação das crianças ganha um novo rumo quando a justiça marca a audiência de guarda, levando Miguel a tomar decisões importantes sobre sua vida pessoal. Paralelamente, Flora e Guilherme colocam em prática um plano cruel contra Ronald, mas tudo sai do controle e os dois acabam presos por tentativa de assassinato. Antes de deixar o país, Rodrigo é incentivado a lutar por Miguel, mas ao procurá-lo, se depara com uma cena devastadora. O tempo avança: Miguel e Juan conquistam a guarda de Bernardo e Gabriela, enquanto Rodrigo parte para Dubai ao lado de Jhonatan, iniciando uma relação marcada por ressentimento. Meses depois, novas tensões surgem com desconfianças, recomeços e o retorno de antigos sentimentos.',
    pages: SOCIO_DO_AMOR_EPISODE_21_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_21_368ab48f.pdf',
  },
  {
    number: 22,
    label: 'Capítulo 22',
    slug: 'capitulo-22',
    title: 'Capítulo 22',
    summary:
      'Rodrigo retorna ao Brasil ao lado de Jhonatan, e a relação entre os dois entra em colapso após um ano de frieza e frustração em Dubai. No desembarque, eles são recebidos por Ernesto e Arthur, gerando um clima tenso diante de segredos do passado. Na editora DNA, Miguel se aprofunda na investigação de um caso policial e cruza por acaso com Rodrigo nas ruas de Copacabana, reascendendo lembranças. Enquanto Juan lida com culpas e dilemas no relacionamento com Miguel, Eduardo flagra uma mulher misteriosa saindo da casa do casal, levantando suspeitas de traição.',
    pages: SOCIO_DO_AMOR_EPISODE_22_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_22__406a0f90.pdf',
  },
  {
    number: 23,
    label: 'Capítulo 23',
    slug: 'capitulo-23',
    title: 'Capítulo 23',
    summary:
      'Miguel confronta Juan sobre a mulher que esteve na casa deles. Diante da decepção e da confissão de traição, Miguel põe fim definitivo ao relacionamento e sai de casa com Bernardo. Em conversa com Ernesto e Silvia, Rodrigo admite que Miguel ainda é o amor da sua vida, momento em que Arthur revela que foi o responsável por alimentar as armações de Jhonatan no passado e confessa seus sentimentos por Miguel. Enquanto isso, a notícia da fuga de Flora da prisão abala a todos e traz novas ameaças para Ronald e Griselda.',
    pages: SOCIO_DO_AMOR_EPISODE_23_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_23_ffd658b0.pdf',
  },
  {
    number: 24,
    label: 'Capítulo 24',
    slug: 'capitulo-24',
    title: 'Capítulo 24',
    summary:
      'Rodrigo procura Miguel e se declara, mas, mesmo admitindo que ainda o ama, Miguel afirma que não pode reatar agora, pois precisa de tempo para curar suas feridas e reorganizar sua vida. Determinado a cortar laços, Rodrigo expulsa Jhonatan de seu apartamento. Sem escrúpulos, Jhonatan se alia a João Pedro para tramar uma vingança contra Miguel e Marcos. Paralelamente, Flora invade a mansão de Ronald disposta a incendiar a casa, colocando a vida de Griselda e Ronald em risco extremo até a chegada de socorro. No desfecho, Miguel procura Rodrigo em seu apartamento para um acerto de contas decisivo.',
    pages: SOCIO_DO_AMOR_EPISODE_24_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_24_a4ce233b.pdf',
  },
  {
    number: 25,
    label: 'Capítulo 25',
    slug: 'capitulo-25',
    title: 'Capítulo 25 - Último Capítulo',
    summary:
      'Após tantas idas e vindas, Miguel toma uma decisão e procura Rodrigo, selando um reencontro intenso e apaixonado entre os dois. No entanto, o perigo ressurge quando João Pedro e Jhonatan sequestram Miguel e Rebeka, levando-os para uma pedreira abandonada. Rodrigo e Marcos agem rápido e enfrentam os sequestradores em um confronto dramático que culmina na queda de João Pedro e na prisão de Jhonatan. Com o fim das ameaças, o tempo passa: Rebeka e Marcos se casam, a Editora DNA celebra novas conquistas e Ronald e Griselda constroem uma relação de carinho e respeito. Na comemoração de aniversário de Bernardo no Vidigal, Miguel e Rodrigo se reencontram em um momento de pura conexão, entendendo que o amor verdadeiro resiste ao tempo e transforma a vida de ambos para sempre.',
    pages: SOCIO_DO_AMOR_EPISODE_25_PAGES,
    pdfUrl: '/assets/aistudio/CAP_TULO_25_3202a355.pdf',
  },
];

export const SOCIO_DO_AMOR_EPISODES: ChapterEpisode[] = SOCIO_DO_AMOR_EPISODES_RAW.map((ep) => ({
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

