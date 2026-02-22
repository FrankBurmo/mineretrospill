export type Platform = 'NES' | 'SNES' | 'MegaDrive' | 'MasterSystem' | 'GameBoy';

export interface Game {
  id: string;
  title: string;
  platform: Platform;
  year?: number;
  genre?: string;
}

export interface UserLibrary {
  [gameId: string]: boolean;
}
