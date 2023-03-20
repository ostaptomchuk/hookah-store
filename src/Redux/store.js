import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./Reducers/products-reducer";

let rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
