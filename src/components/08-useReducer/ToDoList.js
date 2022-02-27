import React from "react";
import { ToDoListItem } from "./ToDoListItem";

export const ToDoList = ({ todos, handleDelete, handleToggle }) => {
  return (
    <table className="table">
      <tbody>
        {todos.map((todo, i) => (
          // <ToDoListItem todo index handleDelete handleToggle/>
          <ToDoListItem
            key={todo.id}
            todo={todo}
            index={i}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))}
      </tbody>
    </table>
  );
};
