import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="scanlines" aria-hidden="true" />
      <div className="header-content">
        <div className="header-pixel-art" aria-hidden="true">
          <span>▓▓▓</span>
          <span>■</span>
          <span>▓▓▓</span>
        </div>
        <h1 className="app-title">
          <span className="title-mine">MINE</span>
          <span className="title-retro">RETRO</span>
          <span className="title-spill">SPILL</span>
        </h1>
        <p className="app-subtitle">
          Registrer ditt retro-spillbibliotek
        </p>
        <div className="header-pixel-art" aria-hidden="true">
          <span>▓▓▓</span>
          <span>■</span>
          <span>▓▓▓</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
