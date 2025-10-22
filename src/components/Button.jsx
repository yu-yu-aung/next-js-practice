"use client"

import React from 'react'

const Button = ({text, variant}) => {

  if (variant === "outline"){
    return (
    <button className='border-2 border-sky-500 rounded-lg bg-white text-gray-900 p-2'>{text}</button>
  ) 
  } 

  return(
      <button className='border-2 border-sky-500 rounded-lg bg-sky-300 text-gray-900 p-2'>{text}</button>
  )
}


export default Button;