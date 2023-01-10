import React, { useEffect, useRef, useState } from "react";
import "./news.css";

const NewsLetter = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const starterTime = () => {
    const countDown = new Date("November 10, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDown - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60)
      );
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    starterTime();
    return () => {
      clearInterval(interval.current);
    };
  });
  return (
    <div className="newsletter">
      <div className="left">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngpix.com%2Fwp-content%2Fuploads%2F2016%2F03%2FPlant-PNG-Image.png&f=1&nofb=1&ipt=a7a745453a0454f661115c48d6c5728bae9191a2bc2475381ce3c795773620dd&ipo=images"
          alt=""
        />
      </div>
      <div className="right">
        <h1>Ranunculus</h1>
        <p>
          Special discount with only/ <span>30$</span>
        </p>
        <div className="counter">
          <div className="time">
            <h1>{timerDays}</h1>
            <p>Days</p>
          </div>
          <div className="time">
            <h1>{timerHours}</h1>
            <p>Hours</p>
          </div>
          <div className="time">
            <h1>{timerMinutes}</h1>
            <p>Minutes</p>
          </div>
          <div className="time">
            <h1>{timerSeconds}</h1>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
