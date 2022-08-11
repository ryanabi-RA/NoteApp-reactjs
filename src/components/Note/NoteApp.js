import React, { Component } from "react"
import NoteList from "../notes/NoteList"
import NoteInput from "./NoteInput"
import { getInitialData } from "../../utils/data"

class NoteApp extends Component {
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
        // this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        // this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

        this.onDelete = this.onDelete.bind(this);
        this.onArsip = this.onArsip.bind(this);
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

    // onBodyChangeEventHandler(event) {
    //     this.setState(() => {
    //         return {
    //             body: event.target.value
    //         }
    //     })
    // }

    // onSubmitEventHandler(event) {
    //     event.preventDefault();
    //     this.props.addNote(this.state);
    //     this.setState(() => {
    //         return {
    //             title: '',
    //             body: '',
    //             titleChar: 50
    //         }
    //     })
    // }

    onDelete(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
        console.log(notes);
    }

    
    onArsip(id, archived) {
        const notes = this.state.notes.filter(note => note.archived = true);
        this.setState({ notes });
        console.log(id, archived, notes);
    }

    // onArsip(id) {
    //     // console.log(id, archived)
        
    //     const notes = this.state.notes.set(note => note.archived = );
    //     console.log(notes);
    //     // this.setState({ });
    // }

    render() {
        return (
            <div className="note-app__body" >
                <NoteInput maxChar={this.state.resultChar} title={this.state.title} titleChange={this.onTitleChangeEventHandler} />
                <NoteList notes={this.state.notes} onDelete={this.onDelete} onArsip={this.onArsip} status={false}/>
                {/* <NoteList title="Catatan Arsip" notes={this.state.notes} onDelete={this.onDelete} onActive={this.onActive} status={true}/> */}
            </div>
        )
    }
}

export default NoteApp