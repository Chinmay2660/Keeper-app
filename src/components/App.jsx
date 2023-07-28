import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    // console.log("Clicked!");
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <React.StrictMode>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(
        // map() is a function that takes a function as a parameter
        (
          noteItem,
          index // noteItem is the current item in the array
        ) => (
          <Note
            key={index}
            id={index}
            // key={noteItem.key} // key is a special prop that React uses to keep track of the elements in the list
            title={noteItem.title} // title is a prop that we made up
            content={noteItem.content} // content is a prop that we made up
            onDelete={deleteNote}
          />
        )
      )}
      <Footer />
    </React.StrictMode>
  );
}

export default App;
