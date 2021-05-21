import { DefaultTheme } from 'styled-components';
import { breakpoints, grayscale } from '../typing';

export const theme: DefaultTheme = {
  colors: {
    appBgColor: '#fff',
    primary: {
      base: '#e60012',
      light: '#2E6CFF',
      dark: '#0743D0'
    },
    secondary: {
      base: '#364564',
      dark: '#212C44',
      light: '#485878'
    },
    grayscale: {
      ...grayscale
    }
  },
  fonts: {
    body: "'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', Helvetica, sans-serif",
    headings:
      "'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', Helvetica, sans-serif"
  },
  breakpoints: {
    ...breakpoints
  }
};

export default theme;
