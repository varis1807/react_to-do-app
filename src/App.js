import React from "react";
import InputBox from "./InputBox";
import Header from "./Header";
import { useState } from "react";
import AddTask from "./AddTask";
function App() {


const [task,setTask]=useState([]);
const addTaskHandler=(task)=>{
  console.log(task);
}

  return (
  <div>
    <Header/><br/>
    <InputBox addTaskHandler={addTaskHandler}/><br/>
    <AddTask/>
  </div>
   
  );
}

export default App;
