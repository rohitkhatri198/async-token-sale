/* eslint-disable jsx-a11y/alt-text */
import FC, { useState } from "react";
import s from "./Content.module.scss";
import Image from "next/image";
import Timerbox from "@components/Timerbox";
import BuyAsync from "@components/BuyAsync";

const Content = () => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div className={`${s.container}`}>
      <div className={`${s.first}`}>
        <h1 className={`${s.liveSale}`}>
          The Token Sale is <span className={`${s.liveText}`}>Live</span>!
        </h1>
        <div className={`${s.crypto}`}>
          <Image src="/images/crypto.png" width={300} height={400} />
        </div>
        <div className={`${s.twoButtons}`}>
          <button className={`${s.whitePaper}`}>READ WHITEPAPER</button>
          <button className={`${s.works}`}>SEE HOW IT WORKS</button>
        </div>
      </div>
      {/*first*/}
      <div className={`${s.second}`}>
        {!isVisible ? (
          <Timerbox
            onClicked={() => {
              console.log("hji");
              setVisibility(true);
            }}
          />
        ) : (
          <BuyAsync />
        )}
      </div>
      {/*second*/}
    </div>
  );
};

export default Content;
