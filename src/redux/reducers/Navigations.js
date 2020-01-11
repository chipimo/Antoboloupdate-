import { SETNAV, OFFLOADNAV } from "./types";

const Active_Nav = (
  state = {
    isRouted: false,
    active_nav: "/"
  },
  action
) => {
  switch (action.type) {
    case SETNAV:
      console.log(action);
      
      state = {
        ...state,
        isRouted: true,
        active_nav: action.active_nav
      };
      break;
    case OFFLOADNAV:
      state = {
        ...state,
        isRouted: false,
        active_nav: "/"
      };
      break;
    default:
      return state;
  }

  return state;
};

export default Active_Nav;
