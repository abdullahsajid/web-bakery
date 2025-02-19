"use client";
import { ChocolateBar } from "../_icons/ChocolateBar"
import { DonutColor } from "../_icons/DonutColor"
import Image from "next/image"
import bread from "../../public/assets/file.png"
import {motion} from "framer-motion"
export function Nutrition(){
    return (
        <div className="px-16 max-sm:px-10 mt-10 relative">
            <motion.div
                initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
                whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, type: 'keyframes', damping: 16 }}
                viewport={{ once: true }}
            >
                <h1 className="text-[#753F21] text-[33px] max-sm:text-[25px] font-extrabold max-sm:text-center">
                    NUTRITION AND DIET
                </h1>
            </motion.div>
            <motion.div
                initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
                whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, type: 'keyframes', damping: 16 }}
                viewport={{ once: true }}
                className="absolute right-0 top-0">
                <ChocolateBar/>
            </motion.div>
            <motion.div
                animate={{
                    scale: 1,
                    y: [-10, 0, -10],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-full flex items-center justify-center">
                <Image src={bread} alt="Bread" className="max-sm:w-[400px] max-sm:h-[400px] w-[700px] h-[600px]"/>
            </motion.div>
            <motion.div
                initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
                whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, type: 'keyframes', damping: 16 }}
                viewport={{ once: true }}
                className="absolute left-0 bottom-0">
                <DonutColor/>
            </motion.div>

        </div>
    )
}