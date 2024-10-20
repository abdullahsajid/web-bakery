import { LogoIcon } from "../_icons/Logo"

export function Footer() {
    return (
        <div className="footer-bg px-16 mt-10 py-10">
            <div className="grid grid-cols-5 mb-10">
                <div className="flex flex-col gap-3 col-span-2">
                    <div className="flex items-center gap-1 text-[#FFF3EA]">
                        <span className="text-[#FFF3EA] text-[25px] font-bold">SUPER</span>
                        <LogoIcon/>
                        <span className="text-[#FFF3EA] text-[25px] font-bold">SWEET</span>
                    </div>
                    <div className="text-[#FFF3EA]">
                        Whether you’re celebrating a special occasion or simply treating yourself <br /> to a moment of sweetness ,our bakery is your go to destination
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[#FFF3EA] font-bold text-[22px]">Catalog</h1>
                    <div className="text-[#FFF3EA]">Donuts</div>
                    <div className="text-[#FFF3EA]">Cake</div>
                    <div className="text-[#FFF3EA]">Cookies</div>
                    <div className="text-[#FFF3EA]">Croissant</div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[#FFF3EA] font-bold text-[22px]">Social</h1>
                    <div className="text-[#FFF3EA]">Instagram</div>
                    <div className="text-[#FFF3EA]">Tiktok Shop</div>
                    <div className="text-[#FFF3EA]">Facebook</div>
                    <div className="text-[#FFF3EA]">Twitter</div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1 className="text-[#FFF3EA] font-bold text-[22px]">Support</h1>
                    <div className="text-[#FFF3EA]">Contact Us</div>
                    <div className="text-[#FFF3EA]">Help Center</div>
                    <div className="text-[#FFF3EA]">Terms & Conditions</div>
                    <div className="text-[#FFF3EA]">Privacy & Policy</div>
                </div>
            </div>
            <hr className="bg-[#FFF3EA]"/>
        </div>
    )
}