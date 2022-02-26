import React, { useState } from "react";
import "../03-ejemplos/hooks.css";
import { MultipleCustomHooks } from "../03-ejemplos/MultipleCustomHooks";

export const RealExaRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>RealExaRef</h3>
      <hr />

      <button className="btn btn-primary m-2" onClick={() => setShow(!show)}>
        Show/Hide
      </button>

      {show && <MultipleCustomHooks />}
    </div>
  );
};
