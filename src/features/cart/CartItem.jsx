import DeleteItem from "./DeleteItem";
import UpdateItemQty from "./UpdateItemQty";

function CartItem() {
  return (
    <div className="flex rounded bg-seashellNude p-3 text-darkBrown">
      <div className="flex w-3/5 space-x-2">
        <div>
          <img src="src/data/images/cover-1.JPG" alt="" className="h-16" />
        </div>
        <div>
          <p className="font-medium">Product Name</p>
          <p className="text-sm font-light">Color</p>
          <p className="text-sm font-light">Text, Font, Decal Color</p>
        </div>
      </div>

      <UpdateItemQty />

      <div className="m-auto w-1/5 text-center">
        <p>$</p>
      </div>

      <DeleteItem />
    </div>
  );
}

export default CartItem;
