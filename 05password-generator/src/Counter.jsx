import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  function resetButton() {
    setCount(0)
  }

  function minusCount() {
    setCount(count - 5);
  }

  function plusCount (){
    setCount(count + 5)
  }

  return (
    <>
        <button onClick={handleClick} className='text-white'>
        You pressed me {count} times
        </button>
        <button onClick={resetButton} className='text-white bg-zinc-500 p-3 rounded-full ms-2'>Reset</button>
        <button onClick={minusCount} className='text-white bg-zinc-500 p-3 rounded-full ms-2'>-5</button>
        <button onClick={plusCount} className='text-white bg-zinc-500 p-3 rounded-full ms-2'>+5</button>
    </>
  );
}
