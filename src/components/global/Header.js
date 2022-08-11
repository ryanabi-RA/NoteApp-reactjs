import Search from "./Search"

export default function Header() {
    return (
        <div className="note-app__header">
            <h1>NOTES</h1>
            <Search />
        </div>
    );
}