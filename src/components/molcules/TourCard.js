"use client";

import { useEffect, useState } from "react";

import styles from "../../app/styles/TourCard.module.css";
import TourDescription from "../atoms/TourDescription";
import Link from "next/link";

function TourCard() {
  const [tour, setTour] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTours = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour`, {
        cache: "no-store",
      });
      const data = await res.json();
      setTour(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching tour", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>همه تور ها</h2>
        <div className={styles.cards}>
          {!loading ? (
            <div className={styles.box}>
              {tour.map((item) => (
                <div className={styles.card} key={item.id}>
                  <Link href={`/tour/${item.id}`}>
                    <div
                      className={styles.boxCard}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={item.image} alt={item.title} />
                      <div className={styles.nameTour}>
                        <h2>{item.title}</h2>
                        <TourDescription tour={item} />
                      </div>
                    </div>
                  </Link>
                  <div className={styles.bottomBox}>
                    <div className={styles.button}>
                      <Link href="/profile/my-tours">رزرو</Link>
                    </div>
                    <div className={styles.price}>
                      {item.price}
                      <p>تومان</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>Loading ...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TourCard;
