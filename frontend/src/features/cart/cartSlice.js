import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const game = action.payload;
            const existing = state.items.find((item) => item.id === game.id);
            if (!existing) {
                state.items.push({ ...game, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;