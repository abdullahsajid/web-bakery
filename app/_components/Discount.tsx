import Image from "next/image"
import Cookie from "../../public/assets/cookie.png"
import Cookies from "../../public/assets/Frame_210-removebg.png"

export function Discount(){
    return (
        <div className="discount-banner flex items-center justify-between mx-16 mt-10 p-10 rounded-2xl">
            <div className="flex flex-col items-start justify-start">
                <div className="text-[#FFF3EA] text-[25px]">Don’t Miss Out</div>
                <div className="text-[#FFF3EA] text-[45px] font-bold">Up to 50% off</div>
                <button className="text-[#fff] hero-btn py-2 px-5 rounded-md mt-3">BUY NOW</button>
            </div>
            <div>
                <Image src={Cookies} alt="cookie"/> 
            </div>
        </div>
    )
}