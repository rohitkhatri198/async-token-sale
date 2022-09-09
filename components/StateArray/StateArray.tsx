import { clear } from "console";
import React, { useState } from "react";
import s from "./StateArray.module.scss";

const StateArray = () => {
  const bioData = [
    {
      id: 0,
      myName: "Rohit",
      age: 22,
    },
    { id: 1, myName: "Monke", age: 20 },
  ];

  const [myArray, setmyArray] = useState(bioData);

  const clearArray = () => {
    setmyArray([]);
    console.log("clearclicked");
  };

  return (
    <div className={`${s.container}`}>
      {/* <h1 className={`${s.data}`}>Name: & Age: </h1> */}
      {myArray.map((item, i) => {
        // eslint-disable-next-line react/jsx-key
        return (
          // eslint-disable-next-line react/jsx-key
          <h1 className={`${s.data}`}>
            Name: {item.myName} & Age:{item.age}{" "}
          </h1>
        );
      })}
      <button className={`${s.btn}`} onClick={clearArray}>
        CLEAR
      </button>
    </div>
  );
};

export default StateArray;
