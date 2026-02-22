"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/data";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

interface GalleryProps {
    onImageClick: (src: string) => void;
}

export default function Gallery({ onImageClick }: GalleryProps) {
    return (
        <div
            id="space"
            className="h-[100dvh] md:h-auto w-full flex-shrink-0 md:min-h-[100dvh] snap-start snap-always flex flex-col relative"
        >
            {/* Wave: Menu → Space */}
            <div className="wave-divider bg-nau-dam flex-shrink-0">
                <svg
                    viewBox="0 0 1440 80"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,60 C480,0 960,80 1440,20 L1440,80 L0,80 Z"
                        fill="#3E2723"
                    />
                </svg>
            </div>

            {/* Gallery Section */}
            <section className="flex-1 pt-16 pb-20 md:pt-8 md:pb-24 bg-nau-dam relative overflow-hidden flex flex-col justify-center">
                {/* Subtle glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-do-co/10 rounded-full blur-3xl" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-4 md:mb-10 section-reveal">
                        <p className="text-vang-kem font-semibold tracking-[0.2em] uppercase text-xs md:text-sm mb-1 md:mb-3">
                            Không gian
                        </p>
                        <h2 className="font-serif text-2xl md:text-5xl text-trang mb-2 md:mb-4">
                            Phong cách <span className="text-vang-kem">Indochine</span>
                        </h2>
                        <div className="decorative-line-center" />
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 reveal-fade">
                        {galleryImages.slice(0, 5).map((img, idx) => (
                            <div
                                key={idx}
                                onClick={() => onImageClick(img.src)}
                                className={`relative rounded-xl overflow-hidden group cursor-pointer ${img.span} ${img.span.includes("row-span-2")
                                    ? "h-[25vh] md:h-[50vh]"
                                    : "h-[12vh] md:h-[24vh]"
                                    }`}
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes={img.span.includes("col-span-2") ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                                        <div className="w-12 h-12 rounded-full border-2 border-trang flex items-center justify-center">
                                            <svg
                                                className="w-5 h-5 text-trang"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ScrollIndicator href="#testimonials" theme="dark" />
        </div>
    );
}
