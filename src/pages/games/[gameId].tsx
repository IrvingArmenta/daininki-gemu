import { GetStaticPaths, GetStaticProps } from 'next';
import gamesData from 'api/switch-games.json';
import React, { useEffect } from 'react';
import { GameType } from '@/api/data-typings';
import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';
import SwitchVideo from '@/components/SwitchVideo';
import { PageHeight } from '@/page-sections/shared';

const gameInfoVariants: Variants = {
  hiddenLeft: {
    translateX: '-80%',
    opacity: 0
  },
  hiddenRight: {
    translateX: '80%',
    opacity: 0
  },
  slideIn: {
    translateX: 0,
    opacity: 1,
    transition: {
      delay: 0.4
    }
  }
};

const GameInfoWrapper = styled(motion.section)<{ $bgImage: string }>`
  height: ${PageHeight};
  position: relative;
  padding: 16px;
  &::before {
    background-image: ${(p) => p.$bgImage};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: multiply;
    content: '';
    position: absolute;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0.4;
  }
  .logo {
    max-width: 320px;
  }
  .switch-video-wrap {
    width: 640px;
  }
  .char {
    grid-area: char;
  }
`;

const GameInfoPage = (props: { gameData: GameType | null }) => {
  const { gameData } = props;

  if (gameData) {
    const { title, id, img, youtubeId } = gameData;
    return (
      <GameInfoWrapper $bgImage={`url(${img.bg})`} layout="position">
        <motion.img
          src={img.logo}
          className="logo"
          alt={`${title} ロゴ`}
          variants={gameInfoVariants}
          initial="hiddenLeft"
          animate="slideIn"
        />
        <motion.img
          src={img.char}
          className="char"
          variants={gameInfoVariants}
          alt={`${title} キャラクター`}
          initial="hiddenRight"
          animate="slideIn"
        />
        <motion.div className="switch-video-wrap">
          <SwitchVideo title={`${title} どうが`} videoId={youtubeId} />
        </motion.div>
      </GameInfoWrapper>
    );
  }

  return null;
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true
    };
  }

  const { gameId } = context.params;
  const post = gamesData.find((game) => game.id == gameId) as GameType;
  return {
    props: {
      gameData: post
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = gamesData.map((game) => ({ params: { gameId: game.id } }));
  return {
    paths,
    fallback: false
  };
};

export default GameInfoPage;
