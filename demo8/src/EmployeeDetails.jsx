import React from 'react'

function EmployeeDetails() {
    const EmployeeDetails=[
        {emp_id: 342,name:'sean',dept:'HR',salary:40000},
        {emp_id: 343,name:'ann',dept:'SE',salary:80000},
        {emp_id: 344,name:'todd',dept:'FD',salary:60000},
       ]
  return (
   <>

   <h2 style={{color:'blue'}}>Employee Details</h2>
  
   <table>
    <thead>
        <tr>
            <th>EMP ID</th>
            <th>EMP NAME</th>
            <th>DEPARTMENT</th>
            <th>SALARY</th>
        </tr>
    </thead>
    <tbody>
        {
            EmployeeDetails.map((emp)=>(
                <tr>
                    <td>{emp.emp_id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.dept}</td>
                    <td>{emp.salary}</td>
                </tr>
            ))
        }
    </tbody>
   </table>
   </>
  )
}

export default EmployeeDetails