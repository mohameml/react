import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    cart: [

    ]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem(state, action) {
            // payload = newItem
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            // payload = pizzaId 
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
        },
        increasItemQuantity(state, action) {
            // payload = pizzaId 
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity += 1;
            item.totalPrice = item.quantity * item.unitPrice

        },
        decreaseItemQuantity(state, action) {
            // payload = pizzaId 
            const item = state.cart.find(item => item.pizzaId === action.payload)
            item.quantity -= 1;
            item.totalPrice = item.quantity * item.unitPrice

            if (item.quantity === 0)
                cartSlice.caseReducers.deleteItem(state, action)
        },
        clearCart(state) {
            state.cart = []
        },


    }
})

export default cartSlice.reducer

export const { addItem, deleteItem, increasItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions



export const getCart = (state) => state.cart.cart

export const getNumberOfPizza = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)


export const getTotalePrice = (state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)


export const getCurrentQuantityById = (id) => (state) =>
    state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;
