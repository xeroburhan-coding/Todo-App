import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Input from "./components/Input";
import Todos from "./components/Todos";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);


  const handleOnChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };

  const handleAdd = () => {
    if (input.trim() === "") {
      alert("Please write something");
      return;
    }

    if (todos.includes(input)) {
      alert("This todo already exists");
      setInput("");
      return;
    }

    setTodos((prevTodos) => [...prevTodos, input]);
    setInput("");
  };

  const handleDelete = (title) => {
    const filterdTodo = todos.filter((todo) => todo !== title);
    const filterdDoneTodos = doneTodos.filter((doneTodo) => doneTodo !== title);
    setDoneTodos(filterdDoneTodos);
    setTodos(filterdTodo);
  };

  const onDone = (title) => {
    setDoneTodos((preDoneTodos) => [...preDoneTodos, title]);
  };

  return (
    <div className=" mx-96 my-10">
      <Navbar></Navbar>
      <Dashboard todos={todos} doneTodos={doneTodos}></Dashboard>
      <Input
        handleOnChange={handleOnChange}
        handleAdd={handleAdd}
        input={input}
      ></Input>
      <Todos
        todos={todos}
        handleDelete={handleDelete}
        onDone={onDone}
        doneTodos={doneTodos}
      ></Todos>
    </div>
  );
};

export default App;
