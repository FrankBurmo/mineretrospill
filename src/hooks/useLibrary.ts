import { useState, useCallback } from 'react';
import type { EditionCode, GameEdition, UserLibrary } from '../types';

const STORAGE_KEY = 'mineretrospill-library';

function isEdition(value: unknown): value is GameEdition {
  return typeof value === 'object'
    && value !== null
    && typeof (value as GameEdition).id === 'string'
    && typeof (value as GameEdition).editionCode === 'string';
}

function isLibrary(value: unknown): value is UserLibrary {
  if (typeof value !== 'object' || value === null) return false;

  const library = value as UserLibrary;
  return library.version === 2
    && typeof library.games === 'object'
    && library.games !== null
    && Object.values(library.games).every(
      (editions) => Array.isArray(editions) && editions.every(isEdition)
    );
}

function emptyLibrary(): UserLibrary {
  return { version: 2, games: {} };
}

function loadLibrary(): UserLibrary {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return emptyLibrary();

    const library: unknown = JSON.parse(stored);
    if (isLibrary(library)) return library;

    const replacement = emptyLibrary();
    saveLibrary(replacement);
    return replacement;
  } catch {
    return emptyLibrary();
  }
}

function saveLibrary(library: UserLibrary): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
  } catch {
    // ignore storage errors
  }
}

export function useLibrary() {
  const [library, setLibrary] = useState<UserLibrary>(loadLibrary);

  const addEdition = useCallback((gameId: string, editionCode: EditionCode) => {
    setLibrary((prev) => {
      const edition: GameEdition = {
        id: crypto.randomUUID(),
        editionCode,
      };
      const updated: UserLibrary = {
        version: 2,
        games: {
          ...prev.games,
          [gameId]: [...(prev.games[gameId] ?? []), edition],
        },
      };
      saveLibrary(updated);
      return updated;
    });
  }, []);

  const removeEdition = useCallback((gameId: string, editionId: string) => {
    setLibrary((prev) => {
      const editions = (prev.games[gameId] ?? []).filter((edition) => edition.id !== editionId);
      const games = { ...prev.games };

      if (editions.length === 0) {
        delete games[gameId];
      } else {
        games[gameId] = editions;
      }

      const updated: UserLibrary = { version: 2, games };
      saveLibrary(updated);
      return updated;
    });
  }, []);

  const hasGame = useCallback((gameId: string) => (library.games[gameId]?.length ?? 0) > 0, [library]);

  const ownedGameCount = Object.keys(library.games).length;
  const ownedEditionCount = Object.values(library.games).reduce(
    (count, editions) => count + editions.length,
    0
  );

  return { library, addEdition, removeEdition, hasGame, ownedGameCount, ownedEditionCount };
}
