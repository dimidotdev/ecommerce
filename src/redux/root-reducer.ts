import { combineReducers } from "redux";
import { userSlice } from "./UserReducer/user-slice";
import { cartSlice } from "./CartReducer/cart-slice";


export const rootReducer = combineReducers({
    userReducer: userSlice.reducer,
    cartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;