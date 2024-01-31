import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop()
        },
        clearCart: (state) => {
            // return {items :[]}  //Either mutate the state or return 
            state.items= [];
        }
    }
})


// What cartSlice stored behind the scene
/*
{
    actions:{
        addItem, removeItem, clearCart
    },
    reducer:{

}
}*/


export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;