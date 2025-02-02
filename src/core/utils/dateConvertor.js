import { convertToPersianNumber } from "./engToPersianNumber";

const dateConverter = (dateStr) => {
  const monthArray = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  const tourDate = new Date(dateStr);

  const day = convertToPersianNumber(tourDate.getDate());
  const month = convertToPersianNumber(monthArray[tourDate.getMonth()]);
  const year = convertToPersianNumber(tourDate.getFullYear());
  const shamsiDate = [year, month, day];
  return shamsiDate;
};

export const tourDays = (endDate, startDate) => {
  const second = new Date(endDate);
  const first = new Date(startDate);

  const diffInMs = second - first;
  const differenceInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
  return differenceInDays;
};

export default dateConverter;
