import Image from "next/image";
import React from "react";
import Banner from "../../../public/icon/baner2.jpg";
import styles from "../../app/styles/BannerSevice.module.css";

function BannerServic() {
  return (
    <div className={styles.container}>
      <Image src={Banner} />
    </div>
  );
}

export default BannerServic;
