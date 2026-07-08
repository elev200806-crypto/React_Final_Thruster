import React from "react"

const App = () => {

  const onScrolling = (elem){
    if(elem>0){
      console.log("Seedha Scroll kar raha hai lala!")

    }else{
      console.log("Ulta Scroll kar raha hai Mera Babu")

    }

  }

  return (

    <div onWheel={(elem)=>{
      onScrolling(elem.deltaY)

    }}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>

    </div>









    // <div>
    //   <div onMouseMove={(elem)=>{
    //     console.log("Mouse is moving... : ",elem.clientX, elem.clientY)

    //   }} className="box"></div>

    // </div>

  )

}


export default App;