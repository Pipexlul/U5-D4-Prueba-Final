const currencyFormatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
  currencyDisplay: "symbol",
});

const formatNumToCLP = (num) => {
  return currencyFormatter.format(num);
};

export { formatNumToCLP };
