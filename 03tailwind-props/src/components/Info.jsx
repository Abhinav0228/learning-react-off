import React from 'react'

export const Info = ({ aboutTitle = "About Us", aboutInfo, btn = "More info" }) => {
  return (
    <>
        <h4>{ aboutTitle }</h4>
        <p> {aboutInfo} </p>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">{btn}</button>
    </>
  )
}
