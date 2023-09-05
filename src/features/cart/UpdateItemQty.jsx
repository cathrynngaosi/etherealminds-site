import { GrFormSubtract, GrFormAdd } from "react-icons/gr";

function UpdateItemQty() {
  return (
    <div className="m-auto flex w-1/5 justify-center space-x-4 text-center">
      <button className="cursor-pointer">
        <GrFormSubtract className="text-lg" />
      </button>
      <span className="font-price text-lg ">1</span>
      <button className="cursor-pointer">
        <GrFormAdd className="text-lg" />
      </button>
    </div>
  );
}

export default UpdateItemQty;
