import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { Info } from './components/Info'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Test</h1>
      <div className="wrap flex gap-4">
        <Card username = "abhinav" titleText = "User1"/>
        <Card username = "manuu" titleText = "User2"/>
        <Card username = "React"/>
      </div>
      <Info aboutInfo = "about us the about of the company of which about the company is about" />

    </>
  )
}

export default App
