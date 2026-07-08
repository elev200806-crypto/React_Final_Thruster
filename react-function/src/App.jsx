import React from "react"

const App = () => {

  // const btnClicked = () => {
  //   console.log("Button is Clicked!")

  // }



  return (
    <div>
      <h1>Hi, Lakshya</h1>
      <button onClick={function(){
        console.log("This is In-Function Operation in React.JS")

      }}>Change User</button>
      
      {/* <button onClick={btnClicked}>Change User</button>
      <button onClick={btnClicked}>Change User</button> */}

    </div>

  )

}


export default App;