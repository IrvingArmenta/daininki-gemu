import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import gamesData from 'api/switch-games.json';
import { GameType } from '@/api/data-typings';
import {
  AnimatePresence,
  AnimateSharedLayout,
  motion,
  Variants
} from 'framer-motion';
import styled from 'styled-components';
import SwitchVideo from '@/components/SwitchVideo';
import { PageHeight } from '@/page-components/shared';
import { LinkButton } from '@/components/Button';
import Link from 'next/link';
import { mediaUp } from '@/styles/utils';
import { ReactComponent as OpenNew } from '../../../public/icons/open-new-icon.svg';
import Head from 'next/head';
import { deployUrl } from '@/utils';

const gameInfoVariants: Variants = {
  hidden: {
    opacity: 0
  },
  reveal: {
    opacity: 1
  },
  scaleOut: {
    scale: 0,
    opacity: 0
  },
  scaleIn: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2
    }
  },
  hiddenLeft: {
    translateX: '-100%',
    opacity: 0
  },
  hiddenRight: {
    translateX: '100%',
    opacity: 0
  },
  slideIn: {
    translateX: 0,
    opacity: 1,
    transition: {
      delay: 0.2
    }
  }
};

type GameInfoType = {
  gameData: GameType;
  nextGame: GameType;
  prevGame: GameType;
};

const GameInfoWrapper = styled(motion.section)<{ $bgImage: string }>`
  height: ${PageHeight};
  position: relative;
  padding: 16px;
  overflow-x: hidden;
  background-color: #b3b3b3;
  background-image: ${(p) => p.$bgImage};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: screen;
  ${mediaUp(768)} {
    padding: 32px 116px;
  }
  h1 {
    text-align: center;
  }
  h3 {
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(p) => p.theme.colors.primary.base};
    padding: 10px;
    border-radius: 8px;
  }
  .logo {
    max-width: 80%;
    ${mediaUp(450)} {
      max-width: 400px;
      max-height: 400px;
    }
    &.super-mario-party {
      max-height: 200px;
    }
  }
  .switch-video-wrap {
    max-width: 768px;
    margin: 0 auto;
    margin-top: 24px;
  }
  .char {
    max-width: 100%;
    ${mediaUp(580)} {
      max-height: 300px;
      max-width: 300px;
    }
    ${mediaUp(950)} {
      max-height: 450px;
      max-width: 450px;
    }
  }
  .nav-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 24px -18px;
    ${mediaUp(768)} {
      display: inline;
      margin: 0;
      .top-page-button {
        display: none;
      }
    }
  }
  .top-page-button {
    width: 44vw;
    height: 77px;
    font-size: 5vw;
    white-space: nowrap;
    ${mediaUp(430)} {
      width: auto;
      font-size: inherit;
    }
  }
  .nav-button {
    max-width: 100px;
    padding: 0.2em;
    height: 77px;
    width: calc(50% - 16px);
    img {
      max-height: 100%;
    }

    &.next {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      ${mediaUp(768)} {
        right: -2px;
      }
    }
    &.prev {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      ${mediaUp(768)} {
        left: -2px;
      }
    }
    ${mediaUp(330)} {
      max-width: calc(25% - 16px);
    }
    ${mediaUp(768)} {
      padding: 0.5em;
      max-width: 100px;
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .overview-list {
    font-size: 20px;
    max-width: 100%;
    min-width: 280px;
    padding: 16px;
    background-color: #fff;
    border-radius: 8px;
    margin-left: 0;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.65);
    ${mediaUp(580)} {
      min-width: 320px;
    }
    li {
      &:not(:last-child) {
        margin-bottom: 16px;
      }
      &:before {
        content: '';
        display: inline-block;
        height: 1em;
        width: 1em;
        background-image: url('/icons/star-icon.svg');
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 0.5em;
      }
    }
  }
  .middle-row-top {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    margin-bottom: 8px;
    ${mediaUp(1100)} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .official-link {
    padding: 0.6em;
    font-style: italic;
    width: 100%;
    text-align: center;
    margin-top: 8px;
    span {
      flex: 1;
      display: block;
    }
    svg {
      fill: #fff;
      max-height: 32px;
    }
    ${mediaUp(1100)} {
      flex-direction: row;
      justify-content: space-between;
      width: 15em;
      margin-top: 0;
    }
  }
  .middle-row {
    text-align: center;
    ${mediaUp(580)} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content {
      text-align: left;
      max-width: 750px;
      margin-bottom: 16px;
      ${mediaUp(580)} {
        margin-bottom: 0;
        margin-right: 16px;
      }
    }
  }
`;

function GameInfoPage(props: GameInfoType) {
  const { gameData, prevGame, nextGame } = props;
  const { title, id, img, youtubeId, releaseDate, overview, url } = gameData;

  return (
    <AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter={true}>
        <GameInfoWrapper
          key={id}
          variants={gameInfoVariants}
          $bgImage={`url(${img.bg})`}
          initial="hidden"
          animate="reveal"
          exit="hidden"
        >
          <Head>
            <title>{`Nintendo Switch - ${title}ページ`}</title>
            <meta
              name="description"
              content={`Nintendo Switch大人気ゲーム - ${title}`}
            />
            <link rel="canonical" href={`${deployUrl}${id}`} />
          </Head>
          <motion.h1
            variants={gameInfoVariants}
            initial="scaleOut"
            animate="scaleIn"
            exit="scaleOut"
          >
            <img
              src={img.logo}
              className={`logo ${id}`}
              alt={`${title} ロゴ`}
            />
            <span className="sr-only">{title}</span>
          </motion.h1>
          <div className="middle-row">
            <motion.div
              className="content"
              initial="hiddenLeft"
              animate="slideIn"
              exit="hiddenLeft"
              variants={gameInfoVariants}
            >
              <div className="middle-row-top">
                <h3>{releaseDate}</h3>
                <LinkButton
                  className="official-link"
                  target="__blank"
                  href={url}
                  rel="noopener noreferrer"
                  $fontSize="14px"
                  whileTap={{ scale: 0.96 }}
                >
                  <span>オフィシャルサイトへ</span> <OpenNew />
                </LinkButton>
              </div>
              <ul className="overview-list">
                {overview.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
            <motion.img
              src={img.char}
              className="char"
              variants={gameInfoVariants}
              alt={`${title} キャラクター`}
              initial="hiddenRight"
              animate="slideIn"
              exit="hiddenRight"
            />
          </div>
          <motion.div
            className="switch-video-wrap"
            initial="scaleOut"
            animate="scaleIn"
            exit="scaleOut"
            variants={gameInfoVariants}
          >
            <SwitchVideo title={`${title} どうが`} videoId={youtubeId} />
          </motion.div>
          <nav className="nav-wrap">
            <Link passHref={true} href={`/games/${prevGame.id}`}>
              <LinkButton
                initial="hiddenLeft"
                animate="slideIn"
                exit="hiddenLeft"
                variants={gameInfoVariants}
                whileTap={{ scale: 0.95 }}
                className="nav-button prev"
              >
                <img src={prevGame.img.logo} alt={`${prevGame.title} ロゴ`} />
              </LinkButton>
            </Link>
            <Link passHref={true} href="/">
              <LinkButton
                initial="hidden"
                animate="reveal"
                exit="hidden"
                variants={gameInfoVariants}
                className="top-page-button"
                whileTap={{ scale: 0.95 }}
              >
                トップページへ
              </LinkButton>
            </Link>
            <Link passHref={true} href={`/games/${nextGame.id}`}>
              <LinkButton
                initial="hiddenRight"
                animate="slideIn"
                exit="hiddenRight"
                variants={gameInfoVariants}
                className="nav-button next"
                whileTap={{ scale: 0.95 }}
              >
                <img src={nextGame.img.logo} alt={`${nextGame.title} ロゴ`} />
              </LinkButton>
            </Link>
          </nav>
        </GameInfoWrapper>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true
    };
  }

  const { gameId } = context.params;

  const gameDataIndex = gamesData.findIndex((game) => game.id == gameId);
  const nextGameIndex =
    gameDataIndex + 1 > gamesData.length - 1 ? 0 : gameDataIndex + 1;
  const prevGameIndex =
    gameDataIndex - 1 < 0 ? gamesData.length - 1 : gameDataIndex - 1;

  return {
    props: {
      gameData: gamesData[gameDataIndex],
      nextGame: gamesData[nextGameIndex],
      prevGame: gamesData[prevGameIndex]
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = gamesData.map((game) => ({
    params: { gameId: game.id }
  }));
  return {
    paths,
    fallback: false
  };
};

export default GameInfoPage;
