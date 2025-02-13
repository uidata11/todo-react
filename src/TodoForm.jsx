import { useState } from "react";

const TodoForm = ({ payload, isEditing, todos, setTodos, onCancel1 }) => {
  const [todo, setTodo] = useState(payload ?? "");
  const onChange = (e) => toso;
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor=""> 장 볼 물건</label>
          <input type="text" id="item" />
        </div>
        <button>추가</button>
      </form>
    </div>
  );
};

export default TodoForm;
