import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@/styles/global';
import appThemes from '@/styles/themes';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Intro from '@/page-sections/Intro';
import Footer from '@/page-sections/footer';
import 'glider-js/glider.min.css';

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ThemeProvider theme={appThemes['default']}>
      <GlobalStyles />
      <AnimateSharedLayout>
        <Intro />
        <AnimatePresence exitBeforeEnter={true}>
          <motion.main
            initial={{
              opacity: 0,
              scale: router.pathname !== '/' ? 0.95 : 1.2
            }}
            exit={{
              opacity: 0,
              scale: router.pathname !== '/' ? 0.95 : 1.2,
              transition: {
                duration: 0.4,
                ease: 'anticipate'
              }
            }}
            animate={{
              opacity: 1,
              scale: 1,
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
      </AnimateSharedLayout>
      <Footer isHome={router.pathname === '/'} />
    </ThemeProvider>
  );
};

export default App;
