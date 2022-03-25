import React, { useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import { Notes } from "./components";
import { Context } from "./context";
import "./App.css";

function App() {
  const localNotes = localStorage.getItem("notes");
  const [notes, setNotes] = useState([] as any);

  useMemo(() => {
    if (localNotes) {
      const parsedNotes = JSON.parse(localNotes);
      setNotes(parsedNotes);
    }
  }, []);

  useMemo(() => {
    // TODO: Is this being actually useful? works weird
    const stringifiedNotes = JSON.stringify(notes);
    localStorage.setItem("notes", stringifiedNotes);
  }, [notes]);

  return (
    <div className="App">
      <Context.Provider value={{ notes, setNotes }}>
        <Container>
          <Notes />
        </Container>
      </Context.Provider>
    </div>
  );
}

export default App;
