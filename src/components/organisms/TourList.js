"use client";
import TourCard from "../molcules/TourCard";
import styles from "../../app/styles/TourList.module.css";
import { useRouter } from "next/navigation";

async function TourList({ tourData }) {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/");
  };
  if (!tourData.length)
    return (
      <div className={styles.container}>
        <p className={styles.title}>تور مورد نظر یافت نشد</p>
        <button onClick={clickHandler}>بازگشت به صفحه اصلی</button>
      </div>
    );
  return (
    <div>
      <TourCard tourData={tourData} />
    </div>
  );
}

export default TourList;
