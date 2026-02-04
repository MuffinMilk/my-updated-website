
import { Game, GameCategory } from './types';

export const GAMES: Game[] = [
  {
    id: 'block-jump',
    title: 'Block Jump',
    description: 'Jump over endless obstacles in this high-speed arcade thriller.',
    thumbnail: 'https://picsum.photos/seed/blockjump/400/250',
    category: GameCategory.ARCADE,
    url: 'https://play.unity.com/mg/other/my-webgl-game' 
  },
  {
    id: 'space-invader-2024',
    title: 'Space Invader',
    description: 'Protect the galaxy from waves of pixelated enemies.',
    thumbnail: 'https://picsum.photos/seed/space/400/250',
    category: GameCategory.ACTION,
    url: 'https://rawcdn.githack.com/shiffman/Matrix-Rain/master/index.html' // Example of an external HTML
  },
  {
    id: 'puzzle-master',
    title: 'Sudoku Pro',
    description: 'Challenge your mind with daily sudoku puzzles.',
    thumbnail: 'https://picsum.photos/seed/sudoku/400/250',
    category: GameCategory.PUZZLE,
    url: 'https://rawcdn.githack.com/mrmike/sudoku/master/index.html'
  },
  {
    id: 'pixel-dash',
    title: 'Pixel Dash',
    description: 'Speed through retro environments in this platformer.',
    thumbnail: 'https://picsum.photos/seed/dash/400/250',
    category: GameCategory.ARCADE,
    url: 'https://play.unity.com/mg/other/pixel-platformer'
  },
  {
    id: 'hoop-star',
    title: 'Hoop Star',
    description: 'Master the art of the perfect basketball shot.',
    thumbnail: 'https://picsum.photos/seed/hoop/400/250',
    category: GameCategory.SPORTS,
    url: 'https://rawcdn.githack.com/alvaromontoro/basketball/master/index.html'
  },
  {
    id: 'chess-unblocked',
    title: 'Global Chess',
    description: 'Classic chess for grandmasters and beginners alike.',
    thumbnail: 'https://picsum.photos/seed/chess/400/250',
    category: GameCategory.STRATEGY,
    url: 'https://rawcdn.githack.com/jhlywa/chess.js/master/index.html'
  },
  {
    id: 'snake-retro',
    title: 'Snake Retro',
    description: 'The classic game that started it all.',
    thumbnail: 'https://picsum.photos/seed/snake/400/250',
    category: GameCategory.ARCADE,
    url: 'https://rawcdn.githack.com/pbeun/snake-game/master/index.html'
  },
  {
    id: 'tetris-online',
    title: 'Block Stack',
    description: 'Fit the pieces together and clear the lines.',
    thumbnail: 'https://picsum.photos/seed/tetris/400/250',
    category: GameCategory.PUZZLE,
    url: 'https://rawcdn.githack.com/dionyziz/canvas-tetris/master/index.html'
  }
];
