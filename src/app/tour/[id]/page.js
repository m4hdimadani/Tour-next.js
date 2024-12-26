
import styles from "@/app/tour/tour.module.css";
import TourDetail from "@/components/atoms/TourDetail";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { serverFetch } from "@/core/service/http";


async function TourDetails({ params }) {
  const tourData = await serverFetch(`tour/${params.id}`, null, {
    cache: "no-store",
  });
  return (
    <>
      <Header />
      <div className={styles.container}>
        { tourData? <TourDetail tour={tourData} /> : <p>Loading...</p>}
      </div>
      <Footer />
    </>
  );
}

export default TourDetails;
