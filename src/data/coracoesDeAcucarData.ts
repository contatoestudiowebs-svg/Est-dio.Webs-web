import { CORACOES_DE_ACUCAR_EPISODE_01_PAGES } from './coracoesDeAcucarEpisodes/episode01';
import { CORACOES_DE_ACUCAR_EPISODE_02_PAGES } from './coracoesDeAcucarEpisodes/episode02';
import { CORACOES_DE_ACUCAR_EPISODE_03_PAGES } from './coracoesDeAcucarEpisodes/episode03';
import { CORACOES_DE_ACUCAR_EPISODE_04_PAGES } from './coracoesDeAcucarEpisodes/episode04';
import { CORACOES_DE_ACUCAR_EPISODE_05_PAGES } from './coracoesDeAcucarEpisodes/episode05';
import { CORACOES_DE_ACUCAR_EPISODE_06_PAGES } from './coracoesDeAcucarEpisodes/episode06';
import { CORACOES_DE_ACUCAR_EPISODE_07_PAGES } from './coracoesDeAcucarEpisodes/episode07';
import { CORACOES_DE_ACUCAR_EPISODE_08_PAGES } from './coracoesDeAcucarEpisodes/episode08';
import { CORACOES_DE_ACUCAR_EPISODE_09_PAGES } from './coracoesDeAcucarEpisodes/episode09';
import { CORACOES_DE_ACUCAR_EPISODE_10_PAGES } from './coracoesDeAcucarEpisodes/episode10';
import { CORACOES_DE_ACUCAR_EPISODE_11_PAGES } from './coracoesDeAcucarEpisodes/episode11';
import { CORACOES_DE_ACUCAR_EPISODE_12_PAGES } from './coracoesDeAcucarEpisodes/episode12';
import { CORACOES_DE_ACUCAR_EPISODE_13_PAGES } from './coracoesDeAcucarEpisodes/episode13';
import { CORACOES_DE_ACUCAR_EPISODE_14_PAGES } from './coracoesDeAcucarEpisodes/episode14';
import { CORACOES_DE_ACUCAR_EPISODE_15_PAGES } from './coracoesDeAcucarEpisodes/episode15';
import { CORACOES_DE_ACUCAR_EPISODE_16_PAGES } from './coracoesDeAcucarEpisodes/episode16';
import { ChapterEpisode } from '../types';

export interface CoracoesDeAcucarEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const CORACOES_DE_ACUCAR_EPISODES_RAW: CoracoesDeAcucarEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'O capítulo inicia com a revelação da traição de Alesso, noivo de Bás, no que seria a futura residência do casal. O incidente culmina em um confronto violento. Alesso, apesar da infidelidade, declara seu amor por Bás. Contudo, o relacionamento é descrito como influenciado por interesses familiares e financeiros, sob a pressão de Bonjo, pai de Alesso. Após o término, Bás conhece Cássian, um vendedor de sapatos. O flerte entre eles resulta em um convite de Bás para um encontro.',
    pages: CORACOES_DE_ACUCAR_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/01._CORA__ES_DE_A__CAR_capitulo01.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Encontro mágico entre Bás e Cássian em um parque de diversões, onde a leveza e a cumplicidade florescem. Cássian relata entusiasmado a Lana sobre o encontro. Bás, por sua vez, presenteia a irmã com um cachorro-quente e pondera sobre a chance de um novo amor, ainda marcado pelo relacionamento com Alesso. Alesso e Bonjo visitam inesperadamente a família Avelar em busca de reconciliação com Bás. A tensão é palpável, especialmente com Sara, que critica a tentativa de reaproximação. A situação se complica quando Cássian chega à mansão para devolver a camisa de Bás e Plutão, o cachorro, irrompe na sala de desjejum, revelando a presença de Cássian para todos em meio à confusão.',
    pages: CORACOES_DE_ACUCAR_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/02._CORA__ES_DE_A__CAR__SEGUNDO_CAP_TULO__fcbae9d6.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'A presença de Cássian causa uma confusão. Alesso se sente traído e sai indignado. Bás explode de raiva com Cássian e o humilha, jogando sua camisa lavada no chão. Cássian é expulso da casa e sai arrasado, sob chuva intensa. Alesso desconta sua raiva quebrando tudo em casa. Bonjo afirma que Alesso vacilou e agora Bás pode estar interessado em Cássian. Alesso afirma que Cássian não é páreo para ele, mas fica preocupado. Sara confronta Bás sobre Cássian, chamando sua atitude de tirânica. Ela diz estar cansada das consequências emocionais que as atitudes do irmão causam nela mesma e nos outros. Adam escuta o irmão e o pai conversando sobre sua volta ao Brasil. Levi debocha da aparência de Adam e afirma que seu rosto será motivo de choque e fofocas na empresa. Lana leva café aos donos da La Belle e fica em choque ao ver o rosto mascarado do patrão.',
    pages: CORACOES_DE_ACUCAR_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/03._CORA__ES_DE_A__CAR_98f57f7e.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Lana se assusta com sua aparência, e isso expõe a insegurança dele. Adam declara que mostrará seu rosto todos os dias, pedindo aos outros que se acostumem. Bás vai atrás de Cássian na La Belle e tenta se redimir, mas Cássian o trata com indiferença. Adam encara suas cicatrizes e remove a máscara, confrontando seu reflexo. Adam quebra o espelho ao ver as queimaduras em seu rosto. Mais tarde, ele comemora o próprio aniversário sozinho. Incomodado com o silêncio de Bás, Alesso provoca um grave acidente de carro em um ato impulsivo.',
    pages: CORACOES_DE_ACUCAR_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/04._CORA__ES_DE_A__CAR_68c777f9.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Alesso acorda no hospital após sofrer um acidente de carro. Bás tenta desesperadamente contatar Alesso, mas sem sucesso, e se culpa pelo ocorrido. Depois de hostilizado por Levi, Adam reencontra Dafne a confronta sobre a relação que os dois tinham no passado. Cássian e Alesso se cruzam no hospital e Alesso tenta humilhar Cássian, que o responde com ternura. Cássian desenha no gesso de Alesso, deixando o vilão reflexivo. Bás tem um surto emocional por conta do acidente de Alesso. Alesso rebaixa Bonjo ao status de vira-lata durante uma discussão. Após beber e brigar com Sara, Bás dirige alcoolizado e acaba atropelando Cássian.',
    pages: CORACOES_DE_ACUCAR_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/05._CORA__ES_DE_A__CAR_7bd8955a.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Bás cuida do ferimento de Cássian e os dois brincam sobre suas feridas. O beijo entre eles é interrompido pela chegada de Leocádia, que não perde tempo em rebaixar Cássian. Lana quase sofre uma acidente na Labelle, mas é salva por Adam. Os dois sentem-se afetados um pelo outro. Bás visita Alesso no hospital e decide recomeçar, ainda que com dúvidas quanto as verdadeiras emoções do noivo. Cássian chega como convidado no Baile de Máscaras no Castelo Magalhães, mas logo é manipulado por Leocádia para vestir-se como garçom e servir aos convidados. Bás conversa com Sara e a irmã lhe confessa que prefere Cássian como namorado de Bás. Bás afirma que não tem interesse romântico em Cássian. Após um acidente com molho (!) e um gesto generoso, Cássian cruza o caminho do Conde Marcus, que fica encantado. Marcus o convida para dançar, desafiando as expectativas sociais e gerando choque entre os presentes.',
    pages: CORACOES_DE_ACUCAR_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/06._CORA__ES_DE_A__CAR_3dd84740.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'Marcus revela que Leocádia fez Cássian trabalhar de garçom. Cássian tenta apaziguar a situação, mas Bás insiste para que a mãe fale a verdade. Alesso revela que Cássian está obcecado por Bás, gerando tensão e indignação no baile. Cansado e pressionado, Cássian revela estar apaixonado por Bás e se declara publicamente na sua frente. Na sede da empresa La Belle, Lana salva Adam de uma queda e, sem querer, eles acabam se beijando. Marcus confronta Alesso nos jardins, e revela que os dois se envolveram intimamente, traindo Bás. Bás escuta toda a confissão escondido.',
    pages: CORACOES_DE_ACUCAR_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/07._CORA__ES_DE_A__CAR_29041788.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Bás descobre a traição de Alesso com Marcus, seu melhor amigo e os confronta. Bás entra em colapso emocional. Cássian sofre por não ser correspondido por Bás. Lana o consola, afirmando que o tempo cura tudo e que Bás não era o cara certo. Adam revive seu passado traumático. Alesso é agredido por Bonjo, que descobre a sabotagem do filho. Bás procura consolo em Cássian, mas acaba magoando-o ainda mais. Os dois decidem não se falar mais. Cássian ajuda Alesso e os dois acertam as contas. Bás mergulha em profunda depressão. Há um salto temporal.',
    pages: CORACOES_DE_ACUCAR_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/08._CORA__ES_DE_A__CAR_4056927d.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Cássian trabalhando na clínica veterinária Saltimbancos, cuidando de vários animais. Plutão recusa-se a comer, preocupando Sara e Leocádia, que decidem levá-lo ao veterinário. Lana surpreende Cássian com a notícia de um encontro marcado em um aplicativo de relacionamento. Sara, angustiada com crise depressiva de Bás, tenta reanimar o irmão, relembrando memórias de infância e cantando uma música que o pai deles costumava cantar. Baby aparece na trama pela primeira vez em visita a Xisto, seu pai. Baby revela que se aposentou de seu trabalho como investigador e planeja começar um novo negócio. Sara leva Plutão à clínica veterinária Saltimbancos e se reencontra com Cássian. Alesso aparece na Mansão Avelar, para a surpresa e revolta de Leocádia, que o esbofeteia e o impede de entrar, culpando-o pelo estado de Bás. Cássian se arrepende de ter mentido para Sara ao dizer que não sente nada por Bás. Bás expulsa Alesso da mansão numa súbita reação e termina de vez com ele. Baby, no restaurante Veneza 65, espera ansiosamente pelo seu encontro. Cássian finalmente aparece.\n\n💛 Ei, psiu! Você está acompanhando a trajetória do personagem Bás, não é? E eu sei que você anda se cuidando, mas não custa nada relembrar! Por isso, eu passei aqui pra dizer que você não precisa se sentir sozinho. Existe um mundo bem legal fora do seu quarto. Então, se você perceber que sente coisas semelhantes ao que o Bás sente, ou está passando por algo parecido, saiba que existem pessoas prontas para te ouvir e te acolher. Procure ajuda profissional, e se esse for um passo muito grande para você, o CVV - Apoio Emocional está aí com centenas de voluntários. Você pode ligar gratuitamente (24 hrs por dia), de forma sigilosa e sem julgamentos: Disque 188 (https://cvv.org.br/). Continue voltando para acompanhar Corações de Açúcar! ✨',
    pages: CORACOES_DE_ACUCAR_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/09._CORA__ES_DE_A__CAR_bcd7f5d4.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Baby suspeita de Cássian e o confronta sobre sua verdadeira identidae. Cássian confessa que não é a pessoa com quem Baby conversou no aplicativo, e sim, Lana. Baby, então, se revela um ex-investigador particular, e Cássian se sente envergonhado por ter mentido. Lana está em um encontro em uma casa de shows de rock com Edy, um rapaz que ela mal conhece. Lana fica desconfortável com o local e com Edy, que se mostra inconveniente e arruaceiro. Lana encontra Adam, que se revela como guitarrista de uma banda de rock. Edy joga um copo de cerveja no vocalista da banda, causando uma confusão generalizada. Cássian se oferece para Baby, que afirma que ele não é o tipo de cara com quem costuma transar. Cássian manda a real sobre o peso das idealizações que as pessoas projetam nele. "Essa noite, eu só quero ser mais um de seus garotos ou garotas". Lana e Adam fogem da confusão na casa de shows e vão para a mansão de Adam. Lá, Lana tenta tirar a máscara de Adam, o que o deixa furioso e a expulsa de sua casa. Baby leva Cássian para o seu apartamento e os dois terminam o capítulo transando.',
    pages: CORACOES_DE_ACUCAR_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/10._CORA__ES_DE_A__CAR_76ef2a07.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Cássian encontra Bás no jardim da Mansão Avelar. Eles conversam, e Cássian percebe a tristeza de Bás, oferecendo-lhe apoio emocional e o encoraja a reconhecer suas imperfeições e procurar ajuda. Lana testemunha uma cena íntima entre Adam e Dafne após Adam tentar se desculpar pela grosseria anterior. Cássian encontra Alesso desmaiado em uma praça e o leva para sua casa. Os dois têm uma conversa reveladora, sobre traumas e inseguranças. Leocádia, mãe de Bás, expressa arrependimento por ter julgado Cássian e decide convidá-lo para jantar. Baby vai à casa de Cássian, para sua surpresa. Um momento íntimo é interrompido pela chegada inesperada de Bás, criando um clima de rivalidade. Paralelamente, Levi, embriagado, revela um segredo sobre seu passado com Adam.',
    pages: CORACOES_DE_ACUCAR_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/11._CORA__ES_DE_A__CAR_ba59b9b5.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'Cássian vai jantar na casa de Bás, onde Leocádia, a mãe de Bás, pede desculpas a Cássian por seu comportamento anterior e o acolhe. Bonjo descobre sobre a recuperação de Bás e de sua reaproximação com Cássian. Bonjo planeja uma emboscada para Cássian. Alesso reprova seus planos violentos, mas Bonjo segue determinado. Lana revela para Cássian que está apaixonada por Adam. No dia seguinte, Lana pede demissão da La Belle, deixando Adam desolado. Levi diz para Dafne que não se lembra do que disse na noite anterior. Bás vai à clínica onde Cássian trabalha, usando Plutão como desculpa, mas confessa que queria ver o rapaz. Alesso escuta Bonjo falar ao telefone sobre dar uma surra em Cássian. Horrorizado, ele arquiteta acabar com o plano do pai. Cássian e Bás desfrutam de um passeio de canoa romântico em um parque. Baby, durante sua corrida, flagra o momento dos dois.',
    pages: CORACOES_DE_ACUCAR_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/12._CORA__ES_DE_A__CAR_e7d78136.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'Cássian tem um sonho sugestivo envolvendo Bás e Baby. Sara percebe que Bás está apaixonado por Cássian, o que o deixa aflito. Ela o incentiva a admitir seus sentimentos, mesmo correndo o risco de ser egoísta, já que Cássian está seguindo em frente com a vida. Enquanto isso, Alesso salva Cássian dos capangas de Bonjo. Bonjo invade o apartamento dele e descobre que ele tem uma grande quantia de dinheiro. Baby aparece na casa de Cássian embriagado, expressando seu amor por ele. Bás decide ir falar com Cássian e admitir seus sentimentos. Cássian tenta esconder Baby de Lana. Os capangas de Bonjo invadem a casa de Cássian e o agridem.',
    pages: CORACOES_DE_ACUCAR_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/13._CORA__ES_DE_A__CAR_c9f0373a.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Baby salva Cássian dos agressores e descobre que Bonjo Monteg os mandou. Alesso revela a verdade a respeito de seu pai à família Avelar. Confessa também que seu relacionamento com Bás foi motivado por interesse financeiro, devido às dívidas de jogo de Bonjo. Adam diz a Lana que está apaixonado por ela, mas Dafne atrapalha a reconciliação do casal. Leocádia vai à empresa de Bonjo e o confronta sobre suas ações, agredindo-o e o ameaçando. Dafne encontra Adam e revela que Levi foi quem causou o incêndio que matou a mãe deles. Adam dá uma surra em Levi. Levi arranca a máscara de Adam, revelando seu rosto desfigurado para todos. Bonjo aparece no apartamento de Alesso e mostra vídeos antigos de Ana Laura e pede dinheiro ao filho em troca das memórias da mãe. Baby expressa seus sentimentos por Cássian, confessando que está apaixonado por ele e o pedindo em namoro. Momentos depois, Bás também chega e, demonstrando sua preocupação e amor, pede Cássian em namoro, deixando Cássian em uma encruzilhada de sentimentos.',
    pages: CORACOES_DE_ACUCAR_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/14._CORA__ES_DE_A__CAR_032e6859.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15 (Penúltimo)',
    summary:
      'Bás e Baby deixam claras suas intenções com Cássian, que pede tempo para processar seus sentimentos até sua formatura. Bás pede que, se for o escolhido, Cássian o encontre no parque perto da ponte; Baby pede que o encontre no mirante. Lana acolhe Adam após a verdade sobre Levi vir à tona, e retira com ternura a máscara de seu rosto, selando o amor dos dois. Levi recebe o pedido de divórcio de Dafne. Romano nomeia Adam Vice-Presidente da La Belle. Alesso entrega o dinheiro para Bonjo na antiga mansão em troca dos DVDs de memórias da mãe, mas é desprezado pelo pai. Na colação de grau, Cássian é o orador da turma e emociona a todos com seu discurso sobre tempo e escolhas. Cássian toma sua decisão e vai ao parque ao encontro de Bás.',
    pages: CORACOES_DE_ACUCAR_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/15._CORA__ES_DE_A__CAR_d62c6f56.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16 (Último Capítulo)',
    summary:
      'Confira as emoções do último capítulo de "Corações de Açúcar" e o crossover com a nova novela da estúdio, "Terra de Bravos". Cássian e Bás se beijam no parque, mas percebem que o amor entre eles se ressignificou em uma profunda e verdadeira amizade. Bás incentiva Cássian a ir atrás de Baby. Cássian corre e encontra Baby na rodovia, onde os dois se beijam apaixonadamente no trânsito (presenciado por Miguel, protagonista de "Terra de Bravos", a caminho do velório do avô). Sara conhece Guilhermino em um pequeno café. Leocádia procura Alesso antes de sua partida e lhe entrega o verdadeiro diário e um vídeo inédito gravado de sua mãe Ana Laura, revelando que ele tem tios humildes (Carlos e Merlie) em Graçaville para recomeçar. Lana e Adam celebram o amor juntos. Bás saboreia um sorvete no parque, em paz e pronto para o futuro.',
    pages: CORACOES_DE_ACUCAR_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/16._CORA__ES_DE_A__CAR_db994c51.pdf',
  },
];

export const CORACOES_DE_ACUCAR_EPISODES: ChapterEpisode[] = CORACOES_DE_ACUCAR_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
