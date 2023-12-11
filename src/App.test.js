import { render, screen } from '@testing-library/react';
import App from './App';
import Item from './components/coffeeShop';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  expect(App).toBeInTheDocument();
});
