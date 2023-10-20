import {React, useState, useMemo} from "react";

function Memo(){
    const[add, setAdd] = useState(0)
    const[minus, setMinus] = useState(100)

    // function Multiply(){
    //     console.log("Multiply working")
    //     return add*10;
    // }

    const Multiply = useMemo(function multiply(){
        console.log("Multiplication Working")
        return add*10;
    },[add])
    return(
        <div className="App">
            <h2>learning useMemo</h2>
            {Multiply}
            <button onClick={() =>setAdd(add+1)}>addition</button>
            <span>{add}</span> <br />
            <button onClick={() => setMinus(minus-1)}>substraction</button>
            <span>{minus}</span>

        </div>

    )
}
 export default Memo;