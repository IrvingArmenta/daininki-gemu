import React from 'react';
import GamesList from '@/page-components/GamesList';

// データ
import gameData from '../api/switch-games.json';

function Home() {
  return <GamesList gamesList={gameData} />;
}

export default Home;
