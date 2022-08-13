// import './App.css';
import './style/style.css';
import Header from './components/global/Header';
import NoteBody from './components/NoteBody';

function NoteApp() {
  return (
    <div className="note-app">
      <Header />
      <NoteBody />
    </div>
  );
}

export default NoteApp;
