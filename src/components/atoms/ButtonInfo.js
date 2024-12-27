"use client";

import styles from "@/app/styles/ButtonInfo.module.css";
import { useUpdatePersonalAccount } from "@/core/service/mutations";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
function ButtonInfo({ personalInfo, setPersonalInfo, onClose }) {
  const { mutate } = useUpdatePersonalAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: personalInfo.fullName || "",
      gender: personalInfo.gender || "",
      nationalCode: personalInfo.nationalCode || "",
      birthDate: personalInfo.birthDate || "",
    },
  });

  const onSubmit = (data) => {
    mutate(
      { data },
      {
        onSuccess: () => {
          setPersonalInfo(data);
          toast.success("اطلاعات با موفقیت به‌روزرسانی شد!");
          onClose();
        },
        onError: (error) => {
          console.error("خطا در به‌روزرسانی اطلاعات:", error);
          toast.error("خطایی در به‌روزرسانی اطلاعات رخ داد!");
        },
      }
    );
  };
  return (
    <div>
      <div className={styles.modal}>
        <h1>اطلاعات شخصی</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
                type="text"
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
          <div className={styles.actions}>
            <button type="submit">تایید</button>
            <button type="button" onClick={onClose}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ButtonInfo;
