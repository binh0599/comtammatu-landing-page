"use client";

import Image from "next/image";
import { useRef } from "react";
import {
    menuGroups,
} from "@/lib/data";

const cardsData = menuGroups.map((group, index) => {
    const imageSrc = group.img || "/images/logo.webp";
    return {
        id: `menu-group-${index}`,
        title: group.title.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim(),
        description: group.description || "Cơm Tấm tinh hoa ẩm thực Việt Nam với không gian ấm cúng, hoài cổ phong cách Indochine.",
        basePrice: group.basePrice,
        image: imageSrc,
        items: group.items,
    };
});

export default function Menu() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const formatPriceText = (priceText: string) => priceText;

    return (
        <section
            id="thuc-don"
            className="relative h-[100dvh] shrink-0 snap-start snap-always w-full flex justify-center bg-[#1A1108] z-10 overflow-hidden"
        >
            {/* Dark background image with overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/images/space-1.webp"
                    alt="Menu Background"
                    fill
                    className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1108]/90 via-[#1A1108]/70 to-[#1A1108]/90" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col items-center justify-between w-full h-full max-w-7xl pt-20 md:pt-24 pb-8 md:pb-12">

                {/* Section Header */}
                <div className="text-center shrink-0">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F9E5C5] leading-tight drop-shadow-xl tracking-wide w-full relative z-30 text-balance">
                        Hương Vị <span className="font-light italic text-[#E5A853]">Đặc Trưng</span>
                    </h2>
                </div>

                {/* Arched Cards Slider */}
                <div className="w-full flex-1 flex flex-col items-center justify-center min-h-0 pt-4 md:pt-8 lg:pt-12">
                    <div
                        ref={scrollContainerRef}
                        className="w-full max-w-[1100px] flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-[55px] md:pt-[70px] lg:pt-[80px] px-4 md:px-0 -mx-4 md:mx-0 gap-5 md:gap-6 lg:gap-8 justify-start md:justify-center relative z-20 h-full max-h-[500px] lg:max-h-[550px]"
                    >
                        {cardsData.map((card) => (
                            <div
                                key={card.id}
                                className="snap-center shrink-0 w-[240px] md:w-[280px] lg:w-[320px] relative group h-full"
                            >
                                {/* Card Body */}
                                <div className="relative bg-gradient-to-b from-[#2A1F16] to-[#140C05] rounded-t-[140px] md:rounded-t-[150px] lg:rounded-t-[160px] rounded-b-2xl border border-[#D4AF37]/20 shadow-2xl px-4 md:px-6 pt-16 md:pt-20 lg:pt-24 flex flex-col h-full">

                                    {/* Golden inner border */}
                                    <div className="absolute inset-2 rounded-t-[132px] md:rounded-t-[142px] lg:rounded-t-[152px] rounded-b-xl border border-[#D4AF37]/10 pointer-events-none" />

                                    {/* Sub-avatar Image */}
                                    <div className="absolute -top-[45px] md:-top-[60px] lg:-top-[70px] left-1/2 -translate-x-1/2 w-[110px] h-[110px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] rounded-full border-[3px] border-[#D4AF37] shadow-xl overflow-hidden z-20">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 110px, (max-width: 1024px) 130px, 150px"
                                        />
                                    </div>

                                    {/* Platter Content */}
                                    <div className="flex-1 flex flex-col w-full relative z-10 text-center mt-2 min-h-0">
                                        <h3 className="text-lg md:text-xl lg:text-2xl shrink-0 font-serif text-[#F9E5C5] mb-1.5 drop-shadow-md">
                                            {card.title}
                                        </h3>
                                        <p className="text-xs md:text-sm shrink-0 text-[#D4AF37]/70 font-light italic mb-2.5 min-h-[36px] md:min-h-[40px]">
                                            {card.description}
                                        </p>

                                        {/* Items List */}
                                        <div className="w-full flex-1 shrink-0 text-left space-y-1.5 md:space-y-2 border-t border-[#D4AF37]/20 pt-2.5">
                                            {card.items.map((item, idx) => (
                                                <div key={idx} className="flex justify-between items-start text-xs md:text-sm lg:text-base">
                                                    <span className="text-[#E8D0A5]/90 font-light pr-2 leading-tight">{item.name}</span>
                                                    <span className="text-[#D4AF37] font-mono shrink-0">{item.price}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Base Price */}
                                        {card.basePrice && (
                                            <div className="m-auto shrink-0 py-5 border-t border-[#D4AF37]/20">
                                                <p className="text-[#D4AF37] text-xl md:text-2xl lg:text-3xl font-mono tracking-wider font-bold">
                                                    {formatPriceText(card.basePrice)}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Mobile scroll indicator pulse arrow */}
                                <div className="absolute top-1/2 -right-2 md:hidden text-[#D4AF37]/40 animate-pulse pointer-events-none text-lg">
                                    &gt;
                                </div>
                            </div>
                        ))}
                    </div>
                </div>



            </div>
        </section>
    );
}
