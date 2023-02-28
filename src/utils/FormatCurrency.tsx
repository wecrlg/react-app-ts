const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "NGN",
  style: "currency",
});

export default function formatCurrency(price: number) {
  return CURRENCY_FORMATTER.format(price);
}
