import React from "react";

function Note(props) {
  // props is a parameter that we can use inside the function
  return (
    <div className="note">
      <h1>{props.title}</h1> {/* title is a prop that we made up */}
      <p>{props.content}</p> {/* content is a prop that we made up */}
    </div>
  );
}

export default Note;
