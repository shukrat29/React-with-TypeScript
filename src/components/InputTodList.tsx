import React, { useRef } from "react";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const InputTodoList: React.FC<NewTodoProps> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value;
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="todo-text">Todo task</label>
      <input type="text" id="todo-text" ref={inputRef} />
      <button type="submit">Add todo task</button>
    </form>
  );
};

export default InputTodoList;
