import { useLoaderData, useParams, useSearchParams } from "react-router-dom";
import { getProducts } from "../../services/apiShop";
import ProductCard from "../../ui/ProductCard";
import { formatTitle } from "../../utils/helpers";

function ProductList() {
  const productList = useLoaderData();
  const { list: listName } = useParams();

  return (
    <section className="px-10 py-5">
      <h1 className="uppercase mb-5">{formatTitle(listName)}</h1>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {productList.map((prod) => (
          <ProductCard
            key={prod.id}
            name={prod.name}
            price={prod.price}
            img={prod.images[0]}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;

export async function loader({ params }) {
  const list = await getProducts(params.list);
  return list;
}
