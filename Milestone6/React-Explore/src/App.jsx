import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './counter';
import Boller from './Boller'
import Friends from './Friends';
// import User from './User'
// easy way 
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then (res => res.json());
// async way
// const users = async() => {
//   const res= await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json();

// }


function App() {
  // const userMain = users();

  function ClickMe (){
    alert("clicked")

  }
  const HandelNum = (num) =>{
    const newNum = num * 2;
    alert(newNum);

  }

  return (
    <>     
        <h1>Get started</h1>
        <Suspense fallback={<h3>Loading...</h3>}>
        <Friends fetchUsers={fetchUsers}></Friends>
        </Suspense>
        {/* <Suspense fallback={<h3>.............</h3>}>
        <User userMain={userMain}></User>
        </Suspense> */}
        {/* <Friends></Friends> */}
        <Boller></Boller>
        <Counter></Counter>
        <div style={{display:'flex',
          gap:'45px',
          alignItems:'center',
          justifyContent:'center'}}>  
        <button onClick={ClickMe}>Click Me</button>   
        <button onClick={function ClickMe2 (){
          alert ("Clicked 2")
        }}>Click Me2</button> 
        <button onClick={() => alert('Clicked 3')}>Click Me3</button>
        <button onClick={() => HandelNum(45)}>Click Me4</button>
       </div> 
    </>
  )
}

export default App
