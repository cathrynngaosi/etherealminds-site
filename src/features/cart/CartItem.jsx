import { formatCurrency, getImage } from "../../utils/helpers";
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
          <img src={getImage(thumbnail)} alt="" className="h-16" />
        </div>
        <div className="flex w-full flex-col justify-between md:w-4/5">
          <div>
            <div className="flex justify-between">
              <p className="font-medium">
                {name} {productColor && `(${productColor})`}
              </p>
              <span className="md:hidden">
                <DeleteItem id={id} />
              </span>
            </div>
            <p className="text-sm font-light"></p>
            <ViewCustomText
              text={customText}
              font={customFontCss}
              color={customColorCss}
            />
          </div>
          <div className="mt-1 flex justify-between md:hidden">
            <p className="font-price text-sm md:hidden">
              {formatCurrency(unitPrice * qty)}
            </p>
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
