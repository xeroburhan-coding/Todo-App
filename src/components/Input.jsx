// Input.js
import React, { useState } from "react";

const Input = ({ handleAdd, handleOnChange, input }) => {
  return (
    <div className="my-7 flex justify-center space-x-5">
      <input
        value={input}
        onChange={handleOnChange}
        type="text"
        placeholder="write your next task"
        className="w-72 h-12 rounded-2xl bg-scondbg px-5 text-offwhite placeholder:text-offwhite placeholder:font-regular placeholder:font-ITC placeholder:text-sm placeholder:opacity-50"
      />
      <button
        onClick={handleAdd}
        className=" text-center bg-orng rounded-full h-12 w-12 font-bold text-3xl pb-1"
      >
        +
      </button>
    </div>
  );
};

export default Input;
