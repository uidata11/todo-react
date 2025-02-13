import PropTypes from "prop-types";
import { useState } from "react";

const TodoItem = ({ todos, setTodos, payload, index }) => {
  const onDelete = () => {
    setTodos((prev) => prev.filter((item) => item !== payload));
  };

  const [isEditing, setIsEditing] = useState(false);
  const editHandeler = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <li>
      <p>
        {index + 1}.{payload}
      </p>
      <button onClick={editHandeler}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </li>
  );
};
export default TodoItem;

Todoitem.proptypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
  payload: PropTypes.string,
  index: ProprTypes.number,
};
