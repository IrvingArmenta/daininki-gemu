import React, { forwardRef, Ref } from 'react';
import styled from 'styled-components';

export interface SlideArrowProps {
  onClick: (direction: 'next' | 'prev') => void;
  $direction: 'next' | 'prev';
}

export const StyledNavWrapper = styled.button<{
  $direction: 'prev' | 'next';
}>`
  position: absolute;
  ${(props) => props.$direction === 'next' && 'right: 5%;'}
  ${(props) => props.$direction === 'prev' && 'left: 5%;'}
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  background-color: white;
  padding: 0.5em;
  border-radius: 4px;
  z-index: 1;
  :active {
    transform: scale(0.9);
  }
`;

export const StyledArrow = styled.svg`
  width: 22px;
  height: 22px;
  fill: #676767;
`;

const SlideArrow = forwardRef(
  ({ $direction, onClick }: SlideArrowProps, ref: Ref<HTMLButtonElement>) => {
    const path =
      $direction === 'prev'
        ? 'M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'
        : 'M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z';

    return (
      <StyledNavWrapper
        $direction={$direction}
        onClick={() => onClick($direction)}
        ref={ref}
      >
        <StyledArrow viewBox="0 0 8 8">
          <path d={path} />
        </StyledArrow>
      </StyledNavWrapper>
    );
  }
);
SlideArrow.displayName = 'SlideArrow';

export default SlideArrow;
