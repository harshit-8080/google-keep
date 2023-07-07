import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {

    function deleteNote() {
        props.onDelete(props.id);
    }

    return (
        <>
            <div className='all-note-container'>
                <h1>{props.value.title}</h1>
                <p>{props.value.note}</p>
                <DeleteIcon className="delete" onClick={deleteNote} />
            </div>
        </>
    )
}

export default Note