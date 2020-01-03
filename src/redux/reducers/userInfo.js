import { USERLOGOUT, USRELOGIN } from "./types";

const UserInfo = (
  state = {
    connection: false,
    isLoaded: false
  },
  action
) => {
  switch (action.type) {
    case USRELOGIN:
      state = {
        ...state,
        connection: true,
        isLoaded: true
      };
      break;
    case USERLOGOUT:
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

export default UserInfo;
