import { FaCheck, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", id });
  };

  return (
    <li className="todo-item">
      <label htmlFor={todo.id} className="toggle-done">
        <input
          type="checkbox"
          id={todo.id}
          hidden
          checked={todo.isDone}
          onChange={() => dispatch({ type: "TOGGLE_DONE", id: todo.id })}
        />
        <span className="custom-checkbox">
          <FaCheck size="10px" color="#fff" fontWeight="700" className="icon" />
        </span>
        <p className="todo-name">{todo.name}</p>
      </label>
      <button
        type="button"
        className="btn-close"
        onClick={() => deleteTodo(todo.id)}
      >
        <FaTimes size="17px" className="times" />
      </button>
    </li>
  );
};

export default TodoItem;
