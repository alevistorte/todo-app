import React, { useEffect, useReducer } from "react";
import { todoReducar } from "./todoReducer";
import { useForm } from "../hooks/useForm";

import "./styles.css";

const init = () => {
  // almacenando en el LocalStorage
  return JSON.parse(localStorage.getItem("todos")) || [];

  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: "Aprender React",
  //     done: false,
  //   },
  // ];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducar, [], init);

  const [formValues, handleInputChange, reset] = useForm({
    description: "",
  });

  const { description } = formValues;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    const borrarTodo = {
      type: "delete",
      payload: todoId,
    };

    dispatch(borrarTodo);
  };

  const handleToggle = (todoId) => {
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) return;

    const newToDo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    // Action
    const agregarTodo = {
      type: "add",
      payload: newToDo,
    };

    dispatch(agregarTodo);
    reset();
  };

  return (
    <div>
      <h1>TodoApp ( {todos.length} )</h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* <ToDoList todos handleDelete handleToggle/> */}
          <table className="table">
            <tbody>
              {todos.map((todo, i) => (
                // <ToDoListItem todo index handleDelete handleToggle/>
                <tr key={todo.id}>
                  <td>
                    <p
                      className={`${todo.done && "completed"}`}
                      onClick={() => handleToggle(todo.id)}
                    >
                      {i + 1}. {todo.desc}
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
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="description"
              className="form-control"
              placeholder="Nuevo ToDo"
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
            />

            <button
              className="btn btn-outline-primary mt-1 btn-block"
              type="submit"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
