import React, { useMemo } from 'react';
import Header from './components/Header';
import ConsolePlatform from './components/ConsolePlatform';
import StatsBar from './components/StatsBar';
import { nesGames, snesGames, megaDriveGames, masterSystemGames, gameBoyGames } from './data/games';
import { useLibrary } from './hooks/useLibrary';
import './App.css';

const App: React.FC = () => {
  const { library, addEdition, removeEdition, ownedGameCount, ownedEditionCount } = useLibrary();

  const ownedSet = useMemo(() => {
    return new Set(Object.keys(library.games));
  }, [library]);

  return (
    <div className="app">
      <Header />
      <StatsBar ownedGameCount={ownedGameCount} ownedEditionCount={ownedEditionCount} />
      <main className="app-main">
        <ConsolePlatform
          platform="SNES"
          games={snesGames}
          ownedIds={ownedSet}
          editionsByGame={library.games}
          onAddEdition={addEdition}
          onRemoveEdition={removeEdition}
        />
        <ConsolePlatform
          platform="NES"
          games={nesGames}
          ownedIds={ownedSet}
          editionsByGame={library.games}
          onAddEdition={addEdition}
          onRemoveEdition={removeEdition}
        />
        <ConsolePlatform
          platform="MegaDrive"
          games={megaDriveGames}
          ownedIds={ownedSet}
          editionsByGame={library.games}
          onAddEdition={addEdition}
          onRemoveEdition={removeEdition}
        />
        <ConsolePlatform
          platform="MasterSystem"
          games={masterSystemGames}
          ownedIds={ownedSet}
          editionsByGame={library.games}
          onAddEdition={addEdition}
          onRemoveEdition={removeEdition}
        />
        <ConsolePlatform
          platform="GameBoy"
          games={gameBoyGames}
          ownedIds={ownedSet}
          editionsByGame={library.games}
          onAddEdition={addEdition}
          onRemoveEdition={removeEdition}
        />
      </main>
      <footer className="app-footer">
        <p>© 2026 MineRetroSpill &mdash; Lagret lokalt i din nettleser</p>
      </footer>
    </div>
  );
};

export default App;
