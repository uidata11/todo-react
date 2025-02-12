import { useState } from "react";
import "./style.css";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <TodoForm />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default App;
