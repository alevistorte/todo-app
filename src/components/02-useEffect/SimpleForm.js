import React, { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [stateForm, setStateForm] = useState({
    name: "",
    email: "",
  });

  const { name, email } = stateForm;

  useEffect(() => {
    console.log("First time");
  }, []);

  const handleInputChange = ({ target }) => {
    setStateForm({
      ...stateForm,
      [target.name]: target.value,
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu
          nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="use@gmail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === "ale" && <Message />}
    </>
  );
};
