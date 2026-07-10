import React, { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(function () {
    console.log("useEffect is Running")

  }, [num])

  // },[])    //this would run only one time in allover the Rendering!
  // here the [] is dependencies


  // useEffect(function(){
  //   console.log("useEffect is Running")

  // })  This code will run everytime when ever the console has UI change in the code  

  return (
    <div>
      <h1>Value of Num : {num}</h1>
      <h1>Value of Num2 : {num2}</h1>
      <button onMouseEnter={() => {
        setNum(num + 1)


      }}

        onMouseLeave={() => {
          setNum2(num2 + 10)

        }}>Click Me</button>
    </div>

  )

}


export default App;