import NoteItem from "./NoteItem"

export default function NoteListArchived({ notes, onDelete, onActive, search }) {
    const notesArchived = notes.filter((note) => note.archived === true);

    const isNull = (notesArchived) => {
        if (notesArchived.length > 0) {
            return (
                <div className="notes-list">
                    {
                        notesArchived.filter((note) => note.title.toLowerCase().includes(search)).map((note) => isArchive(note, note.archived))
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
            {isNull(notesArchived)}
        </div>
    )
}