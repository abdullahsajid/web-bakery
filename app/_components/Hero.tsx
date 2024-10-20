import { MultipleDonut } from "../_icons/MultipleDonut"
import { Donut } from "../_icons/Donut"
import croissant from "../../public/assets/Croissant.png"
import Image from "next/image"


export function Hero(){
    return(
        <div className="relative flex items-center justify-center bg-[#201913] p-5 w-full min-h-screen">
            <div className="absolute right-0 top-0 mt-4">
                <MultipleDonut/>
            </div>
            <div className="flex flex-col gap-7 hero p-16 w-[900px] max-sm:w-full max-sm:p-8 rounded-3xl">
                <div className="relative">
                    <span className="text-[#753F21] text-[53px] font-bold relative z-[10]">CROISSANT</span>
                    <span className="absolute left-[10rem] top-12 text-[35px] text-[#753F2180] -z-0">CROISSANT</span>
                </div>
                <div className="text-[#753F21] text-[20px]">
                    A croissant is a laminated, yeast-leavened bakery product that contains dough/roll-in fat layers to create a flaky, crispy texture. Croissants belong to the Viennoiserie or pastry category of baked goods along with brioche, Danish and puff pastries.
                </div>
                <div>
                    <button className="text-[#fff] hero-btn py-3 px-5 rounded-md">BUY NOW</button>
                </div>
            </div>
            <div className="absolute right-52">
                <Image src={croissant} alt="Croissant" width={500} height={500}/>
            </div>
            <div className="absolute bottom-0 left-0">
                <Donut/>
            </div>
        </div>
    )
}


