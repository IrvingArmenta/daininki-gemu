import React from 'react';
import Head from 'next/head';
import GamesList from '@/page-components/GamesList';

// データ
import gameData from '../api/switch-games.json';

function Home() {
  return (
    <>
      <Head>
        <title>Nintendo Switch - 大人気ゲーム！</title>
      </Head>
      <GamesList gamesList={gameData} />
    </>
  );
}

export default Home;
