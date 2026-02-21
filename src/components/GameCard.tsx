import React from 'react';
import type { Game } from '../types';

interface GameCardProps {
  game: Game;
  owned: boolean;
  onToggle: (gameId: string) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, owned, onToggle }) => {
  return (
    <button
      className={`game-card ${owned ? 'owned' : ''}`}
      onClick={() => onToggle(game.id)}
      aria-pressed={owned}
      title={`${game.title}${game.year ? ` (${game.year})` : ''}`}
    >
      <div className="game-card-check">{owned ? '✓' : ''}</div>
      <div className="game-card-title">{game.title}</div>
      {game.year && <div className="game-card-year">{game.year}</div>}
      {game.genre && <div className="game-card-genre">{game.genre}</div>}
    </button>
  );
};

export default GameCard;
