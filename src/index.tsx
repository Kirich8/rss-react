import './styles/fonts.css';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import SearchContextProvider from './utils/context/SearchContext';
import CharactersContextProvider from './utils/context/CharactersContext';

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
