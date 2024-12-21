import styles from "../../app/styles/WhyTourino.module.css";
import Slider from "../atoms/Slider";


function WhyTourino() {
  return (
    <div className={styles.container}>
      <div className={styles.right}>
        <div className={styles.who}>
          <div className={styles.circle}>
            <span className={styles.questionMark}>؟</span>
          </div>
          <h1>
            چرا <span className={styles.title}>تورینو</span> ؟
          </h1>
        </div>
        <h3>تور طبیعت گردی و تاریخی</h3>
        <p>
          اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
          طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
          طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
          آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی
          را خریداری کنید.
        </p>
      </div>
      <div className={styles.Slider}>
        <Slider />
      </div>
    </div>
  );
}

export default WhyTourino;
