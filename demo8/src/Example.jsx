
import React, {useState} from 'react'

function Example() {
  const [name, updateName] = useState("sean")
  return (
    <>
    <h3>Use State Hook</h3>
    <h4 style={{color:"red",fontWeight:800}}>Name:{name}</h4>
    <button onClick={()=>updateName("Ann")}>CHANGE NAME</button>
    
    </>
  )
}

export default Example