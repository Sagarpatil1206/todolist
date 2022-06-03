import React from "react";
import Todo from "./Todo";

const Todolist = ({todos,setTodos,filteredTodos}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">{filteredTodos.map((todo) => (
      <Todo text={todo.text} key={todo.id} todos={todos} todo={todo} setTodos={setTodos}/>
      ) )}</ul>  {/*A good rule of thumb is that elements inside the map() call need keys.*/}
    </div>
  )
}

export default Todolist;


//Keys serve as a hint to React but they don’t get passed to your components.
// If you need the same value in your component, pass it explicitly as a prop with a different name:
/* const content = posts.map((post) =>
  <Post
    key={post.id}
    id={post.id}
    title={post.title} />
);
With the example above, the Post component can read props.id, but not props.key.

 */