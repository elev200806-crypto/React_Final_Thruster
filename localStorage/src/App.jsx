import React from "react";

const App = () => {




    const user = {
      username:"Lakshya Gaur",
      age:18,
      status:"Billionaire"

    }

    const user1 = JSON.parse(localStorage.getItem("Object1"))
    console.log(user1)
    // localStorage.setItem("Object1",JSON.stringify(user))



  // console.log(user)
  // console.log(user)
  // console.log(user)



  // const user = localStorage.getItem('user')
  // const user = localStorage.removeItem('user')
  // localStorage.setItem("user","Lakshya Gaur")
  // localStorage.clear()
  // sessionStorage.clear()


  return (



    <div>
      <h1>Hello</h1>
    </div >

  )


}


export default App;