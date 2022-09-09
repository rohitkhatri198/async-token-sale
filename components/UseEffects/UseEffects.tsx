import React, { useState, useEffect } from "react";
import s from "./UseEffects.module.scss";

const UseEffects = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    document.title = `Chats(${count})`;
  });

  console.log("count added");

  return (
    <div className={`${s.container}`}>
      <h1 className={`${s.num}`}>{count}</h1>
      <button className={`${s.btn}`} onClick={() => setcount(count + 1)}>
        click me
      </button>
    </div>
  );
};

export default UseEffects;
