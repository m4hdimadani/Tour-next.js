"use client";
import styles from "@/app/tour/tour.module.css"
import TourDetail from "@/components/atoms/TourDetail";
import Footer from "@/components/organisms/Footer";
import Header from "@/components/organisms/Header";
import { useEffect, useState } from "react";

function TourDetails({ params: { id } }) {
  const [tourId, setTourId] = useState(null);

  const fetchTours = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour/${id}`, {
        cache: "no-store",
      });
      const data = await res.json();
      setTourId(data);
    } catch (err) {
      console.error("Error fetching tour", err);
    }
  };

  useEffect(() => {
    fetchTours();
  }, [id]);

  return (
    <>
    <Header />
      <div className={styles.container}>{tourId ? <TourDetail tour={tourId} /> : <p>Loading...</p>}</div>
      <Footer />
    </>
  );
}

export default TourDetails;
