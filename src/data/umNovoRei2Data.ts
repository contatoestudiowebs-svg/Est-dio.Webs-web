import { UM_NOVO_REI_2_EPISODE_01_PAGES } from './umNovoRei2Episodes/episode01';
import { UM_NOVO_REI_2_EPISODE_02_PAGES } from './umNovoRei2Episodes/episode02';
import { UM_NOVO_REI_2_EPISODE_03_PAGES } from './umNovoRei2Episodes/episode03';
import { UM_NOVO_REI_2_EPISODE_04_PAGES } from './umNovoRei2Episodes/episode04';
import { UM_NOVO_REI_2_EPISODE_05_PAGES } from './umNovoRei2Episodes/episode05';
import { UM_NOVO_REI_2_EPISODE_06_PAGES } from './umNovoRei2Episodes/episode06';
import { UM_NOVO_REI_2_EPISODE_07_PAGES } from './umNovoRei2Episodes/episode07';
import { UM_NOVO_REI_2_EPISODE_08_PAGES } from './umNovoRei2Episodes/episode08';
import { UM_NOVO_REI_2_EPISODE_09_PAGES } from './umNovoRei2Episodes/episode09';
import { UM_NOVO_REI_2_EPISODE_10_PAGES } from './umNovoRei2Episodes/episode10';
import { UM_NOVO_REI_2_EPISODE_11_PAGES } from './umNovoRei2Episodes/episode11';
import { UM_NOVO_REI_2_EPISODE_12_PAGES } from './umNovoRei2Episodes/episode12';
import { ChapterEpisode } from '../types';

export interface UmNovoRei2EpisodeDef {
  number: number;
  label: string;
  slug: string;
  title: string;
  summary: string;
  pages: string[];
  pdfUrl?: string;
}

export const UM_NOVO_REI_2_EPISODES_RAW: UmNovoRei2EpisodeDef[] = [
  {
    number: 1,
    label: 'Episódio 01',
    slug: 'episodio-01',
    title: 'Episódio 01',
    summary:
      'Dmitri joga o corpo de Emma na fogueira. Patrick entrega o livro de Emma a Dmitri. Elena dá à luz ao primeiro filho. Cavaleiros de são encontrados enforcados na floresta.Elena dá à luz ao segundo filho. Durante a cerimônia no castelo, Elena passa mal causando preocupação em todos. Uma curandeira é trazida ao reino. Dmitri é chamado após a piora de Elena. Patrick e os cavaleiros trazem uma moça presa. Elena tem um pesadelo terrível com Emma, e morre.',
    pages: UM_NOVO_REI_2_EPISODE_01_PAGES,
    pdfUrl: '/assets/aistudio/EP01-UM_NOVO_REI-2.pdf',
  },
  {
    number: 2,
    label: 'Episódio 02',
    slug: 'episodio-02',
    title: 'Episódio 02',
    summary:
      'Acontece o sepultamento de Elena. Dmitri lembra que Roseta é um amor do passado. Dmitri e Patrick encontram novos homens enforcados no velho carvalho. Aldara reconhece Roseta e fica intrigada. Dmitri se declara para Roseta. Uma voz fala à mente de Alexandre para ele encontrar o livro. Aldara confronta Roseta e diz que a conhece.',
    pages: UM_NOVO_REI_2_EPISODE_02_PAGES,
    pdfUrl: '/assets/aistudio/EP02-UM_NOVO_REI-2.docx_bb0f3490.pdf',
  },
  {
    number: 3,
    label: 'Episódio 03',
    slug: 'episodio-03',
    title: 'Episódio 03',
    summary:
      'Roseta e Aldara discutem e Roseta mata Aldara. Roseta faz um ritual e entra na cabeça de Alexandre, ele leva Melissa, sua irmã, até o livro. Melissa abre o livro e é possuída por uma bruxa. Dmitri pede ajuda de Roseta no que fazer para livrar Melissa. O homem chega para levar Melissa e o livro. Dmitri ordena que Patrick siga com o Velho para levar Melissa e o livro. Tito, um bruxo que vive escondido em Mont-Ar encontra o corpo de Aldara e descobre que ela foi morta por uma maldição lançada por Roseta.',
    pages: UM_NOVO_REI_2_EPISODE_03_PAGES,
    pdfUrl: '/assets/aistudio/EP03-UM_NOVO_REI-2.docx_6992b803.pdf',
  },
  {
    number: 4,
    label: 'Episódio 04',
    slug: 'episodio-04',
    title: 'Episódio 04',
    summary:
      'Dmitri fica preocupado com Meissa e Roseta o consola. Patrick, o Velho sábio e os Cavaleiros chegam ao velho carvalho. Tito se infiltra na cozinha do castelo. Na floresta, Patrick e os cavaleiros são atacados. Tito confronta Roseta sobre a morte de Aldara. Roseta lança uma maldição contra Patrick e os Cavaleiros. O corpo de Aldara é encontrado. A maldição alcança Patrick e os Cavaleiros que desmaia sem força. Tito conta a Dmitri que Roseta é bruxa. Roseta foge de Mont-Ar.',
    pages: UM_NOVO_REI_2_EPISODE_04_PAGES,
    pdfUrl: '/assets/aistudio/EP04-UM_NOVO_REI-2.docx_12a5d29c.pdf',
  },
  {
    number: 5,
    label: 'Episódio 05',
    slug: 'episodio-05',
    title: 'Episódio 05',
    summary:
      'Patrick acorda e encontra Melissa livre da bruxa e descobre que o velho e o livro sumiram. Roseta chega ao velho carvalho e lança a morte contra Tito. A morte alcança Tito. Patrick volta a Mont-Ar trazendo Melissa e conta a Dmitri o que aconteceu. Gabriel e Rafael encontram o livro de Emma. Dmitri decide ir em busca do livro, mas Patrick o convence a não ir. Roseta encontra Gabriel e Rafael no rio. Ela usa palavras e entra na cabeça de Rafael que abre o livro e lê a página que liberta Emma.',
    pages: UM_NOVO_REI_2_EPISODE_05_PAGES,
    pdfUrl: '/assets/aistudio/EP05-UM_NOVO_REI-2.docx_aa00c28b.pdf',
  },
  {
    number: 6,
    label: 'Episódio 06',
    slug: 'episodio-06',
    title: 'Episódio 06',
    summary:
      'Emma mata os rapazes. Roseta se transforma e revela-se Dalibor. Emma e Dalibor conversam. Emma ataca a Patrick e aos cavaleiros. Poucos homens retornam a Mont-Ar e contam que Patrick morreu. Os cavaleiros apresentam Roseta como cativa. No dia seguinte, Dmitri condena Roseta a morte e acaba tendo uma grande surpresa. Emma e Dalibor surgem na saca do castelo com os filhos de Dmitri presos.',
    pages: UM_NOVO_REI_2_EPISODE_06_PAGES,
    pdfUrl: '/assets/aistudio/EP06-UM_NOVO_REI-2.docx_001df977.pdf',
  },
  {
    number: 7,
    label: 'Episódio 07',
    slug: 'episodio-07',
    title: 'Episódio 07',
    summary:
      'Emma e Dmitri têm um forte embate e Emma mata Dmitri. Alexandre e Melissa são aprisionados no calabouço. Anos passam e Emma se mantém soberana em Mont-Ar. Cansado de ser subordinado e não ter reconhecimento, Dalibor discute com Emma e discordam de suas ideias. Dalibor liberta Melissa e Alexandre e os ajudam a fugir, o que deixa Emma irritada.',
    pages: UM_NOVO_REI_2_EPISODE_07_PAGES,
    pdfUrl: '/assets/aistudio/EP07-UM_NOVO_REI-2.docx_9bd80e95.pdf',
  },
  {
    number: 8,
    label: 'Episódio 08',
    slug: 'episodio-08',
    title: 'Episódio 08',
    summary:
      'Com a ajuda de Dalibor, Melissa e Alexandre vão pedir abrigo em Eldoria, reino que era de Lutero. Dalibor explica a o rei Tiro, Alexandre e a Melissa como derrotar Emma. Dalibor se prepara para votar à Mont-Ar, Melissa o segue escondida. Dalibor desfaz a magia que protege o livro. Ao chegar em Mont-Ar ele e Emma se enfrentam e ela o mata. Emma captura Melissa. Agenor conta ao rei Tiro sobre a prisão de Melissa. Uma forte batalha acontece entre os cavaleiros do rei Tiro e os cavaleiros sombrios. Melissa tenta roubar o livro, mas é pega por Emma.',
    pages: UM_NOVO_REI_2_EPISODE_08_PAGES,
    pdfUrl: '/assets/aistudio/EP08-UM_NOVO_REI-2.docx_10df6e89.pdf',
  },
  {
    number: 9,
    label: 'Episódio 09',
    slug: 'episodio-09',
    title: 'Episódio 09',
    summary:
      'Tiro vence a batalha contra Emma, que recua seus cavaleiros. Um homem misterioso ajuda Melissa a fugir do calabouço de Mont-Ar. Emma descobre que Melissa fugiu. Melissa chega a Eldoria. O Velho sábio aparece em Mont-Ar e diz que vai ajudar Emma. Melissa entrega o livro ao rei Tiro, mas percebe que é o livro errado. Emma ataca o reino de Eldoria com fogo.',
    pages: UM_NOVO_REI_2_EPISODE_09_PAGES,
    pdfUrl: '/assets/aistudio/EP09-UM_NOVO_REI-2.docx_f4afd803.pdf',
  },
  {
    number: 10,
    label: 'Episódio 10',
    slug: 'episodio-10',
    title: 'Episódio 10',
    summary:
      'Tiro ao lado de Alexandre, Agenor e Melissa, avalia os estragos causados pelo ataque de Emma. Emma volta a Mont-Ar e flagra o Velho com seu livro. Ele faz exigências a ela. Alexandre se culpa pelo ataque de Emma à Eldoria. Tiro pede a Agenor para ajudar o povo de Eldoria. Emma pede que preparem um grande banquete.  Alexandre diz a Melissa que vai voltar a Mont-Ar para enfrentar Emma. Emma mata o Velho e pega o livro.',
    pages: UM_NOVO_REI_2_EPISODE_10_PAGES,
    pdfUrl: '/assets/aistudio/EP10-UM_NOVO_REI-2.docx_51e6954c.pdf',
  },
  {
    number: 11,
    label: 'Episódio 11',
    slug: 'episodio-11',
    title: 'Episódio 11',
    summary:
      'Melissa conta a Tiro que Alexandre foi enfrentar Emma. Tiro parte com seus cavaleiros para Mont-Ar. Alexandre invade o castelo escondido em uma carroça. Emma prepara seus cavaleiros sombrios para a batalha. Melissa e Agatha fogem de Eldoria rumo a Mont-Ar. Tiro e seus homens enfrentam os cavaleiros de Emma em meio à névoa. Melissa e Agatha entram no castelo pelos esgotos. Emma e Alexandre se encontram nos corredores, iniciando o confronto.',
    pages: UM_NOVO_REI_2_EPISODE_11_PAGES,
    pdfUrl: '/assets/aistudio/EP11-UM_NOVO_REI-2.docx_88fd44ed.pdf',
  },
  {
    number: 12,
    label: 'Episódio 12',
    slug: 'episodio-12',
    title: 'Episódio 12 (Final)',
    summary:
      'Alexandre enfrenta Emma no castelo enquanto Melissa e Agatha tentam encontrar um feitiço no livro. A batalha entre os cavaleiros de Tiro e os cavaleiros sombrios se intensifica. Melissa e Agatha descobrem um feitiço e enfraquecem Emma. Alexandre mata Emma e seus cavaleiros desaparecem. Mont-Ar é libertada. Tiro coroa Alexandre rei e Melissa princesa. Tiro, Agatha e Agenor se despedem e retornam a Eldoria. Alexandre decide entregar o livro de Emma à igreja. Um ano depois, ele entrega o livro a um padre.',
    pages: UM_NOVO_REI_2_EPISODE_12_PAGES,
    pdfUrl: '/assets/aistudio/EP12-UM_NOVO_REI-2.docx_bcfc98f9.pdf',
  },
];

export const ALL_UM_NOVO_REI_2_EPISODES_RAW: UmNovoRei2EpisodeDef[] = UM_NOVO_REI_2_EPISODES_RAW;

export const UM_NOVO_REI_2_EPISODES: ChapterEpisode[] = ALL_UM_NOVO_REI_2_EPISODES_RAW.map((ep) => ({
  number: ep.number,
  label: ep.label,
  slug: ep.slug,
  title: ep.title,
  summary: ep.summary,
  content: ep.pages.length > 0 ? ep.pages.join('\n\n--- PÁGINA SEGUINTE ---\n\n') : '',
  pdfPages: ep.pages,
  pdfUrl: ep.pdfUrl,
}));
