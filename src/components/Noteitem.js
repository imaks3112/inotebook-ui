import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body" style={{backgroundColor: '#fffcfc'}}>
          <div className="d-flex align-item-center" style={{justifyContent: 'space-between'}}>
            <h5 className="card-title">{note.title}</h5>
            <div className="action-icons">
            <i className="fa-regular fa-pen-to-square mx-2" style={{color: '#0d6efd'}} onClick={() => updateNote(note)}></i>
            <i className="fa-regular fa-trash-can mx-2" style={{color: '#0d6efd'}} onClick={()=> {deleteNote(note._id); props.showAlert('Note deleted Successfully', 'success');}}></i>
            </div>
          </div>
          <p className="card-text">{note.description}</p>
          <span className="badge bg-info text-dark">{note.tag}</span>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
