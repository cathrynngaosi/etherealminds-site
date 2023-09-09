import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQty from "./UpdateItemQty";
import ViewCustomText from "./ViewCustomText";

function CartItem({ item }) {
  const {
    id,
    name,
    unitPrice,
    qty,
    thumbnail,
    productColor,
    customText,
    customFontCss,
    customColorCss,
  } = item;

  return (
    <div className="flex rounded bg-seashellNude p-3 text-darkBrown">
      <div className="flex w-full space-x-2 md:w-3/5">
        <div>
          <img src={thumbnail} alt="" className="h-16" />
        </div>
        <div className="flex w-4/5 flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <p className="font-medium">{name}</p>
              <p className="mt-0.5 hidden cursor-pointer text-xs hover:underline md:hidden">
                Remove
              </p>
              <p className="font-price text-sm md:hidden">
                {formatCurrency(unitPrice * qty)}
              </p>
            </div>
            <p className="text-sm font-light">{productColor}</p>
            <ViewCustomText
              text={customText}
              font={customFontCss}
              color={customColorCss}
            />
          </div>
          <div className="flex justify-between md:hidden">
            <UpdateItemQty id={id} qty={qty} />
          </div>
        </div>
      </div>

      <div className="hidden md:contents">
        <UpdateItemQty id={id} qty={qty} />

        <div className="m-auto w-1/5 text-center">
          <p className="font-price">{formatCurrency(unitPrice * qty)}</p>
        </div>

        <DeleteItem id={id} />
      </div>
    </div>
  );
}

export default CartItem;
