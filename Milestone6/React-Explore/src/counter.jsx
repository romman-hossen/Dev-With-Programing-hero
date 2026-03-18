import { useState } from "react";
export default function Counter(){
    const[count,setCount] = useState(4);

    const handleAdd = () =>{
        const set =count+1;
        setCount(set)

    }
 
    const counterStyle = {
       border:"2px solid green",
       padding : '20px',
       margin : '30px'
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    )

}