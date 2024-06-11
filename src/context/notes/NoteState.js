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
    const note = await response.json();
     setNotes(notes.concat(note));
  };

  // Edit note
  const editNote = async (id, title, description, tag) => {
    // Edit API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1YTJmOGRiYmI2NzgyN2ViY2UyZjFlIn0sImlhdCI6MTcxNzMzOTkzMH0.JHcSiW36Xybp-depMW4pTl6m2mMwE1S0Jz1jJG7KxsY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));

    // update logic.
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  // delete note
  const deleteNote =async (id) => {
    // delete API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1YTJmOGRiYmI2NzgyN2ViY2UyZjFlIn0sImlhdCI6MTcxNzMzOTkzMH0.JHcSiW36Xybp-depMW4pTl6m2mMwE1S0Jz1jJG7KxsY",
      },
    });
    const json = response.json();
    console.log(json);

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
