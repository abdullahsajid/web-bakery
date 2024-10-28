import Image from "next/image"
import Cookie from "../../public/assets/cookie.png"
import Cookies from "../../public/assets/Frame_210-removebg.png"

export function Discount(){
    return (
        <div className="discount-banner flex items-center justify-between mx-16 max-sm:mx-7 mt-10 p-10 max-sm:px-5 rounded-2xl max-sm:flex-col
        max-sm:gap-y-3">
            <div className="flex flex-col items-start justify-start">
                <div className="text-[#FFF3EA] text-[25px]">Don’t Miss Out</div>
                <div className="text-[#FFF3EA] text-[45px] max-sm:text-[40px] font-bold">Up to 50% off</div>
                <button className="text-[#fff] hero-btn py-2 px-5 rounded-md mt-3">BUY NOW</button>
            </div>
            <div className="w-full">
                <Image src={Cookies} className="max-sm:w-full" alt="cookie"/> 
            </div>
        </div>
    )
}