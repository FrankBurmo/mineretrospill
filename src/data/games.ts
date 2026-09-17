export { nesGames } from './nes';
export { snesGames } from './snes';
export { megaDriveGames } from './mega-drive';
export { masterSystemGames } from './master-system';
export { gameBoyGames } from './game-boy';

import { nesGames } from './nes';
import { snesGames } from './snes';
import { megaDriveGames } from './mega-drive';
import { masterSystemGames } from './master-system';
import { gameBoyGames } from './game-boy';

export const allGames = [...nesGames, ...snesGames, ...megaDriveGames, ...masterSystemGames, ...gameBoyGames];
