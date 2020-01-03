import { CARDITEMS, OFFLOADITEMS } from "./types";

const CardItem = (
  state = {
    data: {
      img: "",
      title: "",
      author: "",
      price: 0,
      reviews: {
        num: null,
        comments: []
      },
      rating: 0,
      summary: ""
    },

    isLoaded: false
  },
  action
) => {
  switch (action.type) {
    case CARDITEMS:
      state = {
        ...state,
        data: action.payload,
        isLoaded: true
      };
      break;
    case OFFLOADITEMS:
      state = {
        ...state,
        data: null,
        isLoaded: false
      };
      break;
    default:
      return state;
  }

  return state;
};

export default CardItem;
