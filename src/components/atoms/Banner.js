import Image from "next/image";
import styles from "../../app/styles/Banner.module.css";
import banner from "../../../public/icon/banner1_.jpg";

function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={banner}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        quality={100}
      />
    </div>
  );
}

export default Banner;
