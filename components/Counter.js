import { useState, useEffect } from "react";
import styles from "../styles/Counter.module.css";

const Counter = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const setCountDown = () => {
    let countDownDate = new Date("June 30, 2021 23:37:25").getTime();

    let x = setInterval(() => {
      const today = new Date().getTime();

      let distance = countDownDate - today;

      let day = Math.floor(distance / (1000 * 60 * 60 * 24));
      setDays(day);

      let hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(hour);

      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      setMins(minutes);

      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setSecs(seconds);
    }, 1000);
  };

  useEffect(() => {
    setCountDown();
  });

  return (
    <ol className={styles.main_container}>
      <li className={styles.container}>
        <span className={styles.count}>{days}</span>
        <span className={styles.interval}>days</span>
      </li>
      <li className={styles.container}>
        <span className={styles.count}>{hours}</span>
        <span className={styles.interval}>hours</span>
      </li>
      <li className={styles.container}>
        <span className={styles.count}>{mins}</span>
        <span className={styles.interval}>minutes</span>
      </li>
      <li className={styles.container}>
        <span className={styles.count}>{secs}</span>
        <span className={styles.interval}>seconds</span>
      </li>
    </ol>
  );
};

export default Counter;
