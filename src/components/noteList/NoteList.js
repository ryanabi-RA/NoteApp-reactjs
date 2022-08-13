import NoteListActive from "./NoteListActive"
import NoteListArchived from "./NoteListArchived"

export default function NoteList({notes, onDelete, onArchive, onActive }) {
    
    return (
        <div className="note-list">
            <NoteListActive notes={notes} onDelete={onDelete} onArchive={onArchive} />
            <NoteListArchived notes={notes} onDelete={onDelete} onActive={onActive} />
        </div>
    )
}