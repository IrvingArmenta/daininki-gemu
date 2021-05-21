import React from 'react';
import GamesList from '@/page-sections/GamesList';

// データ
import gameData from '../api/switch-games.json';

function Home() {
  return (
    <div>
      <GamesList gamesList={gameData} />
    </div>
  );
}

export default Home;
