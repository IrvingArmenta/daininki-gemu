/* eslint-disable @typescript-eslint/no-explicit-any */
export const sleep = (msec: number) =>
  new Promise((resolve) => setTimeout(resolve, msec));

export const isMobile = () =>
  typeof window !== undefined
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    : null;

export const deployUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://daininki-gemu.vercel.app/'
    : 'http://localhost:3000/';
