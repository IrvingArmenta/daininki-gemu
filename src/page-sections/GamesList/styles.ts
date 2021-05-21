import { mediaUp } from '@/styles/utils';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const GamesListWrap = styled(motion.section)`
  height: calc(100vh - 100px);
  position: relative;
  .list-wrap {
    display: flex;
    flex-wrap: wrap;
    font-size: 0;
    height: 100%;
    li {
      width: 25%;
      font-size: 14px;
      position: relative;
    }
  }
  .slides-wrap {
    height: 100%;
    display: flex;
    flex-direction: column;
    > div {
      height: 100%;
      > div {
        height: 100%;
      }
    }
    ul {
      height: 100%;
    }
    li {
      overflow: hidden;
      min-width: 0;
      border: 1px solid black;
      flex: 1;

      &:not(:last-child) {
        margin: 0;
      }
      > div {
        overflow: hidden;
        width: 100%;
      }
    }
    ${mediaUp(350)} {
      li {
        min-width: 50%;
      }
    }
  }
`;

export default GamesListWrap;
