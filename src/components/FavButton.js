// Fav Button
import { useSelector, useDispatch } from "react-redux";
import { addFav, deleteFav } from "../features/favs/favsSlice";
import favoriteIcon from '../images/heart-red.png';
import favoriteIconwhite from '../images/heart-white.png';

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

  // function handleRemoveFav() {
  //   handleFavClick(false, characterObj);
  // }

  return (
    <>
      {(favs.findIndex(arrItem => arrItem.id === characterObj.id) > -1 ) ?  (
        <button className="heart-button" onClick={(e) => handleFavClick(e, 'remove')}><img src={favoriteIcon} alt="Favorite" /></button>
        ) : (
          <button className="heart-button" onClick={(e) => handleFavClick(e, 'add')}><img src={favoriteIconwhite} alt="Favorite" /></button>
      )}
    </>
  );
}

FavButton.defaultProps = {
  remove: false,
};

export default FavButton;
