import { Product } from "../../data/products";

interface CartState {
    cart: Product[];
}

const initialState: CartState = {
    cart: [],
};

interface CartAction {
    type: string;
    payload: Product;
}



export function cartReducer(state = initialState, action: CartAction): CartState {
    
    switch (action.type) {
        case "cart/add-product":
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case "cart/remove-product":
            return {
                ...state,
                cart: state.cart.filter((product) => product.id !== action.payload.id),
            };
        default:
            return state;
    }

}