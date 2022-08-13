import React, { Component } from "react"
import { getInitialData } from "../utils/data"
import NoteInput from "./noteInput/NoteInput"
import NoteList from "./noteList/NoteList"

class NoteBody extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            resultChar: 50,
            limit: 50,
            notes: getInitialData(),
            status: true
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);

        this.onDelete = this.onDelete.bind(this);
        this.onArchive = this.onArchive.bind(this);
        this.onActive = this.onActive.bind(this);
    }

    onTitleChangeEventHandler(event) {
        if (this.state.resultChar > 0) {
            this.setState((e) => {
                return {
                    title: event.target.value,
                    resultChar: e.limit - event.target.value.length
                }
            })
        }
        console.log(this.state.title)
    }

    onDelete(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }
    onActive(id) {
        const notes = this.state.notes.map((note) => note.id === id ? {...note, archived : !note.archived} : note)
        this.setState({ notes });
    }
    
    onArchive(id) {
        const notes = this.state.notes.map((note) => note.id === id ? {...note, archived : !note.archived} : note)
        this.setState({ notes });
    }

    render() {
        return (
            <div className="note-app__body" >
                <NoteInput maxChar={this.state.resultChar} title={this.state.title} titleChange={this.onTitleChangeEventHandler} />
                <NoteList notes={this.state.notes} onDelete={this.onDelete} onArchive={this.onArchive} onActive={this.onActive}/>
            </div>
        )
    }
}

export default NoteBody