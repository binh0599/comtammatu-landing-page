"use client";

import { useState, useEffect } from "react";

export default function BookingModal() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("open-booking", handleOpen);
        return () => window.removeEventListener("open-booking", handleOpen);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={() => setIsOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-md bg-do-co rounded-xl shadow-2xl overflow-hidden border border-vang-kem animate-scale-in">
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-vang-kem/70 hover:text-vang-kem transition-colors"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="text-center pt-8 pb-4 px-6 relative">
                    <h2 className="font-serif text-3xl text-vang-kem mb-2">Cơm Tấm Má Tư</h2>
                    <div className="flex items-center justify-center gap-2">
                        <span className="h-[1px] bg-vang-kem/30 w-12" />
                        <span className="text-vang-kem/90 font-medium tracking-widest uppercase text-sm">Đặt Bàn</span>
                        <span className="h-[1px] bg-vang-kem/30 w-12" />
                    </div>
                </div>

                {/* Form */}
                <form className="px-6 pb-8 space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Đặt bàn thành công!"); setIsOpen(false); }}>
                    <div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vang-kem/60">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Họ và Tên"
                                required
                                className="w-full bg-transparent border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang placeholder-vang-kem/50 focus:outline-none focus:border-vang-kem transition-colors"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vang-kem/60">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </span>
                            <input
                                type="tel"
                                placeholder="Số Điện Thoại"
                                required
                                className="w-full bg-transparent border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang placeholder-vang-kem/50 focus:outline-none focus:border-vang-kem transition-colors"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vang-kem/60">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <input
                                type="date"
                                required
                                className="w-full bg-transparent border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang focus:outline-none focus:border-vang-kem transition-colors [color-scheme:dark]"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vang-kem/60">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <input
                                type="time"
                                required
                                className="w-full bg-transparent border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang focus:outline-none focus:border-vang-kem transition-colors [color-scheme:dark]"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-vang-kem/60">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </span>
                            <select
                                required
                                className="w-full bg-do-co border border-vang-kem/40 rounded-lg py-3 pl-10 pr-4 text-trang focus:outline-none focus:border-vang-kem transition-colors appearance-none"
                            >
                                <option value="" disabled selected hidden className="text-vang-kem/50">Số Lượng Khách</option>
                                <option value="1">1 Người</option>
                                <option value="2">2 Người</option>
                                <option value="3">3 Người</option>
                                <option value="4">4 Người</option>
                                <option value="5-8">5 - 8 Người</option>
                                <option value="9+">Trên 8 Người</option>
                            </select>
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-vang-kem/60 pointer-events-none">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    
                    <button
                        type="submit"
                        className="w-full bg-vang-kem/10 border border-vang-kem text-vang-kem hover:bg-vang-kem hover:text-do-co font-serif text-lg py-3 mt-4 rounded-lg font-bold transition-all duration-300"
                    >
                        Đặt Bàn Ngay
                    </button>
                </form>
            </div>
        </div>
    );
}
