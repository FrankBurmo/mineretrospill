import React, { useState } from 'react';
import { EDITION_OPTIONS } from '../types';
import type { EditionCode, Game, GameEdition } from '../types';

interface GameCardProps {
  game: Game;
  owned: boolean;
  editions: GameEdition[];
  onAddEdition: (gameId: string, editionCode: EditionCode) => void;
  onRemoveEdition: (gameId: string, editionId: string) => void;
}

const GameCard: React.FC<GameCardProps> = ({
  game,
  owned,
  editions,
  onAddEdition,
  onRemoveEdition,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [editionCode, setEditionCode] = useState<EditionCode>('SCN');
  const panelId = `editions-${game.id}`;

  return (
    <article className={`game-card ${owned ? 'owned' : ''}`}>
      <button
        className="game-card-summary"
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
        aria-controls={panelId}
        title={`${game.title}${game.year ? ` (${game.year})` : ''}`}
      >
        <div className="game-card-check">{owned ? 'OK' : ''}</div>
        <div className="game-card-title">{game.title}</div>
        {game.year && <div className="game-card-year">{game.year}</div>}
        {game.genre && <div className="game-card-genre">{game.genre}</div>}
      </button>

      {expanded && (
        <div className="edition-panel" id={panelId}>
          {editions.length > 0 && (
            <ul className="edition-list" aria-label={`Registrerte utgaver av ${game.title}`}>
              {editions.map((edition) => (
                <li className="edition-item" key={edition.id}>
                  <span>{edition.editionCode}</span>
                  <button
                    className="edition-remove"
                    type="button"
                    onClick={() => onRemoveEdition(game.id, edition.id)}
                    aria-label={`Fjern ${edition.editionCode}-utgave av ${game.title}`}
                    title="Fjern utgave"
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          )}
          <div className="edition-add">
            <select
              value={editionCode}
              onChange={(event) => setEditionCode(event.target.value as EditionCode)}
              aria-label={`Velg utgave av ${game.title}`}
            >
              {EDITION_OPTIONS.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
            <button type="button" onClick={() => onAddEdition(game.id, editionCode)}>
              Legg til
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default GameCard;
