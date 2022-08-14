import { Component } from 'react'
import { getInitialData } from './utils/data'
import Header from './components/global/Header'
import NoteBody from './components/NoteBody'
import './style/style.css'
import Popup from './components/global/Popup'


export default class NoteApp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getInitialData(),

      title: '',
      body: '',
      resultChar: 50,
      limit: 50,

      search: '',
      isOpen: false,
      contents: {}
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.onDelete = this.onDelete.bind(this)
    this.onArchive = this.onArchive.bind(this)
    this.onActive = this.onActive.bind(this)

    this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this)
    this.togglePopup = this.togglePopup.bind(this)
  }

  onTitleChangeEventHandler(event) {
    if (this.state.resultChar > 0) {
      this.setState({
        title: event.target.value,
        resultChar: this.state.limit - event.target.value.length
      })
    }
  }

  onBodyChangeEventHandler(event) {
    if (this.state.resultChar !== " ") {
      this.setState({ body: event.target.value })
    }
  }

  onSubmit(event) {
    if (this.state.title !== "" && this.state.body !== "") {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes,
            {
              id: +new Date(),
              title: this.state.title,
              body: this.state.body,
              createdAt: +new Date(),
              archived: false,
            }
          ]
        }
      })
    } else {
      this.setState({
        isOpen: true,
        contents: <> <h3>Judul dan isi catatan harus diisi!</h3> </>
      })
    }
  }

  togglePopup() {
    this.setState({ isOpen: false })
  }

  onSearchChangeEventHandler(event) {
    this.setState({ search: event.target.value })
  }

  onDelete(id) {
    const notes = this.state.notes.filter(note => note.id !== id)
    alert("Apakah ingin menghapus catatan ini ?", this.setState({ notes }))
  }

  onActive(id) {
    const notes = this.state.notes.map((note) => note.id === id ? { ...note, archived: false } : note)
    this.setState({ notes })
  }

  onArchive(id) {
    const notes = this.state.notes.map((note) => note.id === id ? { ...note, archived: true } : note)
    this.setState({ notes })
  }

  render() {
    return (
      <div className="note-app">
        <Header search={this.state.search} onSearch={this.onSearchChangeEventHandler} />
        <NoteBody maxChar={this.state.resultChar} title={this.state.title} onTitleChange={this.onTitleChangeEventHandler} body={this.state.body} onBodyChange={this.onBodyChangeEventHandler} onSubmit={this.onSubmit} search={this.state.search} notes={this.state.notes} onDelete={this.onDelete} onArchive={this.onArchive} onActive={this.onActive} />
        {this.state.isOpen && <Popup handleClose={this.togglePopup} content={this.state.contents} />}
      </div>
    )
  }
}