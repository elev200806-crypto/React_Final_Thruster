import React, { useEffect, useState } from 'react'

const App = () => {

  const [a,setA] = useState(0)
  const [b,setB] = useState(0)
  
  function meow1(){
    console.log("A changed")

  }
  function meow2(){
    console.log("B changed")

  }
  
  useEffect(function(){
    meow1()
    

  },[a])
  useEffect(function(){
    meow2()

  },[b])
  // useEffect(function(){
  //   console.log("I am On.....")

  // },[a,b])

  
  return (
    <div>
        <h1>A is {a}</h1>
        <h1>B is {b}</h1>
        <button onClick={()=>{
          setA(a+1)
        }}>Change A</button>
        <button onClick={()=>{
          setB(b-1)

        } }>Change B</button>


    </div>

  )
  
  

}


export default App;