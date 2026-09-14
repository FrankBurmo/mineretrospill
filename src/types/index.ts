export type Platform = 'NES' | 'SNES' | 'MegaDrive' | 'MasterSystem' | 'GameBoy';

export type EditionCode =
  | 'SCN'
  | 'EUR'
  | 'UK'
  | 'USA'
  | 'CAN'
  | 'JPN'
  | 'KOR'
  | 'ASIA'
  | 'AUS'
  | 'NZL'
  | 'BRA'
  | 'WORLD';

export const EDITION_OPTIONS: ReadonlyArray<{ code: EditionCode; label: string }> = [
  { code: 'SCN', label: 'SCN - Skandinavia' },
  { code: 'EUR', label: 'EUR - Europa' },
  { code: 'UK', label: 'UK - Storbritannia' },
  { code: 'USA', label: 'USA - USA' },
  { code: 'CAN', label: 'CAN - Canada' },
  { code: 'JPN', label: 'JPN - Japan' },
  { code: 'KOR', label: 'KOR - Korea' },
  { code: 'ASIA', label: 'ASIA - Asia' },
  { code: 'AUS', label: 'AUS - Australia' },
  { code: 'NZL', label: 'NZL - New Zealand' },
  { code: 'BRA', label: 'BRA - Brasil' },
  { code: 'WORLD', label: 'WORLD - Verdensutgave' },
];

export interface Game {
  id: string;
  title: string;
  platform: Platform;
  year?: number;
  genre?: string;
}

export interface GameEdition {
  id: string;
  editionCode: EditionCode;
}

export interface UserLibrary {
  version: 2;
  games: Record<string, GameEdition[]>;
}
