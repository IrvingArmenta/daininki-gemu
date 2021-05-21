/* eslint-disable no-console */
import { GetState, SetState, StateCreator, StoreApi } from 'zustand';

export type StoreLoggerType = <S extends Record<string, unknown>>(
  config: StateCreator<S>,
  storeName?: string,
  predicate?: (keyValue: S, key: keyof S) => boolean
) => (set: SetState<S>, get: GetState<S>, api: StoreApi<S>) => S;

export type AppStoreType<T extends Record<string | number | symbol, unknown>> =
  (set: SetState<T>, get: GetState<T>) => T;

export const objFilter = <T extends { [key: string]: any }>(
  o: T,
  f: (keyValue: T, key: keyof T) => boolean
) => {
  const newObj: Record<string, unknown> = {};
  Object.keys(o).forEach((k) => {
    if (f.call(self, o[k], k)) {
      newObj[k] = o[k];
    }
  });
  return newObj as { [key: string]: T };
};

export const isClient = typeof window === 'object';

export const log: StoreLoggerType =
  (config, storeName, predicate = (k, ke) => ke !== 'actions') =>
  (set, get, api) =>
    config(
      (args) => {
        set(args);
        if (process.env.NODE_ENV === 'development') {
          console.group(storeName || 'zustand state change');
          console.log(' applying:', args);
          console.log(' new state:', objFilter(get(), predicate));
          console.groupEnd();
        }
      },
      get,
      api
    );
