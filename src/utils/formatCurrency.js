export const formatNo = (amount) => {
  if (isNaN(amount)) {
    return 0;
  }

  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
};
