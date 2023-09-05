import { useLoaderData } from "react-router-dom";
import { getAllCollections } from "../services/apiShop";
import CollectionsCard from "../features/shop/CollectionsCard";

function Shop() {
  const collections = useLoaderData();

  return (
    <section className="px-10 py-5">
      <h1 className="mb-5 uppercase">Collections</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {collections.map((collection) => (
          <CollectionsCard collection={collection} key={collection.name} />
        ))}
      </div>
    </section>
  );
}

export async function loader() {
  const collections = await getAllCollections();
  return collections;
}

export default Shop;
