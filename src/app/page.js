import HomPage from "@/components/templates/HomPage";
import styles from "../app/styles/globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HomPage />
      <Footer />
    </div>
  );
}
