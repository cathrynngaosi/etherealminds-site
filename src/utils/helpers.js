export function formatLink(value) {
  return value.toLowerCase().replaceAll(" ", "-");
}

export function formatTitle(value) {
  return value.toLowerCase().replaceAll("-", " ");
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "PHP",
  }).format(value);
}
