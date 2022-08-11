export default function NoteItemAction({ id, archived, onDelete, onArsip }) {
    return (
        <div className="note-item__action">
            <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
            <button className="note-item__archive-button" onClick={() => onArsip(id, archived)}>Arsip</button>
        </div>
    );
}