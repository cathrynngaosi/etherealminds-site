function CollectionsCard({ collection }) {
  const { name, cover } = collection;

  return (
    <div className="cursor-pointer">
      <img src={cover} alt="" className="md:h-80" />
      <div className="py-2">
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default CollectionsCard;
