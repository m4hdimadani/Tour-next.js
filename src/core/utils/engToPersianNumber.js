export function formatNumberWithCommas(number) {
    const formattedNumber = number
      ?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const persianFormattedNumber = convertToPersianNumber(formattedNumber);
    return persianFormattedNumber;
  }
  
  export function convertToPersianNumber(number) {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  
    if (number == null) {
      return "";
    }
    const numberString = number.toString();
    return numberString.replace(/[0-9]/g, (digit) => persianDigits[digit]);
  }
  