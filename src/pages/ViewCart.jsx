import Cart from "../features/cart/Cart";
import CartItem from "../features/cart/CartItem";
import OrderSummary from "../features/cart/OrderSummary";

function ViewCart() {
  return (
    <section className=" px-10 py-5">
      <h1 className="mb-5 uppercase">Your Cart</h1>

      <div className="flex flex-col space-y-6 md:flex-row md:space-x-10 md:space-y-0">
        <Cart />
        <OrderSummary />
      </div>
    </section>
  );
}

export default ViewCart;
