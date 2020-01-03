import { ONSCROLL } from "./types";

const OnScroll = (
  state = {
    OnScroll: true
  },
  action
) => {
  switch (action.type) {
    case ONSCROLL:
      state = {
        ...state,
        OnScroll: action.scroll
      };
      break;
    default:
      return state;
      break;
  }
  return state;
};

export default OnScroll;
