"use client";

import Image from "next/image";
import { useState } from "react";
import {
    menuGroups,
    sideItems,
    drinkOptions,
    baseOptions,
} from "@/lib/data";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Menu() {
    const [selectedBaseIdx, setSelectedBaseIdx] = useState(0);

    const currentBase = baseOptions[selectedBaseIdx];

    const formatPrice = (price: number) => {
        return price.toLocaleString("vi-VN") + "₫";
    };

    return (
        <div
            id="menu"
            className="h-[100dvh] md:h-auto w-full flex-shrink-0 md:min-h-[100dvh] snap-start snap-always flex flex-col relative"
        >
            {/* Wave: About → Menu */}
            <div
                className="wave-divider flex-shrink-0"
                style={{ background: "rgba(245,230,211,0.3)" }}
            >
                <svg
                    viewBox="0 0 1440 70"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,20 C360,70 1080,0 1440,50 L1440,70 L0,70 Z"
                        fill="rgba(245,230,211,0.3)"
                    />
                </svg>
            </div>

            {/* Menu Section */}
            <section className="flex-1 pt-16 pb-4 bg-vang-nhat/30 relative flex flex-col overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl h-full flex flex-col">
                    {/* Header */}
                    <div className="text-center mb-3 flex-shrink-0">
                        <p className="text-do-co font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-1">
                            Thực đơn
                        </p>
                        <h2 className="font-serif text-2xl md:text-5xl text-nau-dam mb-1 md:mb-2">
                            Thực đơn <span className="text-do-co">Má Tư</span>
                        </h2>
                        <div className="decorative-line-center" />
                    </div>

                    {/* 3-column grid: Photo | Both Sườn | Cơm Tấm + extras */}
                    <div className="flex-1 flex flex-col md:grid md:grid-cols-3 gap-3 min-h-0 overflow-y-auto md:overflow-visible pb-20 md:pb-0 scrollbar-hide rounded-lg">
                        {/* ── COL 1: Dish Photo + Switcher ── */}
                        <div className="flex flex-col gap-2 flex-shrink-0 md:h-full">
                            <div className="relative h-[25vh] min-h-[150px] md:min-h-0 md:h-auto md:flex-1 rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    key={currentBase.id}
                                    src={currentBase.img}
                                    alt={currentBase.name}
                                    fill
                                    className="object-cover animate-fade-in"
                                    sizes="25vw"
                                    priority
                                />
                                {currentBase.tag && (
                                    <span className="absolute top-2 left-2 bg-do-co text-trang text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
                                        {currentBase.tag}
                                    </span>
                                )}
                                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3 z-10">
                                    <p className="text-trang font-serif font-bold text-sm leading-tight">
                                        {currentBase.name}
                                    </p>
                                    <p className="text-vang-kem text-xs font-bold font-mono">
                                        từ {formatPrice(currentBase.price)}
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-1.5">
                                {baseOptions.map((base, idx) => (
                                    <button
                                        key={base.id}
                                        onClick={() => setSelectedBaseIdx(idx)}
                                        className={`flex-1 py-1.5 rounded-full text-[11px] font-semibold border transition-all duration-200 ${selectedBaseIdx === idx
                                            ? "bg-nau-dam text-trang border-nau-dam shadow-md"
                                            : "bg-trang text-nau-dam border-gray-300 hover:border-vang-kem"
                                            }`}
                                    >
                                        {base.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ── COL 2: Both Sườn groups (merged) ── */}
                        <div className="bg-trang/90 backdrop-blur rounded-xl p-3 flex flex-col border border-vang-kem/20 shadow-sm">
                            {/* Header row for both suon types */}
                            <div className="grid grid-cols-[1fr_72px_72px] gap-x-1 mb-2 pb-2 border-b border-nau-dam/10 flex-shrink-0">
                                <span className="text-xs font-bold text-gray-400 uppercase">
                                    Cơm sườn
                                </span>
                                <span className="text-xs font-bold text-nau-dam text-right">
                                    🍖 Cốt Lết
                                </span>
                                <span className="text-xs font-bold text-nau-dam text-right">
                                    🥩 Sườn Cây
                                </span>
                            </div>

                            {/* Base price row */}
                            <div className="grid grid-cols-[1fr_72px_72px] gap-x-1 py-1.5 px-1 border-b border-nau-dam/5 mb-1">
                                <span className="text-xs font-bold text-nau-dam">
                                    Giá cơ bản
                                </span>
                                <span className="text-xs font-bold text-do-co text-right font-mono">
                                    {menuGroups[0].basePrice}
                                </span>
                                <span className="text-xs font-bold text-do-co text-right font-mono">
                                    {menuGroups[1].basePrice}
                                </span>
                            </div>

                            {/* Topping rows side by side */}
                            <div className="flex-1 space-y-0.5">
                                {menuGroups[0].items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="grid grid-cols-[1fr_72px_72px] gap-x-1 py-1 px-1 rounded hover:bg-vang-kem/10 transition-colors"
                                    >
                                        <span className="text-xs text-gray-600 truncate">
                                            {item.name}
                                        </span>
                                        <span className="text-xs font-bold text-do-co text-right font-mono">
                                            {item.price}
                                        </span>
                                        <span className="text-xs font-bold text-do-co text-right font-mono">
                                            {menuGroups[1].items[i]?.price}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>

                        {/* ── COL 3: Cơm Tấm + Gọi thêm + Giải khát ── */}
                        <div className="flex flex-col gap-2">
                            {/* Cơm Tấm */}
                            <div className="bg-trang/90 backdrop-blur rounded-xl p-3 border border-vang-kem/20 shadow-sm">
                                <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-nau-dam/10">
                                    <span className="text-sm">🍚</span>
                                    <p className="font-bold text-nau-dam text-sm">Cơm Tấm</p>
                                </div>
                                <div className="space-y-0.5">
                                    {menuGroups[2].items.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex justify-between py-0.5 px-1 rounded hover:bg-vang-kem/10 transition-colors"
                                        >
                                            <span className="text-xs text-gray-600">{item.name}</span>
                                            <span className="font-bold text-do-co text-xs font-mono">
                                                {item.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Gọi thêm */}
                            <div className="bg-trang/90 backdrop-blur rounded-xl p-3 border border-vang-kem/20 shadow-sm">
                                <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-nau-dam/10">
                                    <span className="text-sm">➕</span>
                                    <p className="font-bold text-nau-dam text-sm">Gọi thêm</p>
                                </div>
                                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                                    {sideItems.map((s, i) => (
                                        <div
                                            key={i}
                                            className="flex justify-between py-0.5 px-1 rounded hover:bg-vang-kem/10 transition-colors"
                                        >
                                            <span className="text-xs text-gray-500">{s.name}</span>
                                            <span className="font-bold text-do-co text-xs font-mono">
                                                {s.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Giải khát */}
                            <div className="bg-trang/90 backdrop-blur rounded-xl p-3 border border-vang-kem/20 shadow-sm flex-1">
                                <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-nau-dam/10">
                                    <span className="text-sm">🥤</span>
                                    <p className="font-bold text-nau-dam text-sm">Giải khát</p>
                                </div>
                                <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                                    {drinkOptions.map((d, i) => (
                                        <div
                                            key={i}
                                            className="flex justify-between py-0.5 px-1 rounded hover:bg-vang-kem/10 transition-colors"
                                        >
                                            <span className="text-xs text-gray-500">{d.name}</span>
                                            <span className="font-bold text-do-co text-xs font-mono">
                                                {d.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ScrollIndicator href="#space" theme="light" />
        </div>
    );
}
