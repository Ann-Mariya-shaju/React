// npm create application
// remove unwanted content
// in parent comp add a heading
// create a new class child component
// load this child component in parentt comp
// in child comp print address
// pass one value from parent to child and based on that value display/hide address content in child

import Address1 from "./component/Address1"
import ContactDetails from "./component/ContactDetails"
import Counter from "./component/Counter"
import EducationalDetails from "./component/EducationalDetails"
import LocationDetails from "./component/LocationDetails"
import Random from "./component/Random"
import UserType from "./component/UserType"


function App() {
   const name = "Sean"

  return (
    <>
    <Counter/>
      <h2 style={{color:'red'}}>USER DETAILS</h2>
      <Random/>
      <Address1 isShow={true}/>
      <ContactDetails firstName={name}/>
      <UserType Userage={19}/>
      <EducationalDetails firstName={name}/>
      <LocationDetails currentLocation="Kakkanad"
      permanentLocation={"Kannur"}
     
      />
    </>
  )
}

export default App
