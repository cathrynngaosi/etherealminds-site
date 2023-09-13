import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MdHeartBroken } from "react-icons/md";
import { getFavoritesList } from "../services/apiShop";
import { getFavorites } from "../features/favorites/favoritesSlice";

import Button from "../ui/Button";
import ProductCard from "../ui/ProductCard";

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
      {faves.length > 0 ? (
        <>
          <h1 className="mb-5 uppercase">Favorites</h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {faves.map((prod) => (
              <ProductCard
                key={prod.id}
                name={prod.name}
                price={prod.price}
                img={prod.images[0]}
                location="favorites"
              />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center text-coffee">
          <div className="py-14">
            <MdHeartBroken className="mx-auto text-[5rem]" />
            <h1 className="m-5">
              You don&#39;t have any favorites yet, let&#39;s change that!
            </h1>
            <Button to="/shop"> continue shopping </Button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Favorites;
