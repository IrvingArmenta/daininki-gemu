import React, { FC, ReactNode } from 'react';
import Glider, { GliderMethods } from 'react-glider';
import styled from 'styled-components';

type SliderType = {
  children: (sliderProps: { className: string }) => ReactNode;
};

const SliderWrap = styled(Glider)`
  .keen-slider__slide {
    min-width: calc(80% - 0px) !important;
    max-width: calc(80% - 0px) !important;
  }
`;

const Slider: FC<SliderType> = (props) => {
  const gliderRef = React.useRef<GliderMethods>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <SliderWrap className="navigation-wrapper" ref={gliderRef}>
      {props.children({ className: 'keen-slider__slide' })}
    </SliderWrap>
  );
};

export default Slider;
