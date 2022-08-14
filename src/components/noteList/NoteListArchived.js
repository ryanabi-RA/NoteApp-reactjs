import NoteItem from "./NoteItem"

export default function NoteListArchived({ notes, onDelete, onActive, search }) {
    const isArchive = (note, archived) => {
        if (archived) {
            return (
                <NoteItem key={note.id} onDelete={onDelete} onMove={onActive} text="Aktif" {...note} />
            )
        }
    }

    return (
        <div>
            <h2>Catatan Arsip</h2>
            <div className="notes-list">
                {
                    notes.filter((note) => note.title.toLowerCase().includes(search)).map((note) => isArchive(note, note.archived))
                }
            </div>
        </div>
    );
}