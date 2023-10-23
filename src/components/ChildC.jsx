import React, { useContext } from "react";
import {data, data1} from './src/App.js'


function ChildC(){

    const name = useContext(data);
    const gender = useContext(data1);
    return(
        <>
        {/* <data.consumer>
            {
                (name) =>{
                    return(
                        <data1.consumer>
                            {
                                (gender) =>{
                                    return(
                                        <h2>my name is{name} and gender is{gender}</h2>
                                    )
                                }
                            }

                        </data1.consumer>
                    )
                }
            }

        </data.consumer> */}
           
           <h2>my name is {name} and gender is {gender} </h2>
       </>
    )
    }
    
    export default ChildC;