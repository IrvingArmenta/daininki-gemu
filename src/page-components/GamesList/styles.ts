import { mediaUp } from '@/styles/utils';
import styled, { keyframes } from 'styled-components';

const bgScrolling = keyframes` ${'100%'} { background-position:  70px 70px; }`;
const gridSpacing = 16;

const GamesListWrap = styled.section`
  height: calc(100vh - 100px);
  position: relative;
  overflow: hidden;
  padding: 16px;

  background: url('data:image/png;base64,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')
    repeat 0 0;

  animation: ${bgScrolling} 2.5s infinite;
  animation-timing-function: linear;

  .list-wrap {
    display: flex;
    font-size: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    ${mediaUp(550)} {
      flex-wrap: wrap;
    }
    li {
      position: relative;
      min-width: 350px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 2px #333;
      &:not(:first-child) {
        margin-left: ${gridSpacing}px;
      }
      ${mediaUp(550)} {
        margin: ${gridSpacing}px;
        min-width: 0;
        height: calc(25% - ${gridSpacing * 2}px);
        width: calc(50% - ${gridSpacing * 2}px);
      }
      ${mediaUp('desktop')} {
        height: auto;
        width: calc(25% - ${gridSpacing * 2}px);
        font-size: 14px;
      }
      &:nth-child(odd) {
        > div {
          &:hover {
            background-color: ${(p) => p.theme.colors.primary.base};
          }
        }
      }
      &:nth-child(even) {
        > div {
          &:hover {
            background-color: ${(p) => p.theme.colors.secondary.base};
          }
        }
      }
    }
  }
  .right-indicator,
  .left-indicator {
    position: absolute;
    top: 16px;
    bottom: 16px;
    width: 80px;
    display: flex;
    align-items: center;
    pointer-events: none;
    justify-content: center;

    > span {
      display: inline-block;
    }
    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.8;
    }
    ${mediaUp(550)} {
      display: none;
    }
  }
  .right-indicator {
    right: ${gridSpacing}px;
    border-right: 2px solid rgba(0, 0, 0, 0.65);
    &::before {
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }
  }
  .left-indicator {
    left: ${gridSpacing}px;
    &::before {
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }
  }
`;

export default GamesListWrap;
