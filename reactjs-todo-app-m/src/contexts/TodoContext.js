import { createContext, useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [action.payload, ...state];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.id);
    case "REMOVE_COMPLETED":
      return state.filter((todo) => !todo.isDone);
    case "TOGGLE_DONE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const TodoContext = createContext("initial value");

const TodoContextProvider = (props) => {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    return localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoContextProvider };
