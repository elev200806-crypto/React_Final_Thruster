import React from "react"

const App = () => {

  const inputChanging = ()=>{
    console.log("Input")

  }


  return (
    <div>
       {/* here you can not call function */ */}
      {/* <input onChange={inputChanging} type="text" placeholder="Enter name"  /> */}


{/* here you can create a direct function inside the curly brackets and can either call a function or not... */}

      <input onChange={function(){
        inputChanging()

      }} type="text" placeholder="Enter name"  />

    </div>

  )

}


export default App;