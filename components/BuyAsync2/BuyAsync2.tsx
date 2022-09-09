import React from "react";
import s from "./BuyAsync2.module.scss";

const BuyAsync2 = () => {
  return (
    <div className={`${s.container}`}>
      <div className={`${s.timerBox}`}>
        <div className={`${s.timeContent}`}>
          <h1 className={`${s.tokenHeading}`}>Buy $PEDULI</h1>
          <div className={`${s.box1}`}>
            <p className={`${s.data1}`}>54466</p>
            <div className={`${s.innerBox}`}>
              <p className={`${s.data1}`}>USD</p>
            </div>
          </div>
          <div className={`${s.box1} ${s.box2}`}>
            <p className={`${s.data2}`}>0.0005676</p>
            <div className={`${s.innerBox}`}>
              <p className={`${s.data2}`}>$PEDULI</p>
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
              <p>
                Total Allocation Tokens: <p>50,000,000 USD</p>
              </p>
              <p>
                Min transaction amount: <p>500 USD</p>
              </p>
            </div>
            {/*capText*/}
          </div>
          {/*cap*/}
          <div className={`${s.sale}`}>BUY $PEDULI</div>
        </div>
      </div>
      {/*timerbox*/}
    </div>
  );
};

export default BuyAsync2;
