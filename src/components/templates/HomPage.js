import styles from "../../app/styles/HomePage.module.css";
import Banner from "@/components/atoms/Banner";
import TourList from "../organisms/TourList";
import BannerServic from "../atoms/BannerServic";
import WhyTourino from "../molcules/WhyTourino";
import TourCard from "../molcules/TourCard";

function HomPage() {
  return (
    <div>
      <div>
        <Banner />
        <div className={styles.container}>
          <p>
            <span>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی
          </p>
        </div>
      </div>
      <div>
        <TourCard />
      </div>
      <div>
        <BannerServic />
      </div>
      <div>
        <WhyTourino />
      </div>
    </div>
  );
}

export default HomPage;
