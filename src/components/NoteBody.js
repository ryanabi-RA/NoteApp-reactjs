import NoteInput from "./noteInput/NoteInput"
import NoteList from "./noteList/NoteList"

export default function NoteBody({ maxChar, title, body, onTitleChange, onBodyChange, onSubmit, notes, onDelete, onArchive, onActive, search }) {
    return (
        <div className="note-app__body" >
            <NoteInput maxChar={maxChar} title={title} onTitleChange={onTitleChange} body={body} onBodyChange={onBodyChange} onSubmit={onSubmit} />
            <NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} onActive={onActive} search={search} />
        </div>
    )
}