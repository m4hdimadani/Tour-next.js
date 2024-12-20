import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/icon/Torino (4) 1.png";
import styles from "../../app/styles/Header.module.css";
import Auth from "./Auth";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>
      </div>
      <div className={styles.list}>
        <ul>
          <Link href="#" style={{ textDecoration: "none", color: "#28A745" }}>
            <li>صفحه اصلی</li>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <li>خدمات گردشگری</li>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <li>درباره ما</li>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <li>تماس با ما</li>
          </Link>
        </ul>
      </div>
      <div className={styles.button}>
        <Auth />
      </div>
    </div>
  );
}

export default Header;
