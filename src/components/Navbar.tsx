"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const container = document.querySelector("main");
        if (!container) return;

        const handleScroll = () => setScrolled(container.scrollTop > 50);
        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 pointer-events-none flex flex-col items-center px-4 md:px-8 transition-all duration-500 ease-in-out ${scrolled ? "pt-2 md:pt-2" : "pt-6 md:pt-10"
            }`}>
            {/* Nav Pill Container */}
            <div className={`pointer-events-auto transition-all duration-500 ease-in-out relative flex items-center rounded-full border border-vang-kem/40 h-14 md:h-16 mx-auto ${scrolled
                ? "bg-den/90 backdrop-blur-md shadow-2xl shadow-black/50 w-[95%] md:w-[80%] max-w-3xl"
                : "bg-den/30 backdrop-blur-sm w-full max-w-5xl"
                }`}
            >
                {/* Left Logo */}
                <a
                    href="#trang-chu"
                    aria-label="Trang chủ - Cơm tấm Má Tư"
                    className={`rounded-full absolute top-1/2 -translate-y-1/2 flex items-center group z-10 transition-all duration-500 ease-in-out focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none ${scrolled ? "left-2 md:left-4" : "-left-2 md:-left-6"
                        }`}
                >
                    <div className={`relative rounded-full border-[#cb9b51] group-hover:border-white transition-all duration-500 ease-in-out shadow-xl overflow-hidden bg-den ${scrolled ? "w-10 h-10 md:w-12 md:h-12 border-[1.5px]" : "w-20 h-20 md:w-28 md:h-28 border-[3px]"
                        }`}>
                        <Image
                            src="/images/logo.webp"
                            alt="Logo Cơm tấm Má Tư"
                            fill
                            sizes="(max-width: 768px) 80px, 112px"
                            className="object-cover"
                        />
                    </div>
                </a>

                {/* Centered Desktop Nav */}
                <nav aria-label="Menu chính" className={`hidden md:flex items-center absolute top-1/2 -translate-y-1/2 z-0 whitespace-nowrap transition-all duration-500 ease-in-out ${scrolled
                    ? "left-1/2 -translate-x-[58%] lg:-translate-x-[55%] gap-4 lg:gap-7"
                    : "left-1/2 -translate-x-1/2 gap-6 lg:gap-10"
                    }`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`rounded-full text-trang/80 hover:text-white transition-all duration-500 text-xs font-medium tracking-[0.15em] uppercase focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none ${scrolled ? "lg:text-[11px]" : "lg:text-sm"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Right Button */}
                <div className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 hidden md:block z-10">
                    <button
                        onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
                        className={`bg-transparent border border-[#cb9b51] text-[#D0A458] rounded-full font-semibold tracking-widest transition-all duration-500 ease-in-out hover:bg-[#cb9b51] hover:text-den focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none ${scrolled ? "px-4 lg:px-6 py-1.5 lg:py-2 text-[9px] lg:text-[10px]" : "px-6 lg:px-8 py-2 lg:py-2.5 text-[10px] lg:text-xs"
                            }`}
                    >
                        ĐẶT BÀN
                    </button>
                </div>

                {/* Mobile Hamburger — 44x44 touch target */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden z-10">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-trang p-2 rounded-full relative flex items-center justify-center w-11 h-11 focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none"
                        aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-nav"
                    >
                        <div className="w-5 flex flex-col gap-1.5" aria-hidden="true">
                            <span
                                className={`block h-[2px] bg-trang transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
                                    }`}
                            />
                            <span
                                className={`block h-[2px] bg-trang transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-[2px] bg-trang transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <nav
                id="mobile-nav"
                role="navigation"
                aria-label="Menu chính (di động)"
                className={`pointer-events-auto md:hidden w-[90%] max-w-sm mt-3 rounded-2xl border border-vang-kem/10 bg-den/95 backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-2xl ${mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none hidden"
                    }`}
            >
                <div className="flex flex-col px-6 py-6 gap-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-trang/90 hover:text-vang-kem py-3 text-base font-medium border-b border-trang/10 uppercase tracking-wide focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            setMobileMenuOpen(false);
                            window.dispatchEvent(new CustomEvent("open-booking"));
                        }}
                        className="bg-transparent border border-vang-kem text-vang-kem py-3 rounded-xl mt-3 text-sm font-bold uppercase transition-all duration-300 hover:bg-vang-kem hover:text-den focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none"
                    >
                        ĐẶT BÀN
                    </button>
                </div>
            </nav>
        </header>
    );
}
