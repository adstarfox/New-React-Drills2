import {useState} from 'react'
import Image from './Image'
import './App.css';

function App() {
  const [imgURL, setImgURL] = useState(`https://i.kym-cdn.com/entries/icons/original/000/029/461/Phineas_and_Ferb_Dude__We're_Getting_the_Band_Back_Together_0-6_screenshot.png`)
  const [newUrl, setNewUrl] = useState('')

  const submit = (e) => {
    e.preventDefault()
    // console.log(newUrl)
    setImgURL(newUrl)
  }

  return (
    <div className='images'>
      <form onSubmit={submit}>
        <input type="text" placeholder='Please enter an image url' onChange={(e) => setNewUrl(e.target.value)}/>
        <button>Submit</button>
      </form>
      <Image imgURL={imgURL}/>
    </div>
  );
}

export default App;
