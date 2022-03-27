import React, { useContext } from "react";
import { Context } from "../context";
import { Row } from "react-bootstrap";
import { Input, Note, Title } from ".";

interface NoteInterface {
  text: string;
  title: string;
  key: number;
  id: number;
  handleDeleteNote(id: number): () => {};
}
function Notes() {
  const { notes, setNotes } = useContext(Context);

  const handleDeleteNote = (id: number) => {
    const newNotes = notes.filter((note: NoteInterface) => {
      return note.id !== id;
    });

    setNotes(newNotes);
  };

  // Pass to Input
  //   const handleAddNote = (text: string) => {
  //     if (text) {
  //       const newNote = { text, id: Date.now() };
  //       setNotes([...notes, newNote]);
  //       setNote("");
  //     }
  //   };

  return (
    <div>
      <Title />
      <Input
      //   TODO: handleAddNote={handleAddNote} ADD THIS PROP
      />
      {/* <hr style={{ padding: "5px", backgroundColor: "black" }} color="black"  /> */}
      <div style={{ marginTop:'1em', border:"1px solid black" }}> </div>

      <Row>
        {notes.map((note: NoteInterface, key: number) => (
          <Note handleDeleteNote={handleDeleteNote} note={note} id={key} />
        ))}
      </Row>
      <br />
      <br />
      <br />
      {/* TODO: there's probably a better way to do this */}
      <br />
    </div>
  );
}

export default Notes;
