import { TERRA_DE_BRAVOS_EPISODE_01_PAGES } from './terraDeBravosEpisodes/episode01';
import { TERRA_DE_BRAVOS_EPISODE_02_PAGES } from './terraDeBravosEpisodes/episode02';
import { TERRA_DE_BRAVOS_EPISODE_03_PAGES } from './terraDeBravosEpisodes/episode03';
import { TERRA_DE_BRAVOS_EPISODE_04_PAGES } from './terraDeBravosEpisodes/episode04';
import { TERRA_DE_BRAVOS_EPISODE_05_PAGES } from './terraDeBravosEpisodes/episode05';
import { TERRA_DE_BRAVOS_EPISODE_06_PAGES } from './terraDeBravosEpisodes/episode06';
import { TERRA_DE_BRAVOS_EPISODE_07_PAGES } from './terraDeBravosEpisodes/episode07';
import { TERRA_DE_BRAVOS_EPISODE_08_PAGES } from './terraDeBravosEpisodes/episode08';
import { TERRA_DE_BRAVOS_EPISODE_09_PAGES } from './terraDeBravosEpisodes/episode09';
import { TERRA_DE_BRAVOS_EPISODE_10_PAGES } from './terraDeBravosEpisodes/episode10';
import { TERRA_DE_BRAVOS_EPISODE_11_PAGES } from './terraDeBravosEpisodes/episode11';
import { TERRA_DE_BRAVOS_EPISODE_12_PAGES } from './terraDeBravosEpisodes/episode12';
import { TERRA_DE_BRAVOS_EPISODE_13_PAGES } from './terraDeBravosEpisodes/episode13';
import { TERRA_DE_BRAVOS_EPISODE_14_PAGES } from './terraDeBravosEpisodes/episode14';
import { TERRA_DE_BRAVOS_EPISODE_15_PAGES } from './terraDeBravosEpisodes/episode15';
import { TERRA_DE_BRAVOS_EPISODE_16_PAGES } from './terraDeBravosEpisodes/episode16';
import { ChapterEpisode } from '../types';

export interface TerraDeBravosEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const TERRA_DE_BRAVOS_EPISODES_RAW: TerraDeBravosEpisodeDef[] = [
  {
    number: 1,
    label: 'Capítulo 01',
    slug: 'capitulo-01',
    title: 'Capítulo 01',
    summary:
      'Joaquim Monteiro toma a Fazenda do Brejo à força, expulsando os Ferraz. Dona Eulália, esposa de Joaquim, se cala diante da injustiça. Um filho bastardo nasce de uma relação proibida entre Joaquim e a sobrinha de Agenor Ferraz. Anos depois. Joaquim vê seu Neto Miguel no Brejo com Manuela, ele apenas observa. Quando chega em casa, as coisas de Miguel estão na mala. Joaquim decide mandar Miguel para São Paulo. Joaquim é morto.',
    pages: TERRA_DE_BRAVOS_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo01.docx_f4a061c1.pdf',
  },
  {
    number: 2,
    label: 'Capítulo 02',
    slug: 'capitulo-02',
    title: 'Capítulo 02',
    summary:
      'Miguel retorna ao sertão para o enterro do avô Joaquim Monteiro. Dona Eulália, matriarca dos Monteiro, teme que os Ferraz tentem tomar a Fazenda do Brejo. Miguel conversa com Tonho e Tonho diz que a morte de Joaquim é um mistério. Tonho, capataz dos Monteiro, alerta sobre movimentações estranhas dos Ferraz. José Ferraz discute com o filho, Caio, sobre a antiga dívida dos Monteiro. Eulália jura manter a terra com sangue se for preciso.',
    pages: TERRA_DE_BRAVOS_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo02.docx_ddcd2bb8.pdf',
  },
  {
    number: 3,
    label: 'Capítulo 03',
    slug: 'capitulo-03',
    title: 'Capítulo 03',
    summary:
      'Caio invade uma nascente próxima ao Brejo e Tonho flagra. Miguel conversa com o Delegado Silvério sobre o mistério na morte do avó Jaquim. Miguem busca entender o porque da briga das famílias e Dona Eulália confessa a Miguel que a terra foi tomada à força por Joaquim. Tonho e Caio trocam ameaças. Miguel e Manuela se reencontram escondidos. Manuela conta a Miguel que o avó dele mandou ele embora por descobrir o caso deles.',
    pages: TERRA_DE_BRAVOS_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo03.docx_1d5e0c97.pdf',
  },
  {
    number: 4,
    label: 'Capítulo 04',
    slug: 'capitulo-04',
    title: 'Capítulo 04',
    summary:
      'Tonho convence Miguel a não confiar nos Ferraz. Manuela fica sabendo por Caio, que Miguel voltou para investigar o passado. José Ferraz reúne documentos que supostamente provam a posse da Fazenda do Brejo. Dona Eulália procura o prefeito, que promete apoio político em troca de favores. A tensão entre os trabalhadores da fazenda aumenta e por conta do atraso dos salarios.',
    pages: TERRA_DE_BRAVOS_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo04.docx_c485e9ab.pdf',
  },
  {
    number: 5,
    label: 'Capítulo 05',
    slug: 'capitulo-05',
    title: 'Capítulo 05',
    summary:
      'Tonho tenta manter os peões fiéis, mas um grupo ameaça desertar por falta de pagamento. Miguel procura Dona Zefa, que revela que Joaquim teria expulsado os antigos donos da terra com violência. O juiz local recebe um envelope com dinheiro dos Ferraz. Caio e Miguel discutem na vila. Eulália confronta José Ferraz na missa de domingo.',
    pages: TERRA_DE_BRAVOS_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo05.docx_7446f86b.pdf',
  },
  {
    number: 6,
    label: 'Capítulo 06',
    slug: 'capitulo-06',
    title: 'Capítulo 06',
    summary:
      'Miguel decide continuar investigando e encontra cartas antigas de sua avó. Caio se sente traído por sua irmã Manuela, que defende Miguel. Tonho arma emboscada para impedir os Ferraz de entrarem nas terras. Eulália desconfia que Miguel tenha voltado a se encontrar com Manuela. José Ferraz conversa com Alba sua mulher e planeja tomar o Brejo por vias legais. Um incêndio criminoso destrói parte da plantação dos Monteiros.',
    pages: TERRA_DE_BRAVOS_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo06.docx_a400a747.pdf',
  },
  {
    number: 7,
    label: 'Capítulo 07',
    slug: 'capitulo-07',
    title: 'Capítulo 07',
    summary:
      'A polícia investiga o incêndio e desconfia de Caio. Tonho tenta incriminar os Ferraz. Miguel desconfia que o fogo foi armação dos próprios Monteiro. Manuela e Miguel se encontram e conversam sobre a briga das famílias. Dona Zefa encontra o testamento original de Joaquim, escondido num livro antigo. Dona Eulália briga com Miguel por se envolver com uma Ferraz.',
    pages: TERRA_DE_BRAVOS_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo07.docx_1f85987b.pdf',
  },
  {
    number: 8,
    label: 'Capítulo 08',
    slug: 'capitulo-08',
    title: 'Capítulo 08',
    summary:
      'Miguel encontra fotos de seu avô com a mãe de Caio. Dona Eulália revela que Joaquim teve um filho bastardo com uma Ferraz, que pode ser Caio. Tonho desconfia que Eulália sabe mais do que diz. José Ferraz acusa Eulália de falsificar documentos. Manuela escuta a conversa dos pais e descobre que eles escondem um segredo antigo. O juiz Almeida marca audiência sobre a disputa de terras.',
    pages: TERRA_DE_BRAVOS_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo08.docx_ad9880d8.pdf',
  },
  {
    number: 9,
    label: 'Capítulo 09',
    slug: 'capitulo-09',
    title: 'Capítulo 09',
    summary:
      'Manuela conta a Caio que Alba e José escondem algo do passado dele. Dona Zefa entrega o testamento ao promotor Davi. Tonho ameaça Caio. Caio confronta a mãe sobre sua verdadeira origem. A audiência é adiada após sumiço do promotor. Eulália tenta subornar o delegado. Manuela decide deixar a fazenda do pai. Os peões começam a abandonar os Monteiro. Miguel decide reabrir a escola rural para ganhar apoio da vila.',
    pages: TERRA_DE_BRAVOS_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo09.docx_5fbbf00c.pdf',
  },
  {
    number: 10,
    label: 'Capítulo 10',
    slug: 'capitulo-10',
    title: 'Capítulo 10',
    summary:
      'Caio visita o espaço onde Miguel quer reabrir a escola. Eulália descobre que Tonho tem um dossiê contra ela. José Ferraz exige que Caio tome a Fazenda à força, ele confrota o pai sobre seu passado. Manuela é acolhida por Zefa. Miguel recebe apoio da população. A rádio local começa a noticiar os podres das duas famílias.',
    pages: TERRA_DE_BRAVOS_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo010.docx_5866d57a.pdf',
  },
  {
    number: 11,
    label: 'Capítulo 11',
    slug: 'capitulo-11',
    title: 'Capítulo 11',
    summary:
      'Miguel e Manuela se encontram na casa de Dona Zefa. Tonho ataca um dos peões dos Ferraz. Caio visita o cartório e encontra um segundo testamento. Eulália vai até a rádio e faz ameaças a locultora Ivone por ter falado os segredos na rádio. O Juiz indicia a locultra Ivone por vazar informações das famílias na rádio. Eulália adoece e revela a Miguel que mentiu a vida inteira. Os Ferraz invadem parte da fazenda. O promotor Davi é encontrado amarrado e vendado, ele diz que não sabe o que aconteceu.',
    pages: TERRA_DE_BRAVOS_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo011.docx_3ee3b4c3.pdf',
  },
  {
    number: 12,
    label: 'Capítulo 12',
    slug: 'capitulo-12',
    title: 'Capítulo 12',
    summary:
      'Miguel e Caio se enfrentam no Brejo. Dona Zefa revela a todos que Caio é filho de Joaquim Monteiro. Eulália nega. Manuela enfrenta o pai e o culpa por toda a guerra. O juiz oficializa a abertura do processo de partilha. Tonho foge com documentos da fazenda. Um peão revela que Eulália mandou incendiar a fazenda para culpar os Ferraz. Caio decide ir embora da fazenda dos Ferraz. A radio da Vila é incendiada.',
    pages: TERRA_DE_BRAVOS_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo012.docx_b9027828.pdf',
  },
  {
    number: 13,
    label: 'Capítulo 13',
    slug: 'capitulo-13',
    title: 'Capítulo 13',
    summary:
      'Miguel encontra Tonho escondido no mato. Caio se recusa a assumir a herança dos Monteiro. Manuela diz que quer romper com o passado. José Ferraz é preso por corrupção. A vila comemora a volta da paz. O juiz anuncia que a terra será dividida entre Miguel e Caio. José conta a Caio toda a verdade, e assume que Caio é filho de Alba com Joaquim Ferraz.',
    pages: TERRA_DE_BRAVOS_EPISODE_13_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo013.docx_17049854.pdf',
  },
  {
    number: 14,
    label: 'Capítulo 14',
    slug: 'capitulo-14',
    title: 'Capítulo 14',
    summary:
      'Miguel propõe transformar o Brejo numa cooperativa. Manuela começa projeto de reflorestamento. Tonho retorna e pede perdão, mas é preso por ter mandado as informações para a rádio e ele confessa ter incendidado a rádio. Caio decide vai embora. Dona Eulália enfrenta Miguel por tomar decisões com Caio e ir contra as vontades dela. A chuva volta ao sertão após meses de seca.',
    pages: TERRA_DE_BRAVOS_EPISODE_14_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo014.docx_081032b3.pdf',
  },
  {
    number: 15,
    label: 'Capítulo 15',
    slug: 'capitulo-15',
    title: 'Capítulo 15',
    summary:
      'Miguel e Manuela fazem uma cerimônia simbólica de união. A escola reabre oficialmente. Caio diz que vai estudar agronomia. Dona Eulália confessa todos os crimes, em seguida ela morre. José Ferraz tenta fugir da prisão, mas é impedido pelo Delegado Silvério. Dona Zefa planta a primeira muda do novo pomar. Miguel confrota Tonho depois de descobrir que é filho dele. Tonho é preso.',
    pages: TERRA_DE_BRAVOS_EPISODE_15_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo015.docx_67bbfd2c.pdf',
  },
  {
    number: 16,
    label: 'Capítulo 16',
    slug: 'capitulo-16',
    title: 'Capítulo 16',
    summary:
      'Acontece o enterro de Dona Eulália. Miguel conta sobre seu passado a Manuela. José Ferraz passa por audiência e é liberado. Tonho é condenado pelos crimes que cometeu. Brejo floresce novamente. Miguel e Manuela lideram um mutirão de colheita. Caio retorna para ajudar com o projeto da cooperativa e faz as pazes com Miguel. A vila se torna referência em agricultura sustentável. No túmulo de Joaquim Monteiro, Miguel deixa uma flor e diz: “Agora sim, isso aqui é terra de bravos, e não de guerra”.',
    pages: TERRA_DE_BRAVOS_EPISODE_16_PAGES,
    pdfUrl: '/assets/aistudio/Terra_de_Bravos._Cap_tulo016.docx_d615b270.pdf',
  },
];

export const TERRA_DE_BRAVOS_EPISODES: ChapterEpisode[] = TERRA_DE_BRAVOS_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
