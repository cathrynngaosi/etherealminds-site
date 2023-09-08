import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  deleteFromFavorites,
  getFavorites,
} from "../favorites/favoritesSlice";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

function FavoriteBtn({ id }) {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(id));

  return (
    <>
      {isFavorite ? (
        <button
          className="rounded-md bg-mediumBrown px-5 py-2 tracking-widest text-white duration-150"
          onClick={() =>
            dispatch(
              deleteFromFavorites(id),
              setIsFavorite((fave) => !fave),
            )
          }
        >
          <FaHeart />
        </button>
      ) : (
        <button
          className="rounded-md bg-mediumBrown px-5 py-2 tracking-widest text-white duration-150"
          onClick={() =>
            dispatch(
              addToFavorites(id),
              setIsFavorite((fave) => !fave),
            )
          }
        >
          <FiHeart />
        </button>
      )}
    </>
  );
}

export default FavoriteBtn;
