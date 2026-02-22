"use client";

import Image from "next/image";

interface LightboxProps {
    src: string;
    onClose: () => void;
}

export default function Lightbox({ src, onClose }: LightboxProps) {
    return (
        <div
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-fade-in"
            onClick={onClose}
        >
            <button
                className="absolute top-4 right-4 md:top-8 md:right-8 text-trang/70 hover:text-white bg-trang/10 hover:bg-do-co p-2 rounded-full backdrop-blur-md transition-all z-50"
                onClick={onClose}
                aria-label="Đóng"
            >
                <svg
                    className="w-6 h-6 md:w-8 md:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <div
                className="relative w-full max-w-5xl h-[80vh] md:h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={src}
                    alt="Hình ảnh không gian phóng to"
                    fill
                    className="object-contain"
                />
            </div>
        </div>
    );
}
