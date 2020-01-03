import { NETCONNECTION, NETDISCONNECTION } from "./types";


const NetInfo = (
  state = {
    connection: true,
    isLoaded: false
  },
  action
) => {
  switch (action.type) {
    case NETCONNECTION:
      state = {
        ...state,
        connection: true,
        isLoaded: true
      };
      break;
    case NETDISCONNECTION:
      state = {
        ...state,
        connection: false,
        isLoaded: true
      };
      break;
    default:
      break;
  }
  return state;
};

export default NetInfo;
