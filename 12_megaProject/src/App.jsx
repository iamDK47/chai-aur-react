import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const piyaz = () => {}

  return ( 
    <>
    <div className='text '> PIYAZ KHAA</div>
    <button
    onClick={piyaz}
    > <a href="https://www.flaticon.com/free-icons/onion" title="onion icons"></a> ARAIN BREATHES</button>
    </>
  )
}

export default App
