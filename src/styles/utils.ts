import { ReactText } from 'react';
import {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps
} from 'styled-components';
import { breakpoints } from './typing';

/**
 * This number dictates all of the spacing, font-sizing and sizes in general for the app
 * please be careful if you intend to change it, this is to follow the 8px grid UI idea.
 */
export const fontSizeBase = 16;

/**
 * Calculation for the rem baseline text in <html /> element
 * @param {number} baseline - The number the font size is based - default is 16 (8px grid)
 * @param {string} zoom - the default value is '100%', if the zoom is increased the font size will be affected
 */
export const htmlRemBase = (baseline = fontSizeBase, zoom = `100%`) => {
  const percent = parseInt(zoom, 10);
  const result = (percent / 16) * baseline;
  return String(`${result}%`);
};

/**
 * Transforming pixels to rem units
 * @param {string | number} px - pixels to be transformed to rem units , can be a number or a string
 * @param {boolean} fixedTo2 - fixing the decimals count to avoid some POSSIBLE issues, the default value is true
 * @param {boolean} em - transforming to `em` instead of `rem` , mostly you should just use the `pxToEm` function defined in this file to change to `em`;
 */
export const pxToRem = (px: ReactText, fixedTo2 = true, em?: boolean) => {
  const pixels =
    typeof px === `string` ? parseFloat(px.replace(/[^0-9]/g, ``)) : px;

  const remOrEm = em ? `em` : `rem`;

  if (Math.round(pixels) !== pixels) {
    return `${(pixels / fontSizeBase).toFixed(fixedTo2 ? 2 : 4)}${remOrEm}`;
  }
  return `${pixels / fontSizeBase}${remOrEm}`;
};

export const fullVWview = (
  $css?: FlattenInterpolation<ThemeProps<DefaultTheme>>,
  centered?: boolean
) => css`
  height: 100vh;
  ${centered
    ? 'display: flex; justify-content: center; align-items: center;'
    : ''}
  ${$css}
`;

/**
 * レスポンシブメディアヘルパー
 *
 * 使用可能な名前付きブレークポイント:
 *
 * `'mobile' | 'tablet' | 'desktop' | 'lgDesktop'`
 */
export const mediaUp = (
  breakpoint: keyof DefaultTheme['breakpoints'] | ReactText
) => {
  let bp = null;

  if (Object.prototype.hasOwnProperty.call(breakpoints, breakpoint)) {
    const bpas = breakpoint as keyof DefaultTheme['breakpoints'];
    bp = breakpoints[bpas];
  } else {
    bp = breakpoint;
  }

  const themeBreakpoint = pxToRem(bp, false, true);

  return `@media (min-width: ${themeBreakpoint})`;
};
