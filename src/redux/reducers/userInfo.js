import { USERLOGOUT, USRELOGIN } from "./types";

const UserInfo = (
  state = {
    connection: false,
    isLogedin: false,
    user_name: "",
    Fname: "",
    Lname: "",
    email: "",
    Profile_pic: {},
    Purchases: {},
    NotificationId: "",
    user_id: ""
  },
  action
) => {
  switch (action.type) {
    case USRELOGIN:
      state = {
        ...state,
        connection: true,
        isLogedin: true,
        user_name: action.payload[0].user_name,
        Fname: action.payload[0].Fname,
        Lname: action.payload[0].Lname,
        email: action.payload[0].email,
        Profile_pic: action.payload[0].Profile_pic,
        Purchases: action.payload[0].Purchases,
        NotificationId: action.payload[0].NotificationId,
        user_id: ""
      };
      break;
    case USERLOGOUT:
      state = {
        ...state,
        connection: false,
        isLogedin: false,
        user_name: "",
        Fname: "",
        Lname: "",
        email: "",
        Profile_pic: {},
        Purchases: {},
        NotificationId: "",
        user_id: ""
      };
      break;
    default:
      break;
  }

  return state;
};

export default UserInfo;
