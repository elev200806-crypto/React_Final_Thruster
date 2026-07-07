import React, { StrictMode } from "react";

const Card = (props)=>{
    return(
        <div className="card">
                <img src="https://plus.unsplash.com/premium_photo-1661878091370-4ccb8763756a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
                <h1>{props.name}</h1><br />
                <p>Lorem ipsum dolor sit Lorem, ipsum dolor.</p><br />
                <button>View Profile</button>

            </div>

    )

}

export default Card;