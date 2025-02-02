"use client";

import Image from "next/image";
import { tourDays } from "../../../src/core/utils/dateConvertor";
import { formatNumberWithCommas } from "../../core/utils/engToPersianNumber";
import styles from "../../app/styles/TourInfo.module.css";

const TourInfo = ({ onSubmit, data, isError, isLoading }) => {
  if (isError) {
    return <div>error</div>;
  }
  if (isLoading) {
    return <div>در حال بارگذاری اطلاعات تور...</div>;
  }
  if (!data) {
    return <div>داده‌ای برای نمایش وجود ندارد.</div>;
  }

  console.log("first", data);

  const { title, startDate, endDate, price } = data;
  const difference = tourDays(endDate, startDate);

  return (
    <div className={styles.tourInfo}>
      <div className={styles.top}>
        <h2 className={styles.title}>{title}</h2>
        <span>{`${difference}روز و ${difference - 1} شب`}</span>
      </div>
      
      <div className={styles.bottom}>
        <p>قیمت نهایی</p>
        <h3>
          <span className={styles.price}>{formatNumberWithCommas(price)}</span>
          <p className={styles.toman}> تومان</p>
        </h3>
      </div>
      <button onClick={onSubmit} className={styles.button}>
        ثبت و خرید نهایی
      </button>
    </div>
  );
};

export default TourInfo;
