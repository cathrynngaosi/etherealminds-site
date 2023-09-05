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

export function getColorBlock(color) {
  switch (color) {
    case "Black":
      return "bg-black";
    case "White":
      return "bg-white";
    case "Rosegold":
      return "bg-rosegold";
    case "Navy Blue":
      return "bg-navyBlue";
    case "Dark Blue":
      return "bg-darkBlue";
    case "Blue":
      return "bg-blue";
    case "Pink":
      return "bg-pink";
    case "Red":
      return "bg-red";
    case "Silver":
      return "bg-silver";
    case "Gold":
      return "bg-gold";
    case "Tiffany Blue":
      return "bg-tiffanyBlue";
    case "Dark Pink":
      return "bg-darkPink";
    case "Blush":
      return "bg-blush";
    case "Wine":
      return "bg-wine";
    case "Old Rose":
      return "bg-oldRose";
  }
}
