import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


let bgColor = document.body.style.backgroundColor

function App() {
  const [bgColor, setbgColor] = useState(black)

  return (
    <>
      <div>
        <button className='bg-red text-black'>red</button>
        <button className='bg-yellow text-black'>yellow</button>
        <button className='bg-green text-black'>green</button>
        <button className='bg-blue text-black'>blue</button>
        <button className='bg-white text-black'>white</button>
      </div>
    </>
  )
}

export default App
