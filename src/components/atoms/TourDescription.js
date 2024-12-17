import moment from "moment-jalaali";
import styles from "../../app/styles/TourDescription.module.css"
function TourDescription({ tour }) {
  moment.loadPersian({ dialect: "persian-modern" });

  const startDate = moment.utc(tour.startDate).startOf("day");
  const endDate = moment.utc(tour.endDate).startOf("day");
  const durationDays = endDate.diff(startDate, "days");

  const startMonth = startDate.format("jMMMM");

  const description = `${startMonth} ماه، ${durationDays} روز `;

  return (
    <div className={styles.container}>
      <p>{description}</p>
    </div>
  );
}

export default TourDescription;
