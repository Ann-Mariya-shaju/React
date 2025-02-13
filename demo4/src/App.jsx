// class component

import Home from "./Home"
import Random from "./Random"

function App() {
 
 const name = "Ann"
 const location = "kakkanad"
 
  return (
    <>
     <h3>Class Components</h3>
     <Random userMessage = {"Message from app"} />
     <Home firstName= {name} place={location} />
     pin = {670511}
    </>
  )
}

export default App
