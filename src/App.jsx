import { useState } from "react";
import "./style.css";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <TodoForm />
      <ul>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
    </div>
  );
};

export default App;
