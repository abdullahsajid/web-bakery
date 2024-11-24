import Image from "next/image"
import GlazedDonut from "../../public/assets/GlazedDonut.png"

export type Product = {
  id: number;
  name: string;
  image: string;
};
interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({product}) => {
    return (
        <div className="product-card rounded-[25px] flex flex-col items-center justify-center py-3 shadow-lg">
            <div className="flex items-center justify-center">
                <Image src={GlazedDonut} alt="GlazedDonut" />
            </div>
            <span className="text-[#753F21] font-bold">{product.name}</span>
        </div>
    )
};