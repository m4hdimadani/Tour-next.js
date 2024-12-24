"use client";
import styles from "@/app/styles/profile.module.css";
import { useGetUserData } from "@/core/service/queries";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";

function Profile() {
  const { data } = useGetUserData();
  const mobile = data?.data?.mobile;

  return (
    <div className={styles.container}>
      <div className={styles.boxOne}>
        <div className={styles.account}>
          <h2>اطلاعات حساب کاربری</h2>
        </div>
        <div className={styles.inBoxOne}>
          <div className={styles.number}>
            <p>شماره موبایل</p>
            <h4>{mobile}</h4>
          </div>
          <div className={styles.email}>
            <p>ایمیل</p>
            <h4> --- </h4>
          </div>
          <div className={styles.edit}>
            <Link href="#">
              {" "}
              <CiEdit className={styles.CiEdit} />
              افزودن
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.boxTow}>
        <div className={styles.account}>
          <h2> اطلاعات شخصی </h2>
        </div>
        <div className={styles.inBoxTow}>
          <div className={styles.Right}>
            <div className={styles.name}>
              <p>نام و نام خانوادگی</p>
              <h4>مهدی معدنی</h4>
            </div>
            <div className={styles.male}>
              <p>جنسیت</p>
              <h4>مرد</h4>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.codeMale}>
              <p>کدملی</p>
              <h4>4890000000</h4>
            </div>
            <div className={styles.bd}>
              <p>تاریخ تولد</p>
              <h4>1379/05/28</h4>
            </div>
          </div>
          <div className={styles.editTow}>
            <Link href="#">
              <CiEdit className={styles.CiEdit} />
              ویرایش اطلاعات
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.boxThree}>
        <div className={styles.account}>
          <h2> اطلاعات شخصی </h2>
        </div>
        <div className={styles.inBoxThree}>
          <div className={styles.Right}>
            <div className={styles.bankShaba}>
              <p>شماره شبا</p>
              <h4>---</h4>
            </div>
            <div className={styles.bankCode}>
              <p>شماره حساب</p>
              <h4>---</h4>
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles.numberBank}>
              <p>شماره کارت</p>
              <h4>6037997588996611</h4>
            </div>
          </div>
          <div className={styles.editTow}>
            <Link href="#">
              <CiEdit className={styles.CiEdit} />
              ویرایش اطلاعات
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
