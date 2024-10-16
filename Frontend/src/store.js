import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.cartItems.find(
        (items) => items.id === product.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }

      state.totalQuantity += 1;
      state.totalAmount += product.price;
    },

    // written bu chatgpt
    updateCartItemQuantity: (state, action) => {
      const { newQuantity, productId } = action.payload;
      const product = state.cartItems.find((item) => item.id === productId);

      if (product && newQuantity >= 0) {
        // The old quantity of the product is stored in oldQuantity for later calculations.
        const oldQuantity = product.quantity;

        // The product's quantity is then updated to the newQuantity.
        product.quantity = newQuantity;

        // Update totalQuantity and totalAmount accordingly
        //The total quantity of items in the cart is updated by adding the difference between the new quantity and the old quantity (newQuantity - oldQuantity).
        // For example, if the old quantity was 2 and the new quantity is 4, this would add 2 to totalQuantity.
        state.totalQuantity += newQuantity - oldQuantity;

        //The total amount of money spent on items in the cart is updated similarly. The difference in quantity is multiplied by the product's price to determine the change in the total amount.
        // Continuing the previous example, if the price of the product is $10 and the quantity changed from 2 to 4, the total amount would increase by $20 ((4 - 2) * 10).
        state.totalAmount += (newQuantity - oldQuantity) * product.price;
      }
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const productToRemove = state.cartItems.find(
        (item) => item.id === product.id
      );

      if (productToRemove) {
        state.totalQuantity -= productToRemove.quantity;
        state.totalAmount -= productToRemove.price * productToRemove.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== product.id
        );
      }
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { updateCartItemQuantity } = cartSlice.actions;

export { store };
