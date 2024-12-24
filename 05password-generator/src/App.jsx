import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*+-_[]{}~"

    for (let i = 1; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)


  }, [length, numAllowed, charAllowed, setPassword])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg my-8 text-orange bg-gray-700 p-4 pb-6'>
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <div className='flex shadow overflow-hidden mb-4 mt-2 rounded-md'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly />
            <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>copy</button>

        </div>

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label className='text-white'>Length: {length}</label>
            </div>

            <div className='flex text-sm gap-x-1'>
              <input type="checkbox"
              defaultChecked = {numAllowed}
              id='numInput'
              onChange={setNumAllowed ((prev) => !prev) }
              />
            </div>
          </div>
      </div>
    </>
  )
}

export default App