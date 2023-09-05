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

export function getColorBlockCss(color) {
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
    case "Flamingo Pink":
      return "bg-pink";
    case "Red":
      return "bg-red";
    case "Silver":
      return "bg-silver";
    case "Dark Silver":
      return "bg-silver";
    case "Gold":
      return "bg-gold";
    case "Tiffany Blue":
      return "bg-tiffanyBlue";
    case "Light Blue":
      return "bg-blue";
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

export function getCustomColorCss(color) {
  switch (color) {
    case "Black":
      return "text-black";
    case "White":
      return "text-white bg-lightBrown";
    case "Rosegold":
      return "text-rosegold";
    case "Gold":
      return "text-gold";
    case "Holo":
      return "bg-gradient-to-b from-cyan-400 to-rose-400 text-transparent bg-clip-text";
  }
}
