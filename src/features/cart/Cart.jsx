import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCart } from "./cartSlice";

function Cart() {
  const cart = useSelector(getCart);
  return (
    <div className="md:w-2/3">
      <div className="hidden border-b border-seashellNude pb-1 text-darkBrown md:flex">
        <h2 className="w-3/5 lowercase">Item</h2>
        <h2 className="w-1/5 text-center lowercase">Qty</h2>
        <h2 className="w-1/5 text-center lowercase">Price</h2>
        <h2 className="w-1/5 text-center lowercase"></h2>
      </div>
      <div className="flex justify-between border-b border-seashellNude pb-1 text-darkBrown md:hidden">
        <h2 className="lowercase">Item</h2>
      </div>
      <div className="space-y-2 pt-3">
        {cart.map((item, key) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Cart;
