import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage";
// reducers
import NetInfo from "./netInfo";
import UserInfo from "./userInfo";
import CardItem from "./CardItem";
import OnScroll from "./OnScroll";

const createReducer = asyncReducers => {
  const config = {
    key: "root", 
    storage,
    ...asyncReducers,
    blacklist: ["NetInfo", "CardItem", "OnScroll"]
  };

  return persistCombineReducers(config, {
    NetInfo: NetInfo,
    user: UserInfo,
    OnScroll: OnScroll,
    CardItem: CardItem,
    ...asyncReducers
  });
};

export default createReducer;
