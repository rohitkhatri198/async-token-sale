/* eslint-disable jsx-a11y/alt-text */
import FC, { useState } from "react";
import s from "./Content.module.scss";
import Image from "next/image";

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
        <div className={`${isVisible ? s.timerBox : ""}`}>
          <h1 className={`${s.tokenHeading}`}>Token Sale Ends In:</h1>
          <div className={`${s.fourBoxes}`}>
            <div className={`${s.box} ${s.colon}`}>
              <h1>15</h1>
              <p>Days</p>
            </div>
            <div className={`${s.box} ${s.colon} `}>
              <h1>07</h1>
              <p>Hours</p>
            </div>
            <div className={`${s.box} ${s.colon}`}>
              <h1>15</h1>
              <p>Minutes</p>
            </div>
            <div className={`${s.box}`}>
              <h1>15</h1>
              <p>Seconds</p>
            </div>
          </div>
          {/*fourboxes*/}
          <p className={`${s.saleEnd}`}>TOKEN SALE ENDS SEPTEMBER 12, 2022</p>
          <p className={`${s.funded}`}>FUNDED : 68% = $38 000 000</p>
          <div className={`${s.square}`}></div>
          <div className={`${s.outerBar}`}>
            <div className={`${s.innerBar}`}>
              <div className={`${s.blueBar}`}></div>
            </div>
          </div>
          {/*outerBar*/}
          <div className={`${s.cap}`}>
            <div className={`${s.capText}`}>
              <p>Total Allocation Tokens:</p>
              <p>Min transaction amount:</p>
            </div>
            {/*capText*/}
            <div className={`${s.capNum}`}>
              <p>50,000,000 USD</p>
              <p>500 USD</p>
            </div>
            {/*capNum*/}
          </div>
          {/*cap*/}
          <div
            className={`${s.sale}`}
            onClick={() => {
              setVisibility(true);
              console.log("Visibility: " + isVisible);
            }}
          >
            JOIN TOKEN SALE
          </div>
        </div>
        {/*timerbox*/}
      </div>
      {/*second*/}
    </div>
  );
};

export default Content;
