import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { decreaseQty, increaseQty } from "./cartSlice";

function UpdateItemQty({ id, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="my-auto flex justify-center space-x-4 text-center md:m-auto md:w-1/5 ">
      <button className="cursor-pointer">
        <GrFormSubtract
          className="text-sm md:text-lg"
          onClick={() => dispatch(decreaseQty(id))}
        />
      </button>
      <span className="font-price text-sm md:text-lg ">{qty}</span>
      <button className="cursor-pointer">
        <GrFormAdd
          className="text-sm md:text-lg"
          onClick={() => dispatch(increaseQty(id))}
        />
      </button>
    </div>
  );
}

export default UpdateItemQty;
