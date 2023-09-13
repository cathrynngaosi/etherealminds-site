import { BiCheckCircle } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeCartNotif, getTotalCartQuantity } from "./cartSlice";
import { reset } from "../product/customTextSlice";
import { getImage } from "../../utils/helpers";

function AddItemNotif({ shown, item }) {
  const cartQty = useSelector(getTotalCartQuantity);
  const dispatch = useDispatch();
  const {
    name,
    thumbnail,
    productColor,
    customText,
    customColorDisplay,
    customFontDisplay,
  } = item;

  const bgOpenStyle =
    "fixed inset-0 flex h-full w-full items-center justify-center bg-darkBrown/30 opacity-[95%]  transition-all duration-300 ease-linear";

  const notifOpenStyle =
    "absolute top-1 z-30 w-full space-y-4 rounded bg-seashellPink p-5 pt-3 text-darkBrown opacity-100 transition-all duration-500  ease-linear md:right-1 md:w-1/5";

  const bgCloseStyle =
    "inset-0 z-auto contents h-full w-full items-center justify-center bg-darkBrown/30 opacity-0 transition-all duration-300 ease-linear";

  const notifCloseStyle =
    "absolute z-0 hidden w-full space-y-4 rounded bg-seashellPink p-5 pt-3 text-darkBrown opacity-0 transition-all duration-500  ease-linear md:left-96 md:w-1/5";

  function close() {
    dispatch(reset());
    dispatch(closeCartNotif(false));
  }

  return (
    <div onClick={close}>
      <div className={shown ? bgOpenStyle : bgCloseStyle}></div>
      <div
        className="relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={shown ? notifOpenStyle : notifCloseStyle}>
          <div className="flex items-center justify-between">
            <h2 className="flex items-center font-bold lowercase text-darkBrown">
              <BiCheckCircle className="mr-1" /> Added to cart
            </h2>
            <MdOutlineClose onClick={close} className="cursor-pointer" />
          </div>
          <div className="flex space-x-2">
            <div>
              <img src={getImage(thumbnail)} alt="" className="h-14" />
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
              className="w-full rounded-md border border-lightBrown bg-seaSalt px-5 py-2 text-center text-xs tracking-widest text-darkBrown duration-150 hover:bg-mediumBrown hover:text-white"
              onClick={close}
            >
              view cart ({cartQty})
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItemNotif;
