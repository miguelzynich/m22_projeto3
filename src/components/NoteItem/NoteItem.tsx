import React from 'react';
import './NoteItem.css';

interface NoteItemProps {
  note: string;
  createdAt: string;
  onDelete: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, createdAt, onDelete }) => {
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).format(new Date(createdAt));

  return (
    <div className="note-item">
      <p className="note-text">{note}</p>
      <p className="note-date">{formattedDate}</p>
      <button className="delete-button" onClick={onDelete}>
        Excluir
      </button>
    </div>
  );
};

export default NoteItem;
