"use client";

import { useEffect, useState } from "react";

function TourDetails() {
  const [tour, setTour] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTours = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}tour/{tourId}`,
        {
          cache: "no-store",
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setTour(data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching tour", err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {tour.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.image} alt={item.title} />
            <div>
              <h2>{item.title}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TourDetails;
