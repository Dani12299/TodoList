"use client";

import { useState } from "react";
import React from "react";

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("")
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit} >
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What are you up to?"
        required
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Add SOMETHING
      </button>
    </form>
  );
};
