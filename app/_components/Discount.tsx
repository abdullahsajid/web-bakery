"use client";
import Image from "next/image"
import Cookies from "../../public/assets/Frame_210-removebg.png"
import {motion} from "framer-motion"
export function Discount(){
    return (
        <div className="discount-banner flex items-center justify-between mx-16 max-sm:mx-7 mt-10 p-10 py-3 max-sm:px-5 rounded-2xl max-sm:flex-col
        max-sm:gap-y-3 shadow">
            <motion.div
                initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
                whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, type: 'keyframes', damping: 16 }}
                viewport={{ once: true }}
                className="flex flex-col items-start justify-start ps-20 max-sm:ps-0">
                <div className="text-[#FFF3EA] text-[35px]">Don’t Miss Out</div>
                <div className="text-[#FFF3EA] text-[55px] max-sm:text-[45px] font-bold">Up to 50% off</div>
                <button className="text-[#fff] hero-btn py-2 px-5 rounded-md mt-3">BUY NOW</button>
            </motion.div>
            <motion.div
                animate={{
                    scale: 1,
                    y: [-10, 0, -10],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="max-sm:w-full">
                <Image src={Cookies} className="max-sm:w-full" alt="cookie"/> 
            </motion.div>
        </div>
    )
}