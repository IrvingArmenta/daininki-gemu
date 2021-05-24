/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useRef, useState } from 'react';
import { GameCardType, GameCardWrap } from './gameCard.styles';
import Link from 'next/link';
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform
} from 'framer-motion';
import { isBrowser } from '@/hooks/utils';
import useMobileDetect from '@/hooks/useMobileDetect';
import { useInView } from 'react-intersection-observer';
import { LinkButton } from '@/components/Button';

const GameCard: FC<GameCardType> = (props) => {
  const { title, img, id, ...rest } = props;
  const { isMobile } = useMobileDetect();
  const { inView, ref } = useInView({
    threshold: 0.8,
    triggerOnce: true
  });
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
  const rotateX = useTransform(y, [0, cardD.height], [32, -32]);
  const rotateY = useTransform(x, [0, cardD.width], [-32, 32]);

  useEffect(() => {
    if (isBrowser && cardRef.current) {
      setCardD({
        height: cardRef.current.offsetHeight,
        width: cardRef.current.offsetWidth
      });
    }
    () => {
      bgImageControl.stop();
      logoControl.stop();
    };
  }, []);

  useEffect(() => {
    if (!isMobile()) {
      bgImageControl.start({ scale: 1.2, x: 0, y: 0 });
      logoControl.start({ rotateX: 0, rotateY: 0 });
    }
  }, [inView]);

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
      onMouseMove={(e) => {
        if (!isMobile()) {
          handleMouse(e);
        }
      }}
      style={{ perspective: !isMobile() ? 1000 : 'initial' }}
      layout={true}
      whileTap={{ scale: 0.95, borderRadius: '16px' }}
      initial={false}
      onMouseEnter={() => {
        if (!isMobile()) {
          bgImageControl.start({ scale: 1.8 });
        }
      }}
      onMouseLeave={() => {
        if (!isMobile()) {
          logoControl.start({ rotateX: 0, rotateY: 0 });
          bgImageControl.start({ scale: 1.2, x: 0, y: 0 });
        }
      }}
    >
      <motion.span
        className="logo-wrap"
        ref={ref}
        animate={logoControl}
        initial={false}
        style={{
          rotateX,
          rotateY
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
      {inView && (
        <Link passHref={true} href={`/games/${id}`}>
          <LinkButton
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 74 }}
            className="button"
          >
            ゲームページへ
          </LinkButton>
        </Link>
      )}
      <Link passHref={true} href={`/games/${id}`}>
        <a>
          <span className="sr-only">{`${title}のペジへ`}</span>
        </a>
      </Link>
    </GameCardWrap>
  );
};

export default GameCard;
