import './styles/fonts.css';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import Context from './utils/context/SearchContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);
