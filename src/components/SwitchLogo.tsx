import { HTMLMotionProps, motion } from 'framer-motion';
import React, { forwardRef } from 'react';
import styled, { keyframes } from 'styled-components';

const ani2 = keyframes`
  from, to {
    transform: none;
  };
  ${'25%'} {
    transform: translateY(10%);
  }`;

const SwitchLogoWrap = styled(motion.span)`
  display: flex;
  &.animate {
    > span {
      animation: ${ani2} 0.21s 0.45s linear;
      &::after {
        transform: translateY(0);
      }
    }
  }
  &.no-animation {
    > span {
      animation: no-ani;
      &::after {
        transition: none;
        transform: translateY(0);
      }
    }
  }
  > span {
    position: relative;
    width: 1em;
    height: 1em;
    border-radius: 25%;
    transition: opacity 0.3s;

    display: block;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 0.415em;
      border-radius: 0.0065em 0.26em 0.26em 0.0065em;
      background-image: radial-gradient(
        circle at 47.5% 55%,
        transparent 0.10098em,
        currentColor calc(0.10098em + 1px)
      );
      transition: transform 450ms cubic-bezier(1, 0, 0, 1);
      transform: translateY(-55%);
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: 0.485em;
      box-shadow: inset 0 0 0 0.08em;
      border-radius: 0.26em 0.0065em 0.0065em 0.26em;
      background-image: radial-gradient(
        circle at 52.5% 30%,
        currentColor 0.0935em,
        transparent calc(0.0935em + 1px)
      );
    }
  }
`;

const SwitchLogo = forwardRef<
  HTMLSpanElement,
  HTMLMotionProps<'span'> & { size?: number }
>(function SwitchLogo(props, ref) {
  return (
    <SwitchLogoWrap title="大人気ゲームロゴ" {...props} ref={ref} role="img">
      <span />
    </SwitchLogoWrap>
  );
});

export default SwitchLogo;
