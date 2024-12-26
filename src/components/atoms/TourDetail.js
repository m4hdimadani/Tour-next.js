import styles from "@/app/styles/TourDetail.module.css";
import moment from "moment-jalaali";


import { LiaUserTieSolid } from "react-icons/lia";
import { FaMap } from "react-icons/fa";
import { PiMedalBold } from "react-icons/pi";
import { LuRoute } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { IoMdBus } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { MdSecurity } from "react-icons/md";
import ReserveButton from "./ReserveButton";

function TourDetail({ tour }) {

  if (!tour) return <p>تور پیدا نشد</p>

  moment.loadPersian({ dialect: "persian-modern" });
  const startDate = moment
    .utc(tour.startDate)
    .startOf("day")
    .format("jDDjMMMMjYYYY");
  const endDate = moment
    .utc(tour.endDate)
    .startOf("day")
    .format("jDDjMMMMjYYYY");

  const startDateWithPersianNumbers = startDate.replace(
    /\d/g,
    (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
  );
  const endDateWithPersianNumbers = endDate.replace(
    /\d/g,
    (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]
  );
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inBox}>
          <div className={styles.box}>
            <div className={styles.img}>
              <img src={tour.image} alt={tour.title} />
            </div>
            <div className={styles.title}>
              <h1>{tour.title}</h1>
              <h4></h4>
              <div className={styles.sevice}>
                <div className={styles.LiaUserTieSolid}>
                  <LiaUserTieSolid />
                  <p>تورلیدر از مبدا</p>
                </div>
                <div className={styles.FaMap}>
                  <FaMap />
                  <p>برنامه سفر</p>
                </div>
                <div className={styles.PiMedalBold}>
                  <PiMedalBold />
                  <p>تضمین کیفیت</p>
                </div>
              </div>
              <div className={styles.priceAndButton}>
                <div className={styles.price}>
                  <span>{tour.price} </span>
                  <p>تومان</p>
                </div>
                <div className={styles.button}>
                  <ReserveButton id = {tour.id}/>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.main}>
            <div className={styles.line}>
              <div className={styles.option}>
                <span>
                  <LuRoute />
                </span>
                <p>مبدا</p>
              </div>
              <span  className={styles.span}>{tour.origin.name}</span>
            </div>
            <div className={styles.line}>
              <div className={styles.option}>
                <span>
                  <FaCalendarAlt />
                </span>
                <p>تاریخ رفت</p>
              </div>
              <span  className={styles.span}>{startDateWithPersianNumbers}</span>
            </div>
            <div className={styles.line}>
              <div className={styles.option}>
                <span>
                  <FaCalendarAlt />
                </span>
                <p>تاریخ برگشت</p>
              </div>
              <span  className={styles.span}>{endDateWithPersianNumbers}</span>
            </div>
            <div className={styles.line}>
              <div className={styles.option}>
                <span>
                  <IoMdBus />
                </span>
                <p>حمل و نقل</p>
              </div>
              <span  className={styles.span}>{tour.fleetVehicle}</span>
            </div >
            <div className={styles.line}>
              <div className={styles.option}>
                <span>
                  <FaUserGroup />
                </span>
                <p>ظرفیت</p>
              </div>
              <span  className={styles.spanNumber}>
                {" "}
                {tour.availableSeats} <p>نفر</p>
              </span>
            </div>
            <div >
              <div className={styles.option}>
                <span>
                  <MdSecurity />
                </span>
                <p>بیمه</p>
              </div>
              <span className={styles.span}>{tour.insurance}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourDetail;
