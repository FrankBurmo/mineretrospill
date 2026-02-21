import { useState, useCallback } from 'react';
import type { UserLibrary } from '../types';

const STORAGE_KEY = 'mineretrospill-library';

function loadLibrary(): UserLibrary {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
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

  const toggleGame = useCallback((gameId: string) => {
    setLibrary((prev) => {
      const updated = { ...prev, [gameId]: !prev[gameId] };
      if (!updated[gameId]) {
        delete updated[gameId];
      }
      saveLibrary(updated);
      return updated;
    });
  }, []);

  const hasGame = useCallback(
    (gameId: string) => !!library[gameId],
    [library]
  );

  const ownedCount = Object.values(library).filter(Boolean).length;

  return { library, toggleGame, hasGame, ownedCount };
}
