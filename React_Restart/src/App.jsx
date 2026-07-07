import React from "react"
import Card from "./components/card"
import NavBar from "./components/NavBar"


const App = ()=>{

  const user = "Dogesh"
  const age = 18

  return(
      <div>
        <NavBar/>
        <Card/>
        
      </div>
      

  )

}

export default App;