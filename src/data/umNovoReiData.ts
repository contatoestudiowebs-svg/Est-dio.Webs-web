import { UM_NOVO_REI_EPISODE_01_PAGES } from './umNovoReiEpisodes/episode01';
import { UM_NOVO_REI_EPISODE_02_PAGES } from './umNovoReiEpisodes/episode02';
import { UM_NOVO_REI_EPISODE_03_PAGES } from './umNovoReiEpisodes/episode03';
import { UM_NOVO_REI_EPISODE_04_PAGES } from './umNovoReiEpisodes/episode04';
import { UM_NOVO_REI_EPISODE_05_PAGES } from './umNovoReiEpisodes/episode05';
import { UM_NOVO_REI_EPISODE_06_PAGES } from './umNovoReiEpisodes/episode06';
import { UM_NOVO_REI_EPISODE_07_PAGES } from './umNovoReiEpisodes/episode07';
import { UM_NOVO_REI_EPISODE_08_PAGES } from './umNovoReiEpisodes/episode08';
import { UM_NOVO_REI_EPISODE_09_PAGES } from './umNovoReiEpisodes/episode09';
import { UM_NOVO_REI_EPISODE_10_PAGES } from './umNovoReiEpisodes/episode10';
import { UM_NOVO_REI_EPISODE_11_PAGES } from './umNovoReiEpisodes/episode11';
import { ChapterEpisode } from '../types';

export interface UmNovoReiEpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const UM_NOVO_REI_1_EPISODES_RAW: UmNovoReiEpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01',
    summary:
      'Emma paga a parteira para matar a rainha e dar um fim ao seu bebê. Emma conta ao Rei Domenico que sua rainha e seu herdeiro morreram. Emma ordena que joguem o bebê na floresta. Ela se aproveita da fragilidade do rei e o beija. Domenico apresenta Emma como a nova rainha de Mont-Ar.',
    pages: UM_NOVO_REI_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP1_f2681108.pdf',
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02',
    summary:
      'Emma encontra-se com Dalibor, ele entrega a ela um líquido para fazer o rei perder os sentidos. Na noite de núpcias, Emma põe o líquido na bebida do rei e o mata cravando a faca no peito dele.',
    pages: UM_NOVO_REI_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP2_c6374a06.pdf',
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03',
    summary:
      'Emma anunicar ser a nova rainha e mostra a cabeça do rei. Seu cavalheiros tomam Mont-Ar. Helena vai até a plantação e encontra Dmitri lá, os dois conversam. Elena volta por dias para encontrar Dmitri e não encontra. Emma e Dalibor brigam por ela ignorar o herdeiro do trono.',
    pages: UM_NOVO_REI_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP3.doc_0d0f2db1.pdf',
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04',
    summary:
      'Lutero envia homens para fazer um acordo com Emma. Aldith acorda os meninos do cortiço. Dmitri conta com ajuda do amigo para fugir do cortiço. Dmitri vai novamente a fazenda de Jocosa e encontra-se com Elena. Dalibor conta a Emma que dois homens aproxima-se de Mont-Ar a mando do rei Lutero. Dmitri e Elena andam pela plantação quando percebem que cavalheiros da rainha estão por lá. O cavaleiro ver algo e aproxima-se dois dois, Dmitri e Eleona ficam com medo de serem descobertos.',
    pages: UM_NOVO_REI_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP4.doc_f95aef25.pdf',
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05',
    summary:
      'O cavaleiro desiste de procurar os dois. Ao passar pela cerca, Dmitri rasga a camisa. Dalibor avisa a Emma que os homens de Lutero chegaram ao castelo. Dmitri e Elena vão até o castelo, a pedido dela, os dois entram lá pelo esgoto. Emma conversa com os homens. Emma recusa a proposta do rei Lútero. Emma vê o sinal nas costas de Dmitri e nota que é igual ao que o rei Domenico tinha, ela dá ordens para capiturar Dmitri. Ele e Elena são capturados pelos guardas.',
    pages: UM_NOVO_REI_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP5_0aa2bbad.pdf',
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06',
    summary:
      'Emma conta a Dmitri que ele é filho do rei e herdeiro de Mont-Ar. Milo conta ao rei Lútero que a rainha recusou a proposta, e conta que ela capiturou o principe de Mont-Ar. Jocosa volta pra casa e não encontra Elena. Dalibor ameaça ir embora de Mont-Ar depois que Emma contou a Dmitri toda verdade.',
    pages: UM_NOVO_REI_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP6_44356fb8.pdf',
  },
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07',
    summary:
      'Emma discute com Dalibor. O rei Lutero conversa com Milo e planeja algo para resgatar Dmitri do castelo. Dalibor muda sua aparencia para de uma criança, ele entra na sela em que está Dmitri e tenta matá-ló. Cavaleiros de Lutero avançam para atacar Mont-Ar, mas Emma ordena que seus homens lançem bolas de fogo contra eles. Dalibor desconfia que o ataque seja uma destração. Emma e Dalibor correm para o calabolço e descobrem que Dmitri e Emma sumiram.',
    pages: UM_NOVO_REI_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP7_9dd81547.pdf',
  },
  {
    number: 8,
    label: 'Episódio 08',
    slug: 'episodio-08',
    title: 'Episódio 08',
    summary:
      'Emma fica irritada com o que fizeram e decide atacar o reino de Lutero. Lutero recebe Dmitri em seu reino, os cavaleiros dele acompanharam Elena ao campo para buscar sua mãe. Lutero pede segredo a Milo sobre Dmitri. Elena volta pra casa pra buscar Jocosa e é questionada. Emma e seu exercito saem a caminho do reino de Lutero. Ao chegarem próximo, um mensageiro de Lutero levam um recado do rei a Emma, ela aceita conversar com o rei. ELe fala algo sussurando no ouvido dela.',
    pages: UM_NOVO_REI_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP8_722ded51.pdf',
  },
  {
    number: 9,
    label: 'Episódio 09',
    slug: 'episodio-09',
    title: 'Episódio 09',
    summary:
      'Depois de ouvir o que Lutero falou, Emma decide recuar. Ao chegarem a Mont-Ar, Dalibor questiona porque Emma recuou e os dois discutem. Jocosa conhece Dmitri. O Rei Lutero dá boas vindas para Elena e sua mãe. Anos de passam, Dmitri e Elena tonam-se jovens adultos. Ainda refém da chantagem de Lutero, Emma pensa em infiltrar alguém dentro do reino de Lutero para matar Dmitri. Dalibor se disfarça de mercador e consegue acesso ao castelo. Dalibor ataca Dmitri, mas é golpeado e morre.',
    pages: UM_NOVO_REI_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP09_1547ff99.pdf',
  },
  {
    number: 10,
    label: 'Episódio 10 — Parte 1',
    slug: 'episodio-10-parte-1',
    title: 'Episódio 10 (Parte 1)',
    summary:
      'Dmitri e Lutero partem para Mont-Ar. Emma é avisada da aproximação dos homens de Lutero. O exercito de Emma ataca com bolas de fogo. Uma guerra é travada. Elena, Dmitri e os cavaleiros de Lutero passam a ter vantagem sobre os cavaleiros de Emma. Dmitri para e olha para cima encarando Emma, eles ficam olhando-se por alguns segundos, em seguida ela entra no castelo saindo da sacada, enquanto ele volta a enfrentar os homens. Com a ajuda dos outros, Dmitri consegue entrar no castelo. Dmitri fica frente à frente com Emma.',
    pages: UM_NOVO_REI_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP10_-_PARTE_I_412c93e8.pdf',
  },
  {
    number: 11,
    label: 'Episódio 10 — Parte 2 (Final)',
    slug: 'episodio-10-parte-2',
    title: 'Episódio 10 (Parte 2 — Final)',
    summary:
      'Confira os desfechos dos personagens da web série Um Novo Rei.',
    pages: UM_NOVO_REI_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/UM_NOVO_REI.EP10_-_PARTE_II_9a375e21.pdf',
  },
];

export const ALL_UM_NOVO_REI_1_EPISODES_RAW: UmNovoReiEpisodeDef[] = UM_NOVO_REI_1_EPISODES_RAW;

export const UM_NOVO_REI_1_EPISODES: ChapterEpisode[] = ALL_UM_NOVO_REI_1_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
