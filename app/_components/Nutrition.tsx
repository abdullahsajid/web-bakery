import { ChocolateBar } from "../_icons/ChocolateBar"
import { DonutColor } from "../_icons/DonutColor"
import Image from "next/image"
import Bread from "../../public/assets/bread.png"
import BreadImg from "../../public/assets/breadImg.jpg"
import bread from "../../public/assets/Frame 208.jpg"

export function Nutrition(){
    return (
        <div className="px-16 mt-10 relative">
            <div>
                <h1 className="text-[#753F21] text-[33px] font-extrabold">NUTRITION AND DIET</h1>
            </div>
            <div className="absolute right-0 top-0">
                <ChocolateBar/>
            </div>
            <div className="w-full flex items-center justify-center">
                <Image src={Bread} alt="Bread"/>
            </div>
            <div className="absolute left-0 bottom-0">
                <DonutColor/>
            </div>

        </div>
    )
}