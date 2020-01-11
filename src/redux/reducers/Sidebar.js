import { OPENSIDEBAR, CLOSESIDEBAR } from "./types";

const SideBarState = (
  state = {
    open: false,
  },
  action
) => {
  switch (action.type) {
    case OPENSIDEBAR:
      state = {
        ...state,
        open: true,
      };
      break;
    case CLOSESIDEBAR:
      state = {
        ...state,
        open: false,
      };
      break;
    default:
      return state;
  }

  return state;
};

export default SideBarState;
