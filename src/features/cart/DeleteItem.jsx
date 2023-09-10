import { GoTrash } from "react-icons/go";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "./cartSlice";

function DeleteItem(id) {
  const dispatch = useDispatch();

  return (
    <div className="w-1/5 text-center md:m-auto">
      <GoTrash
        className="mx-auto hidden cursor-pointer md:block"
        onClick={() => dispatch(deleteFromCart(id))}
      />
      <p className="block cursor-pointer text-xs hover:underline md:hidden">
        Remove
      </p>
    </div>
  );
}

export default DeleteItem;
