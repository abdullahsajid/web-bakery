'use client';
import { Rusk } from "../_icons/Rusk"
import avatar from "../../public/assets/avatar.jpg"
import avatar2 from "../../public/assets/avatar2.jpg"
import Image from "next/image"
import {Cookies} from "../_icons/cookies"
import { motion } from "framer-motion";

export function OurStory(){
    return (
        <div className="relative">
            <div className="flex items-center justify-center w-full mt-5">
                <motion.h1
                    initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
                    whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1, type: 'keyframes', damping: 16 }}
                    viewport={{ once: true }}
                    className="text-[#753F21] text-[53px] font-bold max-sm:text-[40px]">
                    OUR STORY
                </motion.h1>
            </div>
            <motion.div
                initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
                whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, type: 'keyframes', damping: 16 }}
                viewport={{ once: true }}
                className="absolute right-0 top-0">
                <Rusk/>
            </motion.div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 px-20 mt-10 max-sm:px-10">
                <div className="grid grid-cols-2 items-center justify-center max-sm:gap-2">
                    <motion.div
                        animate={{
                            scale: 1,
                            y: [-10, 0, -10],
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="flex items-center justify-center">
                        <Image src={avatar} alt="avatar"/>
                    </motion.div>
                    <motion.div
                        animate={{
                            scale: 1,
                            y: [-10, 0, -10],
                        }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <Cookies />
                        <Image src={avatar2} alt="avatar2"/>
                    </motion.div>
                </div>
                <div className="flex items-center justify-center max-sm:mt-5">
                    <motion.p
                        initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
                        whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                        transition={{ duration: 1, type: 'keyframes', damping: 16 }}
                        viewport={{ once: true }}
                        className="text-[#753F21] text-[20px] max-sm:text-[18px]">
                        A bakery shop is a warm, inviting place where fresh breads, pastries, and cakes are crafted daily. The aroma of baked goods fills the air, attracting customers who seek delicious treats and comforting flavors. With a variety of artisanal products made from quality ingredients, a bakery shop is a go-to for anyone craving both sweet and savory delights. It&apos;s a hub for local communities, offering a cozy spot to enjoy a snack or order custom-made goods for special occasions.
                    </motion.p>
                </div>
            </div>
        </div>
    )
}