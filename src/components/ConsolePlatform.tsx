import React, { useState, useMemo } from 'react';
import type { Game, Platform } from '../types';
import GameCard from './GameCard';

interface ConsolePlatformProps {
  platform: Platform;
  games: Game[];
  ownedIds: Set<string>;
  onToggle: (gameId: string) => void;
}

type FilterMode = 'all' | 'owned' | 'missing';
type SortMode = 'title' | 'year';

const PLATFORM_LABELS: Record<Platform, string> = {
  NES: 'Nintendo 8-bit (NES)',
  SNES: 'Super Nintendo (SNES)',
};

const PLATFORM_COLORS: Record<Platform, string> = {
  NES: 'nes',
  SNES: 'snes',
};

const ConsolePlatform: React.FC<ConsolePlatformProps> = ({
  platform,
  games,
  ownedIds,
  onToggle,
}) => {
  const [filter, setFilter] = useState<FilterMode>('all');
  const [sort, setSort] = useState<SortMode>('title');
  const [search, setSearch] = useState('');
  const [collapsed, setCollapsed] = useState(false);

  const ownedCount = games.filter((g) => ownedIds.has(g.id)).length;
  const totalCount = games.length;
  const percent = totalCount > 0 ? Math.round((ownedCount / totalCount) * 100) : 0;

  const filteredGames = useMemo(() => {
    let result = games;
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter((g) => g.title.toLowerCase().includes(q));
    }
    if (filter === 'owned') result = result.filter((g) => ownedIds.has(g.id));
    if (filter === 'missing') result = result.filter((g) => !ownedIds.has(g.id));
    if (sort === 'title') result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'year') result = [...result].sort((a, b) => (a.year ?? 9999) - (b.year ?? 9999));
    return result;
  }, [games, search, filter, sort, ownedIds]);

  return (
    <section className={`platform-section platform-${PLATFORM_COLORS[platform]}`}>
      <div className="platform-header" onClick={() => setCollapsed((c) => !c)}>
        <h2 className="platform-title">
          <span className="platform-icon">{platform === 'NES' ? '🎮' : '🕹️'}</span>
          {PLATFORM_LABELS[platform]}
        </h2>
        <div className="platform-stats">
          <span className="stat-badge">
            {ownedCount}/{totalCount}
          </span>
          <span className="stat-percent">{percent}%</span>
          <span className="collapse-icon">{collapsed ? '▼' : '▲'}</span>
        </div>
      </div>

      <div className="progress-bar-wrapper">
        <div
          className="progress-bar-fill"
          style={{ width: `${percent}%` }}
          aria-valuenow={percent}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        />
      </div>

      {!collapsed && (
        <>
          <div className="platform-controls">
            <input
              className="search-input"
              type="search"
              placeholder="Søk spill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label={`Søk i ${PLATFORM_LABELS[platform]} spill`}
            />
            <div className="filter-buttons">
              {(['all', 'owned', 'missing'] as FilterMode[]).map((mode) => (
                <button
                  key={mode}
                  className={`filter-btn ${filter === mode ? 'active' : ''}`}
                  onClick={() => setFilter(mode)}
                >
                  {mode === 'all' ? 'Alle' : mode === 'owned' ? 'Eier' : 'Mangler'}
                </button>
              ))}
            </div>
            <div className="sort-buttons">
              <span className="sort-label">Sorter:</span>
              {(['title', 'year'] as SortMode[]).map((mode) => (
                <button
                  key={mode}
                  className={`sort-btn ${sort === mode ? 'active' : ''}`}
                  onClick={() => setSort(mode)}
                >
                  {mode === 'title' ? 'Tittel' : 'År'}
                </button>
              ))}
            </div>
          </div>

          <div className="games-grid">
            {filteredGames.length === 0 ? (
              <p className="no-results">Ingen spill funnet.</p>
            ) : (
              filteredGames.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                  owned={ownedIds.has(game.id)}
                  onToggle={onToggle}
                />
              ))
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default ConsolePlatform;
