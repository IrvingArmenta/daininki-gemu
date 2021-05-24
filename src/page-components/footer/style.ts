import { motion } from 'framer-motion';
import styled from 'styled-components';
import { mediaUp } from '@/styles/utils';

import { FooterHeight } from '../shared';

export const FooterWrap = styled(motion.footer)`
  height: ${FooterHeight};
  background-color: ${(p) => p.theme.colors.grayscale.almostWhite};
  border-top: 1px solid ${(p) => p.theme.colors.grayscale.veryLightGray};
  padding: 16px;
  font-size: 10px;
  color: ${(p) => p.theme.colors.grayscale.almostBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    display: flex;
    text-align: center;
    flex-direction: column-reverse;
    ${mediaUp(450)} {
      font-size: 12px;
    }
    ${mediaUp(625)} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1200px;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
    display: inline-flex;
    align-items: center;
    svg {
      fill: #8c8c8c;
      width: 10px;
      height: 10px;
      margin-right: 6px;
    }
    :hover {
      color: #c3c3c3;
    }
  }
  .left {
  }
  .right {
    a {
      display: inline-block;
      vertical-align: center;
      &:not(:last-child) {
        margin-right: 16px;
      }
      margin-bottom: 8px;
      ${mediaUp(625)} {
        margin-bottom: 0;
      }
    }
  }
`;
