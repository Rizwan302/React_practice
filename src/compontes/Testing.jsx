import React, { useState } from 'react'

export default function Testing() {
    const [count, setCount] = useState(0)
    // const [name, setName] = useState("Increment")

  return (
    <div>
      
      <button onClick={setCount(count + 1)}>+</button>{count} <button onClick={setCount(count - 1)}>-</button>
    </div>
  )
}
