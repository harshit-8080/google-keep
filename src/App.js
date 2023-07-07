import "./App.css";
import Header from "./components/Header.jsx";
import CreateArea from "./components/CreateArea.jsx";
import Note from "./components/Note.jsx";
import { useState } from "react";

function App() {
  const [allNotes, setallNotes] = useState([]);

  function addAllNotes(newNote) {
    setallNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    // console.log(allNotes);
  }

  function deleteNote(id) {
    console.log(id);
    let arr = allNotes.filter((note, index) => {
      return index != id;
    });

    setallNotes(arr);
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addAllNotes} />

      <div className="main">
        {allNotes?.map((notes, index) => {
          return (
            <Note key={index} id={index} value={notes} onDelete={deleteNote} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
