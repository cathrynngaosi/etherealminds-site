function ProductSpecs({ description }) {
  return (
    <div className="space-y-1">
      <h2 className="uppercase text-lg font-semibold text-darkBrown">
        Product Specifications
      </h2>
      <ul>
        {description.map((desc, key) => (
          <li key={key}>- {desc}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSpecs;
