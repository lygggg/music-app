import { combineReducers } from "redux";
import music from "./Music";
import musicControl from "./MusicControl";

const rootReducer = combineReducers({ musicControl, music });

export default rootReducer;
