import { render, RenderOptions } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { ImageProvider } from '../context/image';
import { MyThemeProvider } from '../context/theme';
import { GlobalStyles } from './global';
import { light } from './themes/light';

export const renderTheme = (children: JSX.Element, theme?: DefaultTheme) => {
  return render(
    <MyThemeProvider>
      <ThemeProvider theme={theme || light}>
        <ImageProvider>
          {children}
          <GlobalStyles />
        </ImageProvider>
      </ThemeProvider>
    </MyThemeProvider>,
  );
};
