"use client";

import styles from "@/app/styles/SendOtp.module.css";
import { useSendOtp } from "@/core/service/mutations";
import { isValidMobile } from "@/core/utils/validation";
import { useState } from "react";
import toast from "react-hot-toast";

function SendOtp({ setIsOpenModal, mobile, setMobile, setStep }) {
  const [error, setError] = useState("");
  const { isPending, mutate } = useSendOtp();

  const SendOtpHandler = (event) => {
    event.preventDefault();
    if (isPending) return;
    if (!isValidMobile(mobile)) return setError("شماره معتبر وترد کنید!");
    setError("");

    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(data?.data?.message);
          toast(data?.data?.code);
          setStep(2);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.X}>
        <p onClick={() => setIsOpenModal(false)}>X</p>
      </div>
      <div className={styles.title}>
        <h1>ورود به تورینو</h1>
      </div>
      <form className={styles.input} onSubmit={SendOtpHandler}>
        <label>شماره موبایل خود را وارد کنید</label>
        <input
          type="text"
          placeholder="8572***0912"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {!!error && <p style={{ color: "red" }}>{error}</p>}
        <div className={styles.button}>
          <button type="submit">
            {" "}
            {isPending ? "ارسال..." : "ارسال کد تایید"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendOtp;
