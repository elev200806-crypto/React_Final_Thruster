import React from "react";
import axios from 'axios'
import { useState } from "react";

const App = () => {

  const [data,setData] = useState([])

  const getData = async()=>{
    const response = await axios.get("https://picsum.photos/v2/list") 

    setData(response.data)

    
  }


  // using Axios APi Calling

  // const getData = async () => { 

  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(response)

    

  // }





  // const getData = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')


  //   // console.log(response.json()) asynchronized
  //   const data = await response.json();
  //   console.log(data)

  //   // console.log(response)  

  // }








  // const getData = async ()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   console.log(response)

  // }




  return (

    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(elem,index){
            return <h3>Hello World {index}</h3>

        })}
      </div>
    </div>


  )

}



export default App;
