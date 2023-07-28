import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  // props is a parameter that we can use inside the function

  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1> {/* title is a prop that we made up */}
      <p>{props.content}</p> {/* content is a prop that we made up */}
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
