import Image from "next/image";
import React from "react";
import logo from "../../../public/icon/Torino (4) 1.png"
import arline from "../../../public/icon/state-airline-f45c55b2 1.png";
import passenger from "../../../public/icon/passenger-rights-48368f81 1.png";
import barcode from "../../../public/icon/barcode.png";
import etemad from "../../../public/icon/etemad.png";
import aira from "../../../public/icon/aira-682b7c43.png";

import styles from "../../app/styles/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.line}>
        <hr />
      </div>
      <div className={styles.footer}>
        <div className={styles.list}>
          <div className={styles.torinoList}>
            <h2>تورینو</h2>
            <ul>
              <li>درباره ما</li>
              <li>تماس با ما</li>
              <li>چرا تورینو</li>
              <li>بیمه مسافرتی</li>
            </ul>
          </div>
          <div className={styles.servicesList}>
            <h2>خدمات مشتریان</h2>
            <ul>
              <li>پشتیبانی آنلاین</li>
              <li>راهنمای خرید</li>
              <li>راهنمای استرداد</li>
              <li>پرسش و پاسخ</li>
            </ul>
          </div>
        </div>
        <div className={styles.logos}>
          <div className={styles.logoTorino}>
            <Image src={logo} />
            <p> تلفن پشتیبانی: 8574-021 </p>
          </div>
          <div className={styles.sponcer}>
            <Image src={arline} />
            <Image src={passenger} />
            <Image src={barcode} />
            <Image src={etemad} />
            <Image src={aira} />
          </div>
        </div>
      </div>
      <div className={styles.lineEnd}>
        <hr />
      </div>
      <div className={styles.text}>
        <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </div>
    </>
  );
}

export default Footer;
