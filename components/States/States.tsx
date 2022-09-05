// import { set } from "nprogress";
import React, { useState } from "react";
import s from "./States.module.scss";

const States = () => {
  const state = useState();
  const [name, setName] = useState("Something");
  const changeName = () => {
    let val = name;

    val === "Something" ? setName("Nothing") : setName("Something");
  };

  return (
    <div className={`${s.container}`}>
      <h1 className={`${s.name}`}>{name}</h1>
      <button onClick={changeName}>click this</button>
    </div>
  );
};

export default States;
