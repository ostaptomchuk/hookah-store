
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const TOGGLE_SHOW = 'TOGGLE_SHOW';
const HIDE_ALERT = 'HIDE_ALERT';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: product,
})

export const removeItem = (product) => ({
    type: REMOVE_ITEM,
    payload: product,
})

const initialState = {
    items: [],
    totalPrice: 0,
    // showItems: false,
    // showAlert: null
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: [...state.items, action.payload],
                totalPrice: state.totalPrice + action.payload.price,
            };
        // case REMOVE_ITEM:
        //     const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
        //     const newItems =[...state.items];
        //     const itemToRemove = newItems.splice(itemIndex, 1) [0];
        //     return {
        //         ...state,
        //         items: newItems,
        //         totalPrice: state.totalPrice - itemToRemove.price
        //     };
        default:
            return state
    }
}


export default cartReducer;