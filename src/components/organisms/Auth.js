"use client";

import { useState } from "react";
import SendOtp from "../atoms/SendOtp";
import CheckOtp from "../atoms/CheckOtp";
import styles from "../../app/styles/Auth.module.css";

function Auth({ isOpenModal, setIsOpenModal }) {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  return (
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
        <CheckOtp isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} mobile={mobile} setStep={setStep}/>
      )}
    </div>
  );
}

export default Auth;
