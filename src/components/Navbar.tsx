"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        // The scroll container is the <main> element that has overflow-y-auto,
        // not window. We find it by querying the direct parent of our sections.
        const container = document.querySelector("main");
        if (!container) return;

        const handleScroll = () => setScrolled(container.scrollTop > 50);
        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 pointer-events-none flex flex-col items-center pt-4 md:pt-6">
            <nav
                className={`pointer-events-auto transition-all duration-500 rounded-full border border-vang-kem/10 ${scrolled
                    ? "bg-den/80 backdrop-blur-md py-2 px-6 shadow-2xl shadow-black/50"
                    : "bg-den/30 backdrop-blur-sm py-3 px-8"
                    }`}
            >
                <div className="flex items-center justify-between gap-6 md:gap-12">
                    {/* Logo */}
                    <a href="#hero" className="flex items-center group">
                        <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border-2 border-vang-kem/50 group-hover:border-vang-kem transition-colors duration-300">
                            <Image
                                src="/images/logo.webp"
                                alt="Logo Cơm tấm Má Tư"
                                fill
                                sizes="44px"
                                className="object-cover"
                            />
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-trang/80 hover:text-vang-kem transition-colors duration-300 text-sm font-medium tracking-wide uppercase relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-vang-kem after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="tel:0772818172"
                            className="bg-do-co/90 hover:bg-do-co text-trang px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-do-co/30 hover:scale-105"
                        >
                            Đặt bàn
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-trang p-1 relative z-50 flex items-center justify-center w-8 h-8"
                        aria-label="Menu"
                    >
                        <div className="w-5 flex flex-col gap-1">
                            <span
                                className={`block h-[2px] bg-trang transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""
                                    }`}
                            />
                            <span
                                className={`block h-[2px] bg-trang transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block h-[2px] bg-trang transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div
                className={`pointer-events-auto md:hidden w-[90%] max-w-sm mt-3 rounded-2xl border border-vang-kem/10 bg-den/95 backdrop-blur-xl transition-all duration-300 overflow-hidden shadow-2xl ${mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col px-6 py-6 gap-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-trang/90 hover:text-vang-kem py-3 text-base font-medium border-b border-trang/10"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="tel:0772818172"
                        className="btn-primary text-center mt-3 !w-full"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        📞 Đặt bàn ngay
                    </a>
                </div>
            </div>
        </header>
    );
}
