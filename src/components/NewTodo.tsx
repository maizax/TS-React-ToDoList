import React, { useRef, useState } from "react";
import "./NewTodo.css";
import Alert from "@mui/material/Alert";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    if (textInputRef.current!.value.length < 1) {
      setIsShown(true);
      setTimeout(() => {
        setIsShown(false);
      }, 2000);
      event.preventDefault();
      return;
    }
    setIsShown(false);
    event.preventDefault();
    props.onAddTodo(textInputRef.current!.value);
    textInputRef.current!.value = "";
  };

  return (
    <div>
      {isShown && <Alert severity="error">Cannot add empty field!</Alert>}
      <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
          <label htmlFor="todo-text">Todo Text</label>
          <input type="text" id="todo-text" ref={textInputRef} />
        </div>
        <button type="submit">ADD TODO</button>
      </form>
    </div>
  );
};

export default NewTodo;
