export type Platform = 'NES' | 'SNES';

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
