import { SOCKETID, SOCKETDISCONNECTED } from "./types";

const SocketConnId = (
  state = {
    conn: false,
    sockectId: {}
  },
  action
) => {
  switch (action.type) {
    case SOCKETID:
        console.log(action.socket);
        
      state = {
        ...state,
        conn: true,
        sockectId: action.socket
      };
      break;
    case SOCKETDISCONNECTED:
      state = {
        ...state,
        conn: false,
        sockectId: {}
      };
      break;
    default:
      return state;
  }

  return state;
};

export default SocketConnId;
