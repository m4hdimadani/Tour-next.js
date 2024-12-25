"use clients ";

import { useForm } from "react-hook-form";

import styles from "@/app/styles/EditProfile.module.css";
import { useGetUserData } from "@/core/service/queries";

function EditProfile() {
  const { data } = useGetUserData();
  const mobile = data?.data?.mobile;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const submitHandler = () => {};
  return (
    <div className={styles.box}>
      <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
        <div className={styles.phone}>
          <p>شماره موبایل</p>
          <span>{mobile}</span>
        </div>
        <div className={styles.input}>
          <input type="email" placeholder="آدرس ایمیل" {...register("email")} />
        </div>
        <div className={styles.button}>
          <button>تایید</button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
