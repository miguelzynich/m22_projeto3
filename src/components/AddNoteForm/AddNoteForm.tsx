import React, { useState } from 'react';
import './AddNoteForm.css';

interface AddNoteFormProps {
  addNote: (note: { note: string; createdAt: string }) => void;
}

const AddNoteForm: React.FC<AddNoteFormProps> = ({ addNote }) => {
  const [note, setNote] = useState('');

  const handleAddNote = () => {
    const newNote = { note, createdAt: new Date().toISOString() };
    addNote(newNote);
    setNote('');
  };

  return (
    <div className="add-note-form">
      <input type="text" className="add-note-input" value={note} onChange={(e) => setNote(e.target.value)}   placeholder="Adicione o texto"/>
      <button className="add-note-button" onClick={handleAddNote}>
        Adicionar Nota
      </button>
    </div>
  );
};

export default AddNoteForm;
