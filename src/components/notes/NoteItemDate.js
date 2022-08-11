import { showFormattedDate } from '../../utils/data';

export default function NoteItemDate({date}) {
    return (
        <div className="note-item__date">
            <p>{showFormattedDate(date)}</p>
        </div>
    );
}