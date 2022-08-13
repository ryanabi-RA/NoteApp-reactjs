import NoteItem from "./NoteItem"
// import Search from "../global/Search"

export default function NoteListActive({ notes, onDelete, onArchive }) {
    const isActive = (note, archived) => {
        if (!archived) {
            return (
                <NoteItem key={note.id} onDelete={onDelete} onMove={onArchive} text="Arsip" {...note} />
            )
        }
    }
    const searchText = 'mo'
    const search = (searchText) => notes.filter((note) => note.title.toLowerCase().includes(searchText))

    return (
        <div>
            <h2>Catatan Aktif</h2>
            <div className="notes-list">
                {search(searchText).map((note) => isActive(note, note.archived)
                        // <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArsip={onArsip} {...note} />
                    )
                }
            </div>
        </div>
    );
}