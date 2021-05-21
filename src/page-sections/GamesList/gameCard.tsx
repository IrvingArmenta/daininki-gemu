/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, forwardRef, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { GameType } from '../../api/data-typings';
import Link from 'next/link';
import {
  HTMLMotionProps,
  motion,
  useAnimation,
  useMotionValue,
  useTransform
} from 'framer-motion';
import styled from 'styled-components';
import { isBrowser } from '@/hooks/utils';
import useWindowSize from '@/hooks/useWindowSize';

type GameCardType = Pick<GameType, 'title' | 'img' | 'id'> &
  HTMLMotionProps<'div'>;

const GameCardWrap = styled(motion.div)`
  height: 100%;
  padding: 16px;
  position: relative;
  overflow: hidden;
  background-color: ${(p) => p.theme.colors.grayscale.gray};
  transition: background-color 200ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: ${(p) => p.theme.colors.primary.base};
  }
  a {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
  }
  img {
    position: absolute;
  }
  .logo-wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 0;
    z-index: 1;
  }

  .logo {
    position: relative;
    max-width: 20vw;
  }
  .bg {
    bottom: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: luminosity;
    opacity: 0.2;
    object-fit: cover;
    object-position: center;
  }

  // specific fixes
  &.pokemon-sword-and-shield-card {
    .logo {
      max-width: 21vw;
    }
  }
  &.super-mario-party-card {
    .logo {
      max-width: 17vw;
    }
  }
`;

const GameCard = forwardRef<HTMLDivElement, GameCardType>(function GameCard(
  props,
  ref
) {
  const { title, img, id, ...rest } = props;
  const { width, height } = useWindowSize();

  const [cardD, setCardD] = useState<{ width: number; height: number }>({
    height: 0,
    width: 0
  });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const logoControl = useAnimation();
  const bgImageControl = useAnimation();
  const cardRef = useRef<HTMLDivElement>(null);

  const moveX = useTransform(y, [0, cardD.width], [0, 32]);
  const moveY = useTransform(x, [0, cardD.height], [0, 58]);
  const moveX2 = useTransform(moveX, (move) => move * 2);
  const moveY2 = useTransform(moveY, (move) => move * 2);
  const rotateX = useTransform(y, [100, cardD.height], [32, -32]);
  const rotateY = useTransform(x, [100, cardD.width], [-32, 32]);

  useEffect(() => {
    if (isBrowser && cardRef.current) {
      setCardD({
        height: cardRef.current.offsetHeight,
        width: cardRef.current.offsetWidth
      });
      bgImageControl.start({ scale: 1.2, x: 0, y: 0 });
      logoControl.start({ rotateX: 0, rotateY: 0 });
    }
  }, [width, height]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <GameCardWrap
      {...rest}
      ref={cardRef}
      className={`${id}-card`}
      onMouseMove={handleMouse}
      style={{ perspective: 1000 }}
      layout={true}
      layoutId={`${id}-layout`}
      whileTap={{ scale: 0.97, borderRadius: '16px' }}
      onMouseEnter={() => {
        bgImageControl.start({ scale: 1.8 });
      }}
      onMouseLeave={() => {
        logoControl.start({ rotateX: 0, rotateY: 0 });
        bgImageControl.start({ scale: 1.2, x: 0, y: 0 });
      }}
    >
      <motion.span
        className="logo-wrap"
        animate={logoControl}
        style={{
          rotateX,
          rotateY,
          display: 'block',
          translateX: '-50%',
          translateY: '-50%'
        }}
      >
        <motion.img className="logo" alt={`${title} ロゴ`} src={img.logo} />
      </motion.span>
      <motion.img
        style={{ x: moveY2, y: moveX2, scale: 1.2 }}
        className="bg"
        alt={`${title}バックグラウンド`}
        src={img.bg}
        animate={bgImageControl}
      />
      <Link passHref={true} href={`/games/${id}`}>
        <a>
          <span className="sr-only">{`${title}のペジへ`}</span>
        </a>
      </Link>
    </GameCardWrap>
  );
});

export default GameCard;
