import { getProductsByCategory, getProductsByID } from "../../services/api";

const GET_PRODUCTS = "GET-PRODUCTS";
const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
const SET_IS_FETCHING = "SET_IS_FETCHING"

const initialState = {
  products: [],
  activeProduct: [],
  isFetching: true,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
        isFetching: false,
      };
    case GET_PRODUCT_DETAILS:
      return {
        ...state,
        activeProduct: action.payload,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      }
    default:
      return state;
  }
};

export const getProducts = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const getProduct = (product) => ({
  type: GET_PRODUCT_DETAILS,
  payload: product,
});

export const setIsFecthing = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
})

export const getProductsThunk = ({ category, brand, puffsCount, packSize }) => {
  return (dispatch) => {
    dispatch(setIsFecthing(true))
    getProductsByCategory({ category, brand, puffsCount, packSize }).then((res) => {
      dispatch(getProducts(res.data));
    });
  };
};
export const getProductByID = (id) => {
  return (dispatch) => {
    getProductsByID(id).then((res) => {
      dispatch(getProduct(res.data));
    });
  };
};
export default productsReducer;
