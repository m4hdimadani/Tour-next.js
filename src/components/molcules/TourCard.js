"use client";

import { useEffect, useState } from "react";
import styles from "../../app/styles/TourCard.module.css";

async function TourCard() {
  const [tour, setTour] = useState([]);

  useEffect(() => {
    fetchTours();
  }, []);

  const fetchTours = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour`, {
        cache: "no-store",
      });
      const data = await res.json();
      if (data.status === "success") setTour(data);
    } catch (err) {
      console.error("Error fetching tour", err);
    }
  };

  return (
    <div>
    <h1>لیست تورها</h1>
    <div className="tour-list">
      {tour.length > 0 ? (
        tour.map((item) => (
          <div key={item.id} className="tour-card">
            <img src={item.image} alt={item.title} className="tour-image" />
            <h2>{item.title}</h2>
            <p>
              مبدا: {item.origin.name} | مقصد: {item.destination.name}
            </p>
            <p>
              تاریخ شروع:{" "}
              {new Date(item.startDate).toLocaleDateString("fa-IR")} | تاریخ
              پایان: {new Date(item.endDate).toLocaleDateString("fa-IR")}
            </p>
            <p>وسیله نقلیه: {item.fleetVehicle}</p>
            <p>قیمت: {item.price.toLocaleString()} تومان</p>
            <p>صندلی‌های خالی: {item.availableSeats}</p>
            <p>بیمه: {item.insurance ? "دارد" : "ندارد"}</p>
            <ul>
              امکانات:
              {item.options.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>هیچ توری موجود نیست.</p>
      )}
    </div>
  </div>
  );
}

export default TourCard;
