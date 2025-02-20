import React from 'react'
import { useState } from 'react'
function Register() {
  const [userData, setUserData] = useState({
    uname: '',
    ugender: '',
    ucourse: ''
  })

  const registerUser = (e) => {
    e.preventDefault()
    console.log('final data');
    console.log(userData);


    // console.log("inside register function");
    // console.log(userData);


  }

  const getUserData = (e) => {
    let fieldName = e.target.name;
    let userValue = e.target.value;
    console.log(e.target.value, e.target.name);
    setUserData({ ...userData, [fieldName]: userValue })



  }

  return (
    <>
      <h2 style={{ color: 'red' }}>REGISTRATION FORM</h2>
      <form onSubmit={registerUser}>
        <label htmlFor="">First Name</label>
        <input type="text" placeholder='Name' name="uname"
          style={{ padding: '20px', marginLeft: '10px', width: '250px', borderRadius: '5px' }}
          onChange={(e) => getUserData(e)}
        />

        <div style={{ marginTop: '20px' }}>
          <label htmlFor="" style={{ fontSize: '15px' }}>GENDER</label>
          <input type="radio" name="ugender" id='' style={{ marginLeft: '20px' }}
            value="male" onChange={(e) => getUserData(e)}
          />
          <label htmlFor="">Male</label>
          <input type="radio" name="ugender" id=''
            value="female" onChange={(e) => getUserData(e)}
          />
          <label htmlFor="">Female</label>
          <input type="radio" name="ugender" id=''
            value="other" onChange={(e) => getUserData(e)}
          />
          <label htmlFor="">Other</label>
        </div>

        <div style={{ marginTop: '20px' }}>

          <label htmlFor="">COURSE:</label>
          <select name="ucourse" id="" style={{ marginLeft: '20px' }} onChange={(e) => getUserData(e)} >
            <option value="cse">CSE</option>
            <option value="civil">CIVIL</option>
            <option value="mech">MECH</option>
            <option value="eee">EEE</option>
          </select>
        </div>

        <div>
          <input type="submit"
            style={{ backgroundColor: 'blue', padding: '10px', marginTop: '20px', color: 'white' }} value={'REGISTER'}
          />
        </div>
      </form>
    </>
  )
}

export default Register