import React, { useCallback, useEffect, useRef, FC } from 'react';
import IntroWrapper from './intro.styles';
import SwitchLogo from '@/components/SwitchLogo';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { sleep } from '@/utils';
import useSessionStorage from '@/hooks/useSessionStorage';
import { ReactComponent as Logo } from '../../../public/icons/switch-logo.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Intro: FC = () => {
  const router = useRouter();
  const wrapperRef = useRef<HTMLElement>(null);
  const [animationRan, setAnimationRan] = useSessionStorage<string>(
    'nswitch-animation-ran'
  );

  // アニメーション コントローラー
  const logoControl = useAnimation();
  const circleControl = useAnimation();
  const textControl = useAnimation();
  const sloganControl = useAnimation();
  const wrapperControl = useAnimation();

  const logoRef = useRef<HTMLSpanElement>(null);
  const circleRef = useRef<HTMLSpanElement>(null);

  // アニメーション設定
  const introSequence = useCallback(async () => {
    if (logoRef.current && !animationRan && router.pathname === '/') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo({ top: 0 });
      document.documentElement.style.overflow = 'hidden';
      await logoControl.start({
        opacity: 1
      });
      await logoControl.start({
        scale: 1,
        transition: {
          type: 'spring',
          mass: 0.8,
          duration: 600,
          stiffness: 50,
          damping: 4
        }
      });
      await textControl.start({
        width: '1.5em',
        marginTop: '0.1em',
        opacity: 1
      });
      logoRef.current.classList.add('animate');
      await sleep(650);
      textControl.start({ fill: '#fff' });
      logoRef.current.style.color = '#fff';
      sloganControl.start({
        opacity: 1,
        fontSize: '0.18em',
        color: '#fff'
      });
      await circleControl.start({
        scale: 7,
        transition: {
          type: 'spring',
          duration: 0.7
        }
      });
      await wrapperControl.start({
        height: '100px',
        fontSize: '60px',
        flexDirection: 'row',
        boxShadow: '0 0 8px black',
        transition: {
          delay: 1
        }
      });
      logoControl.start({ marginRight: '8px' });
      textControl.start({ marginRight: '24px', marginTop: 0 });
      sloganControl.start({ fontSize: '0.3em', marginTop: 0 });
      document.documentElement.removeAttribute('style');
      setAnimationRan('true');
    } else if (logoRef.current) {
      logoRef.current.classList.add('no-animation');
      logoControl.set({
        opacity: 1,
        scale: 1,
        color: '#fff',
        marginRight: '8px'
      });
      circleControl.set({ scale: 7 });
      sloganControl.set({
        opacity: 1,
        fontSize: '0.3em',
        color: '#fff',
        marginTop: 0
      });
      textControl.set({
        width: '1.5em',
        marginRight: '24px',
        marginTop: 0,
        opacity: 1,
        fill: '#fff'
      });
      wrapperControl.set({
        height: '100px',
        fontSize: '60px',
        flexDirection: 'row',
        boxShadow: '0 0 8px black'
      });
    }
  }, [animationRan]);

  useEffect(() => {
    introSequence();
  }, []);

  return (
    <IntroWrapper
      animate={wrapperControl}
      ref={wrapperRef}
      style={{ width: '100%' }}
    >
      <AnimatePresence>
        {router.pathname !== '/' && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="top-link-wrap"
            title="トップページへ"
          >
            <Link href="/">{`< トップページ`}</Link>
          </motion.span>
        )}
      </AnimatePresence>
      <SwitchLogo
        layout={true}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={logoControl}
        ref={logoRef}
        layoutId="SwitchLogo"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={textControl}
        className="logo-text element"
        layout={true}
      >
        <Logo title="Nintendo Switch" />
      </motion.span>
      <motion.span
        initial={{ opacity: 0, fontSize: 0 }}
        className="slogan element"
        layout={true}
        animate={sloganControl}
      >
        <ruby>
          大<rt>だい</rt>
          人気<rt>にんき</rt>
          ゲーム !!
        </ruby>
      </motion.span>
      <motion.span
        animate={circleControl}
        initial={{ scale: 0 }}
        style={{ translateX: '-50%', translateY: '-50%' }}
        ref={circleRef}
        className="circle element"
      />
    </IntroWrapper>
  );
};

export default Intro;
