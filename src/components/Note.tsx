import React, { useState } from "react";
import { NoteModal } from ".";
import { Col, Card } from "react-bootstrap";
import { NoteInterface } from "./types";

interface NoteProps {
  id: number;
  note: NoteInterface;
  handleDeleteNote(id: number): void;
}

function Note(props: NoteProps) {
  const [showNoteModal, setShowNoteModal] = useState(false);

  return (
    <>
      <Col xs={6} className={"pt-4"} key={props.note.id}>
        <div>
          <Card onClick={() => setShowNoteModal(true)} className="note-card">
            <Card.Header  style={{ backgroundColor: "#94DFFF" }}>
              <Card.Title as="h6">
                {/* Could show currently editing text by using state.text  */}
                <p>{props.note.title}</p>
              </Card.Title>
            </Card.Header>

            <Card.Body>
              {/* TODO: Doesn't show line breaks \n */}
              {props.note.text.length < 165 ? (
                <Card.Text className="note-card-text">
                  {props.note.text}
                </Card.Text>
              ) : (
                <Card.Text className="note-card-text">
                  {props.note.text.substring(0, 165)}
                  <br />
                  <br />
                  ...
                  <br />
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        </div>
      </Col>
      <NoteModal
        note={props.note}
        showNoteModal={showNoteModal}
        setShowNoteModal={setShowNoteModal}
        handleDeleteNote={props.handleDeleteNote}
      />
    </>
  );
}

export default Note;
