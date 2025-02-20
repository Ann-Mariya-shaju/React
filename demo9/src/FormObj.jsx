import React, { useState } from 'react'

function FormObj() {
    const [userData, setuserData] = useState(
        {
            ufirstName:"",
            uemail:"",
            umob:""

        }
    )
    
    const userRegister= (e)=>{
        e.preventDefault();
        console.log(userData);
        
    }
  return (
  <>
    <h2 style={{color:'blue'}}>FORM WITH STATE AS OBJECT</h2>
    <form action="" onSubmit={userRegister}>
    <div style={{marginTop:'20px'}}>
        <label htmlFor="" > FIRST NAME</label>
        {/* seperate state for each input box */}
        
        <input type="text" placeholder="Enter Name"
        onChange={(e)=>setuserData ({...userData,ufirstName:e.target.value})}
        style={{ padding: '20px', marginLeft: '50px', width: '250px', borderRadius: '5px', height:'10px'}}
        />   
        </div>

        <div style={{marginTop:'20px'}}>
        <label htmlFor="">EMAIL</label>
        <input type="text"  placeholder="Enter Email"
        onChange={(e)=>setuserData ({...userData,uemail:e.target.value})}
        style={{ padding: '20px', marginLeft: '90px', width: '250px', borderRadius: '5px', height:'10px'}}
        />
        </div>
        
        
        <div style={{marginTop:'20px'}}>
         <label htmlFor="">MOBILE NUMBER</label>
        <input type="text"  placeholder="Enter Mobile No" 
        onChange={(e)=>setuserData ({...userData,umob:e.target.value})}
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

export default FormObj