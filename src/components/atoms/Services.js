import Image from "next/image";
import imge1 from "../../../public/icon/darsad.jpg";
import imge2 from "../../../public/icon/3....jpg";
import imge3 from "../../../public/icon/love.jpg";
import styles from "../../app/styles/Services.module.css";

function Services() {
  return (
    <>
      <hr className={styles.hr} />
      <div className={styles.container}>
        <div className={styles.darsad}>
          <div className={styles.image}>
            <Image src={imge1} alt="img1"/>
          </div>
          <div className={styles.titleImage}>
            <h2>بصرفه ترین قیمت</h2>
            <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
          </div>
        </div>
        <div className={styles.darsad}>
          <div className={styles.image}>
            <Image src={imge2} alt="imag2" />
          </div>
          <div className={styles.titleImage}>
            <h2>پشتیبانی</h2>
            <p>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</p>
          </div>
        </div>
        <div className={styles.darsad}>
          <div className={styles.image}>
            <Image src={imge3} alt="img3"/>
          </div>
          <div className={styles.titleImage}>
            <h2>رضایت کاربران</h2>
            <p>رضایت بیش از 10هزار کاربر از تور های ما. </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
