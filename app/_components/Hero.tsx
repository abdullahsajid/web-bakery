'use client';
import { MultipleDonut } from "../_icons/MultipleDonut"
import { Donut } from "../_icons/Donut"
import croissant from "../../public/assets/Croissant.png"
import Image from "next/image"
import { motion } from "framer-motion";

export function Hero(){
    return(
        <div className="relative flex items-center justify-center bg-[#201913] p-5 w-full min-h-screen overflow-hidden">
  
        <motion.div
          initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
          whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, type: 'keyframes', damping: 16 }}
          viewport={{ once: true }}
          className="absolute right-0 top-0 mt-4">
        <MultipleDonut />
      </motion.div>

      <div className="flex flex-col gap-7 hero p-16 w-[900px] max-sm:w-full max-sm:p-8 rounded-3xl relative z-10">
        <div className="relative max-sm:mb-3">
            <motion.span
              initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
              whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, type: 'keyframes', damping: 16 }}
              viewport={{ once: true }}
              className="text-[#753F21] text-[53px] font-bold relative z-[10] max-sm:text-[40px]">
              CROISSANT
            </motion.span>
            <motion.span
              initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
              whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, type: 'keyframes', damping: 16 }}
              viewport={{ once: true }}
              className="absolute left-[10rem] top-12 text-[35px] text-[#753F2180] -z-0 max-sm:left-[2rem]">
              CROISSANT
            </motion.span>
        </div>
        <motion.div
            initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
						whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
						transition={{ duration: 1, type: 'keyframes', damping: 16 }}
						viewport={{ once: true }}
            className="text-[#753F21] text-[20px] max-w-[600px] max-sm:text-[15px]">
          A croissant is a laminated, yeast-leavened bakery product that contains 
          dough/roll-in fat layers to create a flaky, crispy texture. Croissants belong to 
          the Viennoiserie or pastry category of baked goods along with brioche, 
          Danish and puff pastries.
        </motion.div>
        <div>
          <motion.button
              initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
              whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, type: 'keyframes', damping: 16 }}
              viewport={{ once: true }}
              className="text-[#fff] hero-btn py-3 px-5 rounded-md">
            BUY NOW
          </motion.button>
        </div>
        <div className="absolute right-[-35%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] max-sm:w-[500px] max-sm:h-[300px] max-sm:right-[-50%] z-20 max-sm:hidden">
        <Image
          src={croissant}
          alt="Croissant"
          fill
          className="object-contain transform -rotate-12"
          priority
        />
      </div>
        </div>
        
      <motion.div
          initial={{ scale: 0, opacity: 0, filter: 'blur(30px)' }}
          whileInView={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, type: 'keyframes', damping: 16 }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-0">
        <Donut />
      </motion.div>
    </div>
    )
}


