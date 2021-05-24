import React, { useCallback, useEffect } from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/global';
import appThemes from '@/styles/themes';
import { AnimatePresence, motion } from 'framer-motion';
import Intro from '@/page-components/Intro';
import Footer from '@/page-components/footer';
import { useGlobalStore } from '@/store';
import { isBrowser } from '@/hooks/utils';

const App = ({ Component, pageProps, router }: AppProps) => {
  const setScrollData = useGlobalStore(
    useCallback((state) => state.setScrollData, [])
  );

  // スクロール位置の保持
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (isBrowser) {
        const scrollElement = document.getElementById('appMainList');
        if (scrollElement) {
          if (url !== '/') {
            setScrollData(scrollElement.scrollLeft);
          }
        }
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider theme={appThemes['default']}>
      <GlobalStyles />
      <Intro />
      <AnimatePresence exitBeforeEnter={true}>
        <motion.main
          layout={true}
          initial={{
            opacity: 0
          }}
          onLayoutAnimationComplete={() => {
            document.documentElement.removeAttribute('style');
          }}
          onAnimationStart={() => {
            document.documentElement.style.overflow = 'hidden';
          }}
          exit={{
            opacity: 0,
            translateX: router.pathname !== '/' ? '-50%' : '50%',
            transition: {
              duration: 0.4,
              ease: 'anticipate'
            }
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: 0.4,
              ease: 'anticipate'
            }
          }}
          key={router.pathname}
        >
          <Component {...pageProps} />
        </motion.main>
      </AnimatePresence>
      <Footer isHome={router.pathname === '/'} />
    </ThemeProvider>
  );
};

export default App;
