import React, { useState } from 'react'

function SimpleForm() {
    const [firstName, setfirstname] = useState("");
    const [email, setemail] = useState("");
    const [mob, setmob]= useState("");
    
    
    const handleRegister = (e)=>{
        e.preventDefault();
        console.log(firstName);
        console.log(email);
        console.log(mob);
        
        // send data to backend

        const userObj = {
            firstName: firstName,
            email: email,
            mob: mob
        }
        
        console.log("Final Output");
        console.log(userObj);
        
        
    }
     
  return (
    <>
    <h2 style={{color:'red'}}>SIMPLE FORM</h2>
    <form action="" onSubmit={handleRegister}>
    <div style={{marginTop:'20px'}}>
        <label htmlFor="" > FIRST NAME</label>
        {/* seperate state for each input box */}
        

        <input type="text" placeholder="Enter Name"
         onChange={(e)=>setfirstname(e.target.value)}
        style={{ padding: '20px', marginLeft: '50px', width: '250px', borderRadius: '5px', height:'10px'}}
        />   
        </div>

        <div style={{marginTop:'20px'}}>
        <label htmlFor="">EMAIL</label>
        <input type="text"  placeholder="Enter Email" onChange={(e)=>setemail(e.target.value)}
        style={{ padding: '20px', marginLeft: '90px', width: '250px', borderRadius: '5px', height:'10px'}}
        />
        </div>
        
        
        <div style={{marginTop:'20px'}}>
         <label htmlFor="">MOBILE NUMBER</label>
        <input type="text"  placeholder="Enter Mobile No" onChange={(e)=>setmob(e.target.value)}
        style={{ padding: '20px', marginLeft: '10px', width: '250px', borderRadius: '5px', height:'10px' }}
        />
    </div>
    <br />
    <div>
        <button type='submit'
        style={{padding:'10px',marginLeft:'100px',color:'white',backgroundColor:'green', borderRadius: '5px'}}>SUBMIT</button>
    </div>
    </form>
    </>
  )
}

export default SimpleForm