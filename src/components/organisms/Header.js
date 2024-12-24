"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/icon/Torino (4) 1.png";
import styles from "../../app/styles/Header.module.css";
import Auth from "./Auth";
import { usePathname } from "next/navigation";


function Header() {
  const pathname = usePathname();

  

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>
      </div>
      <div className={styles.list}>
        <ul>
          <Link href="/" style={{ textDecoration: "none" , }}>
            <li style={{ color: pathname === "/" ? "#28A745" : "#282828" }}>
              صفحه اصلی
            </li>
          </Link>
          <Link href="#" style={{ textDecoration: "none", color: "#282828"}}>
            <li>خدمات گردشگری</li>
          </Link>
          <Link href="#" style={{ textDecoration: "none" , color: "#282828"}}>
            <li>درباره ما</li>
          </Link>
          <Link href="#" style={{ textDecoration: "none" , color: "#282828"}}>
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
