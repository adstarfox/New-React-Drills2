import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function App() {
  const [letters, setLetters] = useState('')

  console.log(letters)

  return (
    <div className="App">
      <input type="text" onChange={e => setLetters(e.target.value)} />
      <p>{letters}</p>
    </div>
  );
}

export default App;
