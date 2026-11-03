import { NADA_ALEM_DO_SEU_AMOR_EPISODE_01_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode01';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_02_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode02';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_03_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode03';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_04_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode04';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_05_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode05';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_06_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode06';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_07_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode07';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_08_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode08';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_09_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode09';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_10_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode10';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_11_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode11';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_12_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode12';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_13_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode13';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_14_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode14';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_15_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode15';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_16_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode16';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_17_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode17';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_18_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode18';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_19_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode19';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_20_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode20';
import { NADA_ALEM_DO_SEU_AMOR_EPISODE_21_PAGES } from './nadaAlemDoSeuAmorEpisodes/episode21';
import { ChapterEpisode } from '../types';

export interface NadaAlemDoSeuAmorEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
  note?: string;
}

export const NADA_ALEM_DO_SEU_AMOR_EPISODES_RAW: NadaAlemDoSeuAmorEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Rubens e Aquiles têm um encontro secreto no banheiro masculino. Joana descobre que está grávida e não sabe quem é o pai. Cíntia encontra o teste de gravidez e planeja usar essa informação contra Joana. André é brutalmente agredido por traficantes, enquanto Aquiles enfrenta humilhações na escola e decide não ir à formatura. Aquiles encontra André em uma igreja durante uma tempestade em péssimas condições, machucado e com febre alta.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/1._Nada_Al_m_do_Seu_Amor__d2c0a9cd.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'André continua sua busca por Aquiles, a pessoa que salvou sua vida, enquanto lida com os desafios de seu projeto. Rubens e Cíntia retornam ao Brasil, revelando tensões em seu relacionamento. Florbela Firmino se apresenta em uma casa de shows, onde encanta o público com sua voz e presença de palco. André aceita palestrar na faculdade em que Aquiles trabalha. Rubens e Aquiles se reencontram.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/2._Nada_Al_m_do_Seu_Amor__3b3bbabb.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Rubens encontra Aquiles na praia, e uma discussão intensa ocorre sobre o passado deles e o casamento fracassado de Rubens. Joana colide com o carro de Armandinho, levando a uma discussão acalorada e um flashback de um encontro passado. Rubens invade o camarim de Aquiles após um show, resultando em uma briga física. André perde o colar de Aquiles no corredor da faculdade. Aquiles encontra, desencadeando uma reação emocional intensa.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/3._Nada_Al_m_Do_Seu_Amor_baa9943b.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'André percebe que perdeu um colar importante. Enquanto isso, Aquiles encontra o colar e se emociona, lembrando de sua mãe. André descobre através de gravações que Aquiles pegou o colar. Aquiles é confrontado por Armandinho e policiais, resultando em sua prisão sob acusação de furto. Joana promete tirá-lo da cadeia, enquanto enfrenta Armandinho. Davi desaparece momentaneamente, causando pânico em Cíntia.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/4.Nada_Al_m_do_Seu_Amor_4d6c56cb.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Cíntia e Rubens descobrem que Davi não sobreviveu. André descobre que Aquiles é a pessoa que salvou sua vida anos atrás. Aquiles é inocentado do furto do colar. Aquiles decide se afastar de André. Cíntia sofre pela perda de Davi, enquanto Rubens a culpabiliza pelo acontecido. André tenta lidar com a ausência de Aquiles. Há um salto temporal na trama.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/5._da_Al_m_do_Seu_Amor__e56cf605.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Mauro se recorda de Clara e revela a Páris que ainda se sente culpado por tê-lo abandonado. André se prepara para a inauguração da Tardes de Sol. Aquiles se encontra às escondidas com Rubens e os dois ficam no carro. Analú conversa com Joana sobre a Querofobia de Aquiles, mas não é levada a sério. Armandinho e Joana se reencontram e causam um barraco na lanchonete. Analú tem um plano para fazer Aquiles e André se reencontrarem. Thiala sofre um acidente ao tentar andar sem a bengala. Analú se esconde no carro de Armandinho e entra de penetra na inauguração da Tardes de Sol. Joana percebe que Analú sumiu e Aquiles a vê na televisão. Ao perceber que Aquiles foi até a Tardes de Sol, Analú invade o palco onde André discursa, e chama a atenção de todos, fazendo André perceber a presença de Aquiles no lugar.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/6._Nada_Al_m_do_Seu_Amor_2ebe6559.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Aquiles e André se reencontram e por uma armação de Rubens, André descobre que Aquiles mentiu sobre ter se mudado. Cíntia sente inveja de Joana e sua família. As duas se enfretam em uma conversa franca e afiada. Analú sente medo de Cíntia. Joana defende Aquiles das acusações de André. André expulsa Aquiles da Tardes de Sol, machucado, mas se arrepende logo em seguida. Joana questiona Aquiles sobre sua falta de si mesmo. André se encontra febril após a conversa com Aquiles e decide ir até sua casa em meio a chuva. Páris revela a Tereza suas verdadeiras intenções.\n\n"Nesse capítulo foram usados trechos do livro Relicário, da autora Fátima Irene Pinto para ilustrar os diálogos dos personagens Aquiles e André".',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/7._Nada_Al_m_do_Seu_Amor__c7ddad3a.pdf',
    note: 'Nesse capítulo foram usados trechos do livro Relicário, da autora Fátima Irene Pinto para ilustrar os diálogos dos personagens Aquiles e André.',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Aquiles recebe André em sua casa todo encharcado. André confessa seu amor por Aquiles, que tenta repelí-lo. André reafirma que lutará pelo amor de Aquiles. Cynthia tem alucinações com seu filho morto. Aquiles rompe seu caso com Rubens, para sua surpresa. Joana e Armandinho armam uma confusão no supermercado e acabam rendidos no meio de um assalto. Baby investiga Paris. Paris leva Thiala para passear e a deixa no meio da rua. Um carro segue em direção a Thiala a toda velocidade.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/8._Nada_Al_m_do_Seu_Amor_ad8120d3.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Aquiles salva Thiala do atropelamento. Mauro oferece o emprego de cuidador a Aquiles, que fica indeciso, mas promete pensar. Joana luta com o Bandido pela arma e acaba atirando em Armandinho. Analú chama de Cíntia de mentirosa e a expulsa do colégio. André vai atrás de Aquiles e lhe faz uma proposta. Baby aparece dizendo que achou a mãe de Páris, deixando o mesmo em pânico e sem saída. André leva Aquiles a um parque. Os dois andam de roda gigante, mesmo com o medo de altura que André revela ter. Joana vai tirar satisfações com Cíntia e joga chá quente em sua cara.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/9._Nada_Al_m_do_Seu_Amor__8e024a5e.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Joana bate em Cíntia e a manda ficar longe de Analú. André e Aquiles nadam pelados no mar. Cíntia tem outra alucinação com Davi. Num acesso de loucura, Cíntia raspa a sua cabeça. Aquiles tem uma crise de pânico e pede ajuda a Joana. Páris manda matar Baby. Rubens vigia Aquiles e segue André até seu apartamento. Baby é perseguido pelos bandidos contratados. Uma perseguição implacável pela cabeça do detetive acontece. Aquiles e Rubens se enfrentam. Rubens descobre que, na verdade, matou a mãe de Aquiles no passado.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/10._Nada_Al_m_do_Seu_Amor_6aa1ee5f.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Mauro contrata Aquiles como cuidador de sua filha, Thiala. Rubens lida com a culpa de um acidente passado. Páris tenta humilhar Aquiles, mas acaba se dando mal. Aquiles chama André para jantar. Rubens tenta manipular Aquiles, resultando em um confronto físico. Rubens deixa Aquiles desacordado no chão do banheiro. André resgata Aquiles e cuida dele.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/11._Nada_Al_m_do_Seu_Amor_2e204e41.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'André e Aquiles jantam em um restaurante à beira-mar, onde discutem sobre o futuro e compartilham momentos íntimos. Joana e Armandinho têm um encontro às cegas em um restaurante escuro, onde ambos mentem sobre suas profissões e se divertem. Cíntia janta sozinha, imaginando a presença de seu filho. Aquiles e André caminham na praia, onde André demonstra suas habilidades na capoeira. Aquiles tem uma sessão de terapia com Peregrina, onde discute suas inseguranças. Páris confronta Aquiles sobre sua relação com André, e Aquiles defende sua posição. Armandinho conta a André sobre seu encontro com Joana. Rubens tenta alertar André sobre Aquiles, mostrando um vídeo comprometedor. Aquiles, como Florbela Firmino, se prepara para uma performance em uma casa de shows, onde André o flagra no palco.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/12._Nada_Al_m_do_Seu_Amor_915582f7.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'André apoia Aquiles quando o cê de Florbela. Aquiles confirma que Rubens era o seu amante. Baby retorna a cidade para acabar com Páris. Páris arquiteta um plano para matar Mauro. Aquiles confessa seu amor por André e os dois passam a noite juntos. Cíntia reencontra Fábio e o humilha por ele ter falido e estar trabalhando em sua festa. Aquiles e André se estranham no dia seguinte. André confessa que se sente inseguro e Aquiles o conforta. Na festa de casamento de Rubens, André e ele têm um embate por causa de Aquiles. No discurso de casamento, Florbela aparece chamando atenção na festa e deixando Rubens apavorado.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/13._Nada_Al_m_do_Seu_Amor__77df321f.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Rubens é desmascarado na frente de todos em sua festa de casamento.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/14._Nada_Al_m_do_Seu_Amor__74fc41f4.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Confira as emoções do capítulo que marca o fim da segunda fase de "Nada Além do Seu Amor. Voltamos dentro de algumas semanas com a exibição dos capítulos finais.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/15._Nada_Al_m_do_Seu_Amor_80d423da.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16',
    summary:
      'Baby persegue Comédia e Boneco, que estão como reféns. André se desespera ao saber do sequestro de Aquiles. Mauro e Aquiles lutam com Boneco e Comédia. O carro capota numa ribanceira. Armandinho e Joana acabam se entregando a paixão, mas são interrompidos com uma pessoa notícia. Mauro, Aquiles e Boneco sobrevivem ao acidente. O carro explode com Comédia dentro. Mauro consegue fugir, mas Boneco acaba atirando em Aquiles. Boneco leva Aquiles até um terreno baldio para assassiná-lo, mas os dois acabam encontrando Rubens, que oferece dinheiro para o bandido em troca de Aquiles. Boneco vende Aquiles para Rubens.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/16._Nada_Al_m_do_Seu_Amor_d4bf79d7.pdf',
  },
  {
    number: 17,
    label: 'Capítulo 17',
    slug: 'capitulo-17',
    title: 'Capítulo 17',
    summary:
      'Mauro informa que Boneco ficou com Aquiles, causando desesperança em todos. Rubens mantém Aquiles preso no quarto de sua casa antiga. Aquiles discute com Rubens, que lhe priva de água e comida como castigo. Páris tenta impedir Tereza de fugir, mas não consegue. Cíntia mente para Analú sobre saber quem é o pai da menina para convencê-la a ir com ela. Cíntia leva Analú para um cemitério. Joana fica sabendo que Analú não está no colégio e corre para onde o GPS aponta. Maurício e Jade, personagens de Anjo Bom, participam do cerco na missão para capturar Boneco. Cíntia se despede de Davi e faz uma revelação a Joana. Mauro questiona Páris sobre Aquiles e dá um soco em se rosto ao constatar a mentira contada.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_17_PAGES,
    pdfUrl: '/assets/aistudio/17._Nada_Al_m_do_Seu_Amor__22d8e256.pdf',
  },
  {
    number: 18,
    label: 'Capítulo 18',
    slug: 'capitulo-18',
    title: 'Capítulo 18',
    summary:
      'Mauro revela a Páris que já sabia de todos os seus planos e o vilão é desmascarado. André faz um acordo com Boneco e descobre que Rubens o sequestrou. Páris confessa todas as suas artimanhas, humilhando Mauro e Baby. Ao ser encurralado, Páris faz de refém sua própria mãe, Jussara, e pede um carro para fugir. Rubens tenta persuadir Aquiles e diante de sua resistência, o agredide, arrependendo-se depois. Aquiles implora pela sua liberdade, mas Rubens se recusa a soltá-lo. Páris percebe que o carro está sem gasolina no meio da estrada. Um caminhão acaba colidindo com o carro de Páris.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_18_PAGES,
    pdfUrl: '/assets/aistudio/18._Nada_Al_m_do_Seu_Amor__75ec01b4.pdf',
  },
  {
    number: 19,
    label: 'Capítulo 19',
    slug: 'capitulo-19',
    title: 'Capítulo 19',
    summary:
      'Uma semana depois, Aquiles finge aceitar o convívio com Rubens para ganhar tempo. Rubens planeja fugir com ele para a Austrália. Páris desperta no hospital e entra em desespero ao descobrir que perdeu a visão e teve as pernas amputadas após o acidente. Aquiles tenta ligar para André do celular de Rubens. Na lanchonete, Baby descobre a gravação do atropelamento que vitimou a mãe de Aquiles no passado e Joana revela a todos que Rubens foi o culpado. André retorna a ligação e descobre o paradeiro de Aquiles. Enquanto Aquiles tira Rubens para dançar para ganhar tempo, André invade a mansão, mas Rubens saca um revólver contra os dois.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_19_PAGES,
    pdfUrl: '/assets/aistudio/19._Nada_Al_m_do_Seu_Amor__bc83f9c0.pdf',
  },
  {
    number: 20,
    label: 'Capítulo 20',
    slug: 'capitulo-20',
    title: 'Capítulo 20 (Penúltimo)',
    summary:
      'Rubens revela ter dopado a comida de Aquiles, que desmaia. André e Rubens travam uma luta violenta pela casa. André é baleado no ombro, mas Rubens fica sem munição. Os dois despencam pela janela do casarão até o jardim e André nocauteia Rubens. Quando André tenta socorrer Aquiles, Rubens o atinge com uma pedra na cabeça, tranca Aquiles no porta-malas do carro e foge. Joana assume a direção do veículo com Armandinho e Baby em uma perseguição alucinante pela rodovia. Cercado na ponte rodoviária por Joana, André e viaturas policiais, Rubens joga seu carro contra a mureta, despencando nas águas do rio com Aquiles preso no porta-malas.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_20_PAGES,
    pdfUrl: '/assets/aistudio/20._Nada_Al_m_do_Seu_Amor__41cf3f6f.pdf',
  },
  {
    number: 21,
    label: 'Capítulo 21',
    slug: 'capitulo-21',
    title: 'Capítulo 21 (Último Capítulo)',
    summary:
      'André se joga nas águas do rio e resgata Aquiles do porta-malas do carro submerso em um ato heroico, reanimando-o na superfície. No hospital, Baby suspeita da história de Aquiles e sugere um teste de DNA com Mauro. Armandinho se declara para Joana e os dois engatam um romance. Cíntia arma uma cilada para Rubens em um cemitério abandonado, trancando o vilão para sempre dentro de um mausoléu blindado. O teste de DNA confirma que Aquiles é o filho biológico de Mauro e irmão de Thiala. André e Aquiles celebram o amor, e Aquiles finalmente ingressa na faculdade de Direito, realizando o grande sonho de sua vida.',
    pages: NADA_ALEM_DO_SEU_AMOR_EPISODE_21_PAGES,
    pdfUrl: '/assets/aistudio/21._Nada_Al_m_do_Amor_01a0af95.pdf',
  },
];

export const NADA_ALEM_DO_SEU_AMOR_EPISODES: ChapterEpisode[] = NADA_ALEM_DO_SEU_AMOR_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
