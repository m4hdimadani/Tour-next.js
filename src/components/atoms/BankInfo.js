"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { bankAcountSchema } from "@/core/schema";
import { useUpdateBankAccount } from "@/core/service/mutations";
import toast from "react-hot-toast";

import styles from "@/app/styles/BankInfo.module.css";

function BankInfo({ setBank, onClose }) {
  const { mutate, isPending } = useUpdateBankAccount();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bankAcountSchema),
  });

  const submitHandler = (data) => {
    if (isPending) return;

    mutate(
      { payment: data },
      {
        onSuccess: (data) => {
          setBank(data?.data?.payment);
          toast.success(data?.data?.message);
          onClose();
        },
        onError: (error) => {
          console.error("Error Response:", error);
          toast.error("خطا در به‌روزرسانی اطلاعات بانکی");
        },
      }
    );
  };

  return (
    <div>
      <div className={styles.modal}>
        <h1>اطلاعات حساب بانکی</h1>
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          <div className={styles.inBox}>
            <div>
              <input
                {...register("shaba_code")}
                placeholder="شماره شبا"
                className={styles.shabaInput}
              />
              {!!errors?.shaba_code && (
                <span>{errors?.shaba_code?.message}</span>
              )}
              <input
                {...register("debitCard_code")}
                placeholder="شماره کارت"
                className={styles.shabaInput}
              />
              {!!errors?.debitCard_code && (
                <span>{errors?.debitCard_code?.message}</span>
              )}

              <input
                {...register("accountIdentifier")}
                placeholder="شماره حساب"
                className={styles.shabaInput}
              />

              {!!errors?.accountIdentifier && (
                <span>{errors?.accountIdentifier?.message}</span>
              )}
            </div>
          </div>
          <div className={styles.actions}>
            <button type="submit" disabled={isPending}>
              {isPending ? "در حال پردازش..." : "تایید"}
            </button>
            <button type="button" onClick={onClose} disabled={isPending}>
              انصراف
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BankInfo;
