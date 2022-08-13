import NoteInputBody from "./NoteInputBody";
import NoteInputHeader from "./NoteInputHeader";
import NoteInputTitle from "./NoteInputTitle";

export default function NoteInput({ title, maxChar, body, titleChange, bodyChange, onSubmit }) {

    return (
        <div className="note-input">
            <NoteInputHeader maxChar={maxChar} />
            <NoteInputTitle title={title} titleChange={titleChange} />
            <NoteInputBody body={body} bodyChange={bodyChange} />
            <button onClick={onSubmit}>Buat</button>
        </div>
    );
}