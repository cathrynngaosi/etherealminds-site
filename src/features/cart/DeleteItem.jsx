import { GoTrash } from "react-icons/go";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "./cartSlice";

function DeleteItem(id) {
  const dispatch = useDispatch();
  console.log(id);
  return (
    <div className="m-auto w-1/5 text-center">
      <GoTrash
        className="mx-auto cursor-pointer"
        onClick={() => dispatch(deleteFromCart(id))}
      />
    </div>
  );
}

export default DeleteItem;
