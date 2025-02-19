'use client';
import { Seeds } from "../_icons/Seeds"
import { CatalogNav } from "./CatalogNav"
import { Product, ProductCard } from "./ProductCard"
import { useNavStore } from "../store/nav-store";
import { products } from "../utils/products";
import {motion} from "framer-motion";
export function Catalog() {
    const navStore = useNavStore();
    const currentProduct = products[navStore.currentProduct]
    

    return (
        <div className="relative">
            <motion.div
                initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
                whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, type: 'keyframes', damping: 16 }}
                viewport={{ once: true }}
            >
                <Seeds />
            </motion.div>
            <CatalogNav/>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 px-16 max-sm:px-7 mt-5 gap-3">
                {currentProduct.products.map((item:Product,index:number) => {
                    return <ProductCard key={index} product={item}/>
                })}
            </div>
        </div>
    )
}