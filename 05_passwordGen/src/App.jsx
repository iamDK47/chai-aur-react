import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  let [pass, setPass] = useState(null)
  let [specials, setSpecials] = useState(null)
  let [Numbers, setNumbers] = useState(null)
  let [length, setlength] = useState(8)

  let passwordGen = useCallback(() => {
    let pass = ""
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (Numbers)  letter += "0123456789"
    if (specials) letter += "`~!@#$%^&*()_+-=[];:',./?><'}{|"

    for (let i = 1; index <= length; index++) {
      let random = Math.floor(Math.random() * letter.length + 1)     
      pass += letter.charAt(random)
    }
    setPass(pass)
  }, [length,Numbers,specials])

useEffect(() => {
  passwordGen()
}, [specials,Numbers,length,passwordGen])

  return (
    <>
      <div className='bg-gray-400 w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-black'>
        <div className=' flex rounded-lg overflow-hdden mb-4'>
          <input 
          type="text"
          value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='password' />
          <button 
          className='bg-orange-400 text-white px-3 py-0.5 shrink-0 outline-none'
          > Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            value={length}
            mix={8}
            max={100}
            className='cursor-pointer'
            onChange={(e) => setlength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            value={specials}
            onChange={() => setSpecials((previousVal) => !previousVal)}
            />
            <label>Specials</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type='checkbox'
            value={Numbers}
            onChange={() => setNumbers((previousVal) => !previousVal)}
            />
            <label>Numbers</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App




