import React, { useContext } from "react";

import NoteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;
  console.log(setNotes)
  return (
    <>
      <div className="row my-3">
        <h2>Your notes</h2>
        {notes.map((note) => {
          return <Noteitem note={note} key={note.title}/>
        })}
      </div>
    </>
  );
};

export default Notes;
