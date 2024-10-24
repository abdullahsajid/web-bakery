import {Seeds2} from "../_icons/Seeds2"
import TestimonialSlider from "./CustomerSlider"
export function Customer(){
    return (
        <div className="relative mt-10">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[#753F21] font-extrabold text-[33px]">WHAT OUR CUSTOMERS SAY</h1>
                <span className="text-[#753F21] text-center">Whether you’re celebrating a special occasion or simply treating yourself <br /> to a moment of sweetness ,our bakery is your go to destination</span>
            </div>
            <div className="absolute right-0 bottom-0">
                <Seeds2/>
            </div>
            <div className="min-h-screen mx-auto">
                <TestimonialSlider/>
            </div>
        </div>
    )
}