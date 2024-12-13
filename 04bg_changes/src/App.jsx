import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const [age, setAge] = useState()

  return (
    <>
     <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg bg-white p-2 rounded-xl'>
          <button
          onClick={ () => setColor('red') }
           className='px-2 py-1 rounded-md outline-none' style={{backgroundColor:"red"}}>Red
           <p></p>
           </button>
          <button
          onClick={ () => setColor('purple') }
           className='px-2 py-1 rounded-md outline-none' style={{backgroundColor:"purple"}}>Purple
           <p></p>
           </button>
          <button
          onClick={ () => setColor('green') }
          className='px-2 py-1 rounded-md outline-none' style={{backgroundColor:"green"}}>Green
          <p></p>
          </button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
