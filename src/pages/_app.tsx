import '../styles/global.css';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import Layout from '@/layout/Layout';
import ErrorBoundary from '../components/error-boundary/ErrorBoundary';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
