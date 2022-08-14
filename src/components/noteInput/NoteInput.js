import NoteInputBody from "./NoteInputBody";
import NoteInputHeader from "./NoteInputHeader";
import NoteInputSubmit from "./NoteInputSubmit";
import NoteInputTitle from "./NoteInputTitle";

export default function NoteInput({ title, maxChar, body, onTitleChange, onBodyChange, onSubmit }) {

    return (
        <div className="note-input">
            <NoteInputHeader maxChar={maxChar} />
            <NoteInputTitle title={title} onTitleChange={onTitleChange} />
            <NoteInputBody body={body} onBodyChange={onBodyChange} />
            <NoteInputSubmit onSubmit={onSubmit} />
        </div>
    );
}