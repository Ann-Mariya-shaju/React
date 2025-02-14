import React, { useState } from 'react'

function Colors() {
    const [colors, setColors]=useState({
        first:'RED',
        second:'BLUE',
        third:'ORANGE',
        fourth:'GREEN'
    })
  return (
<>
<h2 style={{color:'blue'}}>COLORS</h2>
<ul>
    <li>{colors.first}</li>
    <li>{colors.second}</li>
    <li>{colors.third}</li>
    <li>{colors.fourth}</li>
</ul>
<button onClick={()=>setColors({...colors,first:"YELLOW"})}>CHANGE FIRST</button>
                                {/* ... means spread operator.idhu use cheydhal change color buttonil click
                                cheeyumbo aa color changum akum baaki avide nikkuvem cheyyum */}
<button onClick={()=>setColors({...colors,second:"GREY"})}>CHANGE SECOND</button>
</>
  )
}

export default Colors