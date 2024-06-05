import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
    const notesInitisal = [
        {
          "_id": "665e1bc284cf103939d88462",
          "user": "665a2f8dbbb67827ebce2f1e",
          "title": "My title 2",
          "description": "This is description 2.",
          "tag": "Personal tag 2",
          "date": "2024-06-03T19:38:42.073Z",
          "__v": 0
        },
        {
          "_id": "666019f607a2dd101c5d9ff2",
          "user": "665a2f8dbbb67827ebce2f1e",
          "title": "My title 1",
          "description": "This is description 1.",
          "tag": "Personal tag 1",
          "date": "2024-06-05T07:55:34.835Z",
          "__v": 0
        }
      ];

     const [notes, setNotes] = useState(notesInitisal);
    return (
         <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

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