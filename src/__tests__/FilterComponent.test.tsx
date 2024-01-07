// src/__tests__/FilterComponent.test.tsx
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FilterComponent from '../components/FilterComponent/FilterComponent';

test('renders FilterComponent correctly', () => {
  const mockOnFilterChange = jest.fn();

  render(<FilterComponent onFilterChange={mockOnFilterChange} />);

  console.log(screen.debug());

  const filterInput = screen.getByPlaceholderText('Pesquisar Card');
  fireEvent.change(filterInput, { target: { value: 'Test' } });

  const sortOrderSelect = screen.getByLabelText('Pesquisar por palavra:');
  expect(sortOrderSelect).toBeInTheDocument();

  // Log the updated HTML content after interacting with the input
  console.log(screen.debug());

  expect(mockOnFilterChange).toHaveBeenCalledWith('Test', 'recente');
});
