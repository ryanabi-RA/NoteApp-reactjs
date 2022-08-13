import NoteItem from "./NoteItem"

export default function NoteListActive({ notes, onDelete, onArchive }) {
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
                    notes.map((note) => isActive(note, note.archived)
                        // <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArsip={onArsip} {...note} />
                    )
                }
            </div>
        </div>
    );
}