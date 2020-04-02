import { render, getByText, queryAllByPlaceholderText, getByPlaceholderText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import App from './App';

test('renders a header', () => {
  const { getByTestId } = render(<App />);
  const expectedElement = getByTestId('Header');
  expect(expectedElement).toBeInTheDocument();
});

test('header contains headline gmdb', () => {
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

test('renders the loginform', () => {
  const { getByTestId } = render(<App />);
  const userFieldExpected = getByTestId('LoginForm');
  expect(userFieldExpected).toBeInTheDocument();
});

test('renders to inputfields in loginform', () => {
  const { getByPlaceholderText } = render(<App />);
  const userFieldExpected = getByPlaceholderText('Username');
  const pwFieldExpected = getByPlaceholderText('Password');
  expect(userFieldExpected).toBeInTheDocument();
  expect(pwFieldExpected).toBeInTheDocument();
})

test('render movie cards with items', () => {
  let movies = [];
  for (let index = 0; index < 50; index++) {
    movies.push({
      id: 1,
      title: "Fakultät 73",
      yearReleased: 2013,
      genre: "Coding on the Edge",
      runtime: "73",
      rating: 5,
      reviews: [],
      ratings: 20
    });

  }

}



