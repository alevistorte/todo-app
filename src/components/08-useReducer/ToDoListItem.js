import React from "react";

export const ToDoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <tr key={`C${todo.id}`} className="d-flex justify-content-between">
      <td>
        <p
          className={`${todo.done && "completed"}`}
          onClick={() => handleToggle(todo.id)}
        >
          {index + 1}. {todo.desc}
        </p>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(todo.id)}
        >
          Borrar
        </button>
      </td>
    </tr>
  );
};
