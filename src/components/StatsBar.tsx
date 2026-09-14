import React from 'react';
import { allGames } from '../data/games';

interface StatsBarProps {
  ownedGameCount: number;
  ownedEditionCount: number;
}

const StatsBar: React.FC<StatsBarProps> = ({ ownedGameCount, ownedEditionCount }) => {
  const totalCount = allGames.length;
  const percent = totalCount > 0 ? Math.round((ownedGameCount / totalCount) * 100) : 0;

  return (
    <div className="stats-bar">
      <div className="stats-item">
        <span className="stats-label">TOTALT SAMLET</span>
        <span className="stats-value">{ownedGameCount}</span>
      </div>
      <div className="stats-divider">|</div>
      <div className="stats-item">
        <span className="stats-label">EKSEMPLARER</span>
        <span className="stats-value">{ownedEditionCount}</span>
      </div>
      <div className="stats-divider">|</div>
      <div className="stats-item">
        <span className="stats-label">AV TOTALT</span>
        <span className="stats-value">{totalCount}</span>
      </div>
      <div className="stats-divider">|</div>
      <div className="stats-item">
        <span className="stats-label">KOMPLETT</span>
        <span className="stats-value">{percent}%</span>
      </div>
    </div>
  );
};

export default StatsBar;
