import './src/styles/fonts.css';
import './src/styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './src/store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app/App';
import ErrorBoundary from './src/components/error-boundary/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
