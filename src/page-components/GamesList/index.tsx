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

const GamesList: FC<{ gamesList: GameType[] }> = (props) => {
  const { gamesList } = props;
  const scrollData = useGlobalStore(
    useCallback((state) => state.scrollPreserve, [])
  );
  const [scrollRange, setScrollRange] = useState(0);
  const oRef = useRef<HTMLUListElement>(null);
  const { scrollXProgress } = useElementScroll(oRef);
  const xRange = useTransform(scrollXProgress, [0, 1], [0, 100]);
  useEffect(
    () => xRange.onChange((v) => setScrollRange(Number(v.toFixed(0)))),
    [xRange]
  );

  useEffect(() => {
    if (oRef.current) {
      oRef.current.scrollLeft = scrollData;
    }
  }, []);

  return (
    <GamesListWrap id="appGamesList">
      <motion.ul className="list-wrap" ref={oRef} id="appMainList">
        {gamesList.map((game) => (
          <li key={game.id}>
            <GameCard title={game.title} img={game.img} id={game.id} />
          </li>
        ))}
      </motion.ul>
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
