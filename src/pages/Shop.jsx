import { useLoaderData } from "react-router-dom";
import { getCollections } from "../services/apiShop";
import CollectionsCard from "../features/shop/CollectionsCard";

function Shop() {
  const collections = useLoaderData();

  return (
    <section className="px-10 py-5">
      <h1 className="uppercase mb-5">Collections</h1>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {collections.map((collection) => (
          <CollectionsCard collection={collection} key={collection.name} />
        ))}
      </div>
    </section>
  );
}

export async function loader() {
  const collections = await getCollections();
  return collections;
}

export default Shop;
