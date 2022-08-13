import { useState } from 'react';
import './style/style.css';
import Header from './components/global/Header';
import NoteBody from './components/NoteBody';

function NoteApp() {
  const [searchTitle, setSearchTitle] = useState('');
  return (
    <div className="note-app">
      <Header search={setSearchTitle}/>
      <NoteBody searchTitle={searchTitle}/>
    </div>
  );
}

export default NoteApp;
