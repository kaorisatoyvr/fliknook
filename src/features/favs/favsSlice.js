import { createSlice } from '@reduxjs/toolkit';
import { appStorageName } from '../../globals/globalVariables';

function getFavs(){
    let favsFromStorage = localStorage.getItem(appStorageName);
    if(favsFromStorage === null){
        favsFromStorage = [];
    }else{
        favsFromStorage = JSON.parse(favsFromStorage);
    }
    return favsFromStorage;
  }

  const initialState = {
    items: getFavs()
  }
  
  function getIndex(item, arr){
    return arr.findIndex(arrItem => arrItem.id === item.id);
}

// const initialState ={
//   items: [],
// }
export const favsSlice = createSlice({
    name: 'favs',
    initialState,
    reducers: {
      addFav: (state, action) => {
        //  state.push(action.payload);
        // state.items = [...state.items, action.payload];
        const newFavs = [...state.items, action.payload];
        localStorage.setItem(appStorageName, JSON.stringify(newFavs));
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.items = newFavs;
      },
      deleteFav: (state, action) => {
        // state.items = state.items.filter((movie) => movie.id !== action.payload);
        // state.items = state.items.filter((movie) => movie.id !== action.payload);
        const itemsCopy = state.items;
        itemsCopy.splice(getIndex(action.payload, state.items), 1);
        localStorage.setItem(appStorageName, JSON.stringify(itemsCopy));
        // localStorage.setItem(appStorageName, JSON.stringify(itemsCopy));
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.items = itemsCopy;
        // return state.filter((movie) => movie.id !== action.payload);
      }
    },
  });
  
  // Action creators are generated for each case reducer function
  export const { addFav, deleteFav } = favsSlice.actions
  
  export default favsSlice.reducer;
  
