import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./redux/todosSlice";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    // chequeo que no esté vacío (text.trim())
    if (text.trim()) {
      dispatch(addTodo(text));
      setText(""); //Limpiamos el input con setText('')
    } else {
      alert("Please add a task");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1> Todo List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}> X </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
