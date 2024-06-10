import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // getAll notes API call
  const getAlldNote = async () => {
    // Add API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1YTJmOGRiYmI2NzgyN2ViY2UyZjFlIn0sImlhdCI6MTcxNzMzOTkzMH0.JHcSiW36Xybp-depMW4pTl6m2mMwE1S0Jz1jJG7KxsY",
      },
    });

    const json = await response.json();
    setNotes(json);
  };

  // Add note
  const addNote = async (title, description, tag) => {
    // Add API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1YTJmOGRiYmI2NzgyN2ViY2UyZjFlIn0sImlhdCI6MTcxNzMzOTkzMH0.JHcSiW36Xybp-depMW4pTl6m2mMwE1S0Jz1jJG7KxsY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json;
    console.log(json);

    const note = {
      _id: "665e1bc284cf103939d88462",
      user: "665a2f8dbbb67827ebce2f1e",
      title: title,
      description: description,
      tag: tag,
      date: "2024-06-03T19:38:42.073Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Edit note
  const editNote = async (id, title, description, tag) => {
    // Edit API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1YTJmOGRiYmI2NzgyN2ViY2UyZjFlIn0sImlhdCI6MTcxNzMzOTkzMH0.JHcSiW36Xybp-depMW4pTl6m2mMwE1S0Jz1jJG7KxsY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json;
    console.log(json);

    // update logic.
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  // delete note
  const deleteNote =async (id) => {
    console.log(id);

    // delete API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1YTJmOGRiYmI2NzgyN2ViY2UyZjFlIn0sImlhdCI6MTcxNzMzOTkzMH0.JHcSiW36Xybp-depMW4pTl6m2mMwE1S0Jz1jJG7KxsY",
      },
    });
    const json = response.json;
    console.log('delete note', json);

    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, getAlldNote, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;



// commented code for using the context -==>> <NoteContext.Provider value={{state, update}}>
//  const s1 = {
//     "name": 'Akshay',
//     "class": "5b"
// }
// const [state, setState] = useState(s1);

// const update = () => {
//     setTimeout(() => {
//         setState({
//             "name": 'Akshay',
//             "class": "5b"
//         })
//     }, 1000);
// }

// return (
//      <NoteContext.Provider value={{state, update}}>
//         {props.children}
//     </NoteContext.Provider>
// )
