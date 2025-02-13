import styles from "../../app/styles/TourCard.module.css";
import TourDescription from "../atoms/TourDescription";
import Link from "next/link";

async function TourCard({ tourData }) {
  
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>همه تور ها</h2>
        <div className={styles.cards}>
          <div className={styles.box}>
            {tourData.map((item) => (
              <div className={styles.card} key={item.id}>
                <Link href={`/tour/${item.id}`}>
                  <div className={styles.boxCard} style={{ cursor: "pointer" }}>
                    <img src={item.image} alt={item.title} />
                    <div className={styles.nameTour}>
                      <h2>{item.title}</h2>
                      <TourDescription tour={item} />
                    </div>
                  </div>
                </Link>
                <div className={styles.bottomBox}>
                  <div className={styles.button}>
                    <Link href={`/tour/${item?.id}`}>رزرو</Link>
                  </div>
                  <div className={styles.price}>
                    {item.price}
                    <p>تومان</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourCard;
