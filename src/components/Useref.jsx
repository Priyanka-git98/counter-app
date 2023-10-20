import React from "react";
import { useState, useRef } from "react";

function Useref(){
    const refElement = useRef("");
    const[name, setName] = useState("Diana")
    console.log(refElement)

    function Reset(){
        setName("")
        refElement.current.focus()
    }

    function handleInput(){
        refElement.current.style.color="violet"
    }

return(
    <>
    <h1>Learning useRef</h1>
    <input ref={refElement} type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={Reset}>Reset</button>
    <button onClick={handleInput}>change color</button>
    </>
);
}

export default Useref;