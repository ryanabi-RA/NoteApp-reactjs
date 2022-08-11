import NoteItem from "./NoteItem"

export default function NoteList({ title, notes, onDelete, onArsip, status }) {
    const isActive = (note, archived) => {
        if (!archived) {
            return (
                <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArsip={onArsip} {...note} />
            )
        }
    }

    const isArsip = (note, archived) => {
        if (archived) {
            return (
                <NoteItem key={note.id} onDelete={onDelete} onArsip={onArsip} {...note} />
            )
        }   
    }
    return (
        <div>
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
            <div>
                <h2>Catatan Arsip</h2>
                <div className="notes-list">
                    {
                        notes.map((note) => isArsip(note, note.archived)
                            // <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArsip={onArsip} {...note} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}