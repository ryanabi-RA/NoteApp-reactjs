export default function NoteInputBody({body, bodyChange}) {
    return (
        <div className="note-input__body">
            <textarea typeof="" placeholder="Isi catatan..." value={body} onChange={bodyChange}/>
        </div>
    )
}