import Search from "./Search"

export default function Header({search}) {
    return (
        <div className="note-app__header">
            <h1>NOTES</h1>
            <Search search={search} />
        </div>
    );
}