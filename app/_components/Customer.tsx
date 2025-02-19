"use client";
import { Seeds2 } from "../_icons/Seeds2"
import TestimonialSlider from "./CustomerSlider"
import { motion } from "framer-motion";

export function Customer(){
    return (
        <div className="relative mt-10 max-sm:px-7">
            <motion.div
                initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
                whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, type: 'keyframes', damping: 16 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center">
                <h1 className="text-[#753F21] font-extrabold text-[33px] max-sm:text-[24px] max-sm:text-center">
                    WHAT OUR CUSTOMERS SAY
                </h1>
                <span className="text-[#753F21] text-center max-sm:text-xs">
                    Whether you’re celebrating a special occasion or simply treating yourself 
                    <br /> to a moment of sweetness ,our bakery is your go to destination
                </span>
            </motion.div>
            <motion.div
                 initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
                 whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                 transition={{ duration: 1, type: 'keyframes', damping: 16 }}
                 viewport={{ once: true }}
                className="absolute right-0 bottom-0">
                <Seeds2/>
            </motion.div>
            <div className="mx-auto">
                <TestimonialSlider/>
            </div>
        </div>
    )
}