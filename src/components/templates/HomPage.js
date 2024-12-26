import styles from "../../app/styles/HomePage.module.css";
import Banner from "@/components/atoms/Banner";
import TourList from "../organisms/TourList";
import BannerServic from "../atoms/BannerServic";
import WhyTourino from "../molcules/WhyTourino";
import Services from "../atoms/Services";
import FormSearch from "../organisms/FormSearch";


async function HomPage({ data }) {
  
  

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
        <FormSearch />
      </div>
      <div>
        <TourList tourData={data} />
      </div>
      <div>
        <BannerServic />
      </div>
      <div>
        <WhyTourino />
      </div>

      <div>
        <Services />
      </div>
    </div>
  );
}

export default HomPage;
