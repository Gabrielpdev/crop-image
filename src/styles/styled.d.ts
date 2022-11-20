import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      invert: string;
      red500: string;
      blue200: string;
      blue500: string;
      white290: string;
      white300: string;
      white400: string;
      white500: string;
      gray300: string;
      gray400: string;
      gray500: string;
    };
  }
}
