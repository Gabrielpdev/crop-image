/* istanbul ignore file */

import { ThemeProvider } from 'styled-components';
import { ImageProvider } from './context/image';
import { useTheme } from './context/theme';
import Home from './pages/Home';
import { GlobalStyles } from './styles/global';
import { light } from './styles/themes/light';

function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme || light}>
      <ImageProvider>
        <Home />
        <GlobalStyles />
      </ImageProvider>
    </ThemeProvider>
  );
}

export default App;
