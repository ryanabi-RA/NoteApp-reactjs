export default function Search({ search, onSearch }) {
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari judul..." value={search} onChange={onSearch} />
        </div>
    )
}