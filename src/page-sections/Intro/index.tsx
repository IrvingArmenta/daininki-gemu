import React, { useCallback, useEffect, useRef, FC } from 'react';
import IntroWrapper from './styles';
import SwitchLogo from '@/components/SwitchLogo';
import { motion, useAnimation } from 'framer-motion';
import { sleep } from '@/utils';
import useSessionStorage from '@/hooks/useSessionStorage';
import { ReactComponent as Logo } from '../../../public/switch-logo.svg';
import { useRouter } from 'next/router';

const Intro: FC = () => {
  const wrapperRef = useRef<HTMLElement>(null);
  const router = useRouter();
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
      document.documentElement.removeAttribute('style');
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
      sloganControl.start({ fontSize: '0.3em' });
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
      sloganControl.set({ opacity: 1, fontSize: '0.3em', color: '#fff' });
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
      layoutId="AppHeader"
      animate={wrapperControl}
      layout={true}
      ref={wrapperRef}
    >
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
      {/* <span className="divider">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </span> */}
    </IntroWrapper>
  );
};

export default Intro;
