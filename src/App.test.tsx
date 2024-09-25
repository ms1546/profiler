import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { jest } from '@jest/globals';

jest.mock('@/pages/Home', () => () => <div>Home Page</div>);
jest.mock('@/pages/About', () => () => <div>About Page</div>);
jest.mock('@/pages/Projects', () => () => <div>Projects Page</div>);
jest.mock('@/components/Header', () => () => <header>Header</header>);
jest.mock('@/components/Footer', () => () => <footer>Footer</footer>);

describe('App', () => {
  test('renders the header and footer', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByText('Footer')).toBeInTheDocument();
  });

  test('renders Home page on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  test('renders About page when navigating to /about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('About Page')).toBeInTheDocument();
  });

  test('renders Projects page when navigating to /projects', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Projects Page')).toBeInTheDocument();
  });
});
