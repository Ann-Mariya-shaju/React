import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  const [principle, setPrinciple] = useState('')
  const [rate, setRate] = useState('')
  const [year, setYear] = useState('')
  const [interest, setInterest] = useState(0)


  //  state for checking is field values are valid
  const [isPrinciplevalid, setisPrincipleVailid] = useState(true)
  const [isRatevalid, setisRatevalid] = useState(true)
  const [isYearvalid, setisYearvalid] = useState(true)

  const validate = (e) => {
    const input_field = e.target.name;
    const input_value = e.target.value;
    console.log(input_field, input_value);
    
     if (!!input_value.match(/^[0-9]*$/)){
      console.log("Input is valid");
      
      if(input_field === 'principle_amount'){
        setisPrincipleVailid(true);
        setPrinciple(input_value)
      }
      else if(input_field === 'interest_amount'){
        setisRatevalid(true);
        setRate(input_value)
      }
      else if (input_field === 'years'){
        setisYearvalid(true);
        setYear(input_value)
      }
      
     }
     else
      if(input_field === 'principle_amount'){
        setisPrincipleVailid(false);
        setPrinciple(input_value)
      }
     
      else if(input_field === 'interest_amount'){
          setisRatevalid(false);
          setRate(input_value)
        }
        else if(input_field === 'years'){
          setisYearvalid(false);
          setYear(input_value)
        }
  }
  const handleCalculate = (e) =>{
    e.preventDefault();
    console.log("principle:",principle);
    console.log("Rate:",rate);
    console.log("year:",year);
    if(principle === '' || rate === '' || year === ''){
      alert("please enter all values")
    }
    else{
      const result = (principle*rate*year)/100
      setInterest(result)
    } 
   
  }
  const handleReset = () =>{
  setInterest(0);
  setPrinciple('');
  setRate('');
  setYear('');
  }
  
   
  return (
    <>
      <div style={{ backgroundColor: 'black', height: '100vh' }}
        className="d-flex justify-content-center align-items-center"
      >

        <div style={{ backgroundColor: 'white', width: '500px' }}
          className="rounded p-5"
        >

          <h2 style={{ textAlign: 'center' }}>SIMPLE INTEREST</h2>
          <p style={{ textAlign: 'center' }}>Calculate Your Simple Interest Easily</p>

          <div style={{ height: '150px', backgroundColor: 'orange' }}
            className="d-flex justify-content-center align-items-center flex-column p-3 mt-3 rounded shadow"
          >
            <h2 className="fw-bold">&#8377; {interest}</h2>
            <p className="fw-bold">Total Simple Interest</p>
          </div>
          <form action="" className='mt-4' onSubmit={handleCalculate}>
            <div className='mb-3'>
              <TextField id="outlined-basic" label="Principle" variant="outlined" className='w-100' name='principle_amount'
                onChange={(e) => validate(e)} value={principle}

              />
              {
                !isPrinciplevalid &&
                <p style={{color:'red'}}>Invalid Input</p>
              }
            </div>

            <div className='mb-3'>
              <TextField id="outlined-basic" label="Rate of Interest" variant="outlined" className='w-100' name='interest_amount'
                onChange={(e) => validate(e)} value={rate}

              />
                {
                !isRatevalid &&
                <p style={{color:'red'}}>Invalid Input</p>
              }

            </div>

            <div className='mb-3' >
              <TextField id="outlined-basic" label="Number of Years" variant="outlined" className='w-100' name='years'
                onChange={(e) => validate(e)} value={year}
              />

               {
                !isYearvalid &&
                <p style={{color:'red'}}>Invalid Input</p>
              }
            </div>

            <div className='d-flex justify-content-between mb-3'>
              <Button variant="contained" color='success' style={{ width: '190px', padding: '10px' }}
              disabled = { !isPrinciplevalid || !isRatevalid || !isYearvalid } type='submit'
              > CALCULATE</Button>
              <Button variant="outlined" style={{ width: '190px', padding: '10px' }} onClick={handleReset}> RESET</Button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default App
