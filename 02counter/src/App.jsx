import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)

  // let counter = 15
  // let add = function(){
  //   counter = counter + 1
  //   console.log(counter)
  //   document.getElementById('c').textContent = counter
  // }
  
  const add = function(){
    if (counter<20){
      setCounter(counter + 1)
    }else{
      alert('no')
    }
  }

  return (
    <>
      <h1>count is : {counter}</h1>

      <button onClick={add}>Increase {counter}</button>
      <button>Decrease {counter}</button>
    </>
  )
}

export default App
