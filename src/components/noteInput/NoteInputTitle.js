export default function NoteInputTitle({ title, onTitleChange }) {
    return (
        <div className="note-input__title">
            <input type="text" placeholder="Judul..." value={title} onChange={onTitleChange}/>
        </div>
    )
}