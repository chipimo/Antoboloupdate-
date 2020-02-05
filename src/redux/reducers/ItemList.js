import { LOADLIST, OFFLOADLIST } from "./types";

const ItemList = (
  state = {
    data: [],
    isLoaded: false
  },
  action
) => {
  switch (action.type) {
    case LOADLIST:
      console.log(action.payload.product);

      state = {
        ...state,
        data: action.payload.product,
        isLoaded: true
      };
      break;
    case OFFLOADLIST:
      state = {
        ...state,
        data: [],
        isLoaded: false
      };
      break;
    default:
      return state;
  }

  return state;
};

export default ItemList;
