import { CAMINHO_AO_PODER_EPISODE_01_PAGES } from './caminhoAoPoderEpisodes/episode01';
import { CAMINHO_AO_PODER_EPISODE_02_PAGES } from './caminhoAoPoderEpisodes/episode02';
import { CAMINHO_AO_PODER_EPISODE_03_PAGES } from './caminhoAoPoderEpisodes/episode03';
import { CAMINHO_AO_PODER_EPISODE_04_PAGES } from './caminhoAoPoderEpisodes/episode04';
import { CAMINHO_AO_PODER_EPISODE_05_PAGES } from './caminhoAoPoderEpisodes/episode05';
import { CAMINHO_AO_PODER_EPISODE_06_PAGES } from './caminhoAoPoderEpisodes/episode06';
import { CAMINHO_AO_PODER_EPISODE_07_PAGES } from './caminhoAoPoderEpisodes/episode07';
import { CAMINHO_AO_PODER_EPISODE_08_PAGES } from './caminhoAoPoderEpisodes/episode08';
import { CAMINHO_AO_PODER_EPISODE_09_PAGES } from './caminhoAoPoderEpisodes/episode09';
import { CAMINHO_AO_PODER_EPISODE_10_PAGES } from './caminhoAoPoderEpisodes/episode10';
import { ChapterEpisode } from '../types';

export interface CaminhoAoPoderEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const CAMINHO_AO_PODER_EPISODES_RAW: CaminhoAoPoderEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01 — A Ascensão de Evelyn Harper',
    summary:
      'Evelyn Harper é anuncia candidatura a presidência dos Estados Unidos. Meses antes o partido discute o lançamento de alguém para concorrer a presidência. John conversa com sua esposa, Melissa Carter sobre a decisão do partido de lançar alguém para concorrer a presidência. Melisa convida a secretária de seu marido para almoçar e descobre que ele teve um caso com Evelyn Harper. Evelyn Harper convida Melissa para tomar um café. No encontro delas para tomar café, Evelyn convida Melissa para ser sua assessora na campanha.',
    pages: CAMINHO_AO_PODER_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/Caminho_ao_Poder_EP_.01.docx_84b49bb8.pdf',
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02 — O Jogo Sujo Começa',
    summary:
      'Melissa aceita ser assessora da campanha de Evelyn Harper. Melissa conversa com uma amiga jornalista e começa a manipular informações sobre os adversários de Evelyn, criando uma rede de falsidades e intrigas para enfraquecer os oponentes. Ao mesmo tempo, ela investiga as fraquezas pessoais de Evelyn e começa a planejar como usá-las a seu favor, caso a candidata se torne um obstáculo. Paralelamente, Evelyn lida com crises internas em sua campanha, que começam a questionar suas políticas e estratégias. Uma mensagem anônima sugere que há algo de estranho por trás da lealdade de Melissa.',
    pages: CAMINHO_AO_PODER_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/Caminho_ao_Poder_EP_.02.docx_30198174.pdf',
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03 — A Trilha da Ambição',
    summary:
      'Em uma viagem de campanha, Evelyn é confrontada por um jornalista investigativo, Dylan Richards, que afirma ter descoberto detalhes comprometedores sobre Melissa. Embora inicialmente cética, Evelyn começa a ter dúvidas sobre sua assessora. Enquanto isso, Melissa tenta se aproximar ainda mais de aliados políticos chave, incluindo alguns empresários poderosos que podem financiar a campanha. Uma negociação secreta entre Melissa e um magnata da mídia é descoberto, mas ela consegue manipular a situação para que Evelyn seja vista como a "vítima" de um ataque político. Evelyn se encontra com Margaret Lowson e pede seu apoio.',
    pages: CAMINHO_AO_PODER_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/Caminho_ao_Poder_EP_.03.docx_883e13a5.pdf',
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04 — O Jogo Sujo Começa',
    summary:
      'Evelyn começa a perceber que algo está errado. Em uma reunião com sua equipe de campanha, ela ouve sobre uma série de movimentações suspeitas de Melissa, incluindo a manipulação de dados financeiros e a criação de um "fundo secreto" para beneficiar interesses particulares. Evelyn tenta confrontar Melissa, mas a assessora, sempre estratégica, a convence de que tudo faz parte de um grande plano para garantir a vitória. Enquanto isso, um escândalo envolvendo um de seus oponentes surge, colocando mais pressão na campanha. Rachel Morgan notícia o apoio de Margaret Lowson a Evelyn.',
    pages: CAMINHO_AO_PODER_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/Caminho_ao_Poder_EP_.04.docx_3cb280e5.pdf',
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05 — O Engano da Imagem Pública',
    summary:
      'Melissa orquestra uma série de eventos para criar a imagem de Evelyn como uma heroína política, aproveitando-se de uma crise internacional para fazer com que a candidata se apresente como a única solução para os problemas globais. Evelyn é manipulada para adotar uma postura mais agressiva e controversa em relação à segurança nacional, algo que começa a afastá-la de seus próprios princípios. Dylan Richards, o jornalista, começa a juntar as peças e acredita que Melissa está por trás das ações.',
    pages: CAMINHO_AO_PODER_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/Caminho_ao_Poder_EP_.05.docx_0f949fea.pdf',
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06 — Confronto de Poderes',
    summary:
      'Dylan Richards publica um artigo expondo as manipulações de Melissa, mas a informação é facilmente desacreditada, pois Melissa usa sua influência para moldar a narrativa pública. Evelyn, ainda sem confiar totalmente nas acusações, começa a observar o comportamento de sua assessora com mais atenção. No entanto, Melissa começa a pressionar Evelyn para tomar decisões drásticas e impopulares, preparando o terreno para a realização do próprio plano de poder.',
    pages: CAMINHO_AO_PODER_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/Caminho_ao_Poder_EP_.06.docx_cbc02d54.pdf',
  },
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07 — A Teia de Intrigas',
    summary:
      'Melissa, com sua rede de aliados, começa a garantir apoio financeiro e logístico de empresas e políticos que veem nela uma chance de alcançar o poder. Ao mesmo tempo, ela começa a isolar Evelyn, criando uma imagem pública de que a candidata não tem controle sobre sua própria campanha. Evelyn, em um momento de reflexão, encontra uma pista de que Melissa pode ter sido a responsável por ações ilegais em campanhas passadas, o que a leva a finalmente investigar a assessora. Jack conta a Dylan que viu Melissa na redação conversando com Richard.',
    pages: CAMINHO_AO_PODER_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/Caminho_ao_Poder_EP_.07.docx_286e12cd.pdf',
  },
  {
    number: 8,
    label: 'Episódio 08',
    slug: 'episodio-08',
    title: 'Episódio 08 — A Verdade Revelada',
    summary:
      'Lara mostra a Evelyn tudo o que descobriu sobre Melissa. Evelyn confronta Melissa de maneira direta, e a verdade vem à tona: Melissa tem planos de se tornar a vice-presidente e usar Evelyn como uma marionete para garantir seu próprio poder no governo. A revelação abala profundamente a campanha, mas Melissa, com sua habilidade de manipulação, tenta reverter a situação, criando um cenário de crise e tentando colocar Evelyn contra seu próprio partido. Evelyn participa do debate na TV mediado por Rachel Morgan, Evelyn se sai bem diante das acusações sobre Melissa.',
    pages: CAMINHO_AO_PODER_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/Caminho_ao_Poder_EP_.08.docx_85e606b0.pdf',
  },
  {
    number: 9,
    label: 'Episódio 09',
    slug: 'episodio-09',
    title: 'Episódio 09 — A Última Jogada',
    summary:
      'Com a campanha prestes a desmoronar, Evelyn precisa lidar com as consequências da traição de Melissa. Ela reúne sua equipe e decide que, em vez de lutar nas sombras, enfrentará a verdade publicamente. Melissa, sabendo que está sendo encurralada, joga sua última carta: ameaça divulgar segredos comprometedores sobre a vida pessoal de Evelyn para arruinar sua carreira de uma vez por todas. Evelyn precisa tomar uma decisão crucial entre proteger sua reputação ou expor Melissa de vez.',
    pages: CAMINHO_AO_PODER_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/Caminho_ao_Poder_EP_.09.docx_6219b881.pdf',
  },
  {
    number: 10,
    label: 'Episódio 10',
    slug: 'episodio-10',
    title: 'Episódio 10 — O Julgamento do Povo',
    summary:
      'No final, com a ajuda de Dylan Richards, que revela provas concretas das manipulações de Melissa, Evelyn expõe todo o plano de sua assessora em rede nacional durante o comício de encerramento da campanha. O público se volta contra Melissa, e Evelyn, embora abalada pela traição, ganha a confiança do povo por sua transparência. O desfecho da corrida presidencial é marcado pela vitória de Evelyn, que, apesar das cicatrizes, chega ao poder com a certeza de que a verdade sempre prevalece sobre a ambição desmedida.',
    pages: CAMINHO_AO_PODER_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/Caminho_ao_Poder_EP_.10.docx_04750832.pdf',
  },
];

export const CAMINHO_AO_PODER_EPISODES: ChapterEpisode[] = CAMINHO_AO_PODER_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n'),
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
