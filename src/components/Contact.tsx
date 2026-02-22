"use client";

import { useState, useEffect } from "react";

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const checkOpenStatus = () => {
            const now = new Date();
            const currentHour = now.getHours();
            // Open between 6:00 and 22:00
            if (currentHour >= 6 && currentHour < 22) {
                setIsOpen(true);
            } else {
                setIsOpen(false);
            }
        };

        checkOpenStatus();
        const interval = setInterval(checkOpenStatus, 60000); // Check every minute
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            id="contact"
            className="h-[100dvh] md:h-auto w-full flex-shrink-0 md:min-h-[100dvh] snap-start snap-always flex flex-col"
        >
            {/* Wave: Testimonials → Contact */}
            <div
                className="wave-divider flex-shrink-0"
                style={{ background: "rgba(245,230,211,0.2)" }}
            >
                <svg
                    viewBox="0 0 1440 70"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,35 C720,70 720,0 1440,35 L1440,70 L0,70 Z"
                        fill="rgba(245,230,211,0.2)"
                    />
                </svg>
            </div>

            {/* Contact Section */}
            <section className="flex-1 pt-16 pb-8 md:pt-12 md:pb-12 bg-gradient-to-b from-vang-nhat/20 to-trang relative flex flex-col justify-center">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-6 md:mb-10 section-reveal">
                        <p className="text-do-co font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-1 md:mb-3">
                            Liên hệ
                        </p>
                        <h2 className="font-serif text-2xl md:text-5xl text-nau-dam mb-2 md:mb-4">
                            Đặt bàn <span className="text-do-co">ngay</span>
                        </h2>
                        <div className="decorative-line-center" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 items-center">
                        {/* Contact Info */}
                        <div className="reveal-left">
                            <div className="space-y-4 md:space-y-8">
                                {/* Address */}
                                <div className="flex items-start gap-3 md:gap-5 group">
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-do-co to-do-nhat rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-do-co/30 transition-shadow duration-300">
                                        <svg
                                            className="w-5 h-5 md:w-6 md:h-6 text-trang"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-nau-dam text-base md:text-lg mb-0.5 md:mb-1">
                                            Địa chỉ
                                        </p>
                                        <p className="text-gray-500 leading-snug md:leading-relaxed text-[13px] md:text-base">
                                            QL55, TT.Đất Đỏ, Bà Rịa,
                                            <br />
                                            Bà Rịa - Vũng Tàu 70000
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-3 md:gap-5 group">
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-do-co to-do-nhat rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-do-co/30 transition-shadow duration-300">
                                        <svg
                                            className="w-5 h-5 md:w-6 md:h-6 text-trang"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-nau-dam text-base md:text-lg mb-0.5 md:mb-1">
                                            Điện thoại
                                        </p>
                                        <a
                                            href="tel:0772818172"
                                            className="text-do-co hover:text-do-nhat transition-colors text-base md:text-lg font-medium"
                                        >
                                            0772 818 172
                                        </a>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start gap-3 md:gap-5 group">
                                    <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-do-co to-do-nhat rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-do-co/30 transition-shadow duration-300">
                                        <svg
                                            className="w-5 h-5 md:w-6 md:h-6 text-trang"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-nau-dam text-base md:text-lg mb-0.5 md:mb-1">
                                            Giờ mở cửa
                                        </p>
                                        <p className="text-gray-500 text-[13px] md:text-base">6:00 - 22:00, hàng ngày</p>
                                        {isMounted ? (
                                            <p className={`text-xs md:text-sm font-medium mt-0.5 md:mt-1 ${isOpen ? 'text-xanh-la' : 'text-red-500'}`}>
                                                ● {isOpen ? 'Đang mở cửa' : 'Đã đóng cửa'}
                                            </p>
                                        ) : (
                                            <p className="text-gray-400 opacity-0 text-xs md:text-sm font-medium mt-0.5 md:mt-1">
                                                ● Đang tải...
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="pt-2 md:pt-4">
                                    <a
                                        href="tel:0772818172"
                                        className="btn-primary inline-flex items-center justify-center w-full md:w-auto md:justify-start gap-2 md:gap-3 text-base md:text-lg py-2 md:py-3"
                                    >
                                        <svg
                                            className="w-4 h-4 md:w-5 md:h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                        Gọi đặt bàn ngay
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="reveal-right">
                            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-trang">
                                <iframe
                                    src="https://maps.google.com/maps?q=Cơm%20tấm%20Má%20Tư,%20QL55,%20Đất%20Đỏ,%20Bà%20Rịa%20-%20Vũng%20Tàu&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Bản đồ Cơm tấm Má Tư"
                                    className="w-full h-[180px] sm:h-[250px] md:h-[400px]"
                                />
                            </div>
                            <div className="mt-2 md:mt-4 text-center">
                                <a
                                    href="https://maps.app.goo.gl/v8GDadxdvNz2vkWf8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-do-co hover:text-do-nhat font-medium transition-colors"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                    Mở trong Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
