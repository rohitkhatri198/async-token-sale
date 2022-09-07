import React, { FC, useEffect, useState, useRef } from "react";
import s from "./Timerbox.module.scss";

interface Props {
  onClicked: any;
}
//functioanality added
const Timerbox: FC<Props> = ({ onClicked }) => {
  const [timerDays, SetTimerDays] = useState("00");
  const [timerHours, SetTimerHours] = useState("00");
  const [timerMinutes, SetTimerMinutes] = useState("00");
  const [timerSeconds, SetTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const CountdownDate = new Date("May 30, 2020 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = CountdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // stop timer
        // clearInterval(interval.current);
      } else {
        // update timer
        SetTimerDays("days");
        SetTimerHours("hours");
        SetTimerMinutes("minutes");
        SetTimerSeconds("seconds");
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearInterval(interval.current);
    };
  });

  return (
    <div className={`${s.container}`}>
      <div className={`${s.timerBox}`}>
        <h1 className={`${s.tokenHeading}`}>Token Sale Ends In:</h1>
        <div className={`${s.fourBoxes}`}>
          <div className={`${s.box} ${s.colon}`}>
            <h1>{timerDays}</h1>
            <p>Days</p>
          </div>
          <div className={`${s.box} ${s.colon} `}>
            <h1>{timerHours}</h1>
            <p>Hours</p>
          </div>
          <div className={`${s.box} ${s.colon}`}>
            <h1>{timerMinutes}</h1>
            <p>Minutes</p>
          </div>
          <div className={`${s.box}`}>
            <h1>{timerSeconds}</h1>
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
