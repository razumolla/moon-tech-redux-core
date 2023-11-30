import { createStore } from "redux";
import productReducer from "./redurcers/productReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(productReducer, composeWithDevTools());
export default store;