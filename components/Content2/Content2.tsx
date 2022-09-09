import BuyAsync2 from "@components/BuyAsync2";
import Timerbox2 from "@components/Timerbox2";
import React, { useState } from "react";
import s from "./Content2.module.scss";

const Content2 = () => {
  const [isVisible, setVisibility] = useState(false);
  return (
    <div className={`${s.container}`}>
      <div className={`${s.first}`}>
        <h1 className={`${s.liveSale}`}>
          The Token Sale is <span className={`${s.liveText}`}>Live</span>!
        </h1>
        <div className={`${s.twoButtons}`}>
          <button className={`${s.whitePaper}`}>READ WHITEPAPER</button>
          <button className={`${s.works}`}>SEE HOW IT WORKS</button>
        </div>
      </div>
      {/*first*/}
      <div className={`${s.second}`}>
        {!isVisible ? (
          <Timerbox2
            onClicked={() => {
              console.log("hji");
              setVisibility(true);
            }}
          />
        ) : (
          <BuyAsync2 />
        )}
      </div>
      {/*second*/}
    </div>
  );
};

export default Content2;
