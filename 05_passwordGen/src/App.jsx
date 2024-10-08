import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  let [pass, setPass] = useState("")
  let [specials, setSpecials] = useState(false)
  let [Numbers, setNumbers] = useState(false)
  let [length, setlength] = useState(5)

  let passRef = useRef(null)
  let copyPassClip = useCallback(()=> {
    passRef.current.select()
    passRef.current?.setSelectionRange(0,999)
    window.navigator.clipboard.writeText(pass);
  }, [pass])

  let passwordGen = useCallback(() => {
    let pass = ""
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (Numbers)  letter += "0123456789"
    if (specials) letter += "`~!@#$%^&*()_+-=[];:',./?><'}{|"

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * letter.length + 1)     
      pass += letter.charAt(random)
    }
    setPass(pass)
  },[length,specials,Numbers])


useEffect(() => {
  passwordGen()
}, [specials,Numbers,length])

  return (
    <>
      <div className='bg-gray-400 w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-black'>
        <div className=' flex rounded-lg overflow-hdden mb-4'>
          <input 
          type="text"
          value={pass}
          className='outline-none w-full py-1 px-3'
          placeholder='password' 
          readOnly
          ref={passRef}/>
          <button 
          onClick={copyPassClip}
          className='bg-orange-400 text-white px-3 py-0.5 shrink-0 outline-none'
          > Copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            value={length}
            mix={5}
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
            onChange={() => setNumbers((prev) => !prev)}
            />
            <label>Numbers</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App




