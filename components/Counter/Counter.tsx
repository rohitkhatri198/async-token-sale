import React, { useState } from "react";
import s from "./Counter.module.scss";
const Counter = () => {
  const state = useState();
  const [count, setCount] = useState(0);

  const incNum = () => {
    setCount(count + 5);
  };
  return (
    <div className={`${s.container}`}>
      <h1 className={`${s.heading}`}>{count}</h1>
      <div className={`${s.btn}`} onClick={incNum}>
        click me
      </div>
    </div>
  );
};

export default Counter;
