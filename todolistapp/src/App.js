import React,{useState , useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() { //main app function which will render our web app 
  const [inputText,setInputText]=useState("");   //state which will store our input text
  const [todos,setTodos]=useState([]);           //state e=which will store our array of todos
  const [status,setStatus]=useState("all");      //state which will store status of our selection from dropdown
  const [filteredTodos,setFilteredTodos]=useState([]); //filtered out todos according to the status

  useEffect(() => {filterHandler();} , [status,todos]); //saving them in localstorage

  const filterHandler = () => { //use for setting filteredTOdos according to status
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter(todo => (todo.completed === true)));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter(todo => (todo.completed === false)));
        break;

      default :
        setFilteredTodos(todos);
        break;
    }
  }

  //save to local

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos',JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      console.log(todoLocal);
      if (todoLocal.length === 0) {
        return null;
      }
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <h1><header>Hello React</header></h1>  
      <Form //rendering form component which we have imported from its file
      setInputText={setInputText} inputText={inputText} setTodos={setTodos} 
      todos={todos} status={status} setStatus={setStatus}  //exporting states which we are gonna need in form
       setFilteredTodos={setFilteredTodos}/>
      <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;


/*
{/*import React , {useState} from "react";

// function countFunc () { //renders everytime we make changes
//   console.log("fucntion is running");
//   return 4;
// }

function App () {
  // const [count,setCount]=useState(countFunc());

  // const [count,setCount]=useState(() => { //renders default value just once
  //   console.log("fucntion is running");
  //   return 4;
  // });

  const [count,setCount]=useState(4);//4 is the default value for vount

  function decreamentCount () {
    setCount (prevCount => prevCount-1); //setcount sets count here in ()
  }

  function increamentCount () {
    setCount (prevCount => prevCount+1);
  }

return (
  <>
  <button onClick={decreamentCount}>-</button>
  <span>{count}</span>{/* current state of a count *
  <button onClick={increamentCount}>+</button>
  </>
)
}

export default App;*/
