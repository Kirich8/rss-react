import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import './styles/fonts.css';
import './styles/index.css';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
