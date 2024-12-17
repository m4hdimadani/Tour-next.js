"use client";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

import styles from "../../app/styles/Button.module.css";
import { useState } from "react";
import Auth from "../organisms/Auth";
function Button() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Link href="#">
          <div className={styles.span} onClick={() => setIsOpenModal(true)}>
            <div className={styles.FaUser}>
              <FaUser />
            </div>
            <p>ورود | ثبت نام</p>
          </div>
        </Link>
      </div>
      <div>{isOpenModal && <Auth  isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>}</div>
    </div>
  );
}

export default Button;
