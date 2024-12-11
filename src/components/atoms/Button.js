import Link from "next/link";
import { FaUser } from "react-icons/fa";

import styles from "../../app/styles/Button.module.css";
function Button() {
  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <Link href="#">
          <div className={styles.span}>
            <div className={styles.FaUser}>
              <FaUser />
            </div>
            <p>ورود | ثبت نام</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Button;
