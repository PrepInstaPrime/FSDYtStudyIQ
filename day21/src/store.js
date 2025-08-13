import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        products: productsReducer,
        cart: cartReducer,
    }
})
export default store;