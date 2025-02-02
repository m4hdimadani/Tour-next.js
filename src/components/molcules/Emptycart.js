import React from "react";
import Link from "next/link";
import styles from "../../app/styles/EmptyCart.module.css";

const EmptyCart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="../../../public/empty-cart.png"
          alt="Empty Cart"
          className={styles.image}
        />
      </div>
      <h2 className={styles.title}>سبد خرید شما خالی است</h2>
      <p className={styles.message}>
        شما هنوز هیچ کالایی به سبد اضافه نکرده‌اید.
      </p>
      <Link href="/" className={styles.link}>
        به صفحه اصلی بروید
      </Link>
    </div>
  );
};

export default EmptyCart;
