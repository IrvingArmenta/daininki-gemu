import { DefaultTheme } from 'styled-components';
import { breakpoints, grayscale } from '../typing';

export const theme: DefaultTheme = {
  colors: {
    appBgColor: '#fff',
    primary: {
      base: '#e60012',
      light: '#fe1123',
      dark: '#c3000f'
    },
    secondary: {
      base: '#00c3e3',
      dark: '#008196',
      light: '#30e2ff'
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
