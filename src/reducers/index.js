import tierlistReducer from "./tierlist";
import {combineReducers} from "redux";


const allReducers = combineReducers({
    tierlist: tierlistReducer
})

export default allReducers;