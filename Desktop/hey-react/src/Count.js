import React,{useEffect, useState} from "react";

function Count(){
    const[count1,setCount1] = useState(0);
    const[count2,setCount2]= useState(0);

    useEffect(()=> {
        const countTimer = setInterval(() => {
            setCount1(prev => prev+ 1);
            setCount2(prev => prev+ 5);
        },1000);

        return() => clearInterval(countTimer);
    }, []);

    return (
        <div>
            <h1> Count 1: {count1} </h1>
            <h1>Count 2 : {count2}</h1>
        </div>
    );
}export default Count;