import NoteItem from "./NoteItem"

export default function NoteListActive({ notes, onDelete, onArchive, search }) {
    const isActive = (note, archived) => {
        if (!archived) {
            return (
                <NoteItem key={note.id} onDelete={onDelete} onMove={onArchive} text="Arsip" {...note} />
            )
        }
    }

    return (
        <div>
            <h2>Catatan Aktif</h2>
            <div className="notes-list">
                {
                    notes.filter((note) => note.title.toLowerCase().includes(search)).map((note) => isActive(note, note.archived))
                }
            </div>
        </div>
    )
}