import React from 'react'

function LocationDetails({currentLocation,permanentLocation}) {
    // console.log(locationData);
    
  return (
    <>
    <h3>Location:{currentLocation}</h3>
    <h3>Permanent location:{permanentLocation}</h3>
    </>
    
  )
}

export default LocationDetails