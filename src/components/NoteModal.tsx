import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { Context } from "../context";
import iconTrash from "../icons/trash.png";
import { NoteInterface } from "./types";

interface NoteModalProps {
  note: NoteInterface;
  handleDeleteNote(id: number): void;
  showNoteModal: boolean;
  setShowNoteModal: (value: boolean) => void;
}

function NoteModal(props: NoteModalProps) {
  const { notes, setNotes } = useContext(Context);

  const [newEditedNote, setNewEditedNote] = useState<NoteInterface>(props.note);

  const handleUpdateNote = (id: number) => {
    const newNotes: any = [...notes]; // import Notes interface
    const itemToUpdate = notes.findIndex(
      (note: NoteInterface) => note.id === id
    );
    newNotes[itemToUpdate] = newEditedNote;
    setNotes(newNotes);
    props.setShowNoteModal(false);
  };

  return (
    <Modal
      dialogClassName="noteModal"
      // centered
      show={props.showNoteModal}
      onHide={() => {
        handleUpdateNote(props.note.id);
        props.setShowNoteModal(false);
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <input
            type="text"
            value={newEditedNote.title}
            onChange={(e) => {
              setNewEditedNote({
                id: props.note.id, // TODO: find a way not to send the other values (not being changed)
                text: newEditedNote.text,
                title: e.target.value,
              });
            }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea
          style={{ width: "100%" }}
          value={newEditedNote.text}
          onChange={(e) => {
            setNewEditedNote({
              id: props.note.id,
              text: e.target.value,
              title: newEditedNote.title,
            });
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <p>
          <img
            src={iconTrash}
            onClick={() => props.handleDeleteNote(props.note.id)}
            alt="Delete note"
          />
        </p>
      </Modal.Footer>
    </Modal>
  );
}

export default NoteModal;
