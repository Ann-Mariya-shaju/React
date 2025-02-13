import React from 'react'

function EducationalDetails(data) {
    console.log(data);

    return (
        <>
            <h3 style={{color:'blue'}}>Educational Details:</h3>
            <h5>Name:{data.firstName}</h5>
            <h5>Qualification:MCA</h5>
            <h5>Passout:2024</h5>

        </>
    )
}

export default EducationalDetails