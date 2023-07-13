import './App.css';
import { useState } from 'react'

function App() {
  const [listData, setListData] = useState(['spaghetti','ice cream','sushi', 'bologna', 'cheese'])
  const [letters, setLetters] = useState('')

  let list = listData.filter((e,index) => {
    return e.includes(letters)
    })
    .map((e, index) => {
      return <p key={index}>{e}</p>
    })

  return (
    <div className="App">
      <input type="text" onChange={e => setLetters(e.target.value)} />
      {list}
    </div>
  );
}

export default App;
