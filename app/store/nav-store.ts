import { create } from "zustand";
import { INavItem } from "../types/nav-type";

export const useNavStore = create<INavItem>((set) => ({
    isSidebarOpen: false,
    currentProduct: "cake",
    setCurrentProduct: (product: string) => set({currentProduct: product}),
    setIsSidebarOpen: (isOpen: boolean) => set({isSidebarOpen: isOpen})
}))
