import { create } from "zustand";
import { INavItem } from "../types/nav-type";

export const useNavStore = create<INavItem>((set) => ({
    currentProduct: "donuts",
    setCurrentProduct: (product: string) => set({currentProduct: product})
}))
