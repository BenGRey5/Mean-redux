import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the Mean Bean app with initial items', () => {
  const { getByText, getByLabelText } = render(<App />);

  // Check if the app title is rendered
  expect(getByText('The Mean Bean')).toBeInTheDocument();

  // Check if the coffee options are rendered
  expect(getByText('Select Coffee')).toBeInTheDocument();

  // Check if initial items are rendered
  expect(getByText('Arabica Light Roast')).toBeInTheDocument();
  expect(getByText('Robusta Medium Roast')).toBeInTheDocument();
  expect(getByText('Liberica Light Roast')).toBeInTheDocument();
  expect(getByText('Excelsa Dark Roast')).toBeInTheDocument();

  // Check if the "Sell" and "Delete" buttons are rendered for each item
  expect(getByLabelText('Sell Arabica Light Roast')).toBeInTheDocument();
  expect(getByLabelText('Delete Arabica Light Roast')).toBeInTheDocument();
  expect(getByLabelText('Sell Robusta Medium Roast')).toBeInTheDocument();
  expect(getByLabelText('Delete Robusta Medium Roast')).toBeInTheDocument();
  expect(getByLabelText('Sell Liberica Light Roast')).toBeInTheDocument();
  expect(getByLabelText('Delete Liberica Light Roast')).toBeInTheDocument();
  expect(getByLabelText('Sell Excelsa Dark Roast')).toBeInTheDocument();
  expect(getByLabelText('Delete Excelsa Dark Roast')).toBeInTheDocument();
});

test('allows adding a new item', () => {
  const { getByText, getByLabelText } = render(<App />);

  // Open the option list
  fireEvent.click(getByText('Order'));

  // Select an option (e.g., Arabica)
  fireEvent.click(getByLabelText('Arabica'));

  // Click the "Add" button
  fireEvent.click(getByText('Add'));

  // Check if the new item is added
  expect(getByText('Arabica Light Roast')).toBeInTheDocument();
});

// You can add more tests for selling, updating, and deleting items as needed
