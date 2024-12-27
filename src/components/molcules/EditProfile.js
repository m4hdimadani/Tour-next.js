
"use client";

import { useForm } from "react-hook-form";
import styles from "@/app/styles/EditProfile.module.css";

import { useUpdateUserAccount } from "@/core/service/mutations";

function EditProfile({ mobile, onClose, email, setEmail }) {
  const { mutateAsync: updateUserAccount, isPending } = useUpdateUserAccount();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email },
  });

  const onSubmit = async (formData) => {
    try {
      await updateUserAccount({ ...formData, mobile });
      setEmail(formData.email);
      alert("اطلاعات با موفقیت به‌روزرسانی شد!");
      onClose();
    } catch (error) {
      console.error("خطا در به‌روزرسانی اطلاعات:", error);
    }
  };

  return (
    <div className={styles.box}>
      <h1>اطلاعات حساب کاربری</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.phone}>
          <p>شماره موبایل</p>
          <span>{mobile}</span>
        </div>
        <div className={styles.input}>
          <input
            type="email"
            placeholder="آدرس ایمیل"
            {...register("email", { required: "ایمیل الزامی است" })}
          />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
          <div className={styles.button}>
            <button type="submit" disabled={isPending}>
              {isPending ? "در حال ارسال..." : "تایید"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
