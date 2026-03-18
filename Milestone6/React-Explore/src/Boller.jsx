import { useState } from "react";
export default function Boller(){
    const [ball,setBall] = useState(0);
    const [nBall,setNBall] =useState(0);
    // if(ball < 0){
    //     return;
    // }
    const RBall = () =>{
        if(ball >= 6){
            return;
        }
        setBall(ball+1)
    }
    const WBall = () =>{
    //     setBall(ball + 0)
    }
    const NBall = () =>{
        if(ball <=   0){
            return;
        }
        const totalNball = nBall + 1;
        setNBall(totalNball);
        setBall(ball - 1)
    }

    return(
        <div>
            <p>No-Ball : {nBall}</p>
            {
                ball > 5 && <p>1 Over Complete</p>
            }
            <h3>Ball : {ball}</h3>
            <button onClick={RBall}>Right Ball</button>
            <button onClick={WBall}>Wide Ball</button>
            <button onClick={NBall}>No Ball</button>
        </div>
    )

}