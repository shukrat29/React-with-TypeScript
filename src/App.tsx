import { useState } from "react";
import InputTodoList from "./components/InputTodList";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoHandler = (text: string) => {
    setTodos((preveTodos) => [
      ...preveTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  return (
    <div className="App">
      <h1>Hello, React with TypeScript!</h1>
      <InputTodoList onAddTodo={todoHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
