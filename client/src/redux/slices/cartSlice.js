import { createSlice, nanoid } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
    },
    reducers: {
        incrementItem: (state, action) => {
            // Check if the item is already in the cart
            const item = state.items.find(item => item.id === action.payload.id);

            if (item) {
                // If the item is already in the cart, increment its count
                item.count++;
            } else {
                // If the item is not in the cart, add it
                state.items.push({ id: action.payload.id, name:action.payload.name, count: 1 });
            }
        },
        decrementItem: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id);
            
            if (item) {
                // Decrement the item's count
                item.count--;
        
                // If the count reaches 0, remove the item from the cart
                if (item.count === 0) {
                    state.items = state.items.filter((i) => i.id !== action.payload.id);
                }
            }
        }
        
        // decrementItem: (state, action) => {
        //     const item = state.items.find((item) => item.id === action.payload.id);
        //     if(item.count === 0){
        //         state.items = state.items.filter((i) => i.id !== action.payload.id)
        //     }
        //     else if(item && item.count > 0) {
        //       item.count--;
        //     }
        // }
    }
})

export const { incrementItem, decrementItem } = cartSlice.actions;
export default cartSlice.reducer;