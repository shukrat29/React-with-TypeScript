import React, { useRef } from "react";

import "./InputTodoList.css";
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
      <div className="form-control">
        <label htmlFor="todo-text">Todo task</label>
        <input type="text" id="todo-text" ref={inputRef} />
      </div>
      <button type="submit">Add todo task</button>
    </form>
  );
};

export default InputTodoList;
