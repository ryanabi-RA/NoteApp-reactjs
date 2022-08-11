import NoteList from "./NoteList";

export default function NoteBody(notes, onDelete, onArsip) {
    return (
        <div>
            <NoteList  title="Catatan Aktif" notes={notes} onDelete={onDelete} onArsip={onArsip}/>
            <NoteList  title="Catatan Arsip" notes={notes} onDelete={onDelete} onArsip={onArsip}/>
        </div>
    )
}
