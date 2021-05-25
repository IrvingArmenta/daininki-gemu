import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useElementScroll,
  useTransform
} from 'framer-motion';
import { GameType } from '../../api/data-typings';
import GamesListWrap from './styles';
import GameCard from './gameCard';
import { useGlobalStore } from '@/store';
import useSessionStorage from '@/hooks/useSessionStorage';

const GamesList: FC<{ gamesList: GameType[] }> = (props) => {
  const { gamesList } = props;
  const [animationRan] = useSessionStorage<string>('nswitch-animation-ran');
  const scrollData = useGlobalStore(
    useCallback((state) => state.scrollPreserve, [])
  );
  const [scrollRange, setScrollRange] = useState(0);
  const wrapRef = useRef<HTMLElement>(null);
  const { scrollXProgress } = useElementScroll(wrapRef);
  const xRange = useTransform(scrollXProgress, [0, 1], [0, 100]);
  useEffect(
    () => xRange.onChange((v) => setScrollRange(Number(v.toFixed(0)))),
    [xRange]
  );

  useEffect(() => {
    if (wrapRef.current && scrollData) {
      wrapRef.current.scrollLeft = scrollData;
    }
  }, [scrollData]);

  return (
    <GamesListWrap id="appGamesList" ref={wrapRef}>
      <ul className="list-wrap">
        {gamesList.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            img={game.img}
            id={game.id}
          />
        ))}
      </ul>
      <AnimatePresence>
        {scrollRange !== 100 && (
          <motion.span
            aria-label="右にスクロールできます"
            role="img"
            className="right-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {scrollRange !== 0 && (
          <motion.span
            aria-label="左にスクロールできます"
            role="img"
            className="left-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </GamesListWrap>
  );
};

export default GamesList;
