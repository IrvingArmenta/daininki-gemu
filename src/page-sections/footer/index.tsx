import React, { FC } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FooterHeight } from '../shared';

const FooterWrap = styled(motion.footer)`
  height: ${FooterHeight};
  background-color: ${(p) => p.theme.colors.grayscale.almostWhite};
  border-top: 1px solid ${(p) => p.theme.colors.grayscale.veryLightGray};
`;

const Footer: FC<{ isHome: boolean }> = (props) => {
  const { isHome } = props;

  if (!isHome) {
    return (
      <FooterWrap
        initial={{ height: 0 }}
        animate={{
          height: FooterHeight,
          transition: {
            delay: 0.5
          }
        }}
      >
        © Nintendo
      </FooterWrap>
    );
  }

  return null;
};

export default Footer;
