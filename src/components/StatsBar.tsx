import React from 'react';
import { allGames } from '../data/games';

interface StatsBarProps {
  ownedCount: number;
}

const StatsBar: React.FC<StatsBarProps> = ({ ownedCount }) => {
  const totalCount = allGames.length;
  const percent = totalCount > 0 ? Math.round((ownedCount / totalCount) * 100) : 0;

  return (
    <div className="stats-bar">
      <div className="stats-item">
        <span className="stats-label">TOTALT SAMLET</span>
        <span className="stats-value">{ownedCount}</span>
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
