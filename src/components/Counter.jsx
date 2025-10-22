"use client"

import { useState } from "react"

const Counter = () => {
  const [count, setCount] = useState(0); 

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="bg-sky-300 border-2 rounded border-sky-500 text-black p-2"
    >Count : {count}</button>

  )
}

export default Counter