import { fullVWview, mediaUp } from '@/styles/utils';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const IntroWrapper = styled(motion.header)`
  ${fullVWview(undefined, true)};
  position: relative;
  flex-direction: column;
  font-size: 30vw;
  ${mediaUp('desktop')} {
    font-size: 20vw;
  }
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
  .top-link-wrap {
    display: none;
    line-height: 0;
    ${mediaUp(768)} {
      display: flex;
      position: absolute;
      left: 32px;
      top: 50%;
      transform: translateY(-50%);
      a {
        color: #fff;
        font-size: 16px;
        text-decoration: none;
        :hover {
          opacity: 0.9;
        }
      }
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
`;

export default IntroWrapper;
