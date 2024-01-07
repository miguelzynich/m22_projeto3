import React, { createContext, useContext, useState } from 'react';

interface NoteContextProps {
  notes: string[];
  addNote: (note: string) => void;
  deleteNote: (note: string) => void;
}

const NoteContext = createContext<NoteContextProps | undefined>(undefined);

export const NoteProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = (note: string) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const deleteNote = (noteToDelete: string) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note !== noteToDelete));
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNoteContext must be used within a NoteProvider');
  }
  return context;
};
