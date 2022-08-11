export default function NoteInputTitle({ title, titleChange }) {
    return (
        <div className="note-input__title">
            <input type="text" placeholder="Judul..." value={title} onChange={titleChange}/>
        </div>
    )
}