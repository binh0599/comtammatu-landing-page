"use client";

import Image from "next/image";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Suspense, useEffect, useRef, useCallback } from "react";

function LightboxContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const src = searchParams.get("image");
    const closeRef = useRef<HTMLButtonElement>(null);

    const onClose = useCallback(() => {
        router.replace(pathname, { scroll: false });
    }, [router, pathname]);

    // Escape key & focus management
    useEffect(() => {
        if (!src) return;

        requestAnimationFrame(() => closeRef.current?.focus());

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [src, onClose]);

    if (!src) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Xem ảnh phóng to"
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-fade-in overscroll-contain touch-manipulation"
            onClick={onClose}
        >
            <button
                ref={closeRef}
                className="absolute top-4 right-4 md:top-8 md:right-8 text-trang/70 hover:text-white bg-trang/10 hover:bg-do-co p-2 rounded-full backdrop-blur-md transition-all z-50 focus-visible:ring-2 focus-visible:ring-trang focus-visible:outline-none"
                onClick={onClose}
                aria-label="Đóng"
            >
                <svg
                    aria-hidden="true"
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
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-contain"
                />
            </div>
        </div>
    );
}

export default function Lightbox() {
    return (
        <Suspense fallback={null}>
            <LightboxContent />
        </Suspense>
    );
}
