import { formatCurrency } from "../../utils/helpers";

function OrderSummary() {
  return (
    <div className="space-y-4 md:w-1/3">
      <div className="border-b border-seashellNude pb-1 text-darkBrown">
        <h2 className="lowercase">Order Summary</h2>
      </div>
      <div className="mt-3 space-y-3 border-b border-seashellNude pb-4 text-darkBrown">
        <div className="flex">
          <p className="w-2/3">3 products</p>
          <span className="w-1/3 text-right font-price">
            {formatCurrency(0.0)}{" "}
          </span>
        </div>

        <div className="flex">
          <p className="w-2/3">shipping fee</p>
          <span className="w-1/3 text-right font-price">
            {formatCurrency(0.0)}{" "}
          </span>
        </div>
      </div>

      <div className="flex font-bold text-darkBrown">
        <p className="w-2/3">total</p>
        <span className="w-1/3 text-right font-price">
          {formatCurrency(0.0)}{" "}
        </span>
      </div>

      <button className="w-full rounded-md bg-mediumBrown px-10 py-2 tracking-widest text-white duration-150">
        checkout
      </button>
    </div>
  );
}

export default OrderSummary;