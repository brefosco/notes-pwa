import { createContext } from "react";

// Somehow, interfaces don't work
// interface NoteInterface {
//     text: string;
//     id: number;
// }
// interface NotesInterface {
//     notes: NoteInterface[];
// }

export const Context = createContext({ notes: [], setNotes: (notes: { text: string, id: number }[]) => { } });
