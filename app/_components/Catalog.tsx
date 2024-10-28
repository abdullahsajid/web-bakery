import { Seeds } from "../_icons/Seeds"
import { CatalogNav } from "./CatalogNav"
import { ProductCard } from "./ProductCard"

export function Catalog() {
    return (
        <div className="relative">
            <div>
                <Seeds />
            </div>
            <CatalogNav/>
            <div className="grid grid-cols-3 max-sm:grid-cols-1 px-16 max-sm:px-7 mt-5 gap-3">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}