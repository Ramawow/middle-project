import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const tasksLeft = todos.filter((todo) => todo.isDone === false).length;

  return todos.length > 0 ? (
    <div className="todo-list-content">
      <div className="panel">
        <p className="amount">
          <span>{tasksLeft}</span> tasks left
        </p>
        <button
          type="button"
          className="clear"
          onClick={() => dispatch({ type: "REMOVE_COMPLETED" })}
        >
          Clear Completed
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  ) : (
    <p className="empty">
      Untuk saat ini kamu tidak ada kegiatan, silahkan tambahkan kegiatan baru
      💪
    </p>
  );
};

export default TodoList;
