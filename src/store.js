import { createStore } from "redux";

import rootReducer from "./redux/reducer";

const store = createStore(rootReducer);
store.subscribe(()=>console.log(store.getState()))
export default store;