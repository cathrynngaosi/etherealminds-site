import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorites,
  deleteFromFavorites,
  getFavorites,
} from "../favorites/favoritesSlice";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

import Button from "../../ui/Button";

function FavoriteBtn({ id }) {
  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(id));

  return (
    <>
      {isFavorite ? (
        <Button
          type="fave"
          onClick={() =>
            dispatch(
              deleteFromFavorites(id),
              setIsFavorite((fave) => !fave),
            )
          }
        >
          <FaHeart />
        </Button>
      ) : (
        <Button
          type="fave"
          onClick={() =>
            dispatch(
              addToFavorites(id),
              setIsFavorite((fave) => !fave),
            )
          }
        >
          <FiHeart />
        </Button>
      )}
    </>
  );
}

export default FavoriteBtn;
