import { fullVWview } from '@/styles/utils';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const IntroWrapper = styled(motion.header)`
  ${fullVWview(undefined, true)};
  position: relative;
  flex-direction: column;
  font-size: 20vw;
  overflow: hidden;
  z-index: 1;
  .element {
    display: block;
  }
  .logo-text {
    line-height: 0;
  }
  .slogan {
    margin-top: 0.3em;
    font-weight: 900;
    rt {
      font-weight: 300;
      font-size: 0.3em;
      letter-spacing: 2px;
    }
  }
  .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: ${(p) => p.theme.colors.primary.base};
    display: block;
    z-index: -1;
    border-radius: 50%;
    transition: color 100ms ease-in-out;
    width: 600px;
    height: 600px;
  }
  .images-wrap {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: ${(p) => p.theme.colors.primary.base};
    display: block;
    &::after {
      content: '';
      position: absolute;
      bottom: -60px;
      left: 0;
      right: 0;
      height: 30px;
      box-shadow: 0 0 200px 100px ${(p) => p.theme.colors.primary.base};
      background-color: transparent;
    }
    img {
      mix-blend-mode: luminosity;
      width: 100%;
      height: 100%;
      box-shadow: inset 0 0 100px ${(p) => p.theme.colors.primary.base};
      display: block;
    }
  }
  .divider {
    position: absolute;
    bottom: -60px;
    left: 0;
    right: 0;
    overflow: hidden;
    line-height: 0;
    display: block;
    transform: rotate(180deg);
    svg {
      position: relative;
      display: block;
      width: calc(100% + 1.3px);
      height: 60px;
      transform: rotateY(180deg);
      fill: ${(p) => p.theme.colors.appBgColor};
    }
  }
`;

export default IntroWrapper;
