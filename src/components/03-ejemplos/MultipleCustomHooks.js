import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";
import "./hooks.css";

export const MultipleCustomHooks = () => {
  const { state, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${state}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h2>BreakingBad Quotes</h2>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <>
          <blockquote className="blockquote text-end">
            <p>{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
          <button onClick={increment} className="btn btn-warning">
            Siguiente
          </button>
        </>
      )}
    </div>
  );
};
