import React, { useState } from 'react'


const App = ()=>{

  const[num,setNum] = useState(9)

  function addNum(){
    setNum(num+1)

  }

  function removeNum(){
    if(num==0){
      setNum(0);
    }else{
        setNum(num-1)

    }

  }

  return (
    <div>
      <h1>Value : {num}</h1><br />
      <button onClick={addNum}>Add</button>
      <button onClick={removeNum}>Subtract</button>

    </div>

  )

}



export default App;

