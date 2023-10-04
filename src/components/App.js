import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map(function (n) {
        return <Note title={n.title} content={n.content} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
