import { createSlice } from '@reduxjs/toolkit';
import { type PayloadAction } from '@reduxjs/toolkit';

type Payload = {
    id: string;
    title: string;
    price: number;
}

type CartItem = {
    id: string;
    title: string;
    price: number;
    quantity: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Payload>) { },
        removeFromCart() { },
    }
});
