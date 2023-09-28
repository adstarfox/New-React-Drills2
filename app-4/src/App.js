import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${user} Password: ${pass}`)
  }


  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" onChange={e => setUser(e.target.value)}/>
        <input type="text" onChange={e => setPass(e.target.value)}/>
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;
