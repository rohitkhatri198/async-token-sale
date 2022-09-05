import React, { FC } from "react";
import s from "./Buyasync.module.scss";

const Buyasync = () => {
  return (
    <div className={`${s.async}`}>
      <div className={`${s.timerBox}`}>
        <h1 className={`${s.tokenHeading}`}>Buy $ASYNC</h1>
        <div className={`${s.box1}`}>
          <p className={`${s.data1}`}>54466</p>
          <div className={`${s.innerBox}`}>
            <p className={`${s.data1}`}>USD</p>
          </div>
        </div>
        <div className={`${s.box1}`}>
          <p className={`${s.data2}`}>0.0005676</p>
          <div className={`${s.innerBox}`}>
            <p className={`${s.data2}`}>$ASYNC</p>
          </div>
        </div>
        <p className={`${s.saleEnd}`}>Token Price = $0.014</p>
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
        <div className={`${s.sale}`}>BUY $ASYNC</div>
      </div>
      {/*timerbox*/}
    </div>
  );
};

export default Buyasync;
