export interface INavItem {
    isSidebarOpen: boolean;
    currentProduct: string;
    setCurrentProduct: (product: string) => void; 
    setIsSidebarOpen: (isOpen: boolean) => void;
}

