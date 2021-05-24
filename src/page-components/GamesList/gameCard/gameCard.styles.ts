import { HTMLMotionProps, motion } from 'framer-motion';
import { GameType } from '../../../api/data-typings';
import { mediaUp } from '../../../styles/utils';
import styled from 'styled-components';

export type GameCardType = Pick<GameType, 'title' | 'img' | 'id'> &
  HTMLMotionProps<'div'>;

export const GameCardWrap = styled(motion.div)`
  height: 100%;
  padding: 16px;
  position: relative;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.grayscale.gray};
  transition: background-color 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mediaUp(550)} {
    flex-direction: row;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    pointer-events: none;
    height: 30%;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5),
      transparent
    );
  }
  a {
    padding: 0.4em;
    display: flex;
    align-items: center;
    margin-top: 8px;
    ${mediaUp(550)} {
      display: initial;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 2;
      padding: 0;
      min-height: 0;
    }
    &.button {
      ${mediaUp(550)} {
        display: none;
      }
    }
  }
  img {
    position: absolute;
  }
  .logo-wrap {
    min-width: 200px;
    font-size: 0;
    z-index: 1;
    text-align: center;
    display: flex;
    align-items: center;
    min-height: 140px;
    ${mediaUp(400)} {
      max-width: 29vw;
    }
    ${mediaUp('desktop')} {
      max-width: 20vw;
    }
  }
  .logo {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    pointer-events: none;
    user-select: none;
  }
  .bg {
    bottom: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: luminosity;
    opacity: 0.2;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
  }

  // 特定のロゴ
  &.pokemon-sword-and-shield-card {
    .logo-wrap {
      max-width: 32vw;
      ${mediaUp('desktop')} {
        max-width: 22vw;
      }
    }
  }
  &.super-mario-party-card {
    .logo-wrap {
      max-width: 27vw;
      ${mediaUp('desktop')} {
        max-width: 17vw;
      }
    }
  }
`;
