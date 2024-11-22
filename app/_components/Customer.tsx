import {Seeds2} from "../_icons/Seeds2"
import TestimonialSlider from "./CustomerSlider"
export function Customer(){
    return (
        <div className="relative mt-10 max-sm:px-7">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[#753F21] font-extrabold text-[33px] max-sm:text-[24px] max-sm:text-center">WHAT OUR CUSTOMERS SAY</h1>
                <span className="text-[#753F21] text-center max-sm:text-xs">Whether you’re celebrating a special occasion or simply treating yourself <br /> to a moment of sweetness ,our bakery is your go to destination</span>
            </div>
            <div className="absolute right-0 bottom-0">
                <Seeds2/>
            </div>
            <div className="mx-auto">
                <TestimonialSlider/>
            </div>
        </div>
    )
}