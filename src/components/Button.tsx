import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

type ButtonType = {
  $fontSize?: string;
  $padding?: string;
  $borderRadius?: string;
};

const ButtonStyles = css<ButtonType>`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  background-color: ${(p) => p.theme.colors.primary.base};
  font-size: ${(p) => p.$fontSize || '24px'};
  padding: ${(p) => p.$padding || '1em 0.8em'};
  border: 2px solid ${(p) => p.theme.colors.primary.dark};
  border-radius: ${(p) => p.$borderRadius || '16px'};
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(
    to bottom,
    ${(p) => p.theme.colors.primary.light} 0%,
    ${(p) => p.theme.colors.primary.dark} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    height: 50%;
    width: 100%;
    left: 0;
    background-image: linear-gradient(to bottom, white, transparent);
    opacity: 0.5;
  }
  :hover {
    background-image: linear-gradient(
      to top,
      ${(p) => p.theme.colors.primary.light} 0%,
      ${(p) => p.theme.colors.primary.dark} 100%
    );
  }
`;

export const Button = styled(motion.button)<ButtonType>`
  ${ButtonStyles}
`;

export const LinkButton = styled(motion.a)<ButtonType>`
  ${ButtonStyles}
`;
