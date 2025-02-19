'use client'
import Link from "next/link"
import { LogoIcon } from "../_icons/Logo"
import { Menu,X } from 'lucide-react';
import { useNavStore } from "../store/nav-store";

export function NavBar() {
    const {isSidebarOpen,setIsSidebarOpen} = useNavStore();
    
    return (
        <>
        <header className="flex bg-[#FFF3EA] sticky top-0 z-50 py-4 px-8 max-sm:px-5 transition-all">
            <nav className="hidden max-sm:flex flex items-center justify-between w-full transition-all relative">
                <div>
                    <Link href='/' className="flex items-center gap-1 text-[#753F21]">
                        <span className="text-[#753F21] text-[25px] font-bold max-sm:text-[20px]">SUPER</span>
                        <LogoIcon/>
                        <span className="text-[#753F21] text-[25px] font-bold max-sm:text-[20px]">SWEET</span>
                    </Link>
                </div>
                <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <Menu size={25} className="max-sm:flex text-[#201913]"/>
                </div>
            </nav>
            <nav className="flex items-center justify-around w-full transition-all max-sm:hidden">
                <Link href='/' className="text-[#753F21] font-semibold">
                    HOME
                </Link>
                <Link href='/catalog' className="text-[#753F21] font-semibold">
                    CATALOG
                </Link>
                <Link href='/about' className="text-[#753F21] font-semibold">
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
                <Link href='/contact' className="text-[#753F21] font-semibold">
                    CONTACT
                </Link>
                <Link href='/login' className="text-[#753F21] font-semibold">
                    LOGIN
                </Link>
            </nav>
        </header>
        <div className={`hidden max-sm:flex flex-col items-end w-[200px] h-full fixed top-0 right-0 bg-[#FFF3EA] shadow-md rounded-md z-50 ${isSidebarOpen ? "translate-x-0" : "translate-x-[100%]" } transition-all`}>
            <div className="mt-5 pe-5" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <X className="text-[#201913]"/>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center mt-7 w-full">
                <Link href='/' className="text-[#753F21] font-semibold"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    HOME
                </Link>
                <Link href='/catalog' className="text-[#753F21] font-semibold"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    CATALOG
                </Link>
                <Link href='/about' className="text-[#753F21] font-semibold"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    ABOUT US
                </Link>
                <Link href='/' className="text-[#753F21] font-semibold"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    DELIVERY
                </Link>
                <Link href='/contact' className="text-[#753F21] font-semibold"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    CONTACT
                </Link>
                <Link href='/login' className="text-[#753F21] font-semibold"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    LOGIN
                </Link>
            </div>
        </div>
    </>
    )
}