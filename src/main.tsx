/* istanbul ignore file */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MyThemeProvider } from './context/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App />
    </MyThemeProvider>
  </React.StrictMode>,
);
