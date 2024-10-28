import { DonutNav } from "../_icons/DonutNav"
import { Pastry } from "../_icons/pastry"
import { CupCak } from "../_icons/CupCake"
import { Brownies } from "../_icons/Brownies"
import { Cake } from "../_icons/Cake"

export function CatalogNav() {
    return (
        <div className="flex items-center justify-between w-full px-16 max-sm:px-7 max-sm:flex-col">
            <div className="flex items-center justify-center flex-col max-sm:mb-4">
                <h1 className="text-[#753F21] text-[53px] font-bold">CATALOG</h1>
                <span className="text-[#753F21] text-center text-pretty text-xs">
                    Keep an eye on trends in the bakery industry and <br /> be willing to adapt and innovate
                </span>
            </div>     
            <div className="flex gap-10 max-sm:flex-wrap max-sm:items-center max-sm:justify-center">
                <div className="flex flex-col items-center cursor-pointer">
                    <DonutNav/>
                    <span className="text-[#753F21]">Donuts</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Pastry/>
                    <span className="text-[#753F21]">Pastry</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <CupCak/>
                    <span className="text-[#753F21]">CupCak</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <CupCak/>
                    <span className="text-[#753F21]">CookieNav</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Brownies/>
                    <span className="text-[#753F21]">Brownies</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer">
                    <Cake/>
                    <span className="text-[#753F21]">Cake</span>
                </div>
            </div>
        </div>
    )
}