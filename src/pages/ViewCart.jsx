import { useSelector } from "react-redux";
import Cart from "../features/cart/Cart";
import OrderSummary from "../features/cart/OrderSummary";
import { getCart } from "../features/cart/cartSlice";
import CrowdFavorites from "../features/home/CrowdFavorites";
import { BsCartX } from "react-icons/bs";
import ShopOurCollection from "../features/home/ShopOurCollection";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

function ViewCart() {
  const cart = useSelector(getCart);

  return (
    <section>
      {cart.length > 0 ? (
        <div className=" px-10 py-5">
          <h1 className="mb-5 uppercase">Your Cart</h1>

          <div className="flex flex-col space-y-6 md:flex-row md:space-x-10 md:space-y-0">
            <Cart />
            <OrderSummary />
          </div>
        </div>
      ) : (
        <div className="text-center text-coffee">
          <div className="py-14">
            <BsCartX className="mx-auto -rotate-12 text-[5rem]" />
            <h1 className="m-5">
              Your cart is currently empty, let&#39;s change that!
            </h1>
            <Button to="/shop"> continue shopping </Button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ViewCart;
