// Fav Button
import { useSelector, useDispatch } from "react-redux";
import { addFav, deleteFav } from "../features/favs/favsSlice";

function FavButton({ characterObj }) {
 
  const favs = useSelector((state) => state.favs.items);
  const dispatch = useDispatch();

  const handleFavClick = (e, func) => {
    e.preventDefault();

    if (func === 'remove') {
      dispatch(deleteFav(characterObj))
    } else if (func === 'add') {
      dispatch(addFav(characterObj))
    }

  
  }

  function handleRemoveFav() {
    handleFavClick(false, characterObj);
  }

  return (
    <>
      {(favs.findIndex(arrItem => arrItem.id === characterObj.id) > -1 ) ?  (
        <button onClick={(e) => handleFavClick(e, 'remove')}>Remove From Favourites</button>
        ) : (
          <button className="addtoFav" onClick={(e) => handleFavClick(e, 'add')}>Add To Favourites</button>
      )}
    </>
  );
}

FavButton.defaultProps = {
  remove: false,
};

export default FavButton;
