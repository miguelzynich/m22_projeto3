// AddNoteForm.test.tsx

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddNoteForm from '../components/AddNoteForm/AddNoteForm';

test('renders AddNoteForm correctly', () => {
  const mockAddNote = jest.fn();

  render(<AddNoteForm addNote={mockAddNote} />);

  console.log(screen.debug());

  const addNoteInput = screen.getByPlaceholderText('Adicione o texto');
  fireEvent.change(addNoteInput, { target: { value: 'Test Note' } });

  const addNoteButton = screen.getByText('Adicionar Nota');
  fireEvent.click(addNoteButton);

  console.log(screen.debug());

  expect(mockAddNote).toHaveBeenCalledWith({ note: 'Test Note', createdAt: expect.any(String) });
});
