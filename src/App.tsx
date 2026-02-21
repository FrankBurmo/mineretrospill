import React, { useMemo } from 'react';
import Header from './components/Header';
import ConsolePlatform from './components/ConsolePlatform';
import StatsBar from './components/StatsBar';
import { nesGames, snesGames } from './data/games';
import { useLibrary } from './hooks/useLibrary';
import './App.css';

const App: React.FC = () => {
  const { library, toggleGame, ownedCount } = useLibrary();

  const ownedSet = useMemo(() => {
    return new Set(Object.keys(library).filter((k) => library[k]));
  }, [library]);

  return (
    <div className="app">
      <Header />
      <StatsBar ownedCount={ownedCount} />
      <main className="app-main">
        <ConsolePlatform
          platform="SNES"
          games={snesGames}
          ownedIds={ownedSet}
          onToggle={toggleGame}
        />
        <ConsolePlatform
          platform="NES"
          games={nesGames}
          ownedIds={ownedSet}
          onToggle={toggleGame}
        />
      </main>
      <footer className="app-footer">
        <p>© 2024 MineRetroSpill &mdash; Lagret lokalt i din nettleser</p>
      </footer>
    </div>
  );
};

export default App;
