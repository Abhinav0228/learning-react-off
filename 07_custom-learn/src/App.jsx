import { useState } from 'react'
import './App.css'
import Signin from './Signin'
import Signup from './Signup'

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  
  return (
    <>
      <div className="contain w-full h-screen flex items-center justify-center bg-yellow-100">
        <div className="info rounded-xl bg-white py-4 px-5">
          <h1>Are You a User</h1>
          <div className="btn-wrap flex items-center gap-2">
            <button onClick={()=> setisLoggedIn(false)} className='bg-red-500 py-2 px-5 text-white rounded-2xl'>NO</button>
            <button onClick={()=> setisLoggedIn(true) } className='bg-blue-400 py-2 px-5 rounded-2xl'>YES</button>
          </div>

        </div>

        <div className="wrap">
           { isLoggedIn ? <Signin/> : <Signup/> }
        </div>
      </div>
    </>
  )
}

export default App
