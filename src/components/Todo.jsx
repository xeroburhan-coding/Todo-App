import React from "react";

const Todo = ({ title, handleDelete, onDone, doneTodos }) => {
  return (
    <div className="w-96 h-14 rounded-2xl bg-scondbg border-2 border-offwhite border-opacity-50 flex items-center justify-between p-5">
      <div className="flex justify-center items-center gap-3">
        <div
          className={
            doneTodos.includes(title)
              ? "w-5 h-5 rounded-full bg-offgreen cursor-pointer"
              : "w-5 h-5 rounded-full border-2 border-orng cursor-pointer"
          }
          onClick={() => onDone(title)}
        ></div>
        <h1
          className={
            doneTodos.includes(title)
              ? "text-offwhite font-medium font-ITC text-xl opacity-50 line-through"
              : "text-offwhite font-medium font-ITC text-xl"
          }
        >
          {title}
        </h1>
      </div>
      <div className="flex justify-center items-center gap-3">
        <img
          src="/assets/Delete.png"
          alt=""
          className="w-5 h-5 cursor-pointer"
          onClick={() => handleDelete(title)}
        />
      </div>
    </div>
  );
};

export default Todo;
