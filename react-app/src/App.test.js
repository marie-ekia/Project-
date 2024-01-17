import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to CraftChronicles/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const learnReactLink = screen.getByText(/learn react/i);
  expect(learnReactLink).toBeInTheDocument();
});
