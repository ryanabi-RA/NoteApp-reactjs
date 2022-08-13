export default function NoteInputHeader({ maxChar }) {
    
    return (
        <div className="note-input__header">
            <h2>Buat Catatan</h2>
            <p className="note-input__title__char-limit">Sisa karakter : {maxChar}</p>
        </div>
    )
}