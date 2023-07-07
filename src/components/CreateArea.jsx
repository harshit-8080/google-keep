import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {

    const [title, setTitle] = useState("");
    const [note, setNote] = useState("");

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }
    function handleNoteChange(event) {
        setNote(event.target.value)
    }

    function handleClick() {
        if (title && note) {
            props.onAdd({ title, note });
        }
    }

    return (
        <>
            <div className="note-container">
                <input
                    onChange={handleTitleChange}
                    type="text"
                    placeholder="Title" />

                <textarea
                    onChange={handleNoteChange}
                    rows="4"
                    placeholder="Take a note">
                </textarea>

                <AddIcon onClick={handleClick} />
            </div>
        </>
    )
}

export default CreateArea;