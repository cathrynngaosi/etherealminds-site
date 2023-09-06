import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQty from "./UpdateItemQty";

function CartItem({ item }) {
  const {
    id,
    name,
    price,
    qty,
    thumbnail,
    productColor,
    customText,
    customColorDisplay,
    customFontDisplay,
  } = item;

  return (
    <div className="flex rounded bg-seashellNude p-3 text-darkBrown">
      <div className="flex w-3/5 space-x-2">
        <div>
          <img src={thumbnail} alt="" className="h-16" />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm font-light">{productColor}</p>
          <p className="text-sm font-light">
            {customText}, {customFontDisplay}, {customColorDisplay}
          </p>
        </div>
      </div>

      <UpdateItemQty />

      <div className="m-auto w-1/5 text-center">
        <p className="font-price">{formatCurrency(price)}</p>
      </div>

      <DeleteItem id={id} />
    </div>
  );
}

export default CartItem;
