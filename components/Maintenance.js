import styles from "../styles/Maintenance.module.css";
import Counter from "./Counter";
import Link from "next/link";
import { FiInstagram, FiFacebook } from "react-icons/fi";

const Maintenance = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.content_container}>
        <div className={styles.logo_container}>
          <img
            src="/imgs/logo.jpg"
            alt="name of bakery"
            className={styles.logo}
          />
        </div>
        <h2 className={styles.header}>site under construction</h2>
        <div className={styles.text_box}>
          <p>
            Our team is working hard on the online store.
            <br /> Follow us on social media to browse the items on offer and to
            place an order.
          </p>
        </div>
        <div className={styles.counter}>
          <Counter />
        </div>
        <ul className={styles.social_media_icons}>
          <li className={styles.icon_border}>
            <a
              href="https://m.facebook.com/buttercreamsupremesa/?refsrc=https%3A%2F%2Fm.facebook.com%2F102280581924652%2F&_rdr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiFacebook className={styles.icons} />
            </a>
          </li>
          <li className={styles.icon_border}>
            <a
              href="https://www.instagram.com/buttercreamsupremesa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiInstagram className={styles.icons} />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.wpb_wrapper}>
        <p>ButtercreamSupreme © 2021. All rights reserved</p>
      </div>
    </div>
  );
};

export default Maintenance;
