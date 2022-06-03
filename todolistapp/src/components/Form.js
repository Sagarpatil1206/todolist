import React from "react";

const Form = (props) => {

  const inputHandler = (e) => {
    console.log(e.target.value);
    props.setInputText(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.setTodos([...props.todos,{text:props.inputText , completed:false , id:Math.random()*1000}]);
    props.setInputText("")
  }

  const statusHandler = (e) => {
    props.setStatus(e.target.value);
  }

  return (
    <form>
      <input type="text" value={props.inputText} onChange={inputHandler} className="todo-input" /> {/* An event is an action that could be triggered as a result of the user action or system generated event. things in input field are gonna pass after any change*/}
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square" />
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onClick={statusHandler}>
          <option value="all">All</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;