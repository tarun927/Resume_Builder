import { combineReducers } from "redux";
import namereducer from "./namereducer";
import homeReducer from "./homeReducer";
import workReducer from "./workReducer";
import eduReducer from "./eduReducer"
import finalReducer from "./finalReducer";
import templateReducer from "./templateReducer";
import summaryReducer from "./summaryReducer";
import skillReducer from "./skillReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    namereducer,homeReducer,workReducer,eduReducer,finalReducer,templateReducer,summaryReducer,skillReducer,userReducer
})
export default rootReducer;