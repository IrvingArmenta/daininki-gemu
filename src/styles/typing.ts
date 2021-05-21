import 'styled-components';

export const breakpoints = {
  mobile: '330px',
  tablet: '768px',
  desktop: '992px',
  lgDesktop: '1100px'
};

export const grayscale = {
  almostWhite: '#f5f5f5',
  littleBitGray: '#e9e9e9',
  veryLightGray: '#d9d9d9',
  lightGray: '#c4c4c4',
  gray: '#7b7b7b',
  dimGray: '#555555',
  almostBlack: '#262626'
};

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      appBgColor: string;
      primary: {
        base: string;
        light: string;
        dark: string;
      };
      secondary: {
        base: string;
        light: string;
        dark: string;
      };
      grayscale: {
        almostWhite: string;
        littleBitGray: string;
        veryLightGray: string;
        lightGray: string;
        gray: string;
        dimGray: string;
        almostBlack: string;
      };
    };
    fonts: {
      body: string;
      headings: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      lgDesktop: string;
    };
  }
}
