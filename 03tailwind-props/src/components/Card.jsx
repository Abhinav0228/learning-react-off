import React from 'react'

export const Card = ({username, titleText = "newuser"}) => {
    console.log(username);
    
  return (
    <>
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4 ">
        <img
          src="https://img.freepik.com/premium-vector/boy-work-computers_987671-48.jpg?ga=GA1.1.1112069771.1729593368&semt=ais_hybrid"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            {titleText}
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    </>
  )
}
