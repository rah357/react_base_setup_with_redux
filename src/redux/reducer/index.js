import { combineReducers } from "redux";
import itemList from "./itemList";
import sidebar from "./sidebar";
import auth from "./auth";
import common from "./common";

export default combineReducers({
    sidebar: sidebar,
    itemList: itemList,
    auth: auth,
    common: common,
});
