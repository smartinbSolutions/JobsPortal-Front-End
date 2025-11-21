export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const FormatTime = (time, includeTime = false) => {
  if (!time) return "";

  const date = new Date(time);
  if (isNaN(date.getTime())) return "Invalid date";

  const formattedDate = date.toISOString().split("T")[0];

  if (!includeTime) {
    return formattedDate; // Only the date part
  }

  const hours = String(date.getHours() - 3).padStart(2, "0"); // Adjust timezone manually
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${formattedDate} ${hours}:${minutes}`; // Date + Time
};

export const formatNumber = (value, decimalPlaces) => {
  if (value === null || value === undefined || isNaN(value)) return "";

  const decimalsToUse =
    typeof decimalPlaces === "number" ? decimalPlaces : Number(2);

  const fixed = Number(value).toFixed(decimalsToUse);
  const [intPart, decimalPart] = fixed.split(".");

  const withThousands = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (!decimalPart || /^0+$/.test(decimalPart)) {
    return withThousands;
  }
  return `${withThousands},${decimalPart}`;
};
