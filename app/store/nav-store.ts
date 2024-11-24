import { create } from "zustand";

export const useNavStore = create((set) => ({
    currentProduct: "donuts",
    setCurrentProduct: (product: string) => set({currentProduct: product})
}))
