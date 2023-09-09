import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty } from "./cartSlice";

function UpdateItemQty({ id, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="m-auto flex w-1/5 justify-center space-x-4 text-center">
      <button className="cursor-pointer">
        <GrFormSubtract
          className="text-lg"
          onClick={() => dispatch(decreaseQty(id))}
        />
      </button>
      <span className="font-price text-lg ">{qty}</span>
      <button className="cursor-pointer">
        <GrFormAdd
          className="text-lg"
          onClick={() => dispatch(increaseQty(id))}
        />
      </button>
    </div>
  );
}

export default UpdateItemQty;
