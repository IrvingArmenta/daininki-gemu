import { GameType } from '@/api/data-typings';
import create from 'zustand';
import { log } from './utils';

export type GlobalStateType = {
  gamesData: GameType[];
  setGameData: (arr: GameType[]) => void;
};

export const useGlobalStore = create<GlobalStateType>(
  log(
    (set) => ({
      gamesData: [],
      setGameData: (arr) => set({ gamesData: arr })
    }),
    'Global store'
  )
);
