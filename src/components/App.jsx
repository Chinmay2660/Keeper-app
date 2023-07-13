import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <React.StrictMode>
      <Header />
      <Note />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
