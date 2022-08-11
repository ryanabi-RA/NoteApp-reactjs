import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

export default function NoteItem({ id, title, body, createdAt, archived, onDelete, onArsip}) {
    return (
        <div className="note-item">
            <NoteItemContent title={title} date={createdAt} body={body} />
            <NoteItemAction id={id} archived={archived} onDelete={onDelete} onArsip={onArsip} />
        </div>
    );
}