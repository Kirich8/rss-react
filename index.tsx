import './src/styles/fonts.css';
import './src/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app/App';
import ErrorBoundary from './src/components/error-boundary/ErrorBoundary';
import SearchContextProvider from './src/utils/context/SearchContext';
import CharactersContextProvider from './src/utils/context/CharactersContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CharactersContextProvider>
        <SearchContextProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </SearchContextProvider>
      </CharactersContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
