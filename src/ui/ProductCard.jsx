import { Link } from "react-router-dom";
import { formatLink } from "../utils/helpers";

function ProductCard({ name, price, img, location }) {
  return (
    <Link
      to={
        location === "home" || location === "favorites"
          ? "/products/" + formatLink(name)
          : formatLink(name)
      }
    >
      <div className="cursor-pointer duration-100 hover:scale-105">
        <img src={img} alt="" className="h-80" />
        <div className="py-2">
          <h2>{name}</h2>
          <p className="font-price tracking-wider">₱{price}.00</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
