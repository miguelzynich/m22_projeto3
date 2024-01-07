import React, { useState } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import './NoteList.css';

interface Note {
  note: string;
  createdAt: string;
}

interface NoteListProps {
  notes: Note[];
  filter: string;
  sortOrder: 'recente' | 'antigo';
  onDelete: (index: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, filter, sortOrder, onDelete }) => {
  let sortedNotes = [...notes];

  if (sortOrder === 'recente') {
    sortedNotes.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } else if (sortOrder === 'antigo') {
    sortedNotes.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  }

  const filteredNotes = sortedNotes.filter((note) =>
    note.note.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="note-list-container">
      <ul className="note-list">
        {filteredNotes.map((note, index) => (
          <NoteItem
            key={index}
            note={note.note}
            createdAt={note.createdAt}
            onDelete={() => onDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
