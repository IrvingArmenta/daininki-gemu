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
        <meta name="description" content="Nintendo Switch 大人気ゲームの一蘭" />
      </Head>
      <GamesList gamesList={gameData} />
    </>
  );
}

export default Home;
