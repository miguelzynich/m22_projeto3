// src/components/NoteItem/NoteItem.test.js

import { render, fireEvent } from '@testing-library/react';
import NoteItem from '../components/NoteItem/NoteItem';

test('renders note item correctly', () => {
  const onDeleteMock = jest.fn();
  const createdAt = '2024-01-05T12:34:56.789Z';

  const { getByText } = render(
    <NoteItem note="Test Note" createdAt={createdAt} onDelete={onDeleteMock} />
  );

  expect(getByText('Test Note')).toBeInTheDocument();
  expect(getByText('05/01/2024, 09:34:56')).toBeInTheDocument(); 
  
  fireEvent.click(getByText('Excluir'));
  expect(onDeleteMock).toHaveBeenCalledTimes(1);
});
