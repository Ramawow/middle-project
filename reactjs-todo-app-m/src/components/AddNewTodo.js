import { useContext, useRef } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { TodoContext } from "../contexts/TodoContext";
import { nanoid } from "nanoid";

const AddNewTodo = () => {
  const { todos, dispatch } = useContext(TodoContext);
  const nameInputRef = useRef("");
  const todoNames = Array.from(todos, ({ name }) => name.toLowerCase());

  const handleSubmit = (event) => {
    event.preventDefault();

    const todoName = nameInputRef.current.value.trim();

    if (todoName === "") return alert("Nama kegiatan tidak boleh kosong!");
    if (todoNames.includes(todoName.toLowerCase()))
      return alert("Nama kegiatan sudah ada!");

    const newTodo = {
      id: nanoid(10),
      name: todoName,
      isDone: false,
    };

    dispatch({ type: "ADD_TODO", payload: newTodo });
    nameInputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo-name">
        <input
          type="text"
          id="todo-name"
          placeholder="Masukan kegiatan baru..."
          required
          ref={nameInputRef}
        />
      </label>
      <button type="submit">
        <FaRegCalendarPlus fontSize="17px" title="Add new todo" />
      </button>
    </form>
  );
};

export default AddNewTodo;
