import React, { useState } from 'react'

const App = () => {

  const [num, setVal] = useState(0)
  // const [num, setVal] = useState({name:"Lakshya",age:18})
  // const [num, setVal] = useState([10,20,30])

  const btnClicked = () => {
    // batch Updates!

    setVal(meow=>meow+145)
    setVal(meow=>meow+254)
    setVal(meow=>meow+34565)




    // this would feel easy

    // setVal(prev=>({...prev,age:19}))
    
    
    
    
    
    // const newNum = [...num]
    // newNum.push(89)
    // setVal(newNum)
    
    
    
  // const btnClicked = () => {
  //   const newNum = {...num}
  //   newNum.name = "Devaansh"
  //   newNum.age = "16"
  //   setVal(newNum)



    // here the problem is that this run asynchornously

    // setVal(num + 1)
    // console.log(num)

  }

  return (
    <div>

      <h1>{num}</h1>
      {/* <h1>{num.name},{num.age}</h1> */}
      <button onClick={btnClicked}>click</button>
    </div>

  )

}










export default App;