import TourCard from "../molcules/TourCard";

async function TourList({ tourData }) {
  if (!tourData.length) return <p>نتیجه ای یافت نشد</p>;
  return (
    <div>
      <TourCard tourData={tourData} />
    </div>
  );
}

export default TourList;
