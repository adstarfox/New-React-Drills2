import './App.css';
import { useState } from 'react';

function App() {
  const [listData, setListData] = useState(['spaghetti','ice cream','sushi', 'bologna', 'cheese'])

  const list = listData.map((e,index) => {
    return <p key={index}>{e}</p>
  })

  return (
    <div className="App">
      {list}
    </div>
  );
}

export default App;
