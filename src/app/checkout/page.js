"use client";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { useGetBasket } from "@/core/service/queries";
import styles from "@/app/styles/checkout.module.css";

import { FaUserAlt } from "react-icons/fa";
import Loader from "@/Loader";

function CheckOut() {
  const { data, isPending } = useGetBasket();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      nationalCode: "",
      birthDate: "",
    },
  });

  if (isPending)
    return (
      <div className={styles.Loader}>
        <Loader />
      </div>
    );

  return (
    <>
      <Header />
      <div className={styles.box}>
        <div className={styles.modal}>
          <div className={styles.title}>
            <FaUserAlt />
            <h1>مشخصات مسافر</h1>
          </div>
          <form className={styles.form}>
            <div className={styles.inBox}>
              <div className={styles.field}>
                <label>نام</label>
                <input
                  type="text"
                  {...register("firstName", { required: "نام الزامی است" })}
                />
                <label> نام خانوادگی</label>
                <input
                  type="text"
                  {...register("lastName", {
                    required: "نام خانوادگی الزامی است",
                  })}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div className={styles.field}>
                <label>جنسیت</label>
                <select {...register("gender")}>
                  <option value="مرد">مرد</option>
                  <option value="زن">زن</option>
                </select>
              </div>
              <div className={styles.field}>
                <label>کد ملی</label>
                <input
                  type="number"
                  {...register("nationalCode", {
                    required: "کد ملی الزامی است",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "کد ملی باید 10 رقم باشد",
                    },
                  })}
                />
                {errors.nationalCode && <p>{errors.nationalCode.message}</p>}
              </div>
              <div className={styles.field}>
                <label>تاریخ تولد</label>
                <input
                  type="date"
                  {...register("birthDate", {
                    required: "تاریخ تولد الزامی است",
                  })}
                />
                {errors.birthDate && <p>{errors.birthDate.message}</p>}
              </div>
            </div>
          </form>
        </div>
        <div className={styles.leftBox}>
          <h1>{data?.data?.title}</h1>
          <div className={styles.price}>
            <p>قیمت نهایی:</p>
            <span>{data?.data?.price} تومان</span>
          </div>
          <div className={styles.button}>
            <input type="submit" value="ثبت و خرید نهایی" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CheckOut;
