export default function NoteInputBody({body, onBodyChange}) {
    return (
        <div className="note-input__body">
            <textarea typeof="" placeholder="Isi catatan..." value={body} onChange={onBodyChange}/>
        </div>
    )
}