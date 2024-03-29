// Todos.js
import React from "react";
import Todo from "./Todo";

const Todos = ({ todos, handleDelete, onDone, doneTodos }) => {
  return (
    <div className="flex flex-col items-center gap-4 justify-center my-4">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo}
          handleDelete={handleDelete}
          onDone={onDone}
          doneTodos={doneTodos}
        ></Todo>
      ))}
    </div>
  );
};

export default Todos;
