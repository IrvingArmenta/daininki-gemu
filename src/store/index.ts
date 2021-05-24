import { GameType } from '@/api/data-typings';
import create from 'zustand';
import { log } from './utils';

export type GlobalStateType = {
  scrollPreserve: number;
  setScrollData: (scrollValue: number) => void;
};

export const useGlobalStore = create<GlobalStateType>(
  log(
    (set) => ({
      scrollPreserve: 0,
      setScrollData: (scrollVal) => set({ scrollPreserve: scrollVal })
    }),
    'Global store'
  )
);
