import { NAVTO, OFFLOADROUTE } from "./types";

const NavTo = (
  state = {
    isRouted: false,
    nav_to: "/"
  },
  action
) => {
  switch (action.type) {
    case NAVTO:
      state = {
        ...state,
        isRouted: true,
        nav_to: action.nav_to
      };
      break;
    case OFFLOADROUTE:
      state = {
        ...state,
        isRouted: false,
        nav_to: ""
      };
      break;
    default:
      return state;
  }

  return state;
};

export default NavTo;
