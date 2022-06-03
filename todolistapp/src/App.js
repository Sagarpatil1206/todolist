import React,{useState , useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';

function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilteredTodos]=useState([]);

  useEffect(()=> {getLocalTodos();},[]); //get pehle the previous ones and then
  useEffect(() => {filterHandler(); saveLocalTodos();} , [status,todos]); //saving them in localstorage
  

  //useEffect(()=>{},[])//[] meanse only render at start

  const filterHandler = () => {
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

  const saveLocalTodos = () => {
    //if (todos.length > 0) { //refresh karne par empty arr aa jayega jo save ho jayega and usko display karn apossible nahi hoga
      localStorage.setItem('todos',JSON.stringify(todos)) 
    //};
  };

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
      <Form 
      setInputText={setInputText} inputText={inputText} setTodos={setTodos} 
      todos={todos} status={status} setStatus={setStatus}
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
