"use client";

import { useState } from "react";
import SendOtp from "../atoms/SendOtp";
import CheckOtp from "../atoms/CheckOtp";
import styles from "../../app/styles/Auth.module.css";

import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa";

import Link from "next/link";
import { useGetUserData } from "@/core/service/queries";

function Auth() {
  const [step, setStep] = useState(1);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobile, setMobile] = useState("");

  const { data } = useGetUserData();

  const userMobile = data?.data?.mobile;

  const dropdownHandler = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  

  return (
    <div>
      {!userMobile ? (
        <div className={styles.button}>
          <button onClick={() => setIsOpenModal(true)}>
            <FaUser className={styles.FaUser} />
            ورود | ثبت نام
          </button>
        </div>
      ) : (
        <div className={styles.userMobile} onClick={dropdownHandler}>
          <FaUser className={styles.FaUse} />
          {userMobile}
          <IoIosArrowDown className={styles} />
        </div>
      )}

      {isDropdownOpen && (
        <div className={styles.dropdown} onClick={() => setIsDropdownOpen(false)}>
          <div className={styles.dropdownItem}>
            <div className={styles.phone}>
              {" "}
              <CgProfile className={styles.cgProfile} />
              <span className={styles.user}>{userMobile}</span>
            </div>
          </div>

          <div className={styles.dropdownItem}>
            <span className={styles.profile}>
              {" "}
              <Link href="/profile" className={styles.profile}>
                {" "}
                <FaUser className={styles.faUse} />
                <p>اطلاعات حساب کاربری</p>
              </Link>{" "}
            </span>
          </div>

          <div className={styles.logOut}>
            <span>
              {" "}
              <IoMdLogOut className={styles.iconLogout} />
              <p> خروج از حساب کاربری</p>
            </span>
          </div>
        </div>
      )}

      {isOpenModal && (
        <>
          <div className={styles.container}>
            {step === 1 && (
              <SendOtp
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                mobile={mobile}
                setMobile={setMobile}
                setStep={setStep}
              />
            )}
            {step === 2 && (
              <CheckOtp
                isOpenModal={isOpenModal}
                setIsOpenModal={setIsOpenModal}
                mobile={mobile}
                setStep={setStep}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Auth;
