// conditional rendering
// -----------------------------------
// truthy operator

import React from 'react'

function Home() {
    const course='mearn'
  return (
    <> 
    {
        course === 'mearn' &&
        <div>
        <h2>SUBJECTS</h2>
        <ul>
            
            <li>MONGO</li>
            <li>EXPRESS</li>
            <li>ANGULAr</li>
            <li>REACT</li>
            <li>NODE</li>
        </ul>
        </div>
}
        </>
    
   
  
  )
}

export default Home
