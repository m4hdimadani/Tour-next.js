import { useState } from "react";
import styles from "../../app/styles/CheckOtp.module.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import OtpInput from "react18-input-otp";
import { useCheckOtp } from "@/core/service/mutations";
import { setCookie } from "@/core/utils/cookie";
function CheckOtp({ mobile, setStep }) {
  const [code, setCode] = useState("");

  const { isPending, mutate } = useCheckOtp();

  const checkOtpHandler = (event) => {
    event.preventDefault();
    if (isPending) return;

    mutate(
      { mobile, code },
      {
        onSuccess: (data) => {
          setCookie("accessToken", data?.data?.accessToken, 30);
          setCookie("refreshToken", data?.data?.refreshToken, 350);
        },
        onError: (error) => {
          console.log(error);
        },
      }
    );
  };
  const changeHandler = (otp) => {
    setCode(otp);
  };

  return (
    <div className={styles.container}>
      <div className={styles.X}>
        <p onClick={() => setStep(1)}>
          <FaArrowLeftLong />
        </p>
      </div>
      <div className={styles.title}>
        <h1> کد تایید را وارد کنید. </h1>
      </div>
      <form className={styles.input} onSubmit={checkOtpHandler}>
        <label> کد تایید به شماره {mobile} ارسال شد </label>
        <div
          style={{ direction: "ltr", marginLeft: "70px", marginTop: "20px" }}
        >
          <OtpInput
            value={code}
            onChange={changeHandler}
            numInputs={6}
            inputStyle={{
              width: "58px",
              height: "53px",
              marginRight: "10px",
              borderRadius: "5px",
            }}
            errorStyle={{ border: "red" }}
          />
        </div>

        <div className={styles.button}>
          <button type="submit">ورود به تورینو</button>
        </div>
      </form>
    </div>
  );
}

export default CheckOtp;
