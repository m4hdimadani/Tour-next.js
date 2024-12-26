import HomPage from "@/components/templates/HomPage";
import styles from "../app/styles/globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import { serverFetch } from "@/core/service/http";

async function Home({ searchParams }) {
  const data = await serverFetch("tour", searchParams, { cache: "no-store" });
  return (
    <div className={styles.container}>
      <Header />
      <HomPage data={data} />
      <Footer />
    </div>
  );
}

export default Home;
