"use client";

export default function GalleryButtons() {
    return (
        <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))}
            className="bg-transparent border border-vang-kem text-trang hover:bg-vang-kem hover:text-den font-medium py-3 px-10 md:px-12 rounded-full uppercase tracking-widest text-xs md:text-sm transition-all duration-300 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none"
        >
            ĐẶT BÀN
        </button>
    );
}
