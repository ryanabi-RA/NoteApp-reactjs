import NoteItem from "./NoteItem"

export default function NoteListArchived({ notes, onDelete, onActive }) {
    const isArsip = (note, archived) => {
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
                    notes.map((note) => isArsip(note, note.archived))
                }
            </div>
        </div>
    );
}