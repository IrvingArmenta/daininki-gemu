import React, { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GameType } from '../../api/data-typings';
import GamesListWrap from './styles';
import GameCard from './gameCard';
import useWindowSize from '@/hooks/useWindowSize';
import { isBrowser } from '@/hooks/utils';
import Slider from '@/components/Slider';

const GamesList: FC<{ gamesList: GameType[] }> = (props) => {
  const { gamesList } = props;
  const [check, setCheck] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setCheck(width <= 600 && isBrowser);
  }, [width]);

  return (
    <GamesListWrap layout={true} id="appGamesList">
      <AnimatePresence>
        {!check ? (
          <motion.ul
            className="list-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout={true}
          >
            {gamesList.map((game) => (
              <li key={game.id}>
                <GameCard title={game.title} img={game.img} id={game.id} />
              </li>
            ))}
          </motion.ul>
        ) : (
          <motion.div
            className="slides-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout={true}
          >
            <Slider>
              {({ className }) => {
                return gamesList.map((game) => (
                  <div key={game.id} className={className}>
                    <GameCard title={game.title} img={game.img} id={game.id} />
                  </div>
                ));
              }}
            </Slider>
          </motion.div>
        )}
      </AnimatePresence>
    </GamesListWrap>
  );
};

export default GamesList;
