import { combineReducers } from "redux";
import music from "./music";
import counter from "./counter";

const rootReducer = combineReducers({ counter, music });

export default rootReducer;
