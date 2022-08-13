import NoteItemBody from "./NoteItemBody";
import NoteItemDate from "./NoteItemDate";
import NoteItemTitle from "./NoteItemTitle";

export default function NoteItemContent({title, date, body}) {
    return (
        <div className="note-item__content">
            <NoteItemTitle title={title}/>
            <NoteItemDate date={date}/>
            <NoteItemBody body={body}/>
        </div>
    );
}