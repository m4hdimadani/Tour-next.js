"use client";

import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { useGetBasket } from "@/core/service/queries";
import styles from "@/app/styles/checkout.module.css";

import { FaUserAlt } from "react-icons/fa";


function CheckOut() {
  const { data, isPending } = useGetBasket();

  if (!isPending) return <p>Loading ...</p>;

  return (
    <>
      <Header />
      <div className={styles.box}>
        <div className={styles.rightBox}>
          <div>
            <FaUserAlt />
            <h1>مشخصات مسافر</h1>
          </div>
          <div>
            <input placeholder="نام و نام خانوادگی" />
            <input placeholder=" کدملی " />
          </div>
        </div>
        <div className={styles.leftBox}></div>
      </div>
      <Footer />
    </>
  );
}

export default CheckOut;
