import { formatCurrency } from "../../utils/helpers";

function ProductHeader({ name, price }) {
  return (
    <div className="space-y-1 border-b border-lightBrown pb-3">
      <h1 className="text-3xl uppercase text-darkBrown">{name}</h1>
      <p className="font-price text-2xl tracking-wider">
        {formatCurrency(price)}
      </p>
    </div>
  );
}

export default ProductHeader;
