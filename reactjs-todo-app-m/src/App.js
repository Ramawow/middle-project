import { TodoContextProvider } from "./contexts/TodoContext";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddNewTodo from "./components/AddNewTodo";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Header />
        <AddNewTodo />
        <TodoList />
      </TodoContextProvider>
    </div>
  );
}

export default App;
