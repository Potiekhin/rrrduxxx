import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../store/action-creators";

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => dispatch(increment())}
        className="btn btn-success m-5"
      >
        add one
      </button>

      <button onClick={() => dispatch(decrement())} className="btn btn-danger">
        less one
      </button>
      <h1 className="ml-5">{counter}</h1>
    </div>
  );
}

export default Counter;
