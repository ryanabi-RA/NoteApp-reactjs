import NoteItem from "./NoteItem"

export default function NoteListActive({ notes, onDelete, onArchive, search }) {
    const notesActive = notes.filter((note) => note.archived === false);

    const isNull = (notesActive) => {
        if (notesActive.length > 0) {
            return (
                <div className="notes-list">
                    {
                        notesActive.filter((note) => note.title.toLowerCase().includes(search)).map((note) => isActive(note, note.archived))
                    }
                </div>
            )
        } else {
            return (
                <div className="notes-list__empty-message">
                    <p>Tidak ada Catatan</p>
                </div>
            )
        }
    }

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
            {isNull(notesActive)}
        </div>
    )
}