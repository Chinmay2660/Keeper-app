import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <React.StrictMode>
      <Header />
      {notes.map(
        (
          noteItem // map() is a function that takes a function as a parameter
        ) => (
          <Note
            key={noteItem.key} // key is a special prop that React uses to keep track of the elements in the list
            title={noteItem.title} // title is a prop that we made up
            content={noteItem.content} // content is a prop that we made up
          />
        )
      )}
      <Footer />
    </React.StrictMode>
  );
}

export default App;
