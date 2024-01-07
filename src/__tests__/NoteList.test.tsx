import { render, fireEvent } from '@testing-library/react';
import NoteList from '../components/NoteList/NoteList';

test('renders note list correctly', () => {
  const onDeleteMock = jest.fn();
  const notes = [
    { note: 'Test Note 1', createdAt: '2024-01-05T12:34:56.789Z' },
    { note: 'Test Note 2', createdAt: '2024-01-06T10:22:33.456Z' },
  ];

  const { getByText } = render(
    <NoteList notes={notes} filter="" sortOrder="recente" onDelete={onDeleteMock} />
  );

  expect(getByText('Test Note 1')).toBeInTheDocument();
  expect(getByText('05/01/2024, 09:34:56')).toBeInTheDocument(); // Adjust the expected date as needed
  expect(getByText('Test Note 2')).toBeInTheDocument();
  expect(getByText('06/01/2024, 07:22:33')).toBeInTheDocument(); // Adjust the expected date as needed

  fireEvent.click(getByText('Test Note 1').closest('.note-item').querySelector('button'));
  expect(onDeleteMock).toHaveBeenCalledTimes(1);
});
