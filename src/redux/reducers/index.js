import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
// reducers
import NetInfo from "./netInfo";
import UserInfo from "./userInfo";
import CardItem from "./CardItem";
import OnScroll from "./OnScroll";
import NavTo from "./NavTo";
import Active_Nav from "./Navigations";
import SideBarState from "./Sidebar";

const createReducer = asyncReducers => {
  const config = {
    key: "root",
    storage,
    ...asyncReducers,
    blacklist: [
      "NetInfo",
      "CardItem",
      "OnScroll",
      "NavTo",
      "Active_Nav",
      "SideBarState"
    ]
  };

  return persistCombineReducers(config, {
    NetInfo: NetInfo,
    user: UserInfo,
    OnScroll: OnScroll,
    CardItem: CardItem,
    NavTo: NavTo,
    SideBarState: SideBarState,
    Active_Nav: Active_Nav,
    ...asyncReducers
  });
};

export default createReducer;
