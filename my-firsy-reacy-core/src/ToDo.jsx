// export default function Players (props,isDone){
//     return(
//         <>    
//            {/* fragmantation  */}
//         <p>Amgo modna player gula koi reh {props.task}</p>
//         <ol>
//             <li>dfdfdfdf</li>
//             <li>fdfdfd</li>
//             <li>dfdfdf</li>
//             <li>dfdfdfdfdf</li>
//         </ol>
//         </>
//     );
// }
// export default function Players({task, isDone,time = 0}){
//    if(isDone){
//     return <li>Done : {task} duration :{time} </li>
//    }
//    return <li>pending : {task}</li>
// }

// conditional rendering ternary operator
// export default function Players({task, isDone,time = 0}){
//     return isDone ? time == '60' ? <li>Done : {task} duration :{time} </li> : <li>Completion complete : {task} duration : {time}</li> :<li>pending : {task}</li>;
// }
// conditional rendering : 4 && khali sotti hole seta return korbe 
//  export default function Players({task, isDone,time = 0}){
//     return isDone &&  <li>Done : {task} duration :{time} </li> 
//  }

 // conditional rendering : 4 || khali mittha hole seta return korbe 
//  export default function Players({task, isDone,time = 0}){
//     return isDone || <li>Done : {task} duration :{time} </li> 
//  }

export default function Players ({task, isDone,time = 0}){

    let lisItem;
    if(isDone === true){
        lisItem = <li>Done : {task} duration :{time ? 'I am done' : 'i am not done'} </li>;
        
    }
    else{
        lisItem = <li>pending : {task}</li>;
    }
    return lisItem;
}


