import { render, getByText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import App from './App';

// test('renders a header', () => {
//   const { getByTestId } = render(<App />);
//   const expectedElement = getByTestId('Header');
//   expect(expectedElement).toBeInTheDocument();
// });

test('header contains headline gmdb', ()  => {
  const { getByText } = render(<App />);
  const expectedElement = getByText("GMDB");
  expect(expectedElement).toBeDefined();
});

test('renders a cardlist', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId('CardList');
  expect(linkElement).toBeInTheDocument();
});

test('renders one or more cards in cardlist', () => {
  const { getAllByTestId } = render(<App />);
  const cardElements = getAllByTestId('MovieCard');
  expect(cardElements.length).toBeGreaterThan(0);
});

// test('', () => {
//   const { getByTestId } = render(<App />);
//   const userFieldExpected = getByTestId('LoginField');
//   expect(userFieldExpected).toBeInTheDocument();
// });


