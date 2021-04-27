import styles from "../styles/Maintenance.module.css";
import Counter from "./Counter";
import Link from "next/link";
import { FiInstagram, FiFacebook } from "react-icons/fi";

const Maintenance = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.content_container}>
        <div className={styles.logo_container}>
          <img src="/imgs/logo.jpg" altt="logo" className={styles.logo} />
        </div>
        <h2 className={styles.header}>site under construction</h2>
        <div className={styles.text_box}>
          <p>
            We are currently working on the back-end, our team is working hard
            and we’ll be back within the time.
            <br /> Please follow us in the social media to stay up to date for
            the most recent news.
          </p>
        </div>
        <div className={styles.counter}>
          <Counter />
        </div>
        <ul className={styles.social_media_icons}>
          <li className={styles.icon_border}>
            <Link href="" target="_blank">
              <a>
                <FiFacebook className={styles.icons} />
              </a>
            </Link>
          </li>
          <li className={styles.icon_border}>
            <Link href="">
              <a>
                <FiInstagram className={styles.icons} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.wpb_wrapper}>
        <p>Buttercreamsupreme © 2021. All rights reserved</p>
      </div>
    </div>
  );
};

export default Maintenance;
