"use client";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { RiSunFoggyFill } from "react-icons/ri";
import { TbTransformFilled } from "react-icons/tb";
import { useState } from "react";

import styles from "../styles/layoutProfile.module.css";
import AuthProvider from "@/components/partials/provider/AuthProvider";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";


export default function ProfileLayout({ children }) {
  const [activeTab, setActiveTab] = useState("profile");

  return (
   
      <AuthProvider>
        <Header />

        <div className={styles.container}>
          <div className={styles.sidebar}>
            <ul>
              <li
                className={activeTab === "profile" ? styles.active : ""}
                onClick={() => setActiveTab("profile")}
              >
                <Link href="/profile">
                  <FaUser />
                  <p>پروفایل</p>
                </Link>
              </li>
              <li
                className={activeTab === "my-tours" ? styles.active : ""}
                onClick={() => setActiveTab("my-tours")}
              >
                <Link href="/profile/my-tours">
                  <RiSunFoggyFill />
                  <p>تور های من</p>
                </Link>
              </li>
              <li
                className={activeTab === "transactions" ? styles.active : ""}
                onClick={() => setActiveTab("transactions")}
              >
                <Link href="/profile/transactions">
                  <TbTransformFilled />
                  <p>تراکنش ها</p>
                </Link>
              </li>
            </ul>
          </div>
          <main className={styles.content}>{children}</main>
        </div>
        <Footer />
      </AuthProvider>
    
  );
}
