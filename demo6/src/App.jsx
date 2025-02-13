import Home from "./Home"

// react events
function App() {

  const show= () =>{
    alert("User Clicked")
  }
  function loginUser(){
    alert("user logged")
  }
  const print = (data)=>{
    alert( data)
  }
  const getName= (e)=>{
    console.log(e.target.value);
    
  }

  return (
    <>
      <h3>REACT EVENTS</h3>
      <button style={{ color: 'white', backgroundColor: 'black', padding: '20px', margin: '20px', borderRadius: '5px' }} onClick={show}>SUBMIT</button>
      <button onClick={loginUser}>LOGIN</button>
      <br/>
      <br/>

      <input type="text" placeholder="Enter Username" />
     
     
     
      {/* call function with argument */}

      <br/>
      <button onClick={()=>print("Jennifer")}>PRINT NAME</button>
      <br/>
      <br/>

      <input type="text" placeholder="Enter Username" style={{padding:'10px',margin:'20px',width:'300px',borderRadius:'30px'}} 
      onChange={(e)=> getName(e)} /> 
      
      <Home/>
    </>

  
  )
}

export default App
