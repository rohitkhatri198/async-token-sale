import React, { FC, useState } from "react";
import s from "./Timerbox.module.scss";
import Countdown from "react-countdown";
interface Props {
  onClicked: any;
}
//functioanality added
const Timerbox: FC<Props> = ({ onClicked }) => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.timerBox}`}>
        <h1 className={`${s.tokenHeading}`}>Token Sale Ends In:</h1>
        <div className={`${s.fourBoxes}`}>
          <Countdown date={Date.now() + 1000000009} />
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

        <div
          className={`${s.sale}`}
          onClick={() => {
            onClicked();
          }}
        >
          JOIN TOKEN SALE
        </div>
      </div>
      {/*timerbox*/}
    </div>
  );
};

export default Timerbox;
