import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [
    { id: "t1", text: "Finish the course" },
    {
      id: "t2",
      text: "Start another course",
    },
  ];
  return (
    <div className="App">
      <h1>Hello, React with TypeScript!</h1>
      <TodoList items={todos} />
    </div>
  );
};

export default App;
