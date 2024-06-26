import React, { useContext, useState } from 'react';
import NoteContext from "../context/notes/noteContext";

const AddNote = (props) => {
    const context = useContext(NoteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""});
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
        props.showAlert('Added succefully', 'success');
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value })
    }

  return (
    <div>
       <h2>Add Note</h2>
      <form className="my-3">
      <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name='title'
            onChange={onChange}
            value={note.title}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name='description'
            onChange={onChange}
            value={note.description}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name='tag'
            onChange={onChange}
            value={note.tag}
            aria-describedby="emailHelp"
          />
        </div>
  
        <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  )
}

export default AddNote
