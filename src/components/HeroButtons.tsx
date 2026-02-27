"use client";

export default function HeroButtons() {
    return (
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/5 flex flex-row gap-2 md:gap-2 justify-center animate-fade-in-up delay-500 w-auto z-20">
            <a href="#thuc-don" className="group relative w-[130px] md:w-[220px] bg-gradient-to-r from-vang-kem to-vang-kem/80 text-black font-semibold py-2.5 md:py-4 px-1 md:px-4 rounded-sm text-[9px] md:text-[12px] uppercase tracking-[0.1em] md:tracking-[0.15em] transition-all duration-300 shadow-[0_10px_20px_rgba(203,155,81,0.2)] hover:shadow-[0_15px_30px_rgba(203,155,81,0.4)] border border-vang-kem hover:border-vang-nhat text-center flex items-center justify-center overflow-hidden focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none touch-manipulation cursor-pointer">
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Khám phá</span>
                <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
            </a>
            <button onClick={() => window.dispatchEvent(new CustomEvent("open-booking"))} className="group relative w-[130px] md:w-[220px] bg-black/80 backdrop-blur-md border border-vang-kem hover:bg-vang-kem hover:text-black text-vang-kem font-semibold py-2.5 md:py-4 px-1 md:px-4 rounded-sm text-[9px] md:text-[12px] uppercase tracking-[0.1em] md:tracking-[0.15em] transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.5)] text-center flex items-center justify-center overflow-hidden focus-visible:ring-2 focus-visible:ring-vang-kem focus-visible:outline-none touch-manipulation cursor-pointer">
                <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">Đặt bàn</span>
            </button>
        </div>
    );
}
