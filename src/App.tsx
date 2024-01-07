// src/App.tsx

import React, { useState } from 'react';
import AddNoteForm from './components/AddNoteForm/AddNoteForm';
import NoteList from './components/NoteList/NoteList';
import FilterComponent from './components/FilterComponent/FilterComponent'; // Update the import path

interface Note {
  note: string;
  createdAt: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState<'recente' | 'antigo'>('recente');

  const handleAddNote = (newNote: Note) => {
    setNotes([...notes, newNote]);
  };

  const handleDeleteNote = (index: number) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleFilterChange = (newFilter: string, newSortOrder: 'recente' | 'antigo') => {
    setFilter(newFilter);
    setSortOrder(newSortOrder);
  };

  return (
    <div className="app">
      <AddNoteForm addNote={handleAddNote} />
      <FilterComponent onFilterChange={handleFilterChange} />
      <NoteList notes={notes} filter={filter} sortOrder={sortOrder} onDelete={handleDeleteNote} />


    </div>
  );
};

export default App;
