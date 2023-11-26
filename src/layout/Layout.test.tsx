import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Layout from './Layout';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));
mockRouter.push('/?page=1&limit=12');

describe('Tests layout', () => {
  test('renders layout components correctly', () => {
    mockRouter.push(`/`);

    const { container } = render(
      <Provider store={store}>
        <Layout>
          <p>Some text</p>
        </Layout>
      </Provider>
    );

    const header = container.getElementsByClassName('header')[0];
    const main = container.getElementsByClassName('main')[0];
    const footer = container.getElementsByClassName('footer')[0];

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
