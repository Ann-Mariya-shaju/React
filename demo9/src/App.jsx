import { useState } from 'react'
import Register from './Register';
import SimpleForm from './SimpleForm';
import FormObj from './FormObj';

function App() {
  const [uname, setUname] = useState('')
  const LoginUser = (e) => {
    // used to prevent refreshing we use preventDefault
    e.preventDefault()
    console.log("inside login function");
    console.log(uname);


  }

  return (
    <>
      <h2>REACT FORMS</h2>

      <form onSubmit={LoginUser}>
        <label htmlFor="">USERNAME:</label>
        <input type="text" placeholder="USERNAME PLEASE"
          onChange={(e) => setUname(e.target.value)}
          style={{ padding: '20px', marginLeft: '10px', width: '250px', borderRadius: '5px' }}
        />
        <input type="submit"
          style={{ backgroundColor: 'blue', padding: '10px', marginLeft: '10px', color: 'white' }} value={'Login'} />
      </form>
      <SimpleForm/>
      <Register/>
      <FormObj/>
    </>
    
  )
}

export default App
