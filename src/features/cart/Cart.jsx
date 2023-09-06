import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCart } from "./cartSlice";

function Cart() {
  const cart = useSelector(getCart);
  return (
    <div className="md:w-2/3">
      <div className="flex border-b border-seashellNude pb-1 text-darkBrown">
        <h2 className="w-3/5 lowercase">Item</h2>
        <h2 className="w-1/5 text-center lowercase">Qty</h2>
        <h2 className="w-1/5 text-center lowercase">Price</h2>
        <h2 className="w-1/5 text-center lowercase"></h2>
      </div>
      <div className="space-y-2 pt-3">
        {cart.map((item, key) => (
          <CartItem key={key} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
