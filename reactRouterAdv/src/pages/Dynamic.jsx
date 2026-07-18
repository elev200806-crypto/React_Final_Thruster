import React from "react";
import { useParams } from "react-router-dom";

const Dynamic = ()=>{
    // console.log(useParams())

    const {id} = useParams()

    return(
        <>
            <h1>Id : {id}</h1>
        </>

    )

}

export default Dynamic;