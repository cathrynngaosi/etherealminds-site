import { useSelector } from "react-redux";
import { getFavorites } from "../features/favorites/favoritesSlice";
import { useEffect, useState } from "react";
import ProductCard from "../ui/ProductCard";
import { getFavoritesList } from "../services/apiShop";

function Favorites() {
  const [faves, setFaves] = useState([]);
  const favorites = useSelector(getFavorites);
  const favesQuery = "id=" + favorites.join("&id=");

  useEffect(() => {
    window.scrollTo(0, 0);
    async function getFaves() {
      setFaves(await getFavoritesList(favesQuery));
    }
    getFaves();
  }, [favesQuery]);

  return (
    <section className="px-10 py-5">
      <h1 className="mb-5 uppercase">Favorites</h1>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {faves.length > 0
          ? faves.map((prod) => (
              <ProductCard
                key={prod.id}
                name={prod.name}
                price={prod.price}
                img={prod.images[0]}
                location="favorites"
              />
            ))
          : "asd"}
      </div>
    </section>
  );
}

export default Favorites;
