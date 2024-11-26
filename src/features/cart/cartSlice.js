import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    //   {
    //   pizzaId: 12,
    //   name: "Mediterranean",
    //   quantity: 2,
    //   unitPrice: 16,
    //   totalPrice: 32,
    //   image: "https://images.pizzaexpress.com/images/pizza-hawaii.jpg",
    // }
  ],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, { payload }) => {
      state.cart.push(payload)
    },
    deleteItem: (state, { payload }) => {
      state.cart = state.cart.filter(item => item.pizzaId !== payload)
    },
    increaseItemQuantity: (state, { payload }) => {
      const item = state.cart.find(item => item.pizzaId === payload)
      item.quantity++
      item.totalPrice = item.quantity * item.unitPrice
    },
    decreaseItemQuantity: (state, { payload }) => {
      const item = state.cart.find(item => item.pizzaId === payload)
      item.quantity--
      item.totalPrice = item.quantity * item.unitPrice
    },
    clearCart: (state) => {
      state.cart = []
    },
  },
})

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer

export const getCart = (state) => state.cart.cart

export const getTotalCartQuantity = (state) => state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)

export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
