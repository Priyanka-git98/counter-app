    import {React, useState, useCallback} from "react";
    import CallbackchildA from "./CallbackchildA";

    function Usecallback(){
        const [add, setAdd] = useState(0);
        const [count, setCount] = useState(0);
        const Learning = useCallback(() =>{

        },[count])
        return(
            <div className="App">
            <h2>learning usecallback hook</h2>
            <CallbackchildA Learning={Learning} add={add}/>
            <h1>{count}</h1>
            <button onClick={() => setCount(add+1)}>count</button>

            <h1>{add}</h1>
            <button onClick={() => setAdd(count+1)}>add</button>
            </div>

        )
    }

    export default Usecallback;