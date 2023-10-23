    import {React, useState, useCallback} from "react";
    import CallbackchildA from "./CallbackchildA";

    function Usecallback(){
        const [add, setAdd] = useState(0);
        const [count, setCount] = useState(0);
        const Learning = useCallback(() =>{

        },[add])
        return(
            <div className="App">
            <h2>learning usecallback hook</h2>
            <CallbackchildA Learning={Learning} add={add}/>
            <h1>{add}</h1>
            <button onClick={() => setAdd(add+1)}>add</button>
            <h1>{count}</h1>
            <button onClick={() => setCount(count+1)}>count</button>
            
            </div>

        )
    }

    export default Usecallback;       