import { Rusk } from "../_icons/Rusk"
import avatar from "../../public/assets/avatar.jpg"
import avatar2 from "../../public/assets/avatar2.jpg"
import Image from "next/image"
import {Cookies} from "../_icons/cookies"
import { Seeds } from "../_icons/Seeds"

export function OurStory(){
    return (
        <div className="relative">
            <div className="flex items-center justify-center w-full mt-5">
                <h1 className="text-[#753F21] text-[53px] font-bold">OUR STORY</h1>
            </div>
            <div className="absolute right-0 top-0">
                <Rusk/>
            </div>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 px-20 mt-10 max-sm:px-10">
                <div className="grid grid-cols-2 items-center justify-center">
                    <div className="flex items-center justify-center">
                        <Image src={avatar} alt="avatar"/>
                    </div>
                    <div>
                        <Cookies/>
                        <Image src={avatar2} alt="avatar2"/>
                    </div>
                </div>
                <div className="flex items-center justify-center ">
                    <p className="text-[#753F21] text-[20px]">
                        A bakery shop is a warm, inviting place where fresh breads, pastries, and cakes are crafted daily. The aroma of baked goods fills the air, attracting customers who seek delicious treats and comforting flavors. With a variety of artisanal products made from quality ingredients, a bakery shop is a go-to for anyone craving both sweet and savory delights. It's a hub for local communities, offering a cozy spot to enjoy a snack or order custom-made goods for special occasions.
                    </p>
                </div>
            </div>
        </div>
    )
}