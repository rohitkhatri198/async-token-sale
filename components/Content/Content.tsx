/* eslint-disable jsx-a11y/alt-text */
import FC from "react";
import s from "./Content.module.scss";
import Image from "next/image";

const Content = () => {
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
        <div className={`${s.timerBox}`}>
          <h1 className={`${s.tokenHeading}`}>Token Sale Ends In:</h1>
          <div className={`${s.fourBoxes}`}>
            <div className={`${s.box} ${s.colon}`}>
              <h1>15</h1>
              <p>Days</p>
            </div>
            <div className={`${s.box}  ${s.colon}`}>
              <h1>07</h1>
              <p>Hours</p>
            </div>
            <div className={`${s.box}  ${s.colon}`}>
              <h1>15</h1>
              <p>Mins</p>
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
              <p>Soft Cap :</p>
              <p>Min transaction amount :</p>
              <p>Target :</p>
            </div>
            {/*capText*/}
            <div className={`${s.capNum}`}>
              <p>200 000 USD</p>
              <p>100 000 USD</p>
              <p>35 000 000 USD</p>
            </div>
            {/*capNum*/}
          </div>
          {/*cap*/}
          <button className={`${s.sale}`}>JOIN TOKEN SALE</button>
        </div>
        {/*timerbox*/}
      </div>
      {/*second*/}
    </div>
  );
};

export default Content;
