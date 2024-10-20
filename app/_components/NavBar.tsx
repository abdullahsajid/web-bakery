import Link from "next/link"
import { LogoIcon } from "../_icons/Logo"

export function NavBar() {
    return (
        <header className="flex bg-[#FFF3EA] py-6 px-8 transition-all">
            <nav className="flex items-center justify-around w-full transition-all max-sm:hidden">
                <Link href='/' className="text-[#753F21] font-semibold">
                    HOME
                </Link>
                <Link href='/' className="text-[#753F21] font-semibold">
                    CATALOG
                </Link>
                <Link href='/' className="text-[#753F21] font-semibold">
                    ABOUT US
                </Link>
                <Link href='/' className="flex items-center gap-1 text-[#753F21]">
                    <span className="text-[#753F21] text-[25px] font-bold">SUPER</span>
                    <LogoIcon/>
                    <span className="text-[#753F21] text-[25px] font-bold">SWEET</span>
                </Link>
                <Link href='/' className="text-[#753F21] font-semibold">
                    DELIVERY
                </Link>
                <Link href='/' className="text-[#753F21] font-semibold">
                    CONTACT
                </Link>
                <Link href='/' className="text-[#753F21] font-semibold">
                    LOGIN
                </Link>
            </nav>
        </header>
    )
}