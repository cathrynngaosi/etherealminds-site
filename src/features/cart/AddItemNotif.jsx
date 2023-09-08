import { BiCheckCircle } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeCartNotif } from "./cartSlice";
import { reset } from "../product/customTextSlice";

function AddItemNotif({ shown, item }) {
  const dispatch = useDispatch();
  const {
    name,
    price,
    thumbnail,
    productColor,
    customText,
    customColorDisplay,
    customFontDisplay,
  } = item;

  function close() {
    dispatch(reset());
    dispatch(closeCartNotif(false));
  }

  return shown ? (
    <div onClick={close}>
      <div className="fixed inset-0 flex h-full w-full items-center justify-center bg-darkBrown/30"></div>
      <div
        className="relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="absolute top-1 z-30 w-full space-y-4 rounded bg-seashellPink p-5 pt-3 text-darkBrown md:right-1 md:w-1/5">
          <div className="flex items-center justify-between">
            <h2 className="flex items-center font-bold lowercase text-darkBrown">
              <BiCheckCircle className="mr-1" /> Added to cart
            </h2>
            <MdOutlineClose onClick={close} className="cursor-pointer" />
          </div>
          <div className="flex space-x-2">
            <div>
              <img src={thumbnail} alt="" className="h-14" />
            </div>
            <div className="space-y-[1px]">
              <p className="text-sm font-medium">{name}</p>
              {productColor && (
                <p className="text-xs font-light">{productColor}</p>
              )}
              <p className="text-xs font-light">
                {customText}, {customFontDisplay}, {customColorDisplay}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Link
              to="/cart"
              className="w-full rounded-md border border-lightBrown bg-seaSalt px-5 py-2 text-center text-xs tracking-widest text-darkBrown duration-150"
            >
              view cart (1)
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default AddItemNotif;
