import React, { useContext, useState } from "react";
import { Context } from "../context";
import { Row, Col, Form, Button } from "react-bootstrap";

function Input() {
  const { setNotes, notes } = useContext(Context);
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");

  const handleAddNote = () => {
    if (/\S/.test(noteTitle) && /\S/.test(noteText)) {
      const newNote = { title: noteTitle, text: noteText, id: Date.now() };
      setNotes([...notes, newNote]);
      setNoteTitle("");
      setNoteText("");
    }
  };

  return (
    <div>
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="Title"
            value={noteTitle}
            onChange={(e) => {
              setNoteTitle(e.target.value);
            }}
            style={{ marginBottom: "1em" }}
          />
          <Form.Control
            as="textarea"
            placeholder="Text"
            value={noteText}
            onChange={(e) => {
              setNoteText(e.target.value);
            }}
            style={{ marginBottom: "1em" }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary" onClick={handleAddNote}>
            Add note
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Input;
