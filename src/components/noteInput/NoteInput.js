import NoteInputBody from "./NoteInputBody";
import NoteInputHeader from "./NoteInputHeader";
import NoteInputTitle from "./NoteInputTitle";

export default function NoteInput({ title, maxChar, titleChange }) {

    return (
        <div className="note-input">
            <NoteInputHeader maxChar={maxChar} />
            <NoteInputTitle title={title} titleChange={titleChange}/>
            <NoteInputBody />
            <button>Buat</button>
        </div>
    );
}