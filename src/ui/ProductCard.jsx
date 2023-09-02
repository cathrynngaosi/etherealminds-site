function ProductCard({ name, price, img }) {
  return (
    <div className="cursor-pointer hover:scale-105 duration-100">
      <img src={img} alt="" className="h-80" />
      <div className="py-2">
        <h2>{name}</h2>
        <p>₱{price}.00</p>
      </div>
    </div>
  );
}

export default ProductCard;
