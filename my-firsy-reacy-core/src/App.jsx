// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Players from "./ToDo";
import Baller from "./Baller";
import Singer from "./Singer";
import Library  from "./Library";


function App() {
  // const time = 60;
  const ballers = ['ronaldo','messi','grizman','haland','musiala'];
  const singers = [
    {id:1 ,name:"sabrina",age:21, language: "English"},
    {id:2 ,name:"Anuv jain",age:22, language: "Hindi"},
    {id:3 ,name:"Tanvir Evan",age:23, language: "Bangla"}
  ];
  const books =[
    {id: 1, name : 'Physics', price: 349},
    {id: 2, name : 'Dopamin detox', price: 949},
    {id: 3, name : 'Programing er choddoghosti', price: 299}
  ]
  return (
    <>
      <h1>React core concept</h1>
      <Library books = {books} ></Library>
      
      {/* {
        ballers.map(baller => <Baller baller={baller}></Baller>)
      } */}
      {
        singers.map(singer => <Singer key={singer.id} singer = {singer}></Singer>)
      }
      {/* <Players task="Ronaldo" isDone={true} time={time}></Players>
      <Players task="Anthony" isDone={false} time={time}></Players>
      <Players task="Messi" isDone={true} time=""></Players> */}
      {/* <Student name="Romman" skill="Web Devloper"></Student>
      <Student name="Leora" skill="CpyPst Devloper"></Student>
      <Loves love ="Football" player ="Hamza Chowdhuri" ></Loves>  
      <Loves love ="Football" player ="Hamza Chowdhuri" ></Loves>  
      <Books bookN = "bangla " price = '567'></Books>
      <Books bookN = "bangla "></Books> */}
      {/* <Person></Person>
      <Loves></Loves>
      <Person></Person>
      <Person></Person>
      <Loves></Loves> */}
    </>
  );
}
function Student(props) {
  console.log(props);
  const style = {
    color: "red",
  };
  return (
    <div className="student">
      <p style={style}>Name: {props.name}</p>
      <p>Skill: {props.skill}</p>
    </div>
  );
}
function Person() {
  const name = "romman";
  return (
    <p style={{ backgroundColor: "red", fontSize: "2em" }}>
      hello react i am here {name}
    </p>
  );
}
const Loves = (props) => {
  console.log(props);
  const style = {
    color: "blue",
  };
  return (
    <div
      style={{
        margin: "30px",
        padding: "30px",
        textAlign: "center",
        border: "2px solid green",
      }}
    >
      <h3>What i love sports : {props.love}</h3>
      <p>Fvrt Player : {props.player}</p>
    </div>
  );
};
// const {bName,price} = {bName :"Chemistry",price : 455}
function Books({ bookN = "leora", price = "00" }) {
  // console.log({bName,price})
  return (
    <div className="student">
      <h3>Books Name : {bookN}</h3>
      <p>Price : {price}</p>
    </div>
  );
}

export default App;
