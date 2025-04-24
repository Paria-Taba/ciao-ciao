import { create } from 'zustand';

export const useCartStore = create((set) => ({
  cart: [],

  addItem: (item) =>
    set((state) => ({
      cart: [...state.cart, item],
    })),
	deleteItem :(id)=> set((state) => ({
		cart: state.cart.filter((item) => item.id !== id),
	  })),


}));