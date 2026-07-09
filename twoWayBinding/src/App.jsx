import React, { useState } from "react";

const App = () => {


    const [title,setTitle] = useState('')

    // form handling

    const submitForm = (e) => {
        e.preventDefault()
        console.log("Form Submitted By : ",title)
        setTitle('')

    }


    return (
        <div>
            <form onSubmit={(a) => {
                submitForm(a)

            }}>

              {/* Setting up the Input Function with the middlement of React called : Two-Way-Binding */}
                <input type="text" placeholder="Enter your name" value={title} onChange={(a)=>{
                  setTitle(a.target.value)

                }}/>
                <button>Submit</button>

            </form>
        </div>

    )


}


export default App;