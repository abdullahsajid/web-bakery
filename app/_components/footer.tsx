import { LogoIcon } from "../_icons/Logo"
import { Facebook,Twitter,Instagram} from "lucide-react"

export function Footer() {
    return (
        <div className="footer-bg px-16 mt-10 py-10 max-sm:px-7">
            <div className="grid grid-cols-5 max-sm:grid-cols-1 mb-10">
                <div className="flex flex-col gap-3 col-span-2 max-sm:col-span-1 max-sm:justify-center max-sm:items-center max-sm:mb-5">
                    <div className="flex items-center gap-1 text-[#FFF3EA]">
                        <span className="text-[#FFF3EA] text-[25px] font-bold">SUPER</span>
                        <LogoIcon/>
                        <span className="text-[#FFF3EA] text-[25px] font-bold">SWEET</span>
                    </div>
                    <div className="text-[#FFF3EA] max-sm:text-center">
                        Whether you’re celebrating a special occasion or simply treating yourself <br /> to a moment of sweetness ,our bakery is your go to destination
                    </div>
                </div>
                <div className="flex flex-col gap-2 max-sm:justify-center max-sm:items-center max-sm:w-full max-sm:mt-5">
                    <h1 className="text-[#FFF3EA] font-bold text-[22px]">Catalog</h1>
                    <div className="text-[#FFF3EA]">Donuts</div>
                    <div className="text-[#FFF3EA]">Cake</div>
                    <div className="text-[#FFF3EA]">Cookies</div>
                    <div className="text-[#FFF3EA]">Croissant</div>
                </div>
                <div className="flex flex-col gap-2 max-sm:justify-center max-sm:items-center max-sm:w-full max-sm:mt-5">
                    <h1 className="text-[#FFF3EA] font-bold text-[22px]">Social</h1>
                    <div className="text-[#FFF3EA]">Instagram</div>
                    <div className="text-[#FFF3EA]">Tiktok Shop</div>
                    <div className="text-[#FFF3EA]">Facebook</div>
                    <div className="text-[#FFF3EA]">Twitter</div>
                </div>
                <div className="flex flex-col gap-2 max-sm:justify-center max-sm:items-center max-sm:w-full max-sm:mt-5">
                    <h1 className="text-[#FFF3EA] font-bold text-[22px]">Support</h1>
                    <div className="text-[#FFF3EA]">Contact Us</div>
                    <div className="text-[#FFF3EA]">Help Center</div>
                    <div className="text-[#FFF3EA]">Terms & Conditions</div>
                    <div className="text-[#FFF3EA]">Privacy & Policy</div>
                </div>
            </div>
            <hr className="bg-[#FFF3EA]"/>
            <div className="flex justify-end items-center gap-5 mt-5 me-5 max-sm:me-0 max-sm:justify-center">
                <div className="bg-[#1D9BF0] rounded-md p-1 shadow">
                    <Twitter color="#fff"/>
                </div>
                <div className="bg-[#1877F2] rounded-md p-1 shadow">
                    <Facebook/>
                </div>
                <a href="https://www.instagram.com/supersweetsbakers/" className="insta rounded-md p-1 shadow">
                    <Instagram/>
                </a>
            </div>
        </div>
    )
}