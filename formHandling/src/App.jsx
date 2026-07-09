import React from "react";

const App = () => {

    // form handling

    const submitForm = (e) => {
        e.preventDefault()
        console.log("Form Submitted")

    }


    return (
        <div>
            <form onSubmit={(a) => {
                submitForm(a)

            }}>
                <input type="text" placeholder="Enter your name" />
                <button>Submit</button>

            </form>
        </div>

    )


}


export default App;
